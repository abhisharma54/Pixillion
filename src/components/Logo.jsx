import React from "react";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link
      to="/"
      className={`font_bebas_neue text-[var(--text-dark)] ${className}`}
    >
      PIXILLION
    </Link>
  );
}

export default React.memo(Logo);
