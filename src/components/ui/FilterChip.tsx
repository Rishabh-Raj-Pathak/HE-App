import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../design-system/cn'

type FilterChipVariant = 'amber' | 'default'

export interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  variant?: FilterChipVariant
}

export default function FilterChip({
  selected = false,
  variant = 'amber',
  className,
  children,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      className={cn(
        'h-[33px] shrink-0 rounded-[20px] border px-3 text-[12.5px] leading-[18.75px]',
        selected && variant === 'amber'
          ? 'border-accent-amber font-semibold text-text-primary'
          : 'border-border-glass font-normal text-text-disabled',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
