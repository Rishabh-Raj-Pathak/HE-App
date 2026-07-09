import Card from '../ui/Card'
import ProfileMenuRow from './ProfileMenuRow'

export default function MenuSection({ label, items, onSelect }) {
  return (
    <section className="flex flex-col">
      {label ? (
        <p className="pb-2 pl-5 text-[10px] font-semibold uppercase leading-[15px] tracking-[0.7px] text-text-disabled">
          {label}
        </p>
      ) : null}

      <Card variant="elevated" padding="none">
        {items.map((item, index) => (
          <ProfileMenuRow
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            divider={index > 0}
            onClick={() => onSelect?.(item.id)}
          />
        ))}
      </Card>
    </section>
  )
}
