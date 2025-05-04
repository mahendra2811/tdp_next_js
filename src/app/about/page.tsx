'use client';

import { aboutInfo } from '@/constant/aboutInfo';
import { aboutInfoHindi } from '@/constant/aboutInfoHindi';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import AboutSection from '@/components/about/AboutSection';
import AboutCallToAction from '@/components/about/AboutCallToAction';
// JoinTeamButton is now included in ClientBody
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? aboutInfo : aboutInfoHindi;

  return (
    <main>
      {/* Join Team Button is now included in ClientBody */}

      {/* Hero Section with Header */}
      <HeroWithHeader
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
