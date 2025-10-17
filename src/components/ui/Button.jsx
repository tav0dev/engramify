import React from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold cursor-pointer select-none transition-base focus-visible:outline-none focus-visible:ring-2 ring-action/60 ring-offset-2 ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

const variantClasses = {
  primary:
    "bg-primary text-white hover:bg-action active:bg-action/80 hover:shadow-lg active:shadow shadow-[0_8px_20px_-10px_rgba(135,43,151,0.35)]",
  secondary:
    "border border-primary text-white bg-transparent hover:border-action active:border-primary/80",
  disabled: "bg-neutral-800 text-neutral-400 cursor-not-allowed opacity-60",
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
