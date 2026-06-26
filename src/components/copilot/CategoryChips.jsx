import Chip from '../ui/Chip'

export default function CategoryChips({ categories, activeId, onChange }) {
  return (
    <div className="hide-scrollbar min-w-0 flex-1 overflow-x-auto px-2">
      <div className="flex gap-[7px] py-[3px]">
        {categories.map((cat) => (
          <Chip
            key={cat.id}
            variant="amber"
            selected={cat.id === activeId}
            onClick={() => onChange(cat.id)}
          >
            {cat.label}
          </Chip>
        ))}
      </div>
    </div>
  )
}
