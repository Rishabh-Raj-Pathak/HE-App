import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../design-system/cn'

type CardVariant = 'default' | 'gradient' | 'inset' | 'surface' | 'elevated'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: 'none' | 'sm' | 'md'
  children: ReactNode
  insetHighlight?: boolean
}

const paddingClasses = {
  none: '',
  sm: 'p-ds-2',
  md: 'p-ds-3',
}

export default function Card({
  variant = 'default',
  padding = 'md',
  insetHighlight = false,
  className,
  children,
  style,
  ...props
}: CardProps) {
  const useGradient =
    variant === 'gradient' ||
    variant === 'inset' ||
    variant === 'elevated'

  return (
    <div
      className={cn(
        'relative',
        variant === 'default' && 'rounded-ds-lg border border-border-medium bg-bg-elevated shadow-ds-lg',
        variant === 'gradient' && 'rounded-ds-lg border border-border-medium shadow-ds-lg',
        variant === 'inset' && 'rounded-ds-lg border border-border-medium shadow-ds-card-inset',
        variant === 'surface' && 'rounded-ds-lg border border-border-panel bg-bg-surface shadow-ds-sm',
        variant === 'elevated' && 'overflow-hidden rounded-ds-lg shadow-[0_4px_24px_rgba(0,0,0,0.7)]',
        paddingClasses[padding],
        className,
      )}
      style={{
        ...(variant === 'gradient' || variant === 'inset'
          ? { backgroundImage: 'var(--gradient-card)' }
          : undefined),
        ...(variant === 'elevated'
          ? { backgroundImage: 'var(--gradient-card-elevated)' }
          : undefined),
        ...style,
      }}
      {...props}
    >
      {(variant === 'elevated' || insetHighlight) && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] shadow-ds-card-inset"
        />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
