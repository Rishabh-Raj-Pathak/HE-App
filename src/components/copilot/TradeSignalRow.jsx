import { assets } from '../../data/tradeSignals'
import TradingRow from '../app/TradingRow'

export default function TradeSignalRow(props) {
  return <TradingRow {...props} thesisIcon={assets.iconArrow} />
}
