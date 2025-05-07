"use client";
import { useState } from "react";
import { contactInfo } from "@/constant/contactInfo";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Using Web3Forms API as in the original HTML
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: contactInfo.webFormAccessKey,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          subject: "TDP contact form",
          from_name: "TDP (Sharvan Patel)"
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert("Thank you for your message! We'll get back to you soon.");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gradient-to-br from-white to-purple-100 rounded-lg shadow-xl p-6 md:p-8">
          <p className="text-center mb-2">Want to join our team?</p>
          <h2 className="text-2xl font-bold text-center mb-6">Fill this form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value={contactInfo.webFormAccessKey} />
            <input type="hidden" name="subject" value="TDP contact form" />
            <input type="hidden" name="from_name" value="TDP (Sharvan Patel)" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}