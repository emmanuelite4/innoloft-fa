import { useGetProductByIdQuery, useGetTRLQuery } from "redux";
import { useParams } from "react-router-dom";
import {
  Container,
  ProductImage,
  ProductOfferedBy,
  ProductTitleDescriptionEdit,
} from "components";

export function ProductEdit() {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(productId!, {
    skip: !productId,
  });

  const trlQuery = useGetTRLQuery();

  if (error) return <div>Sorry, an error has occurred</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <div className={"my-5"}>
        <Container noPadding>
          <div className={"flex flex-col md:flex-row"}>
            <div className={"md:border-r md:border-dark-500"}>
              <ProductImage src={data.picture} name={data.name} />
              <ProductTitleDescriptionEdit
                id={productId}
                name={data.name}
                description={data.description}
              />
            </div>
            <div className={"md:min-w-[382px]"}>
              <ProductOfferedBy user={data.user} company={data.company} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
