import { profileAssets } from '../../data/profile'

export default function ProfileActions({ onDeposit, onInvite }) {
  return (
    <div className="flex h-10 items-start gap-[10px]">
      <button
        type="button"
        onClick={onDeposit}
        style={{
          backgroundImage:
            'linear-gradient(175.17deg, rgb(19, 15, 7) 8.49%, rgb(9, 6, 4) 91.51%)',
        }}
        className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border-[1.199px] border-[rgba(181,134,74,0.28)] shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_5px_rgba(255,255,255,0.04),0_0_16px_rgba(181,134,74,0.1),inset_0_1px_0_rgba(220,195,149,0.1)] transition active:scale-[0.98]"
      >
        <img src={profileAssets.iconPlus} alt="" className="size-[15px]" />
        <span className="text-[13px] font-semibold leading-[19.5px] tracking-[-0.13px] text-gold-default">
          Deposit
        </span>
      </button>

      <button
        type="button"
        onClick={onInvite}
        style={{
          backgroundImage:
            'linear-gradient(175.17deg, rgb(20, 20, 20) 8.49%, rgb(10, 10, 10) 91.51%)',
        }}
        className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border-[1.199px] border-white/[0.07] shadow-[3px_3px_8px_rgba(0,0,0,0.55),-2px_-2px_5px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)] transition active:scale-[0.98]"
      >
        <img src={profileAssets.iconGift} alt="" className="size-[14px]" />
        <span className="text-[13px] font-semibold leading-[19.5px] tracking-[-0.13px] text-text-highlight">
          Invite Friends
        </span>
      </button>
    </div>
  )
}
