'use client';

import { galleryInfo } from '@/constant/galleryInfo';
import { galleryInfoHindi } from '@/constant/galleryInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import GallerySection from '@/components/gallery/GallerySection';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? galleryInfo : galleryInfoHindi;

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

      {/* Gallery Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            {language === 'en'
              ? "All Photos are clicked by Sharvan's lens"
              : 'सभी फोटो शरवन के लेंस से क्लिक किए गए हैं'}
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      {content.sections.map((section) => (
        <GallerySection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          images={section.images}
        />
      ))}

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
