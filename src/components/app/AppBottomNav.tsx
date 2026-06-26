import BottomNav from '../ui/BottomNav'

export interface AppNavItem {
  id: string
  label?: string
  iconSrc: string
  active?: boolean
}

export interface AppBottomNavProps {
  items: AppNavItem[]
}

export default function AppBottomNav({ items }: AppBottomNavProps) {
  return (
    <BottomNav
      items={items.map((item) => ({
        id: item.id,
        label: item.label,
        active: item.active,
        icon: <img src={item.iconSrc} alt="" className="size-6" />,
      }))}
    />
  )
}
