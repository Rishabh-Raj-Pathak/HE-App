import { TRADES } from '../../data/tradeSignals'
import TradeSignalRow from './TradeSignalRow'

export default function MarketSection() {
  return (
    <section className="min-h-0 flex-1 overflow-y-auto hide-scrollbar">
      {TRADES.map((trade) => (
        <TradeSignalRow key={trade.id} {...trade} />
      ))}
    </section>
  )
}
