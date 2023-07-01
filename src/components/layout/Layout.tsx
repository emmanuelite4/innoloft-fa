import { Header } from "components/index.ts";
import { Outlet } from "react-router-dom";
import { useGetConfigurationQuery } from "redux";

export function Layout() {
  const { isLoading } = useGetConfigurationQuery(process.env.APP_ID || 1);

  if (isLoading)
    return (
      <div
        className={
          "h-screen flex items-center justify-center bg-primary text-white"
        }
      >
        App loading...
      </div>
    );
  return (
    <div className={"bg-dark-900"}>
      <Header />
      <div className={"px-2.5 py-5 max-w-[1130px] mx-auto"}>
        <Outlet />
      </div>
    </div>
  );
}
