import { Outlet } from "react-router-dom";
import { Navigation } from "../index";

function Layout() {
  return (
    <div className="w-full h-full">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
