import Chip from '../ui/Chip'

export default function CategoryChips({ categories, activeId, onChange }) {
  return (
    <div className="min-w-0">
      <div className="hide-scrollbar -mx-0.5 overflow-x-auto">
        <div className="flex gap-2">
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
  )
}
