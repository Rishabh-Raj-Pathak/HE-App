import ViewThesisButton from '../ui/ViewThesisButton'

export default function TradeSignalRow({
  symbol,
  position,
  positionType,
  priceRange,
  confidence,
  riskReward,
  tokenIcon,
  tokenSize,
  sparkline,
  rowPadding = 'py-[10px] pb-[10.3px]',
}) {
  const positionColor =
    positionType === 'short' ? 'text-he-danger' : 'text-he-success'

  return (
    <article
      className={`flex items-center justify-between border-b border-dashed border-white/70 px-3 ${rowPadding}`}
    >
      <div className="flex w-[122px] shrink-0 items-start gap-1">
        <img
          src={tokenIcon}
          alt=""
          className={`shrink-0 object-contain ${tokenSize}`}
        />
        <div className="flex min-w-0 flex-col gap-0.5">
          <p className="text-[16px] font-bold leading-[17.4px] tracking-[-0.29px] text-he-highlight">
            {symbol}
          </p>
          <p className={`text-[12px] font-semibold leading-[14.4px] ${positionColor}`}>
            {position}
          </p>
          <p className="text-[11.5px] font-normal leading-[18.75px] text-white">
            {priceRange}
          </p>
        </div>
      </div>

      <img
        src={sparkline}
        alt=""
        className="h-8 w-20 shrink-0 object-contain"
      />

      <div className="grid w-[92px] shrink-0 grid-cols-[1fr_14px] gap-x-1.5 gap-y-1">
        <p className="col-start-1 text-right text-[14.5px] font-bold leading-[17.4px] tracking-[-0.29px] text-he-highlight">
          {confidence}
        </p>
        <button
          type="button"
          aria-label="Status"
          className="col-start-2 row-start-1 flex size-[14px] items-center justify-center rounded-[10px] border border-white/20"
        >
          <span className="size-1 rounded-full bg-white/40" />
        </button>
        <p className="col-span-2 text-right text-[12px] font-semibold leading-[14.4px] text-he-success">
          {riskReward}
        </p>
        <div className="col-span-2 flex justify-end">
          <ViewThesisButton />
        </div>
      </div>
    </article>
  )
}
