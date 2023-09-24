/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FC, useRef, useEffect, useState, ChangeEvent, FormEvent } from "react";
import crypto from "crypto-browserify";
import { Page } from "../Page";
import axios from "axios";
import Logo from "../resources/assets/images/1inch.png";
import SwapLogo from "../resources/assets/title-icons/swap.png";

import Noun854 from "../resources/assets/nouns/Noun856.svg";
import Noun853 from "../resources/assets/nouns/Noun853.svg";
import Noun845 from "../resources/assets/nouns/Noun845.svg";
import Noun840 from "../resources/assets/nouns/Noun840.svg";
import Noun839 from "../resources/assets/nouns/Noun839.svg";
import Noun838 from "../resources/assets/nouns/Noun838.svg";
import Noun837 from "../resources/assets/nouns/Noun837.svg";
import Noun836 from "../resources/assets/nouns/Noun836.svg";

import Noun832 from "../resources/assets/nouns/Noun832.svg";
import Noun830 from "../resources/assets/nouns/Noun830.svg";
import Noun829 from "../resources/assets/nouns/Noun829.svg";
import Noun828 from "../resources/assets/nouns/Noun828.svg";
import Noun826 from "../resources/assets/nouns/Noun826.svg";
import Noun824 from "../resources/assets/nouns/Noun824.svg";
import Noun823 from "../resources/assets/nouns/Noun823.svg";
import Noun820 from "../resources/assets/nouns/Noun820.svg";

const SwapPage: React.FC = () => {
  const [quoteData, setquoteData] = useState({
    swapFrom: "",
    swapTo: "",
    amount: "",
  });
  const [swapData, setSwapData] = useState({
    senderAddress: "",
    receiverAddress: "",
  });
  const [isSwapDisabled, setIsSwapDisabled] = useState(true);

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
    console.log(quoteData.swapFrom);
    console.log(quoteData.swapTo);
    console.log(quoteData.amount);
    e.preventDefault();
    axios
      .get(
        `http://127.0.0.1:7000/quote?from=${quoteData.swapFrom}&to=${quoteData.swapTo}&amount=${quoteData.amount}`
      )
      .then(response => {
        console.log(response.data);
        setQuote(response.data);
        setIsSwapDisabled(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSwap = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handling swap");
    try {
      const response = await axios.get(
        `http://127.0.0.1:7000/swap?from=${quoteData.swapFrom}&to=${quoteData.swapTo}&amount=${quoteData.amount}&senderAddress=${swapData.senderAddress}&receiverAddress=${swapData.receiverAddress}`
      );
      console.log(response.data);
      setSwap(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page
      title={"Swap"}
      description={"Swap users with our SDK or Hosted Flows"}
      icon={SwapLogo}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          width: "100%",
        }}
      >
        <div>
          <img src={Noun854} alt="Noun" width={50} />
          <img src={Noun853} alt="Noun" width={50} />
          <img src={Noun845} alt="Noun" width={50} />
          <img src={Noun840} alt="Noun" width={50} />
          <img src={Noun839} alt="Noun" width={50} />
          <img src={Noun838} alt="Noun" width={50} />
          <img src={Noun837} alt="Noun" width={50} />
          <img src={Noun836} alt="Noun" width={50} />
          <img src={Noun832} alt="Noun" width={50} />
          <img src={Noun830} alt="Noun" width={50} />
        </div>
        <div>
          <form onSubmit={handleGetQuote}>
            <br />
            <label style={{ margin: "10px" }}>
              Swap From:
              <input
                type="text"
                name="swapFrom"
                value={quoteData.swapFrom}
                onChange={handleSwapFromChange}
                style={{
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "60%",
                  margin: "10px",
                  height: "30px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </label>
            <br></br>
            <label style={{ margin: "10px" }}>
              Swap To:
              <input
                type="text"
                name="swapTo"
                value={quoteData.swapTo}
                onChange={handleSwapToChange}
                style={{
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "60%",
                  margin: "10px",
                  marginLeft: "30px",
                  height: "30px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </label>
            <br></br>
            <label style={{ margin: "10px" }}>
              Amount:
              <input
                type="text"
                name="amount"
                value={quoteData.amount}
                onChange={handleAmountChange}
                style={{
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "60%",
                  margin: "10px",
                  marginLeft: "34px",
                  height: "30px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </label>
            <br />
            <button
              type="submit"
              style={{ marginLeft: "10px", marginTop: "10px" }}
              onSubmit={handleGetQuote}
            >
              Get Quote
            </button>
          </form>
          <br />
          {quote !== "" && <p> {quote}</p>}

          <form onSubmit={handleSwap}>
            <br />
            <label style={{ margin: "10px" }}>
              Sender Address:
              <input
                type="text"
                name="senderAddress"
                value={swapData.senderAddress}
                onChange={handleSenderAddChange}
                style={{
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "60%",
                  margin: "10px",
                  height: "30px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </label>
            <br></br>
            <label style={{ margin: "10px" }}>
              Receiver Address:
              <input
                type="text"
                name="receiverAddress"
                value={swapData.receiverAddress}
                onChange={handleReceiverAddChange}
                style={{
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "60%",
                  margin: "10px",
                  height: "30px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </label>
            <br />
            <button
              type="submit"
              disabled={isSwapDisabled}
              onClick={handleSwap}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Swap Now!
            </button>
          </form>
          {swap !== "" && (
            <div style={{ marginLeft: "10px" }}>
              <h2 style={{ marginLeft: "3px" }}> Swap Details: </h2>
              {(() => {
                try {
                  const swapData = JSON.parse(swap);
                  return (
                    <>
                      <h3> Check out your Transaction Below!</h3>
                      <p> Transaction Hash: {swapData.txHash}</p>
                    </>
                  );
                } catch (error) {
                  return <p>Invalid JSON data</p>;
                }
              })()}
            </div>
          )}
        </div>
        <div>
          <img src={Noun832} alt="Noun" width={50} />
          <img src={Noun830} alt="Noun" width={50} />
          <img src={Noun829} alt="Noun" width={50} />
          <img src={Noun828} alt="Noun" width={50} />
          <img src={Noun826} alt="Noun" width={50} />
          <img src={Noun824} alt="Noun" width={50} />
          <img src={Noun823} alt="Noun" width={50} />
          <img src={Noun836} alt="Noun" width={50} />
          <img src={Noun820} alt="Noun" width={50} />
          <img src={Noun837} alt="Noun" width={50} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <p>Built with 1Inch Swap API</p>
        <img
          src={Logo} // Replace with the actual image path
          alt="Built with OneInch"
          style={{ maxWidth: "8%", height: "auto" }}
        />
      </div>
    </Page>
  );
};

export default SwapPage;
