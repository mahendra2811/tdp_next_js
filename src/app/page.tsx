'use client';

import { homeInfo } from '@/constant/homeInfo';
import { homeInfoHindi } from '@/constant/homeInfoHindi';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import PopularDestinations from '@/components/home/PopularDestinations';
import PackageSection from '@/components/home/PackageSection';
import FacebookVideo from '@/components/home/FacebookVideo';
import GallerySection from '@/components/home/GallerySection';
import YouTubeSection from '@/components/home/YouTubeSection';
import HomeCallToAction from '@/components/home/HomeCallToAction';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? homeInfo : homeInfoHindi;

  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat
        phoneNumber="919929262986"
        message="hello%20Sharvan%20patel%20I%27m%20interested%20to%20visit%20Dhawa%20Doli%20wildlife%20santuary."
      />

      {/* Hero Section */}
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={content.hero.backgroundImage}
        primaryButtonText={content.hero.primaryButtonText}
        primaryButtonLink={content.hero.primaryButtonLink}
        secondaryButtonText={content.hero.secondaryButtonText}
        secondaryButtonLink={content.hero.secondaryButtonLink}
      />

      {/* About Section */}
      <AboutSection
        subtitle={content.about.subtitle}
        title={content.about.title}
        content={content.about.content}
        buttonText={content.about.buttonText}
        buttonLink={content.about.buttonLink}
      />

      {/* Popular Destinations */}
      <PopularDestinations
        subtitle={content.popularDestinations.subtitle}
        title={content.popularDestinations.title}
        description={content.popularDestinations.description}
        destinations={content.popularDestinations.destinations}
        buttonText={content.popularDestinations.buttonText}
        buttonLink={content.popularDestinations.buttonLink}
      />

      {/* Package Section */}
      <PackageSection
        subtitle={content.packages.subtitle}
        title={content.packages.title}
        packages={content.packages.packages}
        viewAllButtonText={content.packages.viewAllButtonText}
        viewAllButtonLink={content.packages.viewAllButtonLink}
      />

      {/* Facebook Video Section */}
      <FacebookVideo videoUrl={content.facebookVideo.videoUrl} />

      {/* Main Gallery Section */}
      <GallerySection
        subtitle={content.gallery.subtitle}
        title={content.gallery.title}
        description={content.gallery.description}
        images={content.gallery.images}
        buttonText={content.gallery.buttonText}
        buttonLink={content.gallery.buttonLink}
      />

      {/* Photographer Gallery Section */}
      <GallerySection
        subtitle={content.photographerGallery.subtitle}
        title={content.photographerGallery.title}
        description={content.photographerGallery.description}
        images={content.photographerGallery.images}
        buttonText={content.photographerGallery.buttonText}
        buttonLink={content.photographerGallery.buttonLink}
      />

      {/* YouTube Section */}
      <YouTubeSection
        title={content.youtubeSection.title}
        embedId={content.youtubeSection.embedId}
      />

      {/* Call to Action */}
      <HomeCallToAction
        subtitle={content.callToAction.subtitle}
        title={content.callToAction.title}
        description={content.callToAction.description}
        buttonText={content.callToAction.buttonText}
        phoneNumber={content.callToAction.phoneNumber}
      />
    </main>
  );
}
