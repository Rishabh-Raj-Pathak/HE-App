import { cn } from '../../design-system/cn'

export interface TransactionRowProps {
  title: string
  subtitle?: string
  amount: string
  amountTone?: 'positive' | 'negative' | 'neutral'
  timestamp?: string
  icon?: string
  className?: string
}

const amountToneClasses = {
  positive: 'text-success-default',
  negative: 'text-danger-default',
  neutral: 'text-text-primary',
}

export default function TransactionRow({
  title,
  subtitle,
  amount,
  amountTone = 'neutral',
  timestamp,
  icon,
  className,
}: TransactionRowProps) {
  return (
    <article
      className={cn(
        'flex items-center justify-between border-b border-border-default px-ds-3 py-ds-3',
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-ds-3">
        {icon ? <img src={icon} alt="" className="size-8 shrink-0 rounded-ds-md object-cover" /> : null}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-text-primary">{title}</p>
          {subtitle ? (
            <p className="truncate text-xs text-text-muted">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className={cn('text-sm font-bold', amountToneClasses[amountTone])}>{amount}</p>
        {timestamp ? <p className="text-[10px] text-text-subtle">{timestamp}</p> : null}
      </div>
    </article>
  )
}
