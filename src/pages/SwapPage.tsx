/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FC, useRef, useEffect, useState, ChangeEvent, FormEvent } from 'react';
import crypto from 'crypto-browserify';
import { Page } from '../Page';
import axios from 'axios';
import Logo from '../resources/assets/images/1inch.png';


const SwapPage: React.FC = () => {
  const [quoteData, setquoteData] = useState({
    swapFrom: '',
    swapTo: '',
    amount: ''
  })
  const [swapData, setSwapData] = useState({
    senderAddress: '',
    receiverAddress: ''
  })
  const [isSwapDisabled, setIsSwapDisabled] = useState(true)

  const handleSwapFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquoteData({
      ...quoteData,
      swapFrom: e.target.value,
    });
  };
  const handleSwapToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquoteData({
      ...quoteData,
      swapTo: e.target.value,
    });
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquoteData({
      ...quoteData,
      amount: e.target.value,
    });
  };

  const handleSenderAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwapData({
      ...swapData,
      senderAddress: e.target.value,
    });
  };
  const handleReceiverAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwapData({
      ...swapData,
      receiverAddress: e.target.value,
    });
  };


  const handleGetQuote = (e: React.FormEvent) => {
    console.log(quoteData.swapFrom)
    console.log(quoteData.swapTo)
    console.log(quoteData.amount)
    e.preventDefault();
    axios.get(`http://127.0.0.1:7000/quote?from=${quoteData.swapFrom}&to=${quoteData.swapTo}&amount=${quoteData.amount}`)
    .then(response => {
      console.log(response.data);
      setIsSwapDisabled(false)
    })
    .catch(error => {
      console.error(error);
    });
  };

  const handleSwap = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handling swap")
    try {
      const response = await axios.get(`http://127.0.0.1:7000/swap?from=${quoteData.swapFrom}&to=${quoteData.swapTo}&amount=${quoteData.amount}&senderAddress=${swapData.senderAddress}&receiverAddress=${swapData.receiverAddress}`);
      console.log(response.data);
      setIsSwapDisabled(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Page title={'Swap'} description={'Swap users with our SDK or Hosted Flows'}>
      <form onSubmit={handleGetQuote}>
        <br />
        <label>
          Swap From:
          <input
            type='text'
            name='swapFrom'
            value={quoteData.swapFrom}
            onChange={handleSwapFromChange}
          />
        </label>
        <br></br>
        <label>
          Swap To:
          <input
            type='text'
            name='swapTo'
            value={quoteData.swapTo}
            onChange={handleSwapToChange}
          />
        </label>
        <br></br>
        <label>
          Amount:
          <input
            type='text'
            name='amount'
            value={quoteData.amount}
            onChange={handleAmountChange}
          />
        </label>
        <br />
        <button type='submit'>Get Quote</button>
      </form>
      <br />
      <form onSubmit={handleSwap}>
        <br />
        <label>
          Sender Address:
          <input
            type='text'
            name='senderAddress'
            value={swapData.senderAddress}
            onChange={handleSenderAddChange}
          />
        </label>
        <br></br>
        <label>
          Receiver Address:
          <input
            type='text'
            name='receiverAddress'
            value={swapData.receiverAddress}
            onChange={handleReceiverAddChange}
          />
        </label>
        <br />
        <button type='submit' disabled={isSwapDisabled} onClick={handleSwap}>
          Swap Now!
        </button>
      </form>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px',
          padding: '20px',
        }}
      >
        <p>Built with OneInc</p>
        <img
          src={Logo} // Replace with the actual image path
          alt='Built with OneInch'
          style={{ maxWidth: '8%', height: 'auto' }}
        />
      </div>
    </Page>
  );
};

export default SwapPage;
