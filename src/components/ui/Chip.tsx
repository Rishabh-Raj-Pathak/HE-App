import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../design-system/cn'

type ChipVariant = 'accent' | 'amber' | 'gold' | 'neutral' | 'default'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  variant?: ChipVariant
}

const selectedClasses: Record<ChipVariant, string> = {
  accent: 'border border-accent-border bg-accent-soft font-semibold text-text-primary',
  amber: 'border border-accent-amber font-semibold text-text-primary',
  gold: 'text-gold-light',
  neutral: 'border border-white/20 bg-white/[0.06] font-semibold text-[rgba(255,255,255,0.92)]',
  default: 'border border-white/[0.06] font-normal text-text-disabled',
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
