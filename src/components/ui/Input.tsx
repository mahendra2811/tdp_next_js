import type React from "react";
type Props = React.InputHTMLAttributes<HTMLInputElement>;
export default function Input(props: Props) {
  return <input {...props} className={"border border-border rounded px-3 py-2 w-full " + (props.className || "")} />;
}
