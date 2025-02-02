import React from "react";
import {
  WagmiConfig,
  configureChains,
  createConfig,
} from "wagmi";
import { infuraProvider } from 'wagmi/providers/infura'
import { goerli } from 'wagmi/chains'
import { connectorsForWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { 
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from '@zerodev/wagmi/rainbowkit'

export const projectId = 'a0ec3d87-0894-4a6f-b744-6314890b13b3'       //Goerli= a0ec3d87-0894-4a6f-b744-6314890b13b3  Mumbai=22fc3a24-9b2e-461a-a36a-6b5159791008 

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [infuraProvider ({apiKey: '69018380c106471eab533659e7812f08'})]    
)

const connectors = connectorsForWallets([
  {
    groupName: 'Social',
      wallets: [
        googleWallet({chains, options: { projectId}}),
        facebookWallet({chains, options: { projectId}}),
        githubWallet({chains, options: { projectId }}),
        discordWallet({chains, options: { projectId }}),
        twitchWallet({chains, options: { projectId }}),
        twitterWallet({chains, options: { projectId }}),
    ],
  },
]);


const config = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient
})

function ZeroDevWrapper({children}: {children: React.ReactNode}) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider theme={darkTheme()} chains={chains} modalSize="compact">
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default ZeroDevWrapper

//hi