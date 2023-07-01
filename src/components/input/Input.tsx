import { InputHTMLAttributes } from "react";

export const InputClasses =
  'px-2.5 py-[5px] h-[34px] w-full border-dark-400 border rounded-[6px] text-[14px] outline-none"';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={InputClasses} />;
}
