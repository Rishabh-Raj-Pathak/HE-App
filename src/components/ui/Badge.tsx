import type { HTMLAttributes } from 'react'
import { cn } from '../../design-system/cn'

type BadgeVariant = 'default' | 'success' | 'danger' | 'warning' | 'muted' | 'info'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  uppercase?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'border-border-input text-text-primary',
  success: 'border-success-badge text-text-primary',
  danger: 'border-danger-default/40 text-danger-default bg-danger-default/10',
  warning: 'border-warning-default/40 text-warning-default',
  muted: 'border-transparent text-text-subtle',
  info: 'border-info-default/40 text-info-default',
}

export default function Badge({
  variant = 'default',
  uppercase = true,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-[27px] min-w-[84px] items-center justify-center rounded-ds-full border-[0.5px] px-3 text-[10px] font-semibold tracking-wide',
        uppercase && 'uppercase',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
