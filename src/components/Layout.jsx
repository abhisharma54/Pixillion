import { Outlet } from "react-router-dom";
import { Header } from "../index";

function Layout() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
