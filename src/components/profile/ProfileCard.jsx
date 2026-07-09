import { useEffect, useState } from 'react'
import Card from '../ui/Card'
import { PROFILE, profileAssets } from '../../data/profile'

function StatColumn({ label, value, tone, showDivider }) {
  return (
    <div
      className={`flex flex-1 flex-col items-center gap-[3px] pt-1 ${
        showDivider ? 'border-r border-white/[0.06]' : ''
      }`}
    >
      <p
        className={`text-[14px] font-bold leading-[21px] tracking-[-0.28px] ${
          tone === 'success' ? 'text-success-default' : 'text-text-highlight'
        }`}
      >
        {value}
      </p>
      <p className="text-[10px] font-normal leading-[15px] tracking-[0.3px] text-text-disabled">
        {label}
      </p>
    </div>
  )
}

export default function ProfileCard() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(PROFILE.fullAddress)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Card variant="elevated" padding="none">
      <div className="flex flex-col items-center px-5 py-5">
        <div className="relative size-16 rounded-full border-[1.199px] border-[rgba(181,134,74,0.22)] bg-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <img
            src={profileAssets.iconAvatar}
            alt=""
            className="absolute left-1/2 top-1/2 size-[26px] -translate-x-1/2 -translate-y-1/2"
          />
          {PROFILE.online ? (
            <span className="absolute bottom-[4px] right-[4px] size-3 rounded-full border-[1.199px] border-bg-card-dark bg-success-default" />
          ) : null}
        </div>

        <div className="mt-[14px] flex h-9 items-center gap-2 rounded-[10px] bg-white/[0.04] px-[14px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <p className="text-[13.5px] font-semibold leading-[20.25px] tracking-[-0.135px] text-text-highlight">
            {PROFILE.address}
          </p>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? 'Address copied' : 'Copy wallet address'}
            className="flex size-[18px] shrink-0 items-center justify-center transition active:scale-95"
          >
            <img
              src={profileAssets.iconCopy}
              alt=""
              className={`size-[14px] transition-opacity ${copied ? 'opacity-100' : 'opacity-70'}`}
            />
          </button>
        </div>

        <div className="mt-[14px] flex w-full items-start">
          {PROFILE.stats.map((stat, index) => (
            <StatColumn
              key={stat.id}
              {...stat}
              showDivider={index < PROFILE.stats.length - 1}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
