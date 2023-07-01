import { selectLayoutConfig, useGetProductByIdQuery } from "redux";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Container,
  ProductImage,
  ProductNameDescription,
  ProductOfferDetails,
  ProductOfferedBy,
  ProductVideo,
} from "components";
import { useSelector } from "react-redux";

export function Product() {
  const { productId } = useParams();
  const config = useSelector(selectLayoutConfig);
  const { data, isLoading, error } = useGetProductByIdQuery(productId!, {
    skip: !productId,
  });

  if (error) return <div>Sorry, an error has occurred</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <div className={"flex md:justify-end"}>
        <Link to={`/product/${productId}/edit`}>
          <Button>Edit</Button>
        </Link>
      </div>
      <div className={"my-5"}>
        <Container noPadding>
          <div className={"flex flex-col md:flex-row"}>
            <div className={"md:border-r md:border-dark-500"}>
              <ProductImage src={data.picture} name={data.name} />
              {config.hasUserSection && (
                <ProductNameDescription
                  name={data.name}
                  description={data.description}
                />
              )}
            </div>
            <div className={"md:min-w-[382px]"}>
              <ProductOfferedBy user={data.user} company={data.company} />
            </div>
          </div>
        </Container>
      </div>
      <ProductVideo youtubeLink={data.video} />

      <div className={"my-5"}>
        <ProductOfferDetails {...data} />
      </div>
    </div>
  );
}
