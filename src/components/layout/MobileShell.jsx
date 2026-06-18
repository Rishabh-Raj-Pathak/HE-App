export default function MobileShell({ children }) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-[394px] flex-col bg-black">
      {children}
    </div>
  )
}
