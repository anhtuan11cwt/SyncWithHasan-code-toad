import type { ChangeEvent, ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface InputFieldProps {
  disabled?: boolean;
  error?: string;
  icon?: ReactNode;
  info?: string;
  isTextArea?: boolean;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  type?: string;
  value?: string;
}

export function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  info,
  disabled = false,
  isTextArea = false,
  rows = 4,
  icon,
}: InputFieldProps) {
  const inputStyles = cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm transition-colors placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500",
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 dark:border-gray-700",
    disabled && "cursor-not-allowed bg-gray-100 dark:bg-gray-800",
    icon && "pl-10",
  );

  return (
    <div className="space-y-1.5">
      <label
        className="block font-medium text-gray-700 text-sm dark:text-gray-300"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            {icon}
          </span>
        )}
        {isTextArea ? (
          <textarea
            className={inputStyles}
            disabled={disabled}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            value={value}
          />
        ) : (
          <input
            className={inputStyles}
            disabled={disabled}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        )}
      </div>
      {info && !error && (
        <p className="text-gray-500 text-xs dark:text-gray-400">{info}</p>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
