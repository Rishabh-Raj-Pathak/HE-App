import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export interface StrategyCardProps {
  name: string
  timeframe: string
  bestFor: string
  riskLevel: string
  riskVariant?: 'success' | 'danger' | 'default'
  icon?: ReactNode
  selected?: boolean
  onClick?: () => void
  className?: string
}

const riskVariantMap = {
  success: 'success' as const,
  danger: 'danger' as const,
  default: 'default' as const,
}

export default function StrategyCard({
  name,
  timeframe,
  bestFor,
  riskLevel,
  riskVariant = 'default',
  icon,
  selected = false,
  onClick,
  className,
}: StrategyCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('w-full text-left', className)}
    >
      <Card
        variant="gradient"
        padding="sm"
        className={cn(
          'border-accent-border/60',
          selected ? 'bg-accent-soft/40' : 'hover:bg-white/5',
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-[12.5px] font-semibold leading-[18px] text-text-primary">
                {name}
              </span>
              <Badge
                variant={riskVariantMap[riskVariant]}
                className="h-auto min-w-0 px-1.5 py-px text-[8px] leading-[10px]"
              >
                {riskLevel}
              </Badge>
            </div>
            <p className="truncate text-[10px] leading-[14px] text-text-muted">
              {timeframe} · {bestFor}
            </p>
          </div>
        </div>
      </Card>
    </button>
  )
}
