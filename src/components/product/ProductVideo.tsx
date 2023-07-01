import ReactPlayer from "react-player";

export function ProductVideo(props: { youtubeLink: string }) {
  return (
    <div>
      <h5 className={"text-[16px] font-semibold mb-2.5"}>Video</h5>
      <div className={"max-w-[715px] w-full mx-auto"}>
        <ReactPlayer url={props.youtubeLink} width={"100%"} />
      </div>
    </div>
  );
}
