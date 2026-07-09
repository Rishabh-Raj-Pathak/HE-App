import { profileAssets } from '../../data/profile'

export default function ProfileMenuRow({
  icon,
  title,
  description,
  divider = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-16 w-full items-center gap-[14px] px-5 text-left transition active:bg-white/[0.02] ${
        divider ? 'border-t-[1.199px] border-white/[0.05]' : ''
      }`}
    >
      <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[11px] border-[1.199px] border-white/[0.06] bg-white/[0.05]">
        <img src={icon} alt="" className="size-4" />
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <span className="truncate text-[14px] font-medium leading-[16.8px] tracking-[-0.14px] text-text-highlight">
          {title}
        </span>
        {description ? (
          <span className="truncate text-[11.5px] font-semibold leading-[14.95px] text-text-disabled">
            {description}
          </span>
        ) : null}
      </span>

      <img
        src={profileAssets.iconChevronRight}
        alt=""
        className="size-[14px] shrink-0"
      />
    </button>
  )
}
