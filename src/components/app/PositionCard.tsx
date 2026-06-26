import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface PositionCardProps {
  symbol: string
  side: 'long' | 'short'
  entry: string
  pnlPercent: string
  pnlValue: string
  tokenIcon?: string
  expanded?: boolean
  onToggle?: () => void
  children?: ReactNode
  className?: string
}

export default function PositionCard({
  symbol,
  side,
  entry,
  pnlPercent,
  pnlValue,
  tokenIcon,
  expanded = false,
  onToggle,
  children,
  className,
}: PositionCardProps) {
  const sideColor = side === 'long' ? 'text-success-default' : 'text-danger-default'
  const pnlColor = pnlPercent.startsWith('-') ? 'text-danger-default' : 'text-success-default'

  return (
    <article
      className={cn(
        'rounded-ds-lg border border-border-glass shadow-ds-lg',
        className,
      )}
      style={{ backgroundImage: 'var(--gradient-card)' }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-ds-4 py-ds-3 text-left"
      >
        {tokenIcon ? (
          <img src={tokenIcon} alt="" className="size-8 shrink-0 rounded-ds-md object-cover" />
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="text-base font-bold text-text-highlight">{symbol}</p>
          <p className={cn('text-xs font-semibold', sideColor)}>
            <span className="mr-1 inline-block size-1.5 rounded-full bg-current" />
            {side === 'long' ? 'Long' : 'Short'}
          </p>
        </div>
        <div className="shrink-0">
          <p className="text-[10px] uppercase tracking-wide text-text-disabled">Entry</p>
          <p className="text-sm font-bold text-text-highlight">{entry}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className={cn('text-base font-bold', pnlColor)}>{pnlPercent}</p>
          <p className="text-xs text-text-disabled">{pnlValue}</p>
        </div>
        <span className="text-text-muted">{expanded ? '▾' : '▸'}</span>
      </button>
      {expanded && children ? <div className="border-t border-border-default px-ds-4 py-ds-3">{children}</div> : null}
    </article>
  )
}
