'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HeroWithHeader from '@/components/common/HeroWithHeader';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  
  const title = language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति';
  const subtitle = language === 'en' 
    ? 'How we collect, use, and protect your information' 
    : 'हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं';
  
  return (
    <main>
      <div className="min-h-screen">
        {/* Hero Section with Header */}
        <HeroWithHeader
          title={title}
          subtitle={subtitle}
          backgroundImage="/assets/Images/contact/banner.JPG"
        />

        {/* Privacy Policy Content */}
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            
            <p className="mb-4">
              Last Updated: May 4, 2025
            </p>
            
            <p className="mb-4">
              At Thar Desert Photography, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h3>
            
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes email address, telephone numbers, and address.</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Usage Data: includes information about how you use our website, products, and services.</li>
              <li>Marketing and Communications Data: includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h3>
            
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>To register you as a new customer.</li>
              <li>To process and deliver your order.</li>
              <li>To manage our relationship with you.</li>
              <li>To improve our website, products/services, marketing, or customer relationships.</li>
              <li>To recommend products or services that may be of interest to you.</li>
              <li>To comply with a legal or regulatory obligation.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">3. Data Security</h3>
            
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">4. Data Retention</h3>
            
            <p className="mb-4">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">5. Your Legal Rights</h3>
            
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">6. Cookies</h3>
            
            <p className="mb-4">
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Most web browsers allow some control of most cookies through the browser settings.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h3>
            
            <p className="mb-4">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h3>
            
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            
            <p className="mb-4">
              Email: sharvan.patel92@gmail.com<br />
              Phone: +91 9929262986<br />
              Address: Jodhpur, Rajasthan (India)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}