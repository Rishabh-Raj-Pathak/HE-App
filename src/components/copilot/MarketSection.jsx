import TradeSignalRow from './TradeSignalRow'

export default function MarketSection({ setups }) {
  if (setups.length === 0) {
    return (
      <section className="flex min-h-0 flex-1 items-center justify-center px-6">
        <p className="text-center text-[12px] leading-[18px] text-he-muted">
          No setups for this strategy and category.
        </p>
      </section>
    )
  }

  return (
    <section className="min-h-0 flex-1 overflow-y-auto hide-scrollbar">
      {setups.map((trade) => (
        <TradeSignalRow key={trade.id} {...trade} />
      ))}
    </section>
  )
}
