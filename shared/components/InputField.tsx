// ============================================
// INPUT FIELD (Clean, Minimal & Animated Error)
// ============================================
interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  min,
  max,
}) => {
  return (
    <div className="mb-4 grid gap-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2.5 rounded-xl border-2
          text-gray-800 placeholder-gray-400
          focus:border-blue-400 outline-none
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {/* Animated Error Message */}
      <div
        className={`
          relative overflow-hidden transition-all duration-300
          grid
          ${error ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-sm text-red-500">{error}</p>
      </div>
    </div>
  );
};
