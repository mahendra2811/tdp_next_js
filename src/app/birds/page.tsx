'use client';

import { birdsInfo } from '@/constant/birdsInfo';
import { birdsInfoHindi } from '@/constant/birdsInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import BirdsInfo from '@/components/birds/BirdsInfo';
import BirdsGallery from '@/components/birds/BirdsGallery';
import BirdsChecklist from '@/components/birds/BirdsChecklist';
import BirdingWisdom from '@/components/birds/BirdingWisdom';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function BirdsPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? birdsInfo : birdsInfoHindi;

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

      {/* First Gallery Section */}
      <section className="py-8">
        <BirdsGallery
          title={
            language === 'en'
              ? "Birds photo's from radhe's lens"
              : 'राधे के लेंस से पक्षियों की तस्वीरें'
          }
          galleryImages={content.galleryImages1}
        />
      </section>

      {/* Birds Information Section */}
      <section className="py-8 bg-gray-50">
        <BirdsInfo
          introText={content.introText}
          infoSections={content.infoSections}
          conclusion={content.conclusion}
        />
      </section>

      {/* Birds Checklist Section */}
      <section className="py-8">
        <BirdsChecklist
          birdsChecklist={content.birdsChecklist}
          additionalBirdsChecklist={content.additionalBirdsChecklist}
        />
      </section>

      {/* Birding Wisdom Section */}
      <section className="py-8 bg-gray-50">
        <BirdingWisdom wisdomItems={content.birdingWisdom} />
      </section>

      {/* Second Gallery Section */}
      <section className="py-8">
        <BirdsGallery
          title={
            language === 'en'
              ? "Birds photo's from radhe's lens"
              : 'राधे के लेंस से पक्षियों की तस्वीरें'
          }
          galleryImages={content.galleryImages2}
          showViewMoreButton={true}
        />
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
