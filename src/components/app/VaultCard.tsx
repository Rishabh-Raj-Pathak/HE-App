import type { ReactNode } from 'react'
import { cn } from '../../design-system/cn'

export interface VaultCardProps {
  title: string
  subtitle?: string
  apr?: string
  tvl?: string
  users?: string
  trailing?: ReactNode
  className?: string
}

export default function VaultCard({
  title,
  subtitle,
  apr,
  tvl,
  users,
  trailing,
  className,
}: VaultCardProps) {
  return (
    <article
      className={cn(
        'relative overflow-hidden rounded-[20px] p-4 shadow-ds-vault-glow',
        className,
      )}
      style={{ backgroundImage: 'var(--gradient-gold-vault)' }}
    >
      <div className="mb-3">
        <p className="text-sm font-medium text-gold-light">{title}</p>
        {subtitle ? (
          <p className="text-[8px] uppercase tracking-[0.6px] text-text-slate">{subtitle}</p>
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        {apr ? (
          <div>
            <p className="text-text-slate">APR</p>
            <p className="font-bold text-gold-mid">{apr}</p>
          </div>
        ) : null}
        {tvl ? (
          <div>
            <p className="text-text-slate">TVL</p>
            <p className="font-bold text-text-zinc">{tvl}</p>
          </div>
        ) : null}
        {users ? (
          <div>
            <p className="text-text-slate">Users</p>
            <p className="font-bold text-gold-mid">{users}</p>
          </div>
        ) : null}
      </div>
      {trailing}
    </article>
  )
}
