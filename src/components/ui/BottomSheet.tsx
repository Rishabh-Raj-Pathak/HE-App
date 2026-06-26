import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title?: string
  leadingAction?: ReactNode
  trailingAction?: ReactNode
  children: ReactNode
  className?: string
}

export default function BottomSheet({
  open,
  onClose,
  title,
  leadingAction,
  trailingAction,
  children,
  className,
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartY.current = event.touches[0].clientY
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartY.current == null) return
    const deltaY = event.changedTouches[0].clientY - touchStartY.current
    if (deltaY > 72) onClose()
    touchStartY.current = null
  }

  if (!open) return null

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'bottom-sheet-title' : undefined}
    >
      <button
        type="button"
        aria-label="Close overlay"
        className="wallet-overlay-backdrop absolute inset-0 bg-bg-overlay"
        onClick={onClose}
      />

      <div
        ref={sheetRef}
        className={cn(
          'wallet-sheet relative flex max-h-[92dvh] flex-col rounded-t-ds-sheet bg-bg-surface pb-[max(24px,env(safe-area-inset-bottom))]',
          className,
        )}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex shrink-0 justify-center pt-3">
          <div className="h-1 w-10 rounded-ds-full bg-[rgba(136,136,136,0.4)]" />
        </div>

        {title || leadingAction || trailingAction ? (
          <div className="flex shrink-0 items-center justify-between px-ds-6 py-ds-4">
            <div className="size-6">{leadingAction}</div>
            {title ? (
              <h2 id="bottom-sheet-title" className="text-xl font-bold leading-7 text-text-primary">
                {title}
              </h2>
            ) : (
              <span />
            )}
            <div className="size-6">{trailingAction}</div>
          </div>
        ) : null}

        <div className="flex flex-col gap-3 overflow-y-auto px-ds-6 pb-2">{children}</div>
      </div>
    </div>
  )
}
