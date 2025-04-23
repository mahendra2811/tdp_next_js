import type React from "react";
import { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";

type Props = {
  open: boolean;
  onClose: () => void;
  productTitle: string;
  onSubmit: (data: { name: string; phone: string; email: string; message: string }) => void;
};

export default function ProductFormModal({ open, onClose, productTitle, onSubmit }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };
  if (!open) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit} className="bg-background p-5 rounded-lg shadow-lg w-full max-w-sm mx-auto">
        <div className="font-bold text-xl mb-2">Enquire: {productTitle}</div>
        <input required name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
        <input required name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
        <input required name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
        <textarea name="message" placeholder="Message (optional)" value={form.message} onChange={handleChange} className="mb-4 w-full border px-3 py-2 rounded" rows={3}/>
        <div className="flex gap-2">
          <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded flex-1">Send</button>
          <button type="button" onClick={onClose} className="bg-muted text-black px-3 py-2 rounded">Cancel</button>
        </div>
      </form>
    </Dialog>
  );
}
