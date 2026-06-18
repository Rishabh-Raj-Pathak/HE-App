import { assets } from '../../data/tradeSignals'

export default function SharedHeader({ onConnectWallet }) {
  return (
    <header className="flex h-[58px] items-center justify-between px-[20px]">
      <div className="flex items-center">
        <div className="flex h-[42px] w-9 items-center justify-center rounded-[21px]">
          <img src={assets.iconAiScience} alt="" className="size-6" />
        </div>
        <h1 className="text-[17px] font-bold leading-[25.5px] tracking-[-0.425px] text-he-primary">
          AI Copilot
        </h1>
      </div>
      <button
        type="button"
        onClick={onConnectWallet}
        className="rounded-lg border border-white/[0.14] bg-white px-[9px] py-[5px] text-[12px] font-medium text-black shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
      >
        Connect wallet
      </button>
    </header>
  )
}
