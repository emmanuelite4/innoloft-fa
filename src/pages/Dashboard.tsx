import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div>
      <h1 className={"text-[36px] font-bold"}>Welcome to Innoloft Dashboard</h1>
      <Link to={"/product/6781"}>Go to product 6781</Link>
    </div>
  );
}
