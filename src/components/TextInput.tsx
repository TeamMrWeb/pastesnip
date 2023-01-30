export default function TextInput({ name, placeholder }: { name: string; placeholder: string }) {
  return (
    <div className="flex items-center justify-between text-gray-1">
      <label htmlFor={name}>{name}:</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        className="input bg-green-1 w-full max-w-[200px] h-[40px] min-h-[20px] !outline-none"
      />
    </div>
  )
}
