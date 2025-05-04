'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import useClickOutside from '@/hooks/useClickOutside';
import { contactInfo, navigationLinks, bookingInfo, brandInfo } from '@/constant/headerInfo';
import {
  contactInfoHindi,
  navigationLinksHindi,
  bookingInfoHindi,
  brandInfoHindi,
} from '@/constant/headerInfoHindi';
import LanguageToggle from '@/components/common/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { language } = useLanguage();

  // Get the appropriate content based on the selected language
  const currentContactInfo = language === 'en' ? contactInfo : contactInfoHindi;
  const currentNavigationLinks = language === 'en' ? navigationLinks : navigationLinksHindi;
  const currentBookingInfo = language === 'en' ? bookingInfo : bookingInfoHindi;
  const currentBrandInfo = language === 'en' ? brandInfo : brandInfoHindi;

  // Create ref for mobile menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle clicks outside the mobile menu
  useEffect(() => {
    if (isMounted) {
      // Function to handle clicks outside the menu
      const handleClickOutside = (event: MouseEvent) => {
        // If menu is not open, do nothing
        if (!mobileOpen) return;

        // Check if click is outside both the menu and the button
        const isClickOutsideMenu =
          mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node);
        const isClickOnButton =
          mobileMenuButtonRef.current && mobileMenuButtonRef.current.contains(event.target as Node);

        // Only close if click is outside menu and not on the button
        if (isClickOutsideMenu && !isClickOnButton) {
          setMobileOpen(false);
        }
      };

      // Add event listener
      document.addEventListener('mousedown', handleClickOutside);

      // Clean up
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [mobileOpen, isMounted]);

  if (!isMounted) {
    return null;
  }

  // Add more detailed logging
  // Component is ready to render

  const toggleMobileMenu = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full z-50 text-white font-semibold">
      {/* Header Top */}
      <div>
        <div className="container max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Brand Name - Left Side */}
          <Link href="/" className="text-base md:text-xl font-bold">
            {currentBrandInfo.name}
          </Link>

          {/* Right Side Controls - Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle - Always Visible */}
            <LanguageToggle />

            {/* Mobile nav button with improved clickability */}
            <div className="md:hidden">
              <button
                ref={mobileMenuButtonRef}
                className="p-3 -mr-3 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  toggleMobileMenu();
                }}
                aria-label="Toggle menu"
                data-testid="mobile-menu-button"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom - Desktop Only */}
      <div className="border-b border-gray-200/20 hidden md:block">
        <div className="container max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Desktop Navigation */}
          <nav className="flex items-center gap-6 text-base font-medium">
            {currentNavigationLinks.map((link, index) =>
              !link.isDropdown ? (
                <Link
                  key={index}
                  href={link.url}
                  className="hover:text-[#2563eb] transition-colors uppercase text-white"
                >
                  {link.name}
                </Link>
              ) : (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center hover:text-[#2563eb] transition-colors uppercase text-white"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.name}
                  </button>
                  <div className="absolute left-0 top-full mt-1 w-64 bg-black/80 shadow-lg rounded-md border border-gray-200/20 hidden group-hover:block z-50">
                    <ul className="py-2">
                      {link.dropdownItems?.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.url}
                            className="block px-4 py-2 hover:bg-black/50 font-medium text-white"
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
            )}
          </nav>

          {/* Book Now Button */}
          <div className="flex items-center gap-3">
            <a
              href={currentBookingInfo.url}
              className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              {currentBookingInfo.text}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel with improved visibility - 70% width from right */}
      {mobileOpen ? (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-gray-200 py-4 px-4 w-[70%] fixed right-0 top-14 bottom-0 shadow-lg z-[100]"
          data-testid="mobile-menu-panel"
        >
          <nav className="flex flex-col gap-4 text-black">
            {currentNavigationLinks.map((link, index) =>
              !link.isDropdown ? (
                <Link
                  key={index}
                  href={link.url}
                  className="py-2 text-base font-medium hover:text-[#2563eb] transition-colors uppercase text-black"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <div key={index}>
                  <button
                    className="py-2 text-base font-medium w-full text-left flex justify-between items-center uppercase text-black"
                    onClick={() => {
                      setDropdownOpen(!dropdownOpen);
                    }}
                  >
                    {link.name}
                    {dropdownOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </button>

                  {dropdownOpen && (
                    <ul className="pl-4 mt-2 border-l-2 border-gray-200">
                      {link.dropdownItems?.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.url}
                            className="block py-2 hover:text-[#2563eb] text-black"
                            onClick={toggleMobileMenu}
                          >
                            <b>{item.name}</b>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}

            {/* Mobile Book Now Button */}
            <a
              href={currentBookingInfo.url}
              className="mt-2 bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
              onClick={toggleMobileMenu}
            >
              {currentBookingInfo.text}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
