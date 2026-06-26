import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface MenuRowProps {
  title: string
  description?: string
  icon?: ReactNode
  onClick?: () => void
  className?: string
}

export default function MenuRow({
  title,
  description,
  icon,
  onClick,
  className,
}: MenuRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 rounded-[10px] border border-border-panel bg-bg-surface px-4 py-3 text-left',
        className,
      )}
    >
      {icon ? (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-ds-md border border-border-glass bg-white/5">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold text-text-highlight">{title}</span>
        {description ? (
          <span className="block text-sm text-text-muted">{description}</span>
        ) : null}
      </span>
      <span className="text-text-slate">›</span>
    </button>
  )
}
