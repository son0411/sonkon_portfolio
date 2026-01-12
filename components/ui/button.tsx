import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", className = "", type = "button", children, ...props },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

export { Button };
