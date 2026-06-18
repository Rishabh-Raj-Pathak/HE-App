function WalletBadge({ badge }) {
  if (badge.type === 'installed') {
    return (
      <span className="flex h-[27px] w-[84px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-[#4ade80] text-[10px] font-semibold uppercase tracking-[0.5px] text-white">
        {badge.text}
      </span>
    )
  }

  if (badge.type === 'count') {
    return (
      <span className="flex h-[27px] w-[84px] shrink-0 items-center justify-center text-[14px] font-semibold uppercase text-[#888]">
        {badge.text}
      </span>
    )
  }

  return (
    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.5px] text-[#888]">
      {badge.text}
    </span>
  )
}

export default function WalletOptionRow({ wallet, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(wallet.id)}
      className="flex h-[51px] w-full items-center gap-4 rounded-[80px] border-[0.5px] border-white/50 px-[16.5px] py-0.5 active:scale-[0.98] active:opacity-90"
    >
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-[14px] ${wallet.iconBg}`}
      >
        {wallet.emoji ? (
          <span className="text-[24px] leading-8">{wallet.emoji}</span>
        ) : (
          <img
            src={wallet.icon}
            alt=""
            className={`object-contain ${wallet.iconSize ?? 'size-7'}`}
          />
        )}
      </span>
      <span className="min-w-0 flex-1 text-left text-[16px] font-medium leading-6 text-white">
        {wallet.name}
      </span>
      <WalletBadge badge={wallet.badge} />
    </button>
  )
}
