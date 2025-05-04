'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HeroWithHeader from '@/components/common/HeroWithHeader';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const title = language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति';
  const subtitle =
    language === 'en'
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

            <p className="mb-4">Last Updated: May 4, 2025</p>

            <p className="mb-4">
              At Thar Desert Photography, we respect your privacy and are committed to protecting
              your personal data. This privacy policy will inform you about how we look after your
              personal data when you visit our website and tell you about your privacy rights and
              how the law protects you.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h3>

            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>
                Identity Data: includes first name, last name, username or similar identifier.
              </li>
              <li>Contact Data: includes email address, telephone numbers, and address.</li>
              <li>
                Technical Data: includes internet protocol (IP) address, browser type and version,
                time zone setting and location, browser plug-in types and versions, operating system
                and platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                Usage Data: includes information about how you use our website, products, and
                services.
              </li>
              <li>
                Marketing and Communications Data: includes your preferences in receiving marketing
                from us and our third parties and your communication preferences.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h3>

            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will
              use your personal data in the following circumstances:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>To register you as a new customer.</li>
              <li>To process and deliver your order.</li>
              <li>To manage our relationship with you.</li>
              <li>
                To improve our website, products/services, marketing, or customer relationships.
              </li>
              <li>To recommend products or services that may be of interest to you.</li>
              <li>To comply with a legal or regulatory obligation.</li>
              <li>
                For educational purposes, including research, analysis, and development of our
                services.
              </li>
            </ul>

            <p className="mb-4">
              We may use customer information for educational purposes, which may include case
              studies, research, and training materials. Any such use will be done in a manner that
              protects your privacy and complies with applicable data protection laws.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">3. Data Security</h3>

            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used, or accessed in an unauthorized way, altered, or
              disclosed. In addition, we limit access to your personal data to those employees,
              agents, contractors, and other third parties who have a business need to know.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">4. Data Retention</h3>

            <p className="mb-4">
              We will only retain your personal data for as long as necessary to fulfill the
              purposes we collected it for, including for the purposes of satisfying any legal,
              accounting, or reporting requirements.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">5. Your Legal Rights</h3>

            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to
              your personal data, including the right to:
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
              Cookies are small text files that are placed on your computer by websites that you
              visit. They are widely used in order to make websites work, or work more efficiently,
              as well as to provide information to the owners of the site. Most web browsers allow
              some control of most cookies through the browser settings.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h3>

            <p className="mb-4">
              We may update our privacy policy from time to time. We will notify you of any changes
              by posting the new privacy policy on this page and updating the "Last Updated" date at
              the top of this privacy policy.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h3>

            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please
              contact us at:
            </p>

            <p className="mb-4">
              Email: sharvan.patel92@gmail.com
              <br />
              Phone: +91 9929262986
              <br />
              Address: Jodhpur, Rajasthan (India)
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">9. Governing Law and Jurisdiction</h3>

            <p className="mb-4">
              This Privacy Policy and any disputes arising out of or related to it shall be governed
              by the laws of India. All disputes, claims, controversies, or differences arising out
              of or in connection with this Privacy Policy shall be subject to the exclusive
              jurisdiction of the courts in Jodhpur, Rajasthan, India. By using our website, you
              consent to the jurisdiction and venue of such courts.
            </p>

            <p className="mb-4">
              In the event of any legal action against Thar Desert Photography, our liability shall
              be limited to the extent permitted by applicable law. We reserve all rights to defend
              ourselves against any claims and shall not be held liable for any consequential,
              incidental, indirect, or special damages arising out of or related to your use of our
              website or services.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">10. Intellectual Property Rights</h3>

            <p className="mb-4">
              All content on this website, including but not limited to text, graphics, logos,
              images, photographs, audio clips, digital downloads, data compilations, and software,
              is the property of Thar Desert Photography and is protected by Indian and
              international copyright laws.
            </p>

            <p className="mb-4">
              You may not copy, reproduce, distribute, publish, display, perform, modify, create
              derivative works, transmit, or in any way exploit any part of our content without
              obtaining prior written permission from Thar Desert Photography. Unauthorized use of
              our content may violate copyright, trademark, and other applicable laws and could
              result in criminal or civil penalties.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
