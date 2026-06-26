import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface ScreenShellProps {
  children: ReactNode
  className?: string
}

export default function ScreenShell({ children, className }: ScreenShellProps) {
  return (
    <div
      className={cn(
        'relative mx-auto flex min-h-dvh w-full max-w-[394px] flex-col bg-bg-default',
        className,
      )}
    >
      {children}
    </div>
  )
}
