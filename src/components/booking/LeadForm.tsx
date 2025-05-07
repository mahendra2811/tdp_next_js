'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { trackFormSubmit, trackEvent } from '@/utils/analytics';
import { leadApi } from '@/utils/api';

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'नाम आवश्यक है';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'ईमेल आवश्यक है';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email address' : 'अमान्य ईमेल पता';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = language === 'en' ? 'Phone number is required' : 'फोन नंबर आवश्यक है';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset any previous API errors
    setApiError(null);

    // Validate form
    if (!validateForm()) {
      // Track form validation failure
      trackEvent('form_validation_error', {
        form_name: 'lead_inquiry_form',
        errors: Object.keys(errors),
      });
      return;
    }

    setIsSubmitting(true);

    // Track form submission
    trackFormSubmit('lead_inquiry_form', {
      has_email: !!formData.email,
      has_phone: !!formData.phone,
      has_message: !!formData.message,
      language: language,
    });

    try {
      // Submit to API
      const response = await leadApi.create(formData);

      if (response.success) {
        // Show success message
        setIsSubmitted(true);
        
        // Track successful submission
        trackEvent('lead_inquiry_completed', {
          form_name: 'lead_inquiry_form',
          language: language,
        });
      } else {
        // Handle API error
        if (response.errors && response.errors.length > 0) {
          // Handle validation errors from the API
          const newErrors: Record<string, string> = {};
          response.errors.forEach((error) => {
            newErrors[error.param] = error.msg;
          });
          setErrors(newErrors);
          
          // Track validation errors
          trackEvent('lead_api_validation_error', {
            form_name: 'lead_inquiry_form',
            errors: Object.keys(newErrors),
          });
        } else {
          // Handle general API error
          setApiError(response.message || 'An error occurred while submitting your inquiry. Please try again.');
          
          // Track API error
          trackEvent('lead_api_error', {
            form_name: 'lead_inquiry_form',
            error: response.message,
          });
        }
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Lead submission error:', error);
      setApiError('An unexpected error occurred. Please try again later.');
      
      // Track unexpected error
      trackEvent('lead_unexpected_error', {
        form_name: 'lead_inquiry_form',
      });
    } finally {
      setIsSubmitting(false);
    }
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

  // Display API error message if there is one
  if (apiError) {
    return (
      <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-4">
          {language === 'en' ? 'Submission Error' : 'सबमिशन त्रुटि'}
        </h3>
        <p className="text-red-600 mb-4">{apiError}</p>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setApiError(null)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            {language === 'en' ? 'Try Again' : 'पुनः प्रयास करें'}
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            {language === 'en' ? 'Reset Form' : 'फॉर्म रीसेट करें'}
          </button>
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
          className={`w-full px-4 py-2 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Your name' : 'आपका नाम'}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
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
          className={`w-full px-4 py-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Your email' : 'आपका ईमेल'}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
          className={`w-full px-4 py-2 border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Your phone number' : 'आपका फोन नंबर'}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
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
