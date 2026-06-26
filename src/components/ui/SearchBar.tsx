import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export default function SearchBar({
  leadingIcon,
  trailingIcon,
  className,
  placeholder = 'Search',
  ...props
}: SearchBarProps) {
  return (
    <div
      className={cn(
        'flex h-[41px] items-center gap-2 rounded-ds-lg px-ds-3 shadow-ds-md',
        className,
      )}
      style={{ backgroundImage: 'var(--gradient-card)' }}
    >
      {leadingIcon}
      <input
        type="search"
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
        {...props}
      />
      {trailingIcon}
    </div>
  )
}
