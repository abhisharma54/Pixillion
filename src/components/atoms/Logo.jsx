import React from "react";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to="/" className={`font-semibold text-ink ${className}`}>
      PIXILLION
    </Link>
  );
}

export default React.memo(Logo);
