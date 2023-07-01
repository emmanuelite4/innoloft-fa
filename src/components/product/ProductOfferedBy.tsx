import { IProductCompany, IProductUser } from "types";
import { Avatar } from "components/avatar";
import { LocationIcon } from "assets";
import { getAddressStringFromAddressObject } from "utils";

interface ProductOfferedByProps {
  company: IProductCompany;
  user: IProductUser;
}

interface LocationProps {
  address: string;
}
function Location(props: LocationProps) {
  const { address } = props;
  return (
    <div>
      <div className={"flex gap-[5px]"}>
        <div>
          <img src={LocationIcon} alt={"location"} />
        </div>
        <span className={"text-dark-300 block max-w-[160px] text-[14px]"}>
          {address}
        </span>
      </div>
    </div>
  );
}

export function ProductOfferedBy(props: ProductOfferedByProps) {
  const { user, company } = props;
  const { firstName, lastName, profilePicture } = user;
  const { logo, name, address } = company;

  return (
    <div className={"py-5 px-2.5 md:px-5"}>
      <h6>Offered by</h6>
      <img src={logo} alt={name} className={"my-5 max-w-[300px]"} />

      <div className={"flex items-center gap-2.5 mb-[30px]"}>
        <Avatar width={60} height={60} src={profilePicture} />
        <div>
          <h6
            className={"text-dark-200 text-[14px] font-semibold leading-[20px]"}
          >
            {firstName} {lastName}
          </h6>
          <p className={"text-dark-300 text-[14px] leading-[20px]"}>{name}</p>
        </div>
      </div>
      <Location address={getAddressStringFromAddressObject(address)} />
    </div>
  );
}
