import { assets } from '../../data/tradeSignals'
import { getStrategyById } from '../../data/copilotStrategies'
import Card from '../ui/Card'
import IconButton from '../ui/IconButton'
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
    <section className="relative z-10 shrink-0 px-ds-3 pb-ds-3">
      <Card variant="elevated" padding="none">
        <div className="border-b border-white/[0.04] px-ds-3 py-2.5">
          <StrategySelector strategyId={strategyId} onChange={onStrategyChange} />
        </div>

        {categories.length > 0 ? (
          <div className="flex h-[33px] items-center border-b border-white/[0.04]">
            <CategoryChips
              categories={categories}
              activeId={categoryId}
              onChange={onCategoryChange}
            />
          </div>
        ) : null}

        <div className="flex h-[41px] items-center gap-ds-2 px-ds-3">
          <div className="flex min-w-0 items-center gap-1">
            <img src={assets.iconClock} alt="" className="size-[13px] shrink-0 opacity-70" />
            <p className="truncate text-xs leading-[18px] text-text-muted">
              Expires in{' '}
              <span className="font-bold text-[rgba(255,255,255,0.92)]">{expiresIn}</span>
            </p>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <p className="text-[12.5px] font-medium leading-[18.75px] text-text-muted">
              {activeCount} active
            </p>
            <IconButton label="Refresh" onClick={onRefresh} className="size-6">
              <img src={assets.iconRefresh} alt="" className="size-[14px]" />
            </IconButton>
            <IconButton label="Share" onClick={onShare} className="size-6 opacity-35">
              <img src={assets.iconShare} alt="" className="size-[14px]" />
            </IconButton>
          </div>
        </div>
      </Card>
    </section>
  )
}
