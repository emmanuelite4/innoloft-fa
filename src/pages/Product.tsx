import { useGetProductByIdQuery } from "redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  ProductImage,
  ProductNameDescription,
  ProductOfferDetails,
  ProductOfferedBy,
  ProductVideo,
} from "components";

export function Product() {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(productId!, {
    skip: !productId,
  });

  if (error) return <div>Sorry, an error has occurred</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  console.log(data);
  return (
    <div>
      <Button>Edit</Button>
      <div className={"my-5"}>
        <Container noPadding>
          <div className={"flex flex-col md:flex-row"}>
            <div className={"md:border-r md:border-dark-500"}>
              <ProductImage src={data.picture} name={data.name} />
              <ProductNameDescription
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
      <div className={"my-5"}>
        <Container>
          <ProductVideo youtubeLink={data.video} />
        </Container>
      </div>
      <Container>
        <ProductOfferDetails {...data} />
      </Container>
    </div>
  );
}
