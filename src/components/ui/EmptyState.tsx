import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface EmptyStateProps {
  title?: string
  description: string
  icon?: ReactNode
  action?: ReactNode
  className?: string
}

export default function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-ds-6 text-center',
        className,
      )}
    >
      {icon}
      {title ? <p className="text-sm font-semibold text-text-primary">{title}</p> : null}
      <p className="text-xs leading-[18px] text-text-muted">{description}</p>
      {action}
    </div>
  )
}
