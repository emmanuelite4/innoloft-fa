import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "px-2.5 py-[5px] h-[34px] w-full border-dark-400 border rounded-[6px] text-[14px] outline-none"
      }
    />
  );
}
