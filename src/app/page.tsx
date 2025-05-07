'use client';

import { homeInfo } from '@/constant/homeInfo';
import { homeInfoHindi } from '@/constant/homeInfoHindi';
import HeroWithHeader from '@/components/home/HeroWithHeader';
import AboutSection from '@/components/home/AboutSection';
import PopularDestinations from '@/components/home/PopularDestinations';
import PackageSection from '@/components/home/PackageSection';
import FacebookVideo from '@/components/home/FacebookVideo';
import LazyGallerySection from '@/components/home/LazyGallerySection';
import YouTubeSection from '@/components/home/YouTubeSection';
import HomeCallToAction from '@/components/home/HomeCallToAction';
// JoinTeamButton is now included in ClientBody
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  // Select content based on language
  const content = language === 'en' ? homeInfo : homeInfoHindi;

  return (
    <main>
      {/* Join Team Button is now included in ClientBody */}

      {/* Hero Section with Header */}
      <HeroWithHeader
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
      <LazyGallerySection
        subtitle={content.gallery.subtitle}
        title={content.gallery.title}
        description={content.gallery.description}
        images={content.gallery.images}
        buttonText={content.gallery.buttonText}
        buttonLink={content.gallery.buttonLink}
      />

      {/* Photographer Gallery Section */}
      <LazyGallerySection
        subtitle={content.photographerGallery.subtitle}
        title={content.photographerGallery.title}
        description={content.photographerGallery.description}
        images={content.photographerGallery.images}
        buttonText={content.photographerGallery.buttonText}
        buttonLink={content.photographerGallery.buttonLink}
      />

      {/* YouTube Section */}
      {/* <YouTubeSection
        title={content.youtubeSection.title}
        embedId={content.youtubeSection.embedId}
      /> */}

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
