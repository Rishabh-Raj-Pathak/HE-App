import { assets } from '../../data/tradeSignals'
import AppBottomNav from '../app/AppBottomNav'

const NAV_ITEMS = [
  { id: 'ai', label: 'AI Copilot', iconSrc: assets.nav.ai, active: true },
  { id: 'trading', iconSrc: assets.nav.trading },
  { id: 'wallet', iconSrc: assets.nav.wallet },
  { id: 'user', iconSrc: assets.nav.user },
  { id: 'insights', iconSrc: assets.nav.insights },
  { id: 'list', iconSrc: assets.nav.list },
]

export default function BottomNav() {
  return <AppBottomNav items={NAV_ITEMS} />
}
