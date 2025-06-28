import React from "react";
import { Link } from "react-router-dom";

function Button({ children, to, className }) {
  return (
    <Link to={to} className={`explore-btn text-nowrap ${className}`}>
      {children}
    </Link>
  );
}

export default React.memo(Button);
