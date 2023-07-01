import { IAddress } from "types";

export const getAddressStringFromAddressObject = (address: IAddress) =>
  `${address.street} ${address.house}, ${address.zipCode} ${address.city.name}, ${address.country.name}`;
