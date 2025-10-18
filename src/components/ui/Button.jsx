import React from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold cursor-pointer select-none transition-base focus-visible:outline-none focus-visible:ring-2 ring-accent-primary/60 ring-offset-2 ring-offset-bg-main disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]";

const variantClasses = {
  primary:
    "bg-accent-primary text-white hover:bg-accent-variant active:bg-accent-primary/80 hover:shadow-medium active:shadow-light",
  secondary:
    "border border-accent-primary text-text-primary bg-transparent hover:border-accent-variant active:border-accent-primary/80",
  disabled: "bg-bg-surface border border-separator text-text-disabled",
};

function Button({
  variant = "primary",
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const finalVariant = disabled ? "disabled" : variant;
  const classes = `${baseClasses} ${variantClasses[finalVariant]} ${className}`;
  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
