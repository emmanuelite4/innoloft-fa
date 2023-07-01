import {
  AccordionDownLightIcon,
  MessengerIcon,
  NotificationsIcon,
} from "assets";
import { Avatar } from "components/avatar";

export function HeaderActions() {
  return (
    <div className={"flex gap-[20px] cursor-pointer"}>
      <img src={MessengerIcon} alt={"messenger"} />
      <div className={"flex gap-[10px]"}>
        <span className={"text-white"}>EN</span>
        <img src={AccordionDownLightIcon} alt={"notification"} />
      </div>
      <img src={NotificationsIcon} alt={"notification"} />
      <div className={"flex gap-[10px] items-center"}>
        <Avatar width={25} height={25} src={""} />
        <img src={AccordionDownLightIcon} alt={"notification"} />
      </div>
    </div>
  );
}
