interface ProductNameDescriptionProps {
  name: string;
  description: string;
}

export function ProductNameDescription(props: ProductNameDescriptionProps) {
  const { name, description = "" } = props;
  return (
    <div className={"py-5 px-2.5 md:px-5"}>
      <h3
        className={
          "text-[16px] leading-[24px] font-semibold mb-2.5 text-dark-100"
        }
      >
        {name}
      </h3>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className={"text-dark-300 text-[14px] leading-[24px]"}
      />
    </div>
  );
}
