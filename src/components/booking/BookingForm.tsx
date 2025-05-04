'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// List of Indian states
const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

export default function BookingForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'India',
    otherCountry: '',
    state: '',
    district: '',
    pincode: '',
    checkInDate: '',
    checkOutDate: '',
    tourists: 1,
    queries: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Get today's date in YYYY-MM-DD format for date inputs
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }
    
    // Handle phone number (numeric only)
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }
    
    // Handle other fields
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

  // Update check-out date min value when check-in date changes
  useEffect(() => {
    if (formData.checkInDate && formData.checkOutDate && formData.checkOutDate < formData.checkInDate) {
      setFormData(prev => ({
        ...prev,
        checkOutDate: formData.checkInDate
      }));
    }
  }, [formData.checkInDate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'नाम आवश्यक है';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'en' ? 'Phone number is required' : 'फोन नंबर आवश्यक है';
    }
    
    if (formData.country === 'Other' && !formData.otherCountry.trim()) {
      newErrors.otherCountry = language === 'en' ? 'Country name is required' : 'देश का नाम आवश्यक है';
    }
    
    if (!formData.checkInDate) {
      newErrors.checkInDate = language === 'en' ? 'Check-in date is required' : 'चेक-इन तिथि आवश्यक है';
    }
    
    if (!formData.checkOutDate) {
      newErrors.checkOutDate = language === 'en' ? 'Check-out date is required' : 'चेक-आउट तिथि आवश्यक है';
    }
    
    if (!formData.tourists || formData.tourists < 1) {
      newErrors.tourists = language === 'en' ? 'Number of tourists is required' : 'पर्यटकों की संख्या आवश्यक है';
    }
    
    if (!formData.consent) {
      newErrors.consent = language === 'en' ? 'You must agree to the terms' : 'आपको नियमों से सहमत होना होगा';
    }
    
    // Email validation if provided
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email address' : 'अमान्य ईमेल पता';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Show success message
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          {language === 'en' ? 'Thank You for Your Submission!' : 'आपके जमा करने के लिए धन्यवाद!'}
        </h3>
        <p className="text-green-600 mb-4">
          {language === 'en' 
            ? 'Your details have been successfully submitted. Our team will review your request and get back to you shortly to confirm your booking or address your query.' 
            : 'आपका विवरण सफलतापूर्वक जमा कर दिया गया है। हमारी टीम आपके अनुरोध की समीक्षा करेगी और आपकी बुकिंग की पुष्टि करने या आपके प्रश्न का समाधान करने के लिए शीघ्र ही आपसे संपर्क करेगी।'}
        </p>
        
        <div className="border-t border-green-200 pt-4 mt-4">
          <p className="font-medium text-green-700 mb-2">
            {language === 'en' ? 'For urgent inquiries, feel free to contact Sharvan Patel directly:' : 'तत्काल पूछताछ के लिए, शरवन पटेल से सीधे संपर्क करें:'}
          </p>
          
          <ul className="space-y-2 text-green-600">
            <li><strong>Website:</strong> <a href="https://thardesertphotography.com" className="text-blue-600 hover:underline">thardesertphotography.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919929262986" className="text-blue-600 hover:underline">+91 99292 62986</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/919929262986" className="text-blue-600 hover:underline">+91 99292 62986</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/thar_desert_photography" className="text-blue-600 hover:underline">@thar_desert_photography</a></li>
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
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Name' : 'नाम'} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Your full name' : 'आपका पूरा नाम'}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Phone Number' : 'फोन नंबर'} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Your phone number (numbers only)' : 'आपका फोन नंबर (केवल अंक)'}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Email Address' : 'ईमेल पता'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Your email address' : 'आपका ईमेल पता'}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Country Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {language === 'en' ? 'Country' : 'देश'} *
        </label>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <input
              id="country-india"
              name="country"
              type="radio"
              value="India"
              checked={formData.country === 'India'}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="country-india" className="ml-2 block text-sm text-gray-700">
              India
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="country-other"
              name="country"
              type="radio"
              value="Other"
              checked={formData.country === 'Other'}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="country-other" className="ml-2 block text-sm text-gray-700">
              Other
            </label>
          </div>
        </div>
        {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
      </div>

      {/* Other Country (conditional) */}
      {formData.country === 'Other' && (
        <div>
          <label htmlFor="otherCountry" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'Specify Country' : 'देश निर्दिष्ट करें'} *
          </label>
          <input
            type="text"
            id="otherCountry"
            name="otherCountry"
            value={formData.otherCountry}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.otherCountry ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
            placeholder={language === 'en' ? 'Enter your country name' : 'अपने देश का नाम दर्ज करें'}
          />
          {errors.otherCountry && <p className="mt-1 text-sm text-red-600">{errors.otherCountry}</p>}
        </div>
      )}

      {/* Indian State (conditional) */}
      {formData.country === 'India' && (
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'State' : 'राज्य'}
          </label>
          <div className="relative">
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary appearance-none"
            >
              <option value="">
                {language === 'en' ? '-- Select State --' : '-- राज्य चुनें --'}
              </option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* District (conditional) */}
      {formData.country === 'India' && (
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'District' : 'जिला'}
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder={language === 'en' ? 'Your district' : 'आपका जिला'}
          />
        </div>
      )}

      {/* Pin Code (conditional) */}
      {formData.country === 'India' && (
        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'Pin Code' : 'पिन कोड'}
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder={language === 'en' ? 'Your pin code' : 'आपका पिन कोड'}
          />
        </div>
      )}

      {/* Check-in and Check-out Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'Check-in Date (Expected)' : 'चेक-इन तिथि (अनुमानित)'} *
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            min={today}
            className={`w-full px-4 py-2 border ${errors.checkInDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
          />
          {errors.checkInDate && <p className="mt-1 text-sm text-red-600">{errors.checkInDate}</p>}
        </div>
        <div>
          <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'Check-out Date (Expected)' : 'चेक-आउट तिथि (अनुमानित)'} *
          </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            min={formData.checkInDate || today}
            className={`w-full px-4 py-2 border ${errors.checkOutDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
          />
          {errors.checkOutDate && <p className="mt-1 text-sm text-red-600">{errors.checkOutDate}</p>}
        </div>
      </div>

      {/* Number of Tourists */}
      <div>
        <label htmlFor="tourists" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Number of Tourists' : 'पर्यटकों की संख्या'} *
        </label>
        <input
          type="number"
          id="tourists"
          name="tourists"
          value={formData.tourists}
          onChange={handleChange}
          min="1"
          max="50"
          className={`w-full px-4 py-2 border ${errors.tourists ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
        />
        {errors.tourists && <p className="mt-1 text-sm text-red-600">{errors.tourists}</p>}
      </div>

      {/* Other Queries */}
      <div>
        <label htmlFor="queries" className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'en' ? 'Any Other Queries?' : 'कोई अन्य प्रश्न?'} *
        </label>
        <textarea
          id="queries"
          name="queries"
          value={formData.queries}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 border ${errors.queries ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`}
          placeholder={language === 'en' ? 'Any special requirements or questions?' : 'कोई विशेष आवश्यकताएँ या प्रश्न?'}
        />
        {errors.queries && <p className="mt-1 text-sm text-red-600">{errors.queries}</p>}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start mt-4">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className={`h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded ${errors.consent ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className={`font-medium ${errors.consent ? 'text-red-500' : 'text-gray-700'}`}>
            {language === 'en' 
              ? 'I hereby confirm that all the information provided in this form is accurate and complete, and I consent to Sharvan Patel using this information for communication and booking purposes.'
              : 'मैं एतद्द्वारा पुष्टि करता/करती हूं कि इस फॉर्म में दी गई सभी जानकारी सटीक और पूर्ण है, और मैं शरवन पटेल को इस जानकारी का उपयोग संचार और बुकिंग उद्देश्यों के लिए करने की सहमति देता/देती हूं।'}
          </label>
          {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {language === 'en' ? 'Submitting...' : 'जमा कर रहा है...'}
            </span>
          ) : (
            <span>{language === 'en' ? 'Submit Booking Request' : 'बुकिंग अनुरोध जमा करें'}</span>
          )}
        </button>
      </div>
    </form>
  );
}
