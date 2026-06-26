import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface ProfileBlockProps {
  name: string
  handle?: string
  avatar?: string
  trailing?: ReactNode
  className?: string
}

export default function ProfileBlock({
  name,
  handle,
  avatar,
  trailing,
  className,
}: ProfileBlockProps) {
  return (
    <div className={cn('flex items-center gap-ds-3 px-ds-6 py-ds-4', className)}>
      {avatar ? (
        <img src={avatar} alt="" className="size-12 shrink-0 rounded-ds-full object-cover" />
      ) : (
        <div className="flex size-12 shrink-0 items-center justify-center rounded-ds-full bg-bg-muted text-lg font-bold text-text-primary">
          {name.charAt(0)}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-bold text-text-primary">{name}</p>
        {handle ? <p className="truncate text-sm text-text-muted">@{handle}</p> : null}
      </div>
      {trailing}
    </div>
  )
}
