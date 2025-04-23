"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace this with email sending/form backend
    alert("Thank you! We'll contact you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };
  return (
    <section className="max-w-md mx-auto mt-4 mb-10">
      <h1 className="text-2xl font-bold text-primary mb-3 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-4 flex flex-col gap-3 shadow">
        <Input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="How can we help you?"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="resize-none"
        />
        <Button type="submit">Send Message</Button>
      </form>
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Or email: <a href="mailto:info@thardesertphotography.com" className="text-primary underline">info@thardesertphotography.com</a>
      </div>
    </section>
  );
}
