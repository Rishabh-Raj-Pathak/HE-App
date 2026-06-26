import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface TabItem {
  id: string
  label: string
  icon?: ReactNode
}

export interface TabsProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  className?: string
}

export default function Tabs({ items, activeId, onChange, className }: TabsProps) {
  return (
    <div className={cn('flex gap-ds-2 overflow-x-auto hide-scrollbar', className)} role="tablist">
      {items.map((item) => {
        const isActive = item.id === activeId
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={cn(
              'flex h-[33px] shrink-0 items-center gap-1.5 rounded-ds-lg px-ds-3 text-sm transition',
              isActive
                ? 'bg-accent-soft font-semibold text-text-primary'
                : 'text-text-muted hover:text-text-secondary',
            )}
          >
            {item.icon}
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
