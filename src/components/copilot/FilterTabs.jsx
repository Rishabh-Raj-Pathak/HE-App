import { useState } from 'react'
import { FILTER_TABS } from '../../data/tradeSignals'

const TAB_WIDTHS = {
  All: 49,
  Trending: 85,
  'HIP-3': 65,
  Bluechip: 84,
  Spotlight: 84,
}

export default function FilterTabs() {
  const [active, setActive] = useState('All')

  return (
    <div className="hide-scrollbar overflow-x-auto pl-3">
      <div className="flex gap-[7px]">
        {FILTER_TABS.map((tab) => {
          const isActive = tab === active
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              style={{ width: TAB_WIDTHS[tab] }}
              className={[
                'h-[33px] shrink-0 rounded-[20px] text-[12.5px] leading-[18.75px] text-white',
                isActive
                  ? 'border-[0.83px] border-solid border-[#f2b500] bg-gradient-to-b from-[rgba(242,181,0,0.5)] to-[rgba(34,255,255,0.5)] font-semibold'
                  : 'border-[0.3px] border-solid border-white font-normal',
              ].join(' ')}
            >
              {tab}
            </button>
          )
        })}
      </div>
    </div>
  )
}
