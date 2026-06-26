import { useEffect, type ReactNode } from 'react'
import { cn } from '../../design-system/cn'
import IconButton from './IconButton'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export default function Modal({ open, onClose, title, children, className }: ModalProps) {
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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-ds-6" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-bg-overlay"
        onClick={onClose}
      />
      <div
        className={cn(
          'relative w-full max-w-[394px] rounded-ds-lg border border-border-medium p-ds-6 shadow-ds-xl',
          className,
        )}
        style={{ backgroundImage: 'var(--gradient-card)' }}
      >
        {title ? (
          <div className="mb-ds-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary">{title}</h2>
            <IconButton label="Close" onClick={onClose}>
              <span className="text-lg">×</span>
            </IconButton>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  )
}
