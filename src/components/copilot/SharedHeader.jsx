import { assets } from '../../data/tradeSignals'
import Button from '../ui/Button'
import Header from '../ui/Header'
import IconButton from '../ui/IconButton'

export default function SharedHeader({ onConnectWallet, onProfile }) {
  return (
    <Header
      leading={
        <IconButton
          label="Profile"
          onClick={onProfile}
          className="size-[42px] rounded-full border border-border-glass bg-white/5"
        >
          <img src={assets.nav.user} alt="" className="size-6 rounded-full" />
        </IconButton>
      }
      trailing={
        onConnectWallet ? (
          <Button
            variant="primary"
            size="sm"
            onClick={onConnectWallet}
            className="rounded-lg px-[9px] py-[5px] text-xs"
          >
            Connect wallet
          </Button>
        ) : undefined
      }
    />
  )
}
