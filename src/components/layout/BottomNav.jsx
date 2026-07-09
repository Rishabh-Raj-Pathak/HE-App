import { assets } from '../../data/tradeSignals'
import AppBottomNav from '../app/AppBottomNav'

const NAV_ITEMS = [
  { id: 'ai', label: 'AI Copilot', iconSrc: assets.nav.ai },
  { id: 'trading', label: 'Trading', iconSrc: assets.nav.trading },
  { id: 'wallet', label: 'Wallet', iconSrc: assets.nav.wallet },
  { id: 'user', label: 'Profile', iconSrc: assets.nav.user },
  { id: 'insights', label: 'Insights', iconSrc: assets.nav.insights },
  { id: 'list', label: 'List', iconSrc: assets.nav.list },
]

export default function BottomNav({ activeId = 'ai', onNavigate }) {
  const items = NAV_ITEMS.map((item) => ({
    ...item,
    active: item.id === activeId,
    onClick: () => onNavigate?.(item.id),
  }))

  return <AppBottomNav items={items} />
}
