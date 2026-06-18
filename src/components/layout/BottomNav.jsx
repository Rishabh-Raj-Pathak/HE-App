import { assets } from '../../data/tradeSignals'

function ActiveNavItem({ icon, label }) {
  return (
    <div className="relative h-[45px] w-[53px] shrink-0">
      <img src={icon} alt="" className="absolute left-[15px] top-0 size-6" />
      <span className="absolute inset-x-0 bottom-0 text-center text-[10px] font-bold leading-[15px] text-white">
        {label}
      </span>
    </div>
  )
}

function NavIcon({ icon }) {
  return <img src={icon} alt="" className="size-6 shrink-0" />
}

export default function BottomNav() {
  return (
    <nav className="shrink-0 border-t border-white/5 bg-black px-7 py-[7px]">
      <div className="flex items-center justify-between">
        <ActiveNavItem icon={assets.nav.ai} label="AI Copilot" />
        <NavIcon icon={assets.nav.trading} />
        <NavIcon icon={assets.nav.wallet} />
        <NavIcon icon={assets.nav.user} />
        <NavIcon icon={assets.nav.insights} />
        <NavIcon icon={assets.nav.list} />
      </div>
    </nav>
  )
}
