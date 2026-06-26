import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface SectionHeaderProps {
  title: string
  trailing?: ReactNode
  className?: string
}

export default function SectionHeader({ title, trailing, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between px-ds-1', className)}>
      <h2 className="text-base font-bold leading-6 tracking-[-0.32px] text-text-highlight">
        {title}
      </h2>
      {trailing}
    </div>
  )
}
