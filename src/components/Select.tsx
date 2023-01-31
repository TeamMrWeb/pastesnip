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
    <div className="w-full flex items-center justify-between text-gray-1 transition-all !duration-0">
      <label htmlFor="select">{name}:</label>
      <select
        id={name}
        name={name}
        className="select select-bordered w-full max-w-[200px] h-[40px] min-h-[20px] bg-green-1 !outline-none focus:border-green-4 transition-all focus:!duration-0"
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
