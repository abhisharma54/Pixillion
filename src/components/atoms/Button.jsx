import React from "react";
import { Link } from "react-router-dom";

function Button({ to, children, className = "", ...props }) {
  if (to) {
    return (
      <Link
        to={to}
        className={`relative flex justify-center items-center gap-1 min-w-min w-35 px-5 py-2 text-ink/90 font-semibold shadow-xl rounded-full mt-10 text-lg sm:text-xl border-2 border-t-default border-r-default border-l-muted/60 border-b-muted backdrop-blur-sm overflow-hidden z-1 hover:text-white after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:bg-ink/80 after:-z-10 after:transition-width after:duration-300 after:ease-standard hover:after:w-full active:scale-95 ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`relative flex justify-center items-center gap-1 min-w-min w-35 px-5 py-2 text-ink/90 font-semibold shadow-xl rounded-full mt-10 text-lg sm:text-xl active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
