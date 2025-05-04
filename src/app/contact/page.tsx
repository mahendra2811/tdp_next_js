'use client';

import HeroWithHeader from '@/components/common/HeroWithHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import SocialProfiles from '@/components/contact/SocialProfiles';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { contactInfo } from '@/constant/contactInfo';
import { contactInfoHindi } from '@/constant/contactInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? contactInfo : contactInfoHindi;

  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Hero Section with Header */}
      <HeroWithHeader
        title={language === 'en' ? 'Contact Me' : 'मुझसे संपर्क करें'}
        subtitle={
          language === 'en'
            ? "Guiding You to Nature's Secrets and Avian Delights of the incredible Rajasthan."
            : 'अद्भुत राजस्थान के प्रकृति के रहस्यों और पक्षियों के आनंद तक आपका मार्गदर्शन करना।'
        }
        backgroundImage="/assets/Images/contact/banner.JPG"
        primaryButtonText={language === 'en' ? 'About Me' : 'मेरे बारे में'}
        primaryButtonLink="/about"
        secondaryButtonText={language === 'en' ? 'Book Now' : 'अभी बुक करें'}
        secondaryButtonLink={content.inquiryFormLink}
      />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Information */}
      <ContactInfo />

      {/* Social Media Profiles */}
      <SocialProfiles />

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
