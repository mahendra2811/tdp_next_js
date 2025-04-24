import { homeInfo } from "@/constant/homeInfo";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import PackageSection from "@/components/home/PackageSection";
import FacebookVideo from "@/components/home/FacebookVideo";
import GallerySection from "@/components/home/GallerySection";
import YouTubeSection from "@/components/home/YouTubeSection";
import HomeCallToAction from "@/components/home/HomeCallToAction";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat 
        phoneNumber="919929262986" 
        message="hello%20Sharvan%20patel%20I%27m%20interested%20to%20visit%20Dhawa%20Doli%20wildlife%20santuary."
      />

      {/* Hero Section */}
      <HeroSection 
        title={homeInfo.hero.title}
        subtitle={homeInfo.hero.subtitle}
        backgroundImage={homeInfo.hero.backgroundImage}
        primaryButtonText={homeInfo.hero.primaryButtonText}
        primaryButtonLink={homeInfo.hero.primaryButtonLink}
        secondaryButtonText={homeInfo.hero.secondaryButtonText}
        secondaryButtonLink={homeInfo.hero.secondaryButtonLink}
      />

      {/* About Section */}
      <AboutSection 
        subtitle={homeInfo.about.subtitle}
        title={homeInfo.about.title}
        content={homeInfo.about.content}
        buttonText={homeInfo.about.buttonText}
        buttonLink={homeInfo.about.buttonLink}
      />

      {/* Popular Destinations */}
      <PopularDestinations 
        subtitle={homeInfo.popularDestinations.subtitle}
        title={homeInfo.popularDestinations.title}
        description={homeInfo.popularDestinations.description}
        destinations={homeInfo.popularDestinations.destinations}
        buttonText={homeInfo.popularDestinations.buttonText}
        buttonLink={homeInfo.popularDestinations.buttonLink}
      />

      {/* Package Section */}
      <PackageSection 
        subtitle={homeInfo.packages.subtitle}
        title={homeInfo.packages.title}
        packages={homeInfo.packages.packages}
        viewAllButtonText={homeInfo.packages.viewAllButtonText}
        viewAllButtonLink={homeInfo.packages.viewAllButtonLink}
      />

      {/* Facebook Video Section */}
      <FacebookVideo 
        videoUrl={homeInfo.facebookVideo.videoUrl}
      />

      {/* Main Gallery Section */}
      <GallerySection 
        subtitle={homeInfo.gallery.subtitle}
        title={homeInfo.gallery.title}
        description={homeInfo.gallery.description}
        images={homeInfo.gallery.images}
        buttonText={homeInfo.gallery.buttonText}
        buttonLink={homeInfo.gallery.buttonLink}
      />

      {/* Photographer Gallery Section */}
      <GallerySection 
        subtitle={homeInfo.photographerGallery.subtitle}
        title={homeInfo.photographerGallery.title}
        description={homeInfo.photographerGallery.description}
        images={homeInfo.photographerGallery.images}
        buttonText={homeInfo.photographerGallery.buttonText}
        buttonLink={homeInfo.photographerGallery.buttonLink}
      />

      {/* YouTube Section */}
      <YouTubeSection 
        title={homeInfo.youtubeSection.title}
        embedId={homeInfo.youtubeSection.embedId}
      />

      {/* Call to Action */}
      <HomeCallToAction
        subtitle={homeInfo.callToAction.subtitle}
        title={homeInfo.callToAction.title}
        description={homeInfo.callToAction.description}
        buttonText={homeInfo.callToAction.buttonText}
        phoneNumber={homeInfo.callToAction.phoneNumber}
      />
    </main>
  );
}
