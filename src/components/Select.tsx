export default function Select({
  name,
  firstValue,
  options,
  setValue
}: {
  name: string
  firstValue: string
  options: string[]
  setValue: (value: string) => void
}) {
  return (
    <div className="flex items-center justify-between text-gray-1">
      <label htmlFor="select">{name}:</label>
      <select
        id={name}
        name={name}
        className="select select-bordered w-full max-w-[200px] h-[40px] min-h-[20px] bg-green-1 !outline-none"
        onChange={e => setValue(e.target.value)}
      >
        <option disabled selected>
          {firstValue}
        </option>
        {options?.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}
