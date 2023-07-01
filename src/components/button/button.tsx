import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonClasses = `bg-primary text-white px-[10px] py-[5px] rounded-[6px] text-[14px] leading-[24px] flex items-center gap-[5px] ${props.className}`;
  return <button {...props} className={buttonClasses} />;
}
