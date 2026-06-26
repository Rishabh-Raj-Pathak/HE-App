import { cn } from '../../design-system/cn'

export interface TokenRowProps {
  symbol: string
  pair: string
  price: string
  change: string
  changeTone?: 'positive' | 'negative'
  tokenIcon: string
  sparkline: string
  className?: string
}

export default function TokenRow({
  symbol,
  pair,
  price,
  change,
  changeTone = 'positive',
  tokenIcon,
  sparkline,
  className,
}: TokenRowProps) {
  const changeColor =
    changeTone === 'negative' ? 'text-danger-default' : 'text-success-default'

  return (
    <article
      className={cn(
        'flex h-[71px] items-center gap-3 border-b border-dashed border-border-dashed px-5',
        className,
      )}
    >
      <img src={tokenIcon} alt="" className="size-8 shrink-0 object-contain" />
      <div className="min-w-0 flex-1">
        <p className="text-[14.5px] font-bold leading-[17.4px] tracking-[-0.29px] text-text-highlight">
          {symbol}
        </p>
        <p className="text-[11.5px] font-semibold leading-[13.8px] text-text-disabled">{pair}</p>
      </div>
      <img src={sparkline} alt="" className="h-8 w-20 shrink-0 object-contain" />
      <div className="shrink-0 text-right">
        <p className="text-[14.5px] font-bold leading-[17.4px] tracking-[-0.29px] text-text-highlight">
          {price}
        </p>
        <p className={cn('text-xs font-semibold leading-[14.4px]', changeColor)}>{change}</p>
      </div>
    </article>
  )
}
