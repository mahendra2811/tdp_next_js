import type React from "react";
type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export default function TextArea(props: Props) {
  return (
    <textarea {...props} className={"border border-border rounded px-3 py-2 w-full " + (props.className || "")} />
  );
}
