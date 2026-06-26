import TradeSignalRow from './TradeSignalRow'
import EmptyState from '../ui/EmptyState'

export default function MarketSection({ setups }) {
  if (setups.length === 0) {
    return (
      <EmptyState description="No setups for this strategy and category." />
    )
  }

  return (
    <section className="min-h-0 flex-1 overflow-y-auto hide-scrollbar pt-1">
      {setups.map((trade) => (
        <TradeSignalRow key={trade.id} {...trade} />
      ))}
    </section>
  )
}
