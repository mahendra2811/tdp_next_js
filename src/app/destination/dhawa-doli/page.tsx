'use client';

import { dhawaDoliInfo } from '@/constant/dhawaDoliInfo';
import { dhawaDoliInfoHindi } from '@/constant/dhawaDoliInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import SanctuaryInfo from '@/components/dhawa-doli/SanctuaryInfo';
import SocialMediaEmbed from '@/components/dhawa-doli/SocialMediaEmbed';
import BestTimeToVisit from '@/components/dhawa-doli/BestTimeToVisit';
import Gallery from '@/components/dhawa-doli/Gallery';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function DhawaDoliPage() {
  const { language } = useLanguage();
  const content = language === 'en' ? dhawaDoliInfo : dhawaDoliInfoHindi;
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Hero Section */}
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.heroImage}
        primaryButtonText={content.aboutButtonText}
        primaryButtonLink={content.aboutButtonLink}
        secondaryButtonText={content.bookButtonText}
        secondaryButtonLink={content.bookButtonLink}
      />

      {/* Sanctuary Information */}
      <SanctuaryInfo />

      {/* Social Media Embeds */}
      <SocialMediaEmbed />

      {/* Best Time to Visit */}
      <BestTimeToVisit />

      {/* Gallery */}
      <Gallery />

      {/* Call to Action */}
      <div className="mt-24 mb-8">
        <CallToAction />
      </div>
    </main>
  );
}
