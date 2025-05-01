import { Metadata } from "next";
import { destinationInfo } from "@/constant/destinationInfo";
import HeroSection from "@/components/contact/HeroSection";
import DestinationGrid from "@/components/destination/DestinationGrid";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Tourist Destination - Thar Desert Photography",
  description: "Explore the wonders of Thar Desert with Sarvan Patel. Discover wildlife safaris, cultural experiences, and breathtaking landscapes in Rajasthan, India.",
};

export default function DestinationPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={destinationInfo.title}
        subtitle={destinationInfo.subtitle}
        backgroundImage={destinationInfo.heroImage}
        primaryButtonText={destinationInfo.contactButtonText}
        primaryButtonLink={destinationInfo.contactButtonLink}
        secondaryButtonText={destinationInfo.bookButtonText}
        secondaryButtonLink={destinationInfo.bookButtonLink}
      />
      
      {/* Destination Grid */}
      <DestinationGrid 
        destinations={destinationInfo.destinations}
        moreInfoLink={destinationInfo.moreInfoLink}
      />
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}