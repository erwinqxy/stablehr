import React, { useEffect } from 'react';
import { GateFiDisplayModeEnum, GateFiSDK } from '@gatefi/js-sdk';
import { FC, useRef, useState } from 'react';
import crypto from 'crypto-browserify';
import { Page } from '../Page';
import Logo from '../resources/assets/images/logo.svg';

const OnrampPage: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);
  const overlayInstanceSDK = useRef<GateFiSDK | null>(null);
  const embedInstanceSDK = useRef<GateFiSDK | null>(null);

  const [webhookData, setWebhookData] = useState(null);

  useEffect(() => {
    // Simulate receiving webhook data
    // Replace this with code to receive actual webhook data from the provided URL
    fetch('https://webhook.site/1e4fe20a-5d19-4bd0-b657-f292479ebd35')
      .then((response) => response.json())
      .then((data) => {
        setWebhookData(data);
      })
      .catch((error) => {
        console.error('Error fetching webhook data:', error);
      });
  }, []);

  useEffect(() => {
    if (webhookData) {
      // Trigger the logic to send sandbox tokens to the destination wallet
      console.log('Webhook data received:', webhookData)
      // sendTokensToDestination(webhookData.destinationAddress, webhookData.tokens);
    }
  }, [webhookData]);

  // const sendTokensToDestination = (destinationAddress, tokens) => {
  //   // Implement the logic to send tokens to the specified address
  //   // You may need to interact with the Aave API or a sandbox environment here
  //   console.log(`Sending ${tokens} tokens to ${destinationAddress}`);
  // };

  // Function to create a new embed SDK instance
  const createEmbedSdkInstance = () => {
    const randomString = crypto.randomBytes(32).toString('hex');

    // Note: The unlimit SDK processes order really slowly. We will use a quick hack to mimic the transaction transfer.
    // The hack will invovle webhooks
    embedInstanceSDK.current =
      typeof document !== 'undefined'
        ? new GateFiSDK({
            merchantId: '88fd676b-ea6d-4d99-88cb-110a9fae0264',
            displayMode: GateFiDisplayModeEnum.Embedded,
            nodeSelector: '#embed-button',
            isSandbox: true,
            walletAddress: '0xD4e1BA82436238187254C4d47dd3395A69B08b1E',
            email: 'erwin.quek.xian.yi+03@gmail.com',
            externalId: randomString,
            defaultFiat: {
              currency: 'USD',
              amount: '30',
            },
            defaultCrypto: {
              currency: 'ETH',
            },
          })
        : null;
  };

  useEffect(() => {
    createEmbedSdkInstance(); // Call the function when the component mounts
    return () => {
      overlayInstanceSDK.current?.destroy();
      overlayInstanceSDK.current = null;
      embedInstanceSDK.current?.destroy();
      embedInstanceSDK.current = null;
    };
  }, []);

  return (
    <Page
      title={'Onramp'}
      description={'Buy stablecoins with fiat.'}
      docs={
        'https://docs.gatefi.com/docs/gatefi-docs/7p34n1uhrzlg8-hosted-mode-integration'
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            marginTop: '20px',
            boxSizing: 'border-box',
            overflow: 'auto',
          }}
        >
          <div
            id='embed-button'
            style={{ width: '100%', height: showIframe ? 'calc(100% - 40px)' : '100%' }}
          ></div>
        </div>
        <div id='overlay-button'></div>
      </div>

      {/* Additional Component */}
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
        <p>Built with Unlimit</p>
        <img
          src={Logo} // Replace with the actual image path
          alt='Built with Unlimit'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </Page>
  );
};

export default OnrampPage;
