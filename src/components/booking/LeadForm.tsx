'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LeadForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          {language === 'en' ? 'Thank You for Your Inquiry!' : 'आपकी पूछताछ के लिए धन्यवाद!'}
        </h3>
        <p className="text-green-600 mb-4">
          {language === 'en'
            ? 'We have received your information and will contact you shortly.'
            : 'हमें आपकी जानकारी मिल गई है और हम जल्द ही आपसे संपर्क करेंगे।'}
        </p>

        <div className="border-t border-green-200 pt-4 mt-4">
          <p className="font-medium text-green-700 mb-2">
            {language === 'en'
              ? 'For urgent inquiries, feel free to contact Sharvan Patel directly:'
              : 'तत्काल पूछताछ के लिए, शरवन पटेल से सीधे संपर्क करें:'}
          </p>

          <ul className="space-y-2 text-green-600">
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://thardesertphotography.com" className="text-blue-600 hover:underline">
                thardesertphotography.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+919929262986" className="text-blue-600 hover:underline">
                +91 99292 62986
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/919929262986" className="text-blue-600 hover:underline">
                +91 99292 62986
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a
                href="https://instagram.com/thar_desert_photography"
                className="text-blue-600 hover:underline"
              >
                @thar_desert_photography
              </a>
            </li>
          </ul>

          <p className="mt-4 text-green-700 font-medium">
            {language === 'en'
              ? 'We look forward to providing you with a memorable desert experience!'
              : 'हम आपको एक यादगार रेगिस्तान अनुभव प्रदान करने के लिए तत्पर हैं!'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Name' : 'नाम'} *
        </label>
        <input
          type="text"
          id="lead-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder={language === 'en' ? 'Your name' : 'आपका नाम'}
        />
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Email' : 'ईमेल'} *
        </label>
        <input
          type="email"
          id="lead-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder={language === 'en' ? 'Your email' : 'आपका ईमेल'}
        />
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Phone' : 'फोन'} *
        </label>
        <input
          type="tel"
          id="lead-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder={language === 'en' ? 'Your phone number' : 'आपका फोन नंबर'}
        />
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Message' : 'संदेश'}
        </label>
        <textarea
          id="lead-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder={language === 'en' ? 'Your message or inquiry' : 'आपका संदेश या पूछताछ'}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {language === 'en' ? 'Submitting...' : 'जमा कर रहा है...'}
            </span>
          ) : (
            <span>{language === 'en' ? 'Submit Inquiry' : 'पूछताछ जमा करें'}</span>
          )}
        </button>
      </div>
    </form>
  );
}
