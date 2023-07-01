import { SearchInput } from "./SearchInput";
import { HeaderActions } from "./Actions";
import { useSelector } from "react-redux";
import { selectLayoutConfig } from "redux";

export function Header() {
  const config = useSelector(selectLayoutConfig);
  return (
    <div
      className={"px-[14px] py-[20px] flex items-center justify-between"}
      style={{ background: config.mainColor }}
    >
      <img src={config.logo} alt={"InnoLoft"} className={"w-[150px]"} />
      <div className={"hidden md:block"}>
        <SearchInput />
      </div>
      <div className={"hidden md:block"}>
        <HeaderActions />
      </div>
    </div>
  );
}
