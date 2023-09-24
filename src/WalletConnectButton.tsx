import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import exp from 'constants'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

// 1. Get projectId
const projectId = '12f6f2e8e83cb70c4eb7dff531472213'

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, 
                    themeVariables: {
                      "--w3m-border-radius-master": "2px",
                    } })


type WalletConnectButtonProps = {
  label: string;
}

function WalletConnectButton({ label }: WalletConnectButtonProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <w3m-connect-button label={label} />
    </WagmiConfig>
  )
}

export default WalletConnectButton;