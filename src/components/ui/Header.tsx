import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'
import IconButton from './IconButton'

export interface HeaderProps {
  title?: string
  leading?: ReactNode
  trailing?: ReactNode
  onBack?: () => void
  backLabel?: string
  className?: string
}

export default function Header({
  title,
  leading,
  trailing,
  onBack,
  backLabel = 'Back',
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'flex h-[58px] shrink-0 items-center justify-between px-ds-5',
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        {onBack ? (
          <IconButton label={backLabel} onClick={onBack}>
            <span className="text-lg">←</span>
          </IconButton>
        ) : null}
        {leading}
        {title ? (
          <h1 className="truncate text-[17px] font-bold leading-[25.5px] tracking-[-0.425px] text-text-primary">
            {title}
          </h1>
        ) : null}
      </div>
      {trailing}
    </header>
  )
}
