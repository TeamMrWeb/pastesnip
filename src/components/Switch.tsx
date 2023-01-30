export default function Switch({
  getter,
  setter
}: {
  getter: boolean
  setter: (value: boolean) => void
}) {
  return (
    <label className="w-full max-w-[160px] cursor-pointer label !p-0">
      <span className="label-text text-gray-1">Show Highlight</span>
      <input
        type="checkbox"
        className="toggle toggle-accent !border-green-5 !bg-green-5"
        checked={getter}
        onChange={() => setter(!getter)}
      />
    </label>
  )
}
