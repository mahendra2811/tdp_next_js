import type React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ className = "", ...props }: Props) {
  return (
    <button
      className={`bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90 transition ${className}`}
      {...props}
    />
  );
}
