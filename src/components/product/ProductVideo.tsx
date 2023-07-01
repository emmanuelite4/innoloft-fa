import ReactPlayer from "react-player";
import { Title } from "components/typography";

export function ProductVideo(props: { youtubeLink: string }) {
  return (
    <div>
      <Title>Video</Title>
      <div className={"max-w-[715px] w-full mx-auto mt-2.5"}>
        <ReactPlayer url={props.youtubeLink} width={"100%"} />
      </div>
    </div>
  );
}
