export default function CategoryChips({ categories, activeId, onChange }) {
  return (
    <div className="hide-scrollbar min-w-0 flex-1 overflow-x-auto">
      <div className="flex gap-[7px]">
        {categories.map((cat) => {
          const isActive = cat.id === activeId
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onChange(cat.id)}
              className={[
                'h-[33px] shrink-0 rounded-[20px] px-3 text-[12.5px] leading-[18.75px] text-white',
                isActive
                  ? 'border-[0.83px] border-solid border-[#f2b500] bg-gradient-to-b from-[rgba(242,181,0,0.5)] to-[rgba(34,255,255,0.5)] font-semibold'
                  : 'border-[0.3px] border-solid border-white font-normal',
              ].join(' ')}
            >
              <span className="whitespace-nowrap">{cat.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
