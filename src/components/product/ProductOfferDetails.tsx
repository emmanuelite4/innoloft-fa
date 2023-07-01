import { ClockIcon, DevIcon, InvestorIcon, StrategyIcon } from "assets";
import { IProduct } from "types";
import { Title } from "components/typography";
import { Container } from "components/layout";

enum OfferKeyEnums {
  TECHNOLOGY = "technology",
  BUSINESS_MODELS = "businessModels",
  IMPLEMENTATION_TIME = "implementationTime",
  COST = "cost",
}

const OFFERS = [
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

function Tag(props: { label: string }) {
  return (
    <div className={"bg-dark-500 px-[14px] py-[5px] rounded-[20px]"}>
      <span className={"text-dark-200 text-[14px] leading-[14px]"}>
        {props.label}
      </span>
    </div>
  );
}

interface OfferBlockProps {
  icon: string;
  name: string;
  tags: string[];
}

function OfferBlock({ icon, name, tags }: OfferBlockProps) {
  return (
    <div className={"flex gap-1.5"}>
      <div>
        <img src={icon} alt={name} width={24} height={24} />
      </div>
      <div>
        <p className={"text-dark-200 text-[16px] leading-[24px]"}>{name}</p>
        <div className={"flex gap-[5px] mt-2.5"}>
          {tags.map((item) => (
            <Tag label={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductOfferDetails(props: IProduct) {
  const { businessModels, investmentEffort, trl, categories } = props;

  const OFFER_TAGS = {
    [OfferKeyEnums.BUSINESS_MODELS]: businessModels.map((item) => item.name),
    [OfferKeyEnums.COST]: [investmentEffort],
    [OfferKeyEnums.IMPLEMENTATION_TIME]: [trl.name],
    [OfferKeyEnums.TECHNOLOGY]: categories.map((item) => item.name),
  };

  return (
    <Container>
      <Title>Offer details</Title>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-5 mt-5"}>
        {OFFERS.map((item) => (
          <OfferBlock
            icon={item.icon}
            name={item.name}
            tags={OFFER_TAGS[item.key]}
            key={item.key}
          />
        ))}
      </div>
    </Container>
  );
}
