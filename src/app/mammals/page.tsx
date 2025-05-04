'use client';

import { mammalsInfo } from '@/constant/mammalsInfo';
import { mammalsInfoHindi } from '@/constant/mammalsInfoHindi';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import MammalsInfo from '@/components/mammals/MammalsInfo';
import MammalsGallery from '@/components/mammals/MammalsGallery';
import MammalsChecklist from '@/components/mammals/MammalsChecklist';
import MammalsWisdom from '@/components/mammals/MammalsWisdom';
import MammalsCallToAction from '@/components/mammals/MammalsCallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function MammalsPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? mammalsInfo : mammalsInfoHindi;

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

      {/* First Gallery Section */}
      <section className="py-8">
        <MammalsGallery
          title={
            language === 'en'
              ? "Mammals photo's from Sharvan's lens"
              : 'शरवन के लेंस से स्तनधारियों की तस्वीरें'
          }
          galleryImages={content.galleryImages1}
        />
      </section>

      {/* Mammals Information Section */}
      <section className="py-8 bg-gray-50">
        <MammalsInfo
          introText={content.introText}
          infoSections={content.infoSections}
          conclusion={content.conclusion}
        />
      </section>

      {/* Mammals Checklist Section */}
      <section className="py-8">
        <MammalsChecklist mammalsChecklist={content.mammalsChecklist} />
      </section>

      {/* Mammals Wisdom Section */}
      <section className="py-8 bg-gray-50">
        <MammalsWisdom wisdomItems={content.mammalWisdom} />
      </section>

      {/* Second Gallery Section */}
      <section className="py-8">
        <MammalsGallery
          title={
            language === 'en'
              ? "More Mammals photo's from Sharvan's lens"
              : 'शरवन के लेंस से अधिक स्तनधारियों की तस्वीरें'
          }
          galleryImages={content.galleryImages2}
          showViewMoreButton={true}
        />
      </section>

      {/* Call to Action */}
      <MammalsCallToAction />
    </main>
  );
}
