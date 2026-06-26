import { assets } from '../../data/tradeSignals'
import SharedHeader from './SharedHeader'
import PNLHero from './PNLHero'
import StatsCard from './StatsCard'

export default function GradientHeader({ onConnectWallet }) {
  return (
    <section className="relative h-[274px] shrink-0">
      <img
        src={assets.gradientBg}
        alt=""
        className="pointer-events-none absolute inset-x-0 top-0 w-full"
      />

      <div className="absolute inset-x-0 top-0 z-10">
        <SharedHeader onConnectWallet={onConnectWallet} />
      </div>
      <div className="absolute inset-x-0 top-[47px] z-10">
        <PNLHero />
      </div>
      <div className="absolute left-[24px] top-[149px] z-10">
        <StatsCard />
      </div>
    </section>
  )
}
