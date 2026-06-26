import Chip from '../ui/Chip'

export default function CategoryChips({ categories, activeId, onChange }) {
  return (
    <div className="hide-scrollbar min-w-0 flex-1 overflow-x-auto px-2">
      <div className="flex gap-2 py-[3px]">
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
  )
}
