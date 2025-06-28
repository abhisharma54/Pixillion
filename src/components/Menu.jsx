import React from "react";
import "../css/menu.css";

function Menu({ menu }) {
  return (
    <div className="menu">
      <span className={`hamburger hamburger-top ${menu ? "open" : ""}`}></span>
      <span
        className={`hamburger hamburger-middle ${menu ? "open" : ""}`}
      ></span>
      <span
        className={`hamburger hamburger-bottom ${menu ? "open" : ""}`}
      ></span>
    </div>
  );
}

export default React.memo(Menu);
