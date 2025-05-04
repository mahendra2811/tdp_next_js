'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useClickOutside from '@/hooks/useClickOutside';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';

// Simple Toast component
const Toast = ({
  message,
  isVisible,
  onClose,
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      {message}
    </div>
  );
};

interface FormData {
  name: string;
  mobile: string;
  email: string;
  address: string;
  reason: string;
  extra: string;
}

export default function JoinTeamButton() {
  const [showInitialPopup, setShowInitialPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    address: '',
    reason: '',
    extra: '',
  });

  const initialPopupRef = useRef<HTMLDivElement>(null);
  const formPopupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close popups when clicking outside
  useClickOutside(initialPopupRef, () => {
    if (showInitialPopup) setShowInitialPopup(false);
  });

  useClickOutside(formPopupRef, () => {
    if (showFormPopup) setShowFormPopup(false);
  });

  // Function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      address: '',
      reason: '',
      extra: '',
    });

    // Close form popup
    setShowFormPopup(false);

    // Show thank you toast
    setShowToast(true);
  };

  // Show popup at intervals
  useEffect(() => {
    // Don't show on book-now page
    if (pathname === '/book-now') return;

    const intervals = [
      10 * 1000, // 10 seconds
      30 * 1000, // 30 seconds
      60 * 1000, // 60 seconds
      120 * 1000, // 2 minutes
      180 * 1000, // 3 minutes
      300 * 1000, // 5 minutes
      600 * 1000, // 10 minutes
    ];

    const timeoutIds: NodeJS.Timeout[] = [];

    intervals.forEach((interval, index) => {
      const totalDelay = intervals.slice(0, index + 1).reduce((sum, val) => sum + val, 0);

      if (totalDelay <= 10 * 60 * 1000) {
        // Up to 10 minutes
        const timeoutId = setTimeout(() => {
          if (!showFormPopup) {
            setShowInitialPopup(true);
          }
        }, totalDelay);

        timeoutIds.push(timeoutId);
      }
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [pathname, showFormPopup]);

  // Initial popup asking if they want to join
  const renderInitialPopup = () => {
    if (!showInitialPopup) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50 animate-in fade-in duration-200"
          onClick={() => setShowInitialPopup(false)}
        />
        <div
          ref={initialPopupRef}
          className="bg-white rounded-lg shadow-xl py-6 px-14 max-w- mx-4 z-10 relative animate-in fade-in zoom-in-95 duration-300"
        >
          <button
            onClick={() => setShowInitialPopup(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-6">Would you like to join our TDP team for conservation efforts?</p>

          <div className="flex justify-end space-x-3">
            <Button
              onClick={() => setShowInitialPopup(false)}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              No, thanks
            </Button>
            <Button
              onClick={() => {
                setShowInitialPopup(false);
                setShowFormPopup(true);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // Form popup
  const renderFormPopup = () => {
    if (!showFormPopup) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50 animate-in fade-in duration-200"
          onClick={() => setShowFormPopup(false)}
        />
        <div
          ref={formPopupRef}
          className="bg-white rounded-lg shadow-xl py-6 md:px-14  px:8 md:max-w-lg max-w-md mx-4 z-10 relative animate-in fade-in zoom-in-95 duration-300"
        >
          <button
            onClick={() => setShowFormPopup(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-2xl font-bold mb-4">Join Our Conservation Team</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number *
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address *
              </label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to join? *
              </label>
              <TextArea
                id="reason"
                name="reason"
                rows={3}
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>

            {/* <div>
              <label htmlFor="extra" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Comments
              </label>
              <TextArea
                id="extra"
                name="extra"
                rows={3}
                value={formData.extra}
                onChange={handleChange}
              />
            </div> */}

            <div className="pt-2">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Don't show on book-now page
  if (pathname === '/book-now') return null;

  return (
    <>
      <button
        onClick={() => setShowInitialPopup(true)}
        className="fixed bottom-6 left-6 z-40 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
        aria-label="Join our team"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M16 10v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4zm-2 0h-4a2 2 0 0 0-2 2v4h-2v-8h8v2zm2 2h4v8h-8v-8h4z" />
        </svg>
      </button>
      {renderInitialPopup()}
      {renderFormPopup()}
      <Toast
        message="Thank you for your interest! We'll contact you soon."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
