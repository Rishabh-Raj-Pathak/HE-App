import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown } from 'lucide-react'
import { assets } from '../../data/tradeSignals'
import {
  COPILOT_STRATEGIES,
  getStrategyById,
} from '../../data/copilotStrategies'
import {
  formatRiskLabel,
  getRiskBadgeClass,
} from './strategyRiskStyles'

function RiskBadge({ riskLevel, className = '' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-ds-sm border px-1.5 py-px text-[8px] font-semibold uppercase leading-[10px] ${getRiskBadgeClass(riskLevel)} ${className}`}
    >
      {formatRiskLabel(riskLevel)}
    </span>
  )
}

export default function StrategySelector({ strategyId, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const popoverRef = useRef(null)
  const [popoverStyle, setPopoverStyle] = useState({ top: 0, left: 0, width: 280 })
  const strategy = getStrategyById(strategyId)

  useEffect(() => {
    if (!open || !buttonRef.current) return

    function updatePosition() {
      const rect = buttonRef.current.getBoundingClientRect()
      setPopoverStyle({
        top: rect.bottom + 8,
        left: rect.left,
        width: Math.min(320, window.innerWidth - 32),
      })
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    function handleClickOutside(e) {
      const inTrigger = containerRef.current?.contains(e.target)
      const inPopover = popoverRef.current?.contains(e.target)
      if (!inTrigger && !inPopover) setOpen(false)
    }

    function handleEscape(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  if (!strategy) return null

  const popover = open
    ? createPortal(
        <div
          ref={popoverRef}
          className="fixed z-[200] overflow-hidden rounded-ds-lg shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          style={{
            top: popoverStyle.top,
            left: popoverStyle.left,
            width: popoverStyle.width,
            backgroundImage: 'var(--gradient-card-elevated)',
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-ds-card-inset"
          />
          <p className="relative px-ds-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-text-disabled">
            Choose strategy
          </p>

          <div className="relative p-ds-2">
            {COPILOT_STRATEGIES.map((s) => {
              const isActive = s.id === strategyId
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    onChange(s.id)
                    setOpen(false)
                  }}
                  className={[
                    'flex w-full items-center justify-between gap-2 rounded-ds-sm px-2.5 py-2 text-left transition',
                    isActive ? 'bg-white/5' : 'hover:bg-white/[0.03]',
                  ].join(' ')}
                >
                  <div className="min-w-0">
                    <p
                      className={[
                        'truncate text-xs leading-[18px]',
                        isActive ? 'font-semibold text-text-highlight' : 'font-normal text-text-muted',
                      ].join(' ')}
                    >
                      {s.name}
                    </p>
                    <p className="truncate text-[10px] leading-[14px] text-text-disabled">
                      {s.timeframe} · {formatRiskLabel(s.riskLevel)} risk
                    </p>
                  </div>
                  <RiskBadge riskLevel={s.riskLevel} />
                </button>
              )
            })}
          </div>

          <div className="relative p-ds-3 pt-0">
            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="text-[13px] font-bold leading-[19px] text-text-highlight">
                {strategy.name}
              </p>
              <RiskBadge riskLevel={strategy.riskLevel} className="px-2 py-0.5 text-[9px] leading-3" />
            </div>
            <p className="mb-3 text-[11px] leading-4 text-text-muted">{strategy.description}</p>
            <div className="space-y-1.5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-text-disabled">
                  Timeframe
                </p>
                <p className="text-[11px] leading-4 text-text-secondary">{strategy.timeframe}</p>
              </div>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-text-disabled">
                  Best for
                </p>
                <p className="text-[11px] leading-4 text-text-secondary">{strategy.bestFor}</p>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Strategy: ${strategy.name}`}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((prev) => !prev)
        }}
        className="group flex w-full items-center gap-2 rounded-ds-sm py-0.5 text-left transition hover:bg-white/[0.03]"
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-ds-sm border border-border-glass bg-white/5">
          <img src={assets.iconAiScience} alt="" className="size-4" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[9px] font-semibold uppercase leading-[12px] tracking-[0.06em] text-text-disabled">
            Strategy
          </span>
          <span className="flex items-center gap-1.5">
            <span className="truncate text-base font-bold leading-6 tracking-[-0.32px] text-text-highlight">
              {strategy.name}
            </span>
            <RiskBadge riskLevel={strategy.riskLevel} />
          </span>
          <span className="block truncate text-[10px] leading-[14px] text-text-disabled">
            {strategy.timeframe} · {strategy.bestFor}
          </span>
        </span>

        <ChevronDown
          className={`size-4 shrink-0 text-text-muted transition-transform group-hover:text-text-secondary ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>
      {popover}
    </div>
  )
}
