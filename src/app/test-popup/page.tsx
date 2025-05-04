'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TestPopupPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    reason: '',
    extra: ''
  });
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  // Text content in both languages
  const content = {
    en: {
      title: 'Join Our Team',
      subtitle: 'Would you like to join our TDP team for conservation efforts?',
      noThanks: 'No, thanks',
      continue: 'Continue',
      formTitle: 'Join Our Conservation Team',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
    setShowForm(false);
    
    // Show thank you toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Test Popup Page</h1>
      <p className="mb-4">This page is used to test the popup component.</p>
      <p className="mb-4">The popup should appear in the bottom left corner after 10 seconds.</p>
      <p className="mb-4">You can also click the button below to open the popup immediately.</p>
      
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShowPopup(true)}
      >
        Open Popup
      </button>

      {/* Floating Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 left-6 z-40 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M16 10v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4zm-2 0h-4a2 2 0 0 0-2 2v4h-2v-8h8v2zm2 2h4v8h-8v-8h4z" />
        </svg>
      </button>

      {/* Initial Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowPopup(false)} />
          <div 
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 z-10 relative animate-in fade-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setShowPopup(false)}
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
                onClick={() => setShowPopup(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 text-base"
              >
                {text.noThanks}
              </button>
              <button 
                onClick={() => {
                  setShowPopup(false);
                  setShowForm(true);
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
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowForm(false)} />
          <div 
            className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4 z-10 relative overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setShowForm(false)}
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
    </div>
  );
}
