import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "bg-primary text-white px-[10px] py-[5px] rounded-[6px] text-[14px] leading-[24px]"
      }
    />
  );
}
