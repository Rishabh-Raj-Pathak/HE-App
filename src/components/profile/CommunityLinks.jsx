import { SOCIAL_LINKS } from '../../data/profile'

export default function CommunityLinks() {
  return (
    <section className="flex flex-col">
      <p className="pb-2 pl-5 text-[10px] font-semibold uppercase leading-[15px] tracking-[0.7px] text-text-disabled">
        Community
      </p>

      <div className="flex items-start justify-between">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-col items-center gap-[6px] pt-[2px]"
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(160deg, rgb(14, 14, 14) 8.49%, rgb(6, 6, 6) 91.51%)',
              }}
              className="flex size-11 items-center justify-center rounded-[13px] shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.5)] transition active:scale-95"
            >
              <img
                src={social.icon}
                alt=""
                style={{ width: social.iconSize, height: social.iconSize }}
              />
            </span>
            <span className="text-center text-[10px] font-semibold leading-[15px] tracking-[0.2px] text-text-disabled">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
