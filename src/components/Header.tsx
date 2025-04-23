"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/assets/Images/logo-TDP.png"; 
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background/80 backdrop-blur border-b border-border sticky top-0 z-40">
      <div className="container max-w-5xl mx-auto flex items-center justify-between py-3 px-2">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
          {/* Replace the img below with your logo if needed */}
          <span className="sr-only">Thar Desert Photography</span>
          <Image
            src={logo}
            alt="Thar Desert Photography Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-base font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile nav button */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border py-4 px-2 w-full absolute left-0 top-full">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
