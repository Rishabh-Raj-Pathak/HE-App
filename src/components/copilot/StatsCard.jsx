import { STATS } from '../../data/tradeSignals'

function StatColumn({ label, value, showDivider }) {
  return (
    <div className="relative flex flex-col items-center gap-[7px] pt-[18px]">
      {showDivider ? (
        <div className="absolute left-0 top-[16.5px] h-[45px] w-px bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />
      ) : null}
      <p className="text-center text-[12px] font-medium uppercase leading-[14.25px] tracking-[0.76px] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.35)]">
        {label}
      </p>
      <p className="text-center text-[17px] font-bold leading-[25.5px] tracking-[-0.425px] text-he-primary [text-shadow:0_3px_4px_rgba(0,0,0,0.3)]">
        {value}
      </p>
    </div>
  )
}

export default function StatsCard() {
  return (
    <div className="relative grid h-[85px] w-[354px] grid-cols-3">
      {STATS.map((stat, index) => (
        <StatColumn
          key={stat.label}
          label={stat.label}
          value={stat.value}
          showDivider={index > 0}
        />
      ))}
    </div>
  )
}
