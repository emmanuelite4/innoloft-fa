import { HTMLProps } from "react";

export const TypographyTitleClasses =
  "text-[16px] leading-[24px] font-semibold text-dark-100";

export function Title(props: HTMLProps<HTMLHeadingElement>) {
  return <h5 {...props} className={TypographyTitleClasses} />;
}
