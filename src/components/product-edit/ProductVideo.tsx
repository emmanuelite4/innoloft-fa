import { Container } from "components/layout";
import { Title } from "components/typography";
import { Button } from "components/button";
import { useUpdateProductByIdMutation } from "redux";
import { FormEvent, useState } from "react";
import { Input } from "components/input/Input.tsx";

export function ProductVideoEdit(props: { id: number; video: string }) {
  const { id, video } = props;
  const [mutate] = useUpdateProductByIdMutation();
  const [value, setValue] = useState(video);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutate({ video: value, id });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Container>
      <Title>Video</Title>
      <div>
        <form onSubmit={handleSubmit} className={"flex gap-5 mt-2.5"}>
          <Input onChange={(e) => setValue(e.target.value)} name={"video"} />
          <Button type={"submit"}>Save</Button>
        </form>
      </div>
    </Container>
  );
}
