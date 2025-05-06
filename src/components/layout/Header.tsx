'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, User, LogIn, LogOut, ChevronDown, UserPlus } from 'lucide-react';
import Image from 'next/image';
import useClickOutside from '@/hooks/useClickOutside';
import {
  contactInfo,
  navigationLinks,
  bookingInfo,
  brandInfo,
  authInfo,
} from '@/constant/headerInfo';
import {
  contactInfoHindi,
  navigationLinksHindi,
  bookingInfoHindi,
  brandInfoHindi,
  authInfoHindi,
} from '@/constant/headerInfoHindi';
import { useAuth } from '@/context/AuthContext';
import LanguageToggle from '@/components/common/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import AuthModal from '@/components/auth/AuthModal';
import ProfileModal from '@/components/auth/ProfileModal';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const { language } = useLanguage();

  // Get auth context
  const { user, userProfile, logout } = useAuth();

  // Get the appropriate content based on the selected language
  const currentContactInfo = language === 'en' ? contactInfo : contactInfoHindi;
  const currentNavigationLinks = language === 'en' ? navigationLinks : navigationLinksHindi;
  const currentBookingInfo = language === 'en' ? bookingInfo : bookingInfoHindi;
  const currentBrandInfo = language === 'en' ? brandInfo : brandInfoHindi;
  const currentAuthInfo = language === 'en' ? authInfo : authInfoHindi;

  // Create refs for menus
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownButtonRef = useRef<HTMLButtonElement>(null);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle clicks outside the menus
  useEffect(() => {
    if (isMounted) {
      // Function to handle clicks outside the mobile menu
      const handleMobileMenuClickOutside = (event: MouseEvent) => {
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

      // Function to handle clicks outside the user dropdown
      const handleUserDropdownClickOutside = (event: MouseEvent) => {
        // If dropdown is not open, do nothing
        if (!userDropdownOpen) return;

        // Check if click is outside both the dropdown and the button
        const isClickOutsideDropdown =
          userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node);
        const isClickOnButton =
          userDropdownButtonRef.current &&
          userDropdownButtonRef.current.contains(event.target as Node);

        // Only close if click is outside dropdown and not on the button
        if (isClickOutsideDropdown && !isClickOnButton) {
          setUserDropdownOpen(false);
        }
      };

      // Add event listeners
      document.addEventListener('mousedown', handleMobileMenuClickOutside);
      document.addEventListener('mousedown', handleUserDropdownClickOutside);

      // Clean up
      return () => {
        document.removeEventListener('mousedown', handleMobileMenuClickOutside);
        document.removeEventListener('mousedown', handleUserDropdownClickOutside);
      };
    }
  }, [mobileOpen, userDropdownOpen, isMounted]);

  if (!isMounted) {
    return null;
  }

  // Add more detailed logging
  // Component is ready to render

  const toggleMobileMenu = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prevState) => !prevState);
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (userProfile?.displayName) {
      return userProfile.displayName.charAt(0).toUpperCase();
    }
    return user?.email?.charAt(0).toUpperCase() || 'U';
  };

  // Open profile modal
  const openProfileModal = () => {
    setProfileModalOpen(true);
    setUserDropdownOpen(false);
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
                className="p-3 -mr-3 flex items-center justify-center bg-blue-600 rounded-md"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  toggleMobileMenu();
                  console.log('Mobile menu toggled:', !mobileOpen);
                }}
                aria-label="Toggle menu"
                data-testid="mobile-menu-button"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
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
          {/* Book Now Button and Auth */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  ref={userDropdownButtonRef}
                  onClick={toggleUserDropdown}
                  className="flex items-center gap-2 text-white hover:text-[#2563eb] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white">
                    {getUserInitials()}
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {userDropdownOpen && (
                  <div
                    ref={userDropdownRef}
                    className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
                  >
                    <ul className="py-2">
                      <li>
                        <button
                          onClick={openProfileModal}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 w-full text-left"
                        >
                          <User className="w-4 h-4" />
                          <span>Profile</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => logout()}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAuthModalOpen(true);
                    setAuthModalMode('login');
                  }}
                  className="flex items-center gap-1 text-white hover:text-[#2563eb] transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{currentAuthInfo.login.text}</span>
                </button>
                {/* <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAuthModalOpen(true);
                    setAuthModalMode('signup');
                  }}
                  className="text-white hover:text-[#2563eb] transition-colors"
                >
                  {currentAuthInfo.signup.text}
                </button> */}
              </div>
            )}
            {/* <a
              href={currentBookingInfo.url}
              className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              {currentBookingInfo.text}
            </a> */}
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

            {/* Mobile Auth Options */}
            {user ? (
              <>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white">
                    {getUserInitials()}
                  </div>
                  <span className="font-medium">{userProfile?.displayName || user.email}</span>
                </div>
                <button
                  onClick={() => {
                    openProfileModal();
                    toggleMobileMenu();
                  }}
                  className="py-2 text-base font-medium hover:text-[#2563eb] transition-colors text-black flex items-center gap-2 pl-2 w-full text-left"
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                  className="py-2 text-base font-medium hover:text-[#2563eb] transition-colors text-black text-left flex items-center gap-2 pl-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAuthModalOpen(true);
                    setAuthModalMode('login');
                    toggleMobileMenu();
                  }}
                  className="py-2 text-base font-medium hover:text-[#2563eb] transition-colors text-black flex items-center gap-2 w-full text-left"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{currentAuthInfo.login.text}</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAuthModalOpen(true);
                    setAuthModalMode('signup');
                    toggleMobileMenu();
                  }}
                  className="py-2 text-base font-medium hover:text-[#2563eb] transition-colors text-black w-full text-left"
                >
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    <span>{currentAuthInfo.signup.text}</span>
                  </div>
                </button>
              </>
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

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      {/* Profile Modal */}
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </header>
  );
}
