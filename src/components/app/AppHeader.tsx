import Button from '../ui/Button'
import Header from '../ui/Header'

export interface AppHeaderProps {
  title: string
  icon?: string
  connectLabel?: string
  onConnectWallet?: () => void
}

export default function AppHeader({
  title,
  icon,
  connectLabel = 'Connect wallet',
  onConnectWallet,
}: AppHeaderProps) {
  return (
    <Header
      leading={
        icon ? (
          <div className="flex h-[42px] w-9 items-center justify-center rounded-ds-xl">
            <img src={icon} alt="" className="size-6" />
          </div>
        ) : undefined
      }
      title={title}
      trailing={
        onConnectWallet ? (
          <Button
            variant="primary"
            size="sm"
            onClick={onConnectWallet}
            className="rounded-lg px-[9px] py-[5px] text-xs"
          >
            {connectLabel}
          </Button>
        ) : undefined
      }
    />
  )
}
