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

  // Function to create a new embed SDK instance
  const createEmbedSdkInstance = () => {
    const randomString = crypto.randomBytes(32).toString('hex');

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
