'use client';

import { gibInfo } from '@/constant/gibInfo';
import { gibInfoHindi } from '@/constant/gibInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import Introduction from '@/components/gib/Introduction';
import GibGallery from '@/components/gib/GibGallery';
import ConservationPoints from '@/components/gib/ConservationPoints';
import GibInfoTable from '@/components/gib/GibInfoTable';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function GibPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? gibInfo : gibInfoHindi;

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

      {/* Introduction */}
      <Introduction content={content.introduction} />

      {/* First Gallery */}
      <GibGallery images={content.galleryImages1} />

      {/* Conservation Points */}
      <ConservationPoints points={content.conservationPoints} />

      {/* Second Gallery */}
      <GibGallery
        images={content.galleryImages2}
        viewMoreLink="/gallery"
        viewMoreText={language === 'en' ? 'View gallery' : 'गैलरी देखें'}
      />

      {/* GIB Info Table */}
      <GibInfoTable
        data={content.tableData}
        title={language === 'en' ? 'Brief about GIB' : 'जीआईबी के बारे में संक्षिप्त जानकारी'}
        moreInfoLink={content.moreInfoLink}
      />

      {/* Call to Action */}
      <div className="mt-24 mb-8">
        <CallToAction />
      </div>
    </main>
  );
}
