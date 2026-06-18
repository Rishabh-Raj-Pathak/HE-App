import { assets } from '../../data/tradeSignals'

export default function ViewThesisButton() {
  return (
    <button
      type="button"
      className="relative flex h-[19px] w-[86px] shrink-0 items-center justify-center gap-0.5 rounded-2xl px-1 shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage:
            'linear-gradient(175.4deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
        }}
      />
      <span className="relative shrink-0 text-[10px] font-semibold leading-[17.25px] tracking-[0.115px] text-white/90">
        View Thesis
      </span>
      <img src={assets.iconArrow} alt="" className="relative size-[11px] shrink-0" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_1px_0_4px_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(255,255,255,0.05)]"
      />
    </button>
  )
}
