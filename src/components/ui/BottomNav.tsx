import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface BottomNavItem {
  id: string
  label?: string
  icon: ReactNode
  active?: boolean
  onClick?: () => void
}

export interface BottomNavProps {
  items: BottomNavItem[]
  className?: string
}

export default function BottomNav({ items, className }: BottomNavProps) {
  return (
    <nav
      className={cn(
        'shrink-0 border-t border-border-subtle bg-bg-default px-7 py-[7px]',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        {items.map((item) =>
          item.active ? (
            <div key={item.id} className="relative h-[45px] w-[53px] shrink-0">
              <div className="absolute left-[15px] top-0 size-6">{item.icon}</div>
              {item.label ? (
                <span className="absolute inset-x-0 bottom-0 text-center text-[10px] font-bold leading-[15px] text-text-primary">
                  {item.label}
                </span>
              ) : null}
            </div>
          ) : (
            <button
              key={item.id}
              type="button"
              aria-label={item.label ?? item.id}
              onClick={item.onClick}
              className="size-6 shrink-0"
            >
              {item.icon}
            </button>
          ),
        )}
      </div>
    </nav>
  )
}
