import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../design-system/cn'

type ChipVariant = 'accent' | 'amber' | 'gold' | 'default'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  variant?: ChipVariant
}

const selectedClasses: Record<ChipVariant, string> = {
  accent: 'border border-accent-border bg-accent-soft font-semibold text-text-primary',
  amber: 'border border-accent-amber font-semibold text-text-primary',
  gold: 'text-gold-light',
  default: 'border-[0.3px] border-border-input font-normal text-text-secondary',
}

export default function Chip({
  selected = false,
  variant = 'accent',
  className,
  children,
  style,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        'h-[26px] shrink-0 rounded-[20px] px-ds-3 text-[12.5px] leading-[18.75px] transition',
        selected ? selectedClasses[variant] : selectedClasses.default,
        variant === 'gold' && selected && 'shadow-[inset_0_0_4px_rgba(0,0,0,0.5)]',
        className,
      )}
      style={{
        ...(variant === 'gold' && selected
          ? { backgroundImage: 'var(--gradient-gold-tab, linear-gradient(180deg, #1a140b, #0f0e0c))' }
          : undefined),
        ...style,
      }}
      {...props}
    >
      <span className="whitespace-nowrap">{children}</span>
    </button>
  )
}
