import {
  IProduct,
  IProductBusinessModel,
  IProductCategory,
  IProductTRL,
} from "types";
import { Title } from "components/typography";
import { OFFERS_LIST } from "constant";
import { Container } from "components/layout";
import { Formik } from "formik";
import { useUpdateProductByIdMutation } from "redux";
import { ReactNode } from "react";
import { Input, InputClasses } from "components/input";
import { Button } from "components/button";

interface OfferBlockProps {
  icon: string;
  name: string;
  children?: ReactNode;
}

type IOffersPayload = {
  businessModels: IProductBusinessModel[];
  trl: IProductTRL;
  categories: IProductCategory[];
};
function OfferEditBlock(props: OfferBlockProps) {
  const { icon, name, children } = props;
  return (
    <div className={"flex gap-1.5"}>
      <div>
        <img src={icon} alt={name} width={24} height={24} />
      </div>
      <div>
        <p className={"text-dark-200 text-[16px] leading-[24px]"}>{name}</p>
        <div className={"flex gap-[5px] flex-wrap mt-2.5"}>{children}</div>
      </div>
    </div>
  );
}

export function ProductOfferDetailsEdit(
  props: IProduct & { trlList?: IProductTRL[] }
) {
  const { businessModels, trl, id, categories, trlList = [] } = props;
  const [mutate] = useUpdateProductByIdMutation();

  const handleSubmit = async (values: IOffersPayload) => {
    try {
      await mutate({ ...values, id }).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Title>Offer details</Title>
      <Formik
        initialValues={{
          businessModels,
          trl,
          categories,
        }}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-5 mt-5"}>
              <OfferEditBlock
                icon={OFFERS_LIST[0].icon}
                name={OFFERS_LIST[0].name}
              >
                {formik.values.categories.map((category) => (
                  <Input
                    key={category.id}
                    value={category.name}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "categories",
                        formik.values.categories.map((item) => {
                          if (item.id === category.id) {
                            return { ...item, name: e.target.value };
                          }
                          return item;
                        })
                      )
                    }
                  />
                ))}
              </OfferEditBlock>
              <OfferEditBlock
                icon={OFFERS_LIST[1].icon}
                name={OFFERS_LIST[1].name}
              >
                {formik.values.businessModels.map((model) => (
                  <Input
                    key={model.id}
                    value={model.name}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "categories",
                        formik.values.businessModels.map((item) => {
                          if (item.id === model.id) {
                            return { ...item, name: e.target.value };
                          }
                          return item;
                        })
                      )
                    }
                  />
                ))}
              </OfferEditBlock>
              <OfferEditBlock
                icon={OFFERS_LIST[3].icon}
                name={OFFERS_LIST[3].name}
              >
                <select
                  className={InputClasses}
                  value={formik.values.trl.id}
                  onChange={(e) => {
                    const value = e.target.value;
                    formik.setFieldValue("trl", {
                      id: value,
                      name: trlList.find((item) => item.id === value)?.name,
                    });
                  }}
                >
                  {trlList.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </OfferEditBlock>
            </div>
            <div className={"flex py-5 justify-end"}>
              <Button>Save</Button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
}
