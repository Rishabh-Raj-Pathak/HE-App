import { useState } from 'react'
import useCopilotDiscovery from '../../hooks/useCopilotDiscovery'
import GradientHeader from './GradientHeader'
import MarketSection from './MarketSection'
import MobileShell from '../layout/MobileShell'
import BottomNav from '../layout/BottomNav'
import ConnectWalletOverlay from '../wallet/ConnectWalletOverlay'

export default function AiCopilotScreen() {
  const [walletOpen, setWalletOpen] = useState(false)
  const discovery = useCopilotDiscovery()

  return (
    <MobileShell>
      <GradientHeader
        onConnectWallet={() => setWalletOpen(true)}
        strategyId={discovery.strategyId}
        categoryId={discovery.categoryId}
        onStrategyChange={discovery.setStrategy}
        onCategoryChange={discovery.setCategory}
        expiresIn={discovery.expiresIn}
        activeCount={discovery.activeCount}
        onRefresh={discovery.refresh}
      />
      <MarketSection setups={discovery.setups} />
      <BottomNav />
      <ConnectWalletOverlay
        open={walletOpen}
        onClose={() => setWalletOpen(false)}
      />
    </MobileShell>
  )
}
