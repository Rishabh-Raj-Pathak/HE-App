import { useState } from 'react'
import GradientHeader from './GradientHeader'
import MarketSection from './MarketSection'
import MobileShell from '../layout/MobileShell'
import BottomNav from '../layout/BottomNav'
import ConnectWalletOverlay from '../wallet/ConnectWalletOverlay'

export default function AiCopilotScreen() {
  const [walletOpen, setWalletOpen] = useState(false)

  return (
    <MobileShell>
      <GradientHeader onConnectWallet={() => setWalletOpen(true)} />
      <MarketSection />
      <BottomNav />
      <ConnectWalletOverlay
        open={walletOpen}
        onClose={() => setWalletOpen(false)}
      />
    </MobileShell>
  )
}
