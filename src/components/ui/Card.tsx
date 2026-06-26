import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../design-system/cn'

type CardVariant = 'default' | 'gradient' | 'inset' | 'surface'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: 'none' | 'sm' | 'md'
  children: ReactNode
}

const paddingClasses = {
  none: '',
  sm: 'p-ds-2',
  md: 'p-ds-3',
}

export default function Card({
  variant = 'default',
  padding = 'md',
  className,
  children,
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-ds-lg',
        variant === 'default' && 'border border-border-medium bg-bg-elevated shadow-ds-lg',
        variant === 'gradient' && 'border border-border-medium shadow-ds-lg',
        variant === 'inset' && 'border border-border-medium shadow-ds-card-inset',
        variant === 'surface' && 'border border-border-panel bg-bg-surface shadow-ds-sm',
        paddingClasses[padding],
        className,
      )}
      style={{
        ...(variant === 'gradient' || variant === 'inset'
          ? { backgroundImage: 'var(--gradient-card)' }
          : undefined),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
