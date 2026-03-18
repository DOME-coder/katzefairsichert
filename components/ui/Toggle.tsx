'use client'

interface ToggleProps {
  options: [string, string]
  value: string
  onChange: (value: string) => void
}

export default function Toggle({ options, value, onChange }: ToggleProps) {
  return (
    <div className="inline-flex bg-brand-grayLight rounded-lg p-1">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-6 py-2 rounded-md font-heading font-semibold text-sm transition-all duration-200 ${
            value === option
              ? 'bg-brand-accent text-white shadow-sm'
              : 'text-brand-grayMid hover:text-brand-text'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
