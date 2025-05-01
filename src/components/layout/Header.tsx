"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { 
  contactInfo, 
  navigationLinks, 
  bookingInfo, 
  brandInfo 
} from "@/constant/headerInfo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="w-full sticky top-0 z-40">
      {/* Header Top */}
      <div className="bg-[#2563eb] text-white">
        <div className="container max-w-5xl mx-auto flex items-center justify-between py-2 px-4">
          {/* Helpline Box */}
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="flex items-center justify-center rounded-full bg-white/20 p-1">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs">{contactInfo.inquiryText}</p>
              <p className="text-sm font-bold">{contactInfo.phone}</p>
            </div>
          </a>

          {/* Logo for top */}
          <Link href="/" className="text-lg md:text-xl font-bold">
            {brandInfo.name}
          </Link>

          {/* Mobile nav button */}
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-base font-medium">
            {navigationLinks.map((link, index) => (
              !link.isDropdown ? (
                <Link 
                  key={index} 
                  href={link.url} 
                  className="hover:text-[#2563eb] transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ) : (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center hover:text-[#2563eb] transition-colors uppercase"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.name}
                  </button>
                  <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 hidden group-hover:block z-50">
                    <ul className="py-2">
                      {link.dropdownItems?.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.url}
                            className="block px-4 py-2 hover:bg-gray-100 font-medium"
                          >
                            <b>{item.name}</b>
                          </Link>
                          {idx < (link.dropdownItems?.length || 0) - 1 && (
                            <hr className="my-1 border-gray-200" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            ))}
          </nav>

          {/* Book Now Button */}
          <a
            href={bookingInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            {bookingInfo.text}
          </a>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 w-full absolute left-0 top-full shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-xl font-bold text-[#2563eb]" onClick={() => setMobileOpen(false)}>
              <b>{brandInfo.name}</b>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link, index) => (
              !link.isDropdown ? (
                <Link
                  key={index}
                  href={link.url}
                  className="py-2 text-base font-medium hover:text-[#2563eb] transition-colors uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <div key={index}>
                  <button
                    className="py-2 text-base font-medium w-full text-left flex justify-between items-center uppercase"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.name}
                    {dropdownOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Menu className="w-4 h-4" />
                    )}
                  </button>
                  
                  {dropdownOpen && (
                    <ul className="pl-4 mt-2 border-l-2 border-gray-200">
                      {link.dropdownItems?.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.url}
                            className="block py-2 hover:text-[#2563eb]"
                            onClick={() => setMobileOpen(false)}
                          >
                            <b>{item.name}</b>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            ))}
            
            {/* Mobile Book Now Button */}
            <a
              href={bookingInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              {bookingInfo.text}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}