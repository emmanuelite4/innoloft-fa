import { Header } from "components/index.ts";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className={"bg-dark-900"}>
      <Header />
      <div className={"px-2.5 py-5"}>
        <Outlet />
      </div>
    </div>
  );
}
