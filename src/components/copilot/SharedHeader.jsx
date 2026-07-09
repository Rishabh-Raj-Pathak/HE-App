import { assets } from '../../data/tradeSignals'
import Button from '../ui/Button'
import Header from '../ui/Header'
import IconButton from '../ui/IconButton'

export default function SharedHeader({ onConnectWallet, onProfile }) {
  return (
    <Header
      leading={
        <IconButton label="Profile" onClick={onProfile} className="size-[42px]">
          <img src={assets.iconProfile} alt="" className="h-5 w-[14px]" />
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
