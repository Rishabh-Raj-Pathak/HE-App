import { assets } from '../../data/tradeSignals'
import AppHeader from '../app/AppHeader'

export default function SharedHeader({ onConnectWallet }) {
  return (
    <AppHeader
      title="AI Copilot"
      icon={assets.iconAiScience}
      onConnectWallet={onConnectWallet}
    />
  )
}
