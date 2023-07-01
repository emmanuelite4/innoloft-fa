import { HTMLProps } from "react";

export function Title(props: HTMLProps<HTMLHeadingElement>) {
  return (
    <h5
      {...props}
      className={"text-[16px] leading-[24px] font-semibold text-dark-100"}
    />
  );
}
