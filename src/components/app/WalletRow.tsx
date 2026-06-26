import Badge from '../ui/Badge'
import { cn } from '../../design-system/cn'

export interface WalletBadgeData {
  type: 'installed' | 'count' | 'label'
  text: string
}

export interface WalletData {
  id: string
  name: string
  icon?: string
  emoji?: string
  iconBg: string
  iconSize?: string
  badge: WalletBadgeData
}

export interface WalletRowProps {
  wallet: WalletData
  onSelect?: (id: string) => void
}

function WalletBadge({ badge }: { badge: WalletBadgeData }) {
  if (badge.type === 'installed') {
    return <Badge variant="success">{badge.text}</Badge>
  }

  if (badge.type === 'count') {
    return (
      <span className="flex h-[27px] w-[84px] shrink-0 items-center justify-center text-sm font-semibold uppercase text-text-subtle">
        {badge.text}
      </span>
    )
  }

  return (
    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-text-subtle">
      {badge.text}
    </span>
  )
}

export default function WalletRow({ wallet, onSelect }: WalletRowProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(wallet.id)}
      className="flex h-[51px] w-full items-center gap-ds-4 rounded-ds-pill border-[0.5px] border-border-input px-[16.5px] py-0.5 active:scale-[0.98] active:opacity-90"
    >
      <span
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-ds-md',
          wallet.iconBg,
        )}
      >
        {wallet.emoji ? (
          <span className="text-2xl leading-8">{wallet.emoji}</span>
        ) : wallet.icon ? (
          <img
            src={wallet.icon}
            alt=""
            className={cn('object-contain', wallet.iconSize ?? 'size-7')}
          />
        ) : null}
      </span>
      <span className="min-w-0 flex-1 text-left text-base font-medium leading-6 text-text-primary">
        {wallet.name}
      </span>
      <WalletBadge badge={wallet.badge} />
    </button>
  )
}
