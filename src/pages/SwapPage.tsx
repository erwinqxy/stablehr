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


  const [quote, setQuote] = useState("");
  const [swap, setSwap] = useState("");


  const handleGetQuote = (e: React.FormEvent) => {
    console.log(quoteData.swapFrom)
    console.log(quoteData.swapTo)
    console.log(quoteData.amount)
    e.preventDefault();
    axios.get(`http://127.0.0.1:7000/quote?from=${quoteData.swapFrom}&to=${quoteData.swapTo}&amount=${quoteData.amount}`)
    .then(response => {
      console.log(response.data);
      setQuote(response.data);
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
      setSwap(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Page title={'Swap'} description={'Swap users with our SDK or Hosted Flows'}>
      <form onSubmit={handleGetQuote}>
        <br />
        <label style={{margin: "10px"}}>
          Swap From:
          <input
            type='text'
            name='swapFrom'
            value={quoteData.swapFrom}
            onChange={handleSwapFromChange}
            style={{
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '60%',
              margin: '10px',
              height: "30px",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </label>
        <br></br>
        <label style={{margin: "10px"}}>
          Swap To:
          <input
            type='text'
            name='swapTo'
            value={quoteData.swapTo}
            onChange={handleSwapToChange}
            style={{
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '60%',
              margin: '10px',
              marginLeft: "30px",
              height: "30px",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </label>
        <br></br>
        <label style={{margin: "10px"}}>
          Amount:
          <input
            type='text'
            name='amount'
            value={quoteData.amount}
            onChange={handleAmountChange}
            style={{
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '60%',
              margin: '10px',
              marginLeft: "34px",
              height: "30px",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </label>
        <br />
        <button type='submit' style={{marginLeft: "10px", marginTop: "10px"}} onSubmit={handleGetQuote}>Get Quote</button>
      </form>
      <br />
      {quote !== "" && <h4>Rate: {quote}</h4>}

      <form onSubmit={handleSwap}>
        <br />
        <label style={{margin: "10px"}}>
          Sender Address:
          <input
            type='text'
            name='senderAddress'
            value={swapData.senderAddress}
            onChange={handleSenderAddChange}
            style={{
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '60%',
              margin: '10px',
              height: "30px",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </label>
        <br></br>
        <label style={{margin: "10px"}}>
          Receiver Address:
          <input
            type='text'
            name='receiverAddress'
            value={swapData.receiverAddress}
            onChange={handleReceiverAddChange}
            style={{
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '60%',
              margin: '10px',
              height: "30px",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </label>
        <br />
        <button type='submit' disabled={isSwapDisabled} onClick={handleSwap} style={{marginLeft: "10px", marginTop: "10px"}}>
          Swap Now!
        </button>
      </form>
      <h3>Check out your Transaction Below</h3>
  <div style={{ marginLeft: "10px" }}>
    <h2 style={{ marginLeft: "3px" }}> Swap Details: </h2>
    <p>Transaction Hash: <h4>{swap}</h4></p>
  </div>
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
        <p>Built with 1Inch Swap API</p>
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
