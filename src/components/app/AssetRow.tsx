import { cn } from '../../design-system/cn'

export interface AssetRowProps {
  symbol: string
  allocation: string
  value: string
  change: string
  changeTone?: 'positive' | 'negative'
  tokenIcon?: string
  progress?: number
  className?: string
}

export default function AssetRow({
  symbol,
  allocation,
  value,
  change,
  changeTone = 'positive',
  tokenIcon,
  progress = 0,
  className,
}: AssetRowProps) {
  const changeColor =
    changeTone === 'negative' ? 'text-danger-default' : 'text-success-default'

  return (
    <article className={cn('flex items-center gap-3 py-3', className)}>
      {tokenIcon ? (
        <img src={tokenIcon} alt="" className="size-8 shrink-0 object-contain" />
      ) : (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-ds-md bg-bg-muted text-sm font-bold text-text-primary">
          {symbol.charAt(0)}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-sm font-bold text-text-highlight">{symbol}</p>
          <p className="text-sm text-text-muted">{allocation}</p>
        </div>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-gold-mid" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-sm font-bold text-text-highlight">{value}</p>
        <p className={cn('text-xs', changeColor)}>{change}</p>
      </div>
    </article>
  )
}
