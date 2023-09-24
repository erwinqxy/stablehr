/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { getQuote } from "../1inch";
import { Page } from '../Page';
import { 
  pk,
  authKey,
  ethNetworkRPC,
  maticPolyAddress,
  ethPolyAddress,
  senderAddress,
  receiverAddress,
  network,
  sleep
} from '../config/config';

const SwapPage: React.FC = () => {
  const [formData, setFormData] = useState({
    swapFrom: '',
    swapTo: '',
    amount: ''
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    console.log("handle submit")
    e.preventDefault();
    // Access the form data
    console.log("called controller")
    getQuoteController()
  };

  return (
    <Page
      title={'Swap'}
      description={'Swap users with our SDK or Hosted Flows'}
    >
      <form onSubmit={handleSubmit}>
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
    </Page>
  );
};

export default SwapPage;
