import { cn } from '../../design-system/cn'

export interface MetricCardProps {
  label: string
  value: string
  caption?: string
  valueTone?: 'default' | 'gold' | 'success' | 'danger'
  className?: string
}

const valueToneClasses = {
  default: 'text-gold-default',
  gold: 'text-gold-default',
  success: 'text-success-default',
  danger: 'text-danger-default',
}

export default function MetricCard({
  label,
  value,
  caption,
  valueTone = 'gold',
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        'relative h-[78px] overflow-hidden rounded-xl bg-bg-card-dark shadow-ds-md',
        className,
      )}
    >
      <div className="flex h-full flex-col justify-center px-3 py-2">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.6px] text-white/30">
          {label}
        </p>
        <p className={cn('text-[17px] font-medium tracking-[-0.425px]', valueToneClasses[valueTone])}>
          {value}
        </p>
        {caption ? (
          <p className="text-[8px] tracking-[0.08px] text-white/20">{caption}</p>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_0.8px_rgba(255,255,255,0.07)]" />
    </div>
  )
}
