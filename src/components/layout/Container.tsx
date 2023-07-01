import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  noPadding?: boolean;
}
export function Container(props: ContainerProps) {
  const padding = !props.noPadding ? " py-5 px-2.5 md:px-5" : "";
  return (
    <div
      className={`rounded-[6px] border border-dark-500 overflow-hidden${padding}`}
    >
      {props.children}
    </div>
  );
}
