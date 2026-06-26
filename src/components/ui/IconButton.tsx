import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const sizeClasses = {
  sm: 'size-5',
  md: 'size-6',
  lg: 'size-8',
}

export default function IconButton({
  label,
  size = 'md',
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-flex shrink-0 items-center justify-center text-text-primary',
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
