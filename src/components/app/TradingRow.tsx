import { cn } from '../../design-system/cn'
import Button from '../ui/Button'

export interface TradingRowProps {
  symbol: string
  position: string
  positionType?: 'long' | 'short'
  priceRange: string
  confidence: string
  riskReward: string
  tokenIcon: string
  tokenSize?: string
  sparkline: string
  rowPadding?: string
  onViewThesis?: () => void
  thesisLabel?: string
  thesisIcon?: string
}

export default function TradingRow({
  symbol,
  position,
  positionType = 'long',
  priceRange,
  confidence,
  riskReward,
  tokenIcon,
  tokenSize = 'size-8',
  sparkline,
  rowPadding = 'py-[10px] pb-[10.3px]',
  onViewThesis,
  thesisLabel = 'View Thesis',
  thesisIcon,
}: TradingRowProps) {
  const positionColor =
    positionType === 'short' ? 'text-danger-default' : 'text-success-default'

  return (
    <article
      className={cn(
        'flex items-center justify-between border-b border-dashed border-border-dashed px-ds-3',
        rowPadding,
      )}
    >
      <div className="flex w-[122px] shrink-0 items-start gap-1">
        <img src={tokenIcon} alt="" className={cn('shrink-0 object-contain', tokenSize)} />
        <div className="flex min-w-0 flex-col gap-0.5">
          <p className="text-base font-bold leading-[17.4px] tracking-[-0.29px] text-text-highlight">
            {symbol}
          </p>
          <p className={cn('text-xs font-semibold leading-[14.4px]', positionColor)}>{position}</p>
          <p className="text-[11.5px] font-normal leading-[18.75px] text-text-primary">
            {priceRange}
          </p>
        </div>
      </div>

      <img src={sparkline} alt="" className="h-8 w-20 shrink-0 object-contain" />

      <div className="grid w-[92px] shrink-0 grid-cols-[1fr_14px] gap-x-1.5 gap-y-1">
        <p className="col-start-1 text-right text-[14.5px] font-bold leading-[17.4px] tracking-[-0.29px] text-text-highlight">
          {confidence}
        </p>
        <button
          type="button"
          aria-label="Status"
          className="col-start-2 row-start-1 flex size-[14px] items-center justify-center rounded-[10px] border border-white/20"
        >
          <span className="size-1 rounded-full bg-white/40" />
        </button>
        <p className="col-span-2 text-right text-xs font-semibold leading-[14.4px] text-success-default">
          {riskReward}
        </p>
        <div className="col-span-2 flex justify-end">
          <Button
            variant="accent"
            size="sm"
            onClick={onViewThesis}
            className="relative h-[19px] w-[86px] rounded-ds-lg px-1 shadow-ds-md"
            style={{ backgroundImage: 'var(--gradient-card)' }}
          >
            <span className="text-[10px] font-semibold leading-[17.25px] tracking-[0.115px] text-white/90">
              {thesisLabel}
            </span>
            {thesisIcon ? <img src={thesisIcon} alt="" className="size-[11px]" /> : null}
          </Button>
        </div>
      </div>
    </article>
  )
}
