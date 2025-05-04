'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import useClickOutside from '@/hooks/useClickOutside';

export default function JoinTeamPopup() {
  const [showInitialPopup, setShowInitialPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    reason: '',
    extra: ''
  });

  const initialPopupRef = useRef<HTMLDivElement>(null);
  const formPopupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  // Text content in both languages
  const content = {
    en: {
      title: 'Join Our Team',
      subtitle: 'Would you like to join our TDP team for conservation efforts?',
      noThanks: 'No, thanks',
      continue: 'Continue',
      formTitle: 'Join Our asdfas Team',
      name: 'Name',
      mobile: 'Mobile Number',
      email: 'Email (Optional)',
      address: 'Address',
      reason: 'Why do you want to join?',
      extra: 'Additional Comments (Optional)',
      submit: 'Submit',
      toast: 'Thank you for your interest! We\'ll contact you soon.'
    },
    hi: {
      title: 'हमारी टीम से जुड़ें',
      subtitle: 'क्या आप संरक्षण प्रयासों के लिए हमारी TDP टीम से जुड़ना चाहेंगे?',
      noThanks: 'नहीं, धन्यवाद',
      continue: 'जारी रखें',
      formTitle: 'हमारी संरक्षण टीम से जुड़ें',
      name: 'नाम',
      mobile: 'मोबाइल नंबर',
      email: 'ईमेल (वैकल्पिक)',
      address: 'पता',
      reason: 'आप क्यों जुड़ना चाहते हैं?',
      extra: 'अतिरिक्त टिप्पणियां (वैकल्पिक)',
      submit: 'जमा करें',
      toast: 'आपकी रुचि के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।'
    }
  };

  const text = isHindi ? content.hi : content.en;

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
    setTimeout(() => setShowToast(false), 3000);
  };

  // Show popup at intervals
  useEffect(() => {
    // Don't show on book-now page
    if (pathname === '/book-now') return;

    const intervals = [
      10 * 1000,  // 10 seconds
      30 * 1000,  // 30 seconds
      60 * 1000,  // 60 seconds
      120 * 1000, // 2 minutes
      180 * 1000, // 3 minutes
      300 * 1000, // 5 minutes
      600 * 1000, // 10 minutes
    ];

    const timeoutIds: NodeJS.Timeout[] = [];

    intervals.forEach((interval, index) => {
      const totalDelay = intervals.slice(0, index + 1).reduce((sum, val) => sum + val, 0);
      
      if (totalDelay <= 10 * 60 * 1000) { // Up to 10 minutes
        const timeoutId = setTimeout(() => {
          if (!showFormPopup && !showInitialPopup) {
            setShowInitialPopup(true);
          }
        }, totalDelay);
        
        timeoutIds.push(timeoutId);
      }
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [pathname, showFormPopup, showInitialPopup]);

  // Don't render anything on book-now page
  if (pathname === '/book-now') return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowInitialPopup(true)}
        className="fixed bottom-6 left-6 z-40 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
        aria-label="Join our team"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M16 10v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4zm-2 0h-4a2 2 0 0 0-2 2v4h-2v-8h8v2zm2 2h4v8h-8v-8h4z" />
        </svg>
      </button>

      {/* Initial Popup */}
      {showInitialPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/50 animate-in fade-in duration-200" 
            onClick={() => setShowInitialPopup(false)} 
          />
          <div
            ref={initialPopupRef}
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 z-10 relative animate-in fade-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setShowInitialPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
            <p className="mb-6 text-lg">{text.subtitle}</p>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowInitialPopup(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 text-base"
              >
                {text.noThanks}
              </button>
              <button 
                onClick={() => {
                  setShowInitialPopup(false);
                  setShowFormPopup(true);
                }}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 text-base"
              >
                {text.continue}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Popup */}
      {showFormPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/50 animate-in fade-in duration-200" 
            onClick={() => setShowFormPopup(false)} 
          />
          <div
            ref={formPopupRef}
            className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4 z-10 relative overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setShowFormPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-6">{text.formTitle}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                  {text.name} *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isHindi ? "अपना नाम दर्ज करें" : "Enter your name"}
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-base font-medium text-gray-700 mb-2">
                  {text.mobile} *
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isHindi ? "अपना मोबाइल नंबर दर्ज करें" : "Enter your mobile number"}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  {text.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isHindi ? "अपना ईमेल दर्ज करें" : "Enter your email"}
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-base font-medium text-gray-700 mb-2">
                  {text.address} *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isHindi ? "अपना पता दर्ज करें" : "Enter your address"}
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-base font-medium text-gray-700 mb-2">
                  {text.reason} *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isHindi ? "आप क्यों जुड़ना चाहते हैं?" : "Why do you want to join?"}
                />
              </div>
              
              <div>
                <label htmlFor="extra" className="block text-base font-medium text-gray-700 mb-2">
                  {text.extra}
                </label>
                <textarea
                  id="extra"
                  name="extra"
                  rows={3}
                  value={formData.extra}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isHindi ? "कोई अतिरिक्त टिप्पणी?" : "Any additional comments?"}
                />
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 text-lg font-medium"
                >
                  {text.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 text-base animate-in fade-in slide-in-from-bottom-5 duration-300">
          {text.toast}
        </div>
      )}
    </>
  );
}
