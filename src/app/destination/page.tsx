'use client';

import { destinationInfo } from '@/constant/destinationInfo';
import { destinationInfoHindi } from '@/constant/destinationInfoHindi';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import DestinationGrid from '@/components/destination/DestinationGrid';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function DestinationPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? destinationInfo : destinationInfoHindi;

  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

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

      {/* Destination Grid */}
      <DestinationGrid destinations={content.destinations} moreInfoLink={content.moreInfoLink} />

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
