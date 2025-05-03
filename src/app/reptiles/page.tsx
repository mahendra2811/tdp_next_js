'use client';

import { reptilesInfo } from '@/constant/reptilesInfo';
import { reptilesInfoHindi } from '@/constant/reptilesInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import ReptilesInfo from '@/components/reptiles/ReptilesInfo';
import ReptilesGallery from '@/components/reptiles/ReptilesGallery';
import ReptilesChecklist from '@/components/reptiles/ReptilesChecklist';
import ReptilesCallToAction from '@/components/reptiles/ReptilesCallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function ReptilesPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? reptilesInfo : reptilesInfoHindi;

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
        <ReptilesGallery galleryImages={content.galleryImages1} />
      </section>

      {/* Reptiles Information Section */}
      <section className="py-8 bg-gray-50">
        <ReptilesInfo introText={content.introText} infoSections={content.infoSections} />
      </section>

      {/* Reptiles Checklist Section */}
      <section className="py-8">
        <ReptilesChecklist reptilesChecklist={content.reptilesChecklist} />
      </section>

      {/* Second Gallery Section */}
      <section className="py-8 bg-gray-50">
        <ReptilesGallery galleryImages={content.galleryImages2} />
      </section>

      {/* Third Gallery Section */}
      <section className="py-8">
        <ReptilesGallery galleryImages={content.galleryImages3} />
      </section>
      {/* Fourth Gallery Section with View More Button */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === 'en' ? 'MORE REPTILE PHOTOS' : 'अधिक सरीसृप तस्वीरें'}
          </h2>
          <ReptilesGallery galleryImages={content.galleryImages4} showViewMoreButton={true} />
        </div>
      </section>

      {/* Call to Action Section */}
      <div id="call-to-action-section">
        <ReptilesCallToAction />
      </div>
    </main>
  );
}
