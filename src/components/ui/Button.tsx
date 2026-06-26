import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../design-system/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-text-inverse border border-border-strong shadow-ds-sm',
  secondary:
    'bg-transparent text-text-primary border border-border-input',
  ghost: 'bg-transparent text-text-primary border border-transparent',
  accent:
    'bg-accent-soft text-text-primary border border-accent-border',
  danger:
    'bg-danger-default/10 text-danger-default border border-danger-default/40',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs font-medium rounded-ds-sm',
  md: 'h-[51px] px-4 text-base font-medium rounded-ds-pill',
  lg: 'h-16 px-6 text-base font-semibold rounded-ds-pill',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 transition active:scale-[0.98] active:opacity-90 disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? <span className="size-4 animate-pulse rounded-full bg-current/30" /> : null}
      {children}
    </button>
  )
}
