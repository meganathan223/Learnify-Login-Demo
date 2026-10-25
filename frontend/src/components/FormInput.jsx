export default function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm
          text-slate-900 outline-none transition
          placeholder:text-slate-400
          focus:ring-4
          ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
          }`}
      />

      {error && (
        <p id={`${name}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
