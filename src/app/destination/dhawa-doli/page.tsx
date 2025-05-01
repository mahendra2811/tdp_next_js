import { Metadata } from "next";
import { dhawaDoliInfo } from "@/constant/dhawaDoliInfo";
import { dhawaDoliInfoHindi } from "@/constant/dhawaDoliInfoHindi";
import HeroSection from "@/components/contact/HeroSection";
import SanctuaryInfo from "@/components/dhawa-doli/SanctuaryInfo";
import SocialMediaEmbed from "@/components/dhawa-doli/SocialMediaEmbed";
import BestTimeToVisit from "@/components/dhawa-doli/BestTimeToVisit";
import Gallery from "@/components/dhawa-doli/Gallery";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";
import { useLanguage } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Dhawa Doli Wildlife Sanctuary - Thar Desert Photography",
  description: "Explore the wonders of Dhawa Doli Wildlife Sanctuary with Sarvan Patel. Discover wildlife safaris, bird watching, and breathtaking landscapes in Jodhpur, Rajasthan.",
};

export default function DhawaDoliPage() {
  // This is a server component, so we can't use the useLanguage hook directly
  // The language context will be used in the client components
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={dhawaDoliInfo.title}
        subtitle={dhawaDoliInfo.subtitle}
        backgroundImage={dhawaDoliInfo.heroImage}
        primaryButtonText={dhawaDoliInfo.aboutButtonText}
        primaryButtonLink={dhawaDoliInfo.aboutButtonLink}
        secondaryButtonText={dhawaDoliInfo.bookButtonText}
        secondaryButtonLink={dhawaDoliInfo.bookButtonLink}
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