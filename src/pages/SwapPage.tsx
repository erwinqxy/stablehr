/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Page } from '../Page';
import axios from 'axios';
import { maticPolyAddress, ethPolyAddress,authKey, sleep } from '../config/config';

const SwapPage: React.FC = () => {
  const [formData, setFormData] = useState({
    swapFrom: '',
    swapTo: '',
    amount: ''
  })
  const [isSwapDisabled, setIsSwapEnabled] = useState(true)

  const handleSwapFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      swapFrom: e.target.value,
    });
  };

  const handleSwapToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      swapTo: e.target.value,
    });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      amount: e.target.value,
    });
  };

  async function getQuoteController() {
    const resultsQuote = await getQuote(maticPolyAddress, ethPolyAddress, formData.amount, authKey, 137)
    console.log(`to token amount: ${resultsQuote}`);
    await sleep(1001);
  }

  async function getQuote(from: string, to: string, amount: string, authKey: string, network: number): Promise<string | null> {
    try {

        const options = {
            method: 'GET',
            url: `https://api.1inch.dev/swap/v5.2/${network}/quote?src=${from}&dst=${to}&amount=${amount}`,
            headers: {
                'Authorization': `Bearer ${authKey}`,
            },
        };
        const result = await axios.request(options);
        return result.data.toAmount
    } catch (e) {
        console.error(e)
        return null
    }
}

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // axios.get(`http://127.0.0.1:7000/swap/quote?from=${formData.swapFrom}&to=${formData.swapTo}&amount=${formData.amount}`)
    // .then(response => {
    //   console.log(response.data);
    //   setIsSwapEnabled(false)
    // })
    // .catch(error => {
    //   console.error(error);
    // });
    getQuoteController();
  };

  const handleSwap = () => {
    console.log("handling swap")
  }

  return (
    <Page
      title={'Swap'}
      description={'Swap users with our SDK or Hosted Flows'}
    >
      <form onSubmit={handleGetQuote}>
      <br />
      <label>
        Swap From: 
        <input
          type="text"
          name="swapFrom"
          value={formData.swapFrom}
          onChange={handleSwapFromChange}
        />
      </label>
      <br></br>
      <label>
        Swap To: 
        <input
          type="text"
          name="swapTo"
          value={formData.swapTo}
          onChange={handleSwapToChange}
        />
      </label>
      <br></br>
      <label>
        Amount: 
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleAmountChange}
        />
      </label>
      <br />
      <button type="submit">Get Quote</button>
    </form>
    <br />
    <button disabled={isSwapDisabled} onClick={handleSwap}>Swap Now!</button>
    </Page>
  );
};

export default SwapPage;
