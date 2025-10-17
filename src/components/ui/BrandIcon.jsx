import React from "react";

function BrandIcon({ icon, title = icon.title, className = "", size = 20 }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
   >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}

export default BrandIcon;