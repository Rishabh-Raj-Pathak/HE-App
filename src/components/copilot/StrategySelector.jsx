import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  COPILOT_STRATEGIES,
  getStrategyById,
} from '../../data/copilotStrategies'

const RISK_STYLES = {
  'LOW RISK': 'border-he-success/50 text-he-success',
  'MEDIUM RISK': 'border-white/25 text-he-muted',
  'HIGH RISK': 'border-he-danger/50 text-he-danger',
}

export default function StrategySelector({ strategyId, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const strategy = getStrategyById(strategyId)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    function handleEscape(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  if (!strategy) return null

  const riskStyle = RISK_STYLES[strategy.riskLevel] ?? RISK_STYLES['MEDIUM RISK']

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        aria-expanded={open}
        aria-label={`Strategy: ${strategy.name}`}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-[33px] shrink-0 items-center gap-2 rounded-[20px] border border-he-accent-border bg-he-accent-soft px-2.5"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-he-accent">
          Strategy
        </span>
        <span
          aria-hidden
          className="h-3 w-px shrink-0 bg-white/20"
        />
        <span className="whitespace-nowrap text-[12.5px] font-medium leading-[18.75px] text-white">
          {strategy.name}
        </span>
        <ChevronDown
          className={`size-3 shrink-0 text-he-muted transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-[calc(100%+6px)] z-30 w-[260px] overflow-hidden rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
          style={{
            backgroundImage:
              'linear-gradient(177.71deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
          }}
        >
          <p className="border-b border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-he-accent">
            Choose strategy
          </p>

          <div className="border-b border-white/10 p-2">
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
                    'flex w-full items-center rounded-lg px-2.5 py-2 text-left text-[12px] leading-[18px]',
                    isActive
                      ? 'bg-he-accent-soft font-semibold text-white'
                      : 'font-normal text-he-muted hover:bg-white/5',
                  ].join(' ')}
                >
                  {s.name}
                </button>
              )
            })}
          </div>

          <div className="p-3">
            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="text-[13px] font-bold leading-[19px] text-white">
                {strategy.name}
              </p>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-semibold leading-[12px] ${riskStyle}`}
              >
                {strategy.riskLevel}
              </span>
            </div>
            <p className="mb-3 text-[11px] leading-[16px] text-he-muted">
              {strategy.description}
            </p>
            <div className="space-y-1.5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-he-muted">
                  Timeframe
                </p>
                <p className="text-[11px] leading-[16px] text-white/80">
                  {strategy.timeframe}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-he-muted">
                  Best for
                </p>
                <p className="text-[11px] leading-[16px] text-white/80">
                  {strategy.bestFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
