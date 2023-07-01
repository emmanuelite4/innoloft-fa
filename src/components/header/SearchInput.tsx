import { SearchIcon } from "assets";

export function SearchInput() {
  return (
    <div
      className={
        "bg-white h-[27px] rounded-[4px] w-[500px] flex px-[14px] items-center"
      }
    >
      <input
        className={"bg-[transparent] flex-1 h-full outline-none"}
        placeholder={"Enter interests, keyword, company name, etc."}
      />
      <img src={SearchIcon} alt={"search"} />
    </div>
  );
}
