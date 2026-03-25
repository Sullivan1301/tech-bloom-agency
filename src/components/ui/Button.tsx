import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

    const variantStyles = {
      primary:
        "bg-red text-white hover:bg-red-hover hover:shadow-lg",
      secondary:
        "bg-blue text-white hover:bg-navy hover:shadow-lg",
      outline:
        "border-2 border-blue text-blue hover:bg-blue hover:text-white",
      ghost:
        "text-navy hover:bg-gray/10",
    };

    const sizeStyles = {
      sm: "px-6 py-2.5 text-xs uppercase tracking-widest",
      md: "px-8 py-4 text-sm uppercase tracking-widest",
      lg: "px-10 py-5 text-base uppercase tracking-wider",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
