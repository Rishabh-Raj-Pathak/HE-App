import type { InputHTMLAttributes } from 'react'
import { cn } from '../../design-system/cn'

type InputVariant = 'default' | 'error' | 'success'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant
  label?: string
  error?: string
}

const variantClasses: Record<InputVariant, string> = {
  default: 'border-border-input focus:border-accent-border',
  error: 'border-danger-default focus:border-danger-default',
  success: 'border-success-default focus:border-success-default',
}

export default function Input({
  variant = 'default',
  label,
  error,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex w-full flex-col gap-1">
      {label ? (
        <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={cn(
          'h-[51px] w-full rounded-ds-pill border-[0.5px] bg-transparent px-ds-4 text-base font-medium text-text-primary outline-none placeholder:text-text-subtle',
          variantClasses[variant],
          className,
        )}
        {...props}
      />
      {error ? <p className="text-xs text-danger-default">{error}</p> : null}
    </div>
  )
}
