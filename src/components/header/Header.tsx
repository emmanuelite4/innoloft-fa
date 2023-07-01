import { Logo } from "assets";
import { SearchInput } from "components/header/SearchInput.tsx";
import { HeaderActions } from "components/header/Actions.tsx";

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
      <HeaderActions />
    </div>
  );
}
