import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  outlineColor?: string;
  shadow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
}

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600",
  ghost:
    "bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  outline:
    "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 focus:ring-indigo-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
};

const sizes = {
  lg: "px-5 py-2.5 text-base",
  md: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-xs",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  shadow = false,
  outlineColor,
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "outline" && outlineColor
      ? cn(variants[variant], outlineColor)
      : variants[variant];

  return (
    <button
      className={cn(
        baseStyles,
        variantClass,
        sizes[size],
        fullWidth && "w-full",
        shadow && "shadow-md hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={cn(children && "mr-2")}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={cn(children && "ml-2")}>{icon}</span>
      )}
    </button>
  );
}
