import { ClockIcon, DevIcon, InvestorIcon, StrategyIcon } from "assets";
import { OfferKeyEnums } from "types";

export const OFFERS_LIST = [
  { name: "Technology", key: OfferKeyEnums.TECHNOLOGY, icon: DevIcon },
  {
    name: "Business Model",
    key: OfferKeyEnums.BUSINESS_MODELS,
    icon: StrategyIcon,
  },
  {
    name: "Implementation Time",
    key: OfferKeyEnums.IMPLEMENTATION_TIME,
    icon: ClockIcon,
  },
  { name: "Cost", key: OfferKeyEnums.COST, icon: InvestorIcon },
];
