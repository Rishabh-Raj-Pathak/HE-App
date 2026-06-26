import { assets } from '../../data/tradeSignals'
import { getStrategyById } from '../../data/copilotStrategies'
import StrategySelector from './StrategySelector'
import CategoryChips from './CategoryChips'

export default function DiscoveryBar({
  strategyId,
  categoryId,
  onStrategyChange,
  onCategoryChange,
  expiresIn,
  activeCount,
  onRefresh,
  onShare,
}) {
  const strategy = getStrategyById(strategyId)
  const categories = strategy?.categories ?? []

  return (
    <section className="relative">
      <div className="flex h-[33px] items-center gap-2 pl-3 pr-2">
        <StrategySelector
          strategyId={strategyId}
          onChange={onStrategyChange}
        />
        <span
          aria-hidden
          className="h-[18px] w-px shrink-0 bg-white/15"
        />
        <CategoryChips
          categories={categories}
          activeId={categoryId}
          onChange={onCategoryChange}
        />
      </div>

      <div className="mt-[22px] px-[10px]">
        <div
          className="relative flex h-[41px] items-center overflow-hidden rounded-2xl px-[13px] shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          style={{
            backgroundImage:
              'linear-gradient(177.71deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_1px_0_4px_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(255,255,255,0.05)]"
          />

          <div className="relative flex items-center gap-1">
            <img src={assets.iconClock} alt="" className="size-[13px]" />
            <p className="text-[12px] leading-[19.5px] text-he-muted">
              Expires in{' '}
              <span className="text-he-success-bright">{expiresIn}</span>
            </p>
          </div>

          <div className="relative ml-auto flex items-center gap-2">
            <p className="text-[12.5px] font-medium leading-[18.75px] text-he-muted">
              {activeCount} active
            </p>
            <button type="button" aria-label="Refresh" onClick={onRefresh}>
              <img src={assets.iconRefresh} alt="" className="size-[14px]" />
            </button>
            <button type="button" aria-label="Share" onClick={onShare}>
              <img src={assets.iconShare} alt="" className="size-[14px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
