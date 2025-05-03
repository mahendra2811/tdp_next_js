'use client';

import { aboutInfo } from '@/constant/aboutInfo';
import { aboutInfoHindi } from '@/constant/aboutInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import AboutCallToAction from '@/components/about/AboutCallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? aboutInfo : aboutInfoHindi;

  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Hero Section */}
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.heroImage}
        primaryButtonText={content.contactButtonText}
        primaryButtonLink={content.contactButtonLink}
        secondaryButtonText={content.bookButtonText}
        secondaryButtonLink={content.bookButtonLink}
      />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action */}
      <AboutCallToAction />
    </main>
  );
}
