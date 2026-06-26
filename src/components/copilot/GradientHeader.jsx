import { assets } from '../../data/tradeSignals'
import SharedHeader from './SharedHeader'
import PNLHero from './PNLHero'
import StatsCard from './StatsCard'
import DiscoveryBar from './DiscoveryBar'

export default function GradientHeader({
  onConnectWallet,
  strategyId,
  categoryId,
  onStrategyChange,
  onCategoryChange,
  expiresIn,
  onRefresh,
  activeCount,
}) {
  return (
    <section className="relative h-[386px] shrink-0">
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
      <div className="absolute inset-x-0 top-[274px] z-10">
        <DiscoveryBar
          strategyId={strategyId}
          categoryId={categoryId}
          onStrategyChange={onStrategyChange}
          onCategoryChange={onCategoryChange}
          expiresIn={expiresIn}
          activeCount={activeCount}
          onRefresh={onRefresh}
        />
      </div>
    </section>
  )
}
