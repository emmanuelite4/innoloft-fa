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

// const Root = styled.div`
//   .remirror-theme {
//     .ProseMirror {
//       border: none !important;
//       box-shadow: none !important;
//
//       border-radius: 12px;
//       overflow: auto;
//       max-height: 120px;
//
//       ${tw`bg-neutral-07 text-neutral-02`}
//       font-size: 14px;
//
//       &:focus-within {
//         border: 2px solid !important;
//         ${tw`!border-primary`}
//       }
//     }
//   }
//
//   .remirror-editor-wrapper {
//     padding-top: 0 !important;
//   }
// `;

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
