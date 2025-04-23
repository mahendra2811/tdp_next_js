import type React from "react";
import { useEffect } from "react";
type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export function Dialog({ open, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" tabIndex={-1}>
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 max-w-lg w-full mx-4" role="dialog">
        {children}
      </div>
    </div>
  );
}
