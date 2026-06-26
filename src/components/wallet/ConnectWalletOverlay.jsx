import { WALLET_OPTIONS, walletAssets } from '../../data/wallets'
import BottomSheet from '../ui/BottomSheet'
import IconButton from '../ui/IconButton'
import WalletRow from '../app/WalletRow'

export default function ConnectWalletOverlay({ open, onClose }) {
  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title="Connect Wallet"
      leadingAction={
        <IconButton label="Help">
          <img src={walletAssets.iconHelp} alt="" className="size-6" />
        </IconButton>
      }
      trailingAction={
        <IconButton label="Close" onClick={onClose}>
          <img src={walletAssets.iconClose} alt="" className="size-6" />
        </IconButton>
      }
    >
      {WALLET_OPTIONS.map((wallet) => (
        <WalletRow key={wallet.id} wallet={wallet} onSelect={onClose} />
      ))}

      <div className="flex items-center justify-center gap-[5px] px-[37px] py-px">
        <p className="text-sm leading-5 text-text-subtle">Haven&apos;t got a wallet? </p>
        <button type="button" className="text-sm font-semibold leading-5 text-text-primary">
          Get started
        </button>
      </div>
    </BottomSheet>
  )
}
