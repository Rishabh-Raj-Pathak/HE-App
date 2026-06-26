import { useCallback, useEffect, useRef, useState } from 'react'
import Chip from '../ui/Chip'

function ScrollFade({ side }) {
  const isLeft = side === 'left'

  return (
    <div
      aria-hidden
      className={[
        'pointer-events-none absolute top-0 z-10 h-full w-10',
        isLeft ? 'left-0' : 'right-0',
      ].join(' ')}
    >
      <div
        className={[
          'h-full w-full backdrop-blur-[3px]',
          isLeft
            ? 'bg-gradient-to-r from-[#090909] via-[#090909]/70 to-transparent'
            : 'bg-gradient-to-l from-[#090909] via-[#090909]/70 to-transparent',
        ].join(' ')}
      />
    </div>
  )
}

export default function CategoryChips({ categories, activeId, onChange }) {
  const scrollRef = useRef(null)
  const [fadeLeft, setFadeLeft] = useState(false)
  const [fadeRight, setFadeRight] = useState(false)

  const updateFades = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    setFadeLeft(scrollLeft > 2)
    setFadeRight(maxScroll > 2 && scrollLeft < maxScroll - 2)
  }, [])

  useEffect(() => {
    updateFades()
    const el = scrollRef.current
    if (!el) return

    el.addEventListener('scroll', updateFades, { passive: true })
    const observer = new ResizeObserver(updateFades)
    observer.observe(el)

    return () => {
      el.removeEventListener('scroll', updateFades)
      observer.disconnect()
    }
  }, [categories, updateFades])

  return (
    <div className="min-w-0">
      <p className="mb-1 px-0.5 text-[9px] font-semibold uppercase leading-[12px] tracking-[0.06em] text-text-disabled">
        Category
      </p>
      <div className="relative -mx-0.5">
        {fadeLeft ? <ScrollFade side="left" /> : null}
        {fadeRight ? <ScrollFade side="right" /> : null}
        <div ref={scrollRef} className="hide-scrollbar overflow-x-auto">
          <div className="flex gap-2 pr-2">
            {categories.map((cat) => (
              <Chip
                key={cat.id}
                variant="neutral"
                selected={cat.id === activeId}
                onClick={() => onChange(cat.id)}
                className="h-[33px] rounded-[20px]"
              >
                {cat.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
