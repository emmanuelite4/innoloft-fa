import { Logo } from "assets";
import { SearchInput } from "./SearchInput";
import { HeaderActions } from "./Actions";

export function Header() {
  return (
    <div
      className={
        "bg-primary px-[14px] py-[20px] flex items-center justify-between"
      }
    >
      <img src={Logo} alt={"InnoLoft"} className={"w-[150px]"} />
      <div className={"hidden md:block"}>
        <SearchInput />
      </div>
      <div className={"hidden md:block"}>
        <HeaderActions />
      </div>
    </div>
  );
}
