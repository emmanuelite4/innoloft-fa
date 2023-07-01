import "remirror/styles/all.css";

import {
  BoldExtension,
  BulletListExtension,
  ItalicExtension,
  OrderedListExtension,
  UnderlineExtension,
} from "remirror/extensions";
import { Remirror, useRemirror } from "@remirror/react";

interface Props {
  onChange?: (e: string) => void;
  defaultValue?: string;
}

export function RemirrorEditor({ onChange, defaultValue }: Props) {
  const {
    manager,
    state,
    onChange: handleChange,
  } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new UnderlineExtension(),
      new OrderedListExtension(),
      new BulletListExtension(),
    ],
    selection: "start",
    stringHandler: "html",
    content: defaultValue,
  });

  return (
    <div className="remirror-theme">
      <Remirror
        manager={manager}
        initialContent={state}
        onChange={(e) => {
          handleChange(e);
          onChange?.(e.helpers.getHTML());
        }}
      ></Remirror>
    </div>
  );
}
