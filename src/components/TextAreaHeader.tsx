export default function TextAreaHeader({
  showHighLight,
  setShowHighLight
}: {
  showHighLight: boolean
  setShowHighLight: (value: boolean) => void
}) {
  return (
    <header>
      <div className="form-control w-40">
        <label className="cursor-pointer label">
          <span className="label-text">Show Highlight</span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={showHighLight}
            onChange={() => setShowHighLight(!showHighLight)}
          />
        </label>
      </div>
    </header>
  )
}
