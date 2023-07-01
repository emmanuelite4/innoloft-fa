interface AvatarProps {
  width: number;
  height: number;
  src: string;
}

export function Avatar(props: AvatarProps) {
  const { height, width, src } = props;
  return (
    <div style={{ width, height }} className={"rounded-[50%] overflow-hidden"}>
      <img src={src} alt={"avatar"} className={"w-full h-full"} />
    </div>
  );
}
