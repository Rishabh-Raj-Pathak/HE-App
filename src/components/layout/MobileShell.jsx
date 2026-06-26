import ScreenShell from '../ui/ScreenShell'

export default function MobileShell({ children, className }) {
  return <ScreenShell className={className}>{children}</ScreenShell>
}
