import { useEffect, useRef } from 'react'
import { WALLET_OPTIONS, walletAssets } from '../../data/wallets'
import WalletOptionRow from './WalletOptionRow'

export default function ConnectWalletOverlay({ open, onClose }) {
  const sheetRef = useRef(null)
  const touchStartY = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY
  }

  const handleTouchEnd = (event) => {
    if (touchStartY.current == null) return
    const deltaY = event.changedTouches[0].clientY - touchStartY.current
    if (deltaY > 72) onClose()
    touchStartY.current = null
  }

  if (!open) return null

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-wallet-title"
    >
      <button
        type="button"
        aria-label="Close connect wallet overlay"
        className="wallet-overlay-backdrop absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div
        ref={sheetRef}
        className="wallet-sheet relative flex max-h-[92dvh] flex-col rounded-t-[50px] bg-[#171717] pb-[max(24px,env(safe-area-inset-bottom))]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex shrink-0 justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-[rgba(136,136,136,0.4)]" />
        </div>

        <div className="flex shrink-0 items-center justify-between px-6 py-4">
          <button
            type="button"
            aria-label="Help"
            className="flex size-6 items-center justify-center"
          >
            <img src={walletAssets.iconHelp} alt="" className="size-6" />
          </button>
          <h2
            id="connect-wallet-title"
            className="text-[18px] font-bold leading-7 text-white"
          >
            Connect Wallet
          </h2>
          <button
            type="button"
            aria-label="Close"
            className="flex size-6 items-center justify-center"
            onClick={onClose}
          >
            <img src={walletAssets.iconClose} alt="" className="size-6" />
          </button>
        </div>

        <div className="flex flex-col gap-3 overflow-y-auto px-6 pb-2">
          {WALLET_OPTIONS.map((wallet) => (
            <WalletOptionRow key={wallet.id} wallet={wallet} onSelect={onClose} />
          ))}

          <div className="flex items-center justify-center gap-[5px] px-[37px] py-px">
            <p className="text-[14px] leading-5 text-[#888]">
              Haven&apos;t got a wallet?{' '}
            </p>
            <button
              type="button"
              className="text-[14px] font-semibold leading-5 text-white"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
