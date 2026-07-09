import Card from '../ui/Card'

export default function DeleteAccountButton({ onClick }) {
  return (
    <Card
      variant="elevated"
      padding="none"
      className="border-[0.5px] border-danger-default"
    >
      <button
        type="button"
        onClick={onClick}
        className="flex h-16 w-full items-center justify-center transition active:bg-white/[0.02]"
      >
        <span className="text-[14px] font-semibold leading-[16.8px] tracking-[-0.14px] text-danger-default">
          Delete Account
        </span>
      </button>
    </Card>
  )
}
