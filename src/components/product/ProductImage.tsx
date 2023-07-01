import { PatentIcon } from "assets";

interface ProductImageProps {
  src: string;
  name: string;
}

function Patent() {
  return (
    <div
      className={
        "absolute bg-white flex items-center rounded-tl-[6px] rounded-br-[6px]"
      }
    >
      <div
        className={
          "bg-primary h-[40px] w-[40px] flex items-center justify-center  rounded-br-[6px]"
        }
      >
        <img src={PatentIcon} alt={"Patent"} />
      </div>
      <span className={"block px-2.5 text-4"}>Patent</span>
    </div>
  );
}
export function ProductImage({ src, name }: ProductImageProps) {
  return (
    <div className={"relative bg-dark-500"}>
      <Patent />
      <img src={src} alt={name} className={"md:max-h-[300px]"} />
    </div>
  );
}
