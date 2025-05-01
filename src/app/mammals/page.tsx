import { Metadata } from "next";
import { mammalsInfo } from "@/constant/mammalsInfo";
import HeroSection from "@/components/contact/HeroSection";
import MammalsInfo from "@/components/mammals/MammalsInfo";
import MammalsGallery from "@/components/mammals/MammalsGallery";
import MammalsChecklist from "@/components/mammals/MammalsChecklist";
import MammalsWisdom from "@/components/mammals/MammalsWisdom";
import MammalsCallToAction from "@/components/mammals/MammalsCallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Mammals - Thar Desert Photography",
  description: "Explore the diverse mammal species of the Thar Desert in Rajasthan, India. Learn about the unique adaptations of these remarkable creatures in this arid ecosystem.",
};

export default function MammalsPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={mammalsInfo.title}
        subtitle={mammalsInfo.subtitle}
        backgroundImage={mammalsInfo.heroImage}
        primaryButtonText={mammalsInfo.contactButtonText}
        primaryButtonLink={mammalsInfo.contactButtonLink}
        secondaryButtonText={mammalsInfo.bookButtonText}
        secondaryButtonLink={mammalsInfo.bookButtonLink}
      />
      
      {/* First Gallery Section */}
      <section className="py-8">
        <MammalsGallery 
          title="Mammals photo's from Sharvan's lens"
          galleryImages={mammalsInfo.galleryImages1} 
        />
      </section>
      
      {/* Mammals Information Section */}
      <section className="py-8 bg-gray-50">
        <MammalsInfo 
          introText={mammalsInfo.introText}
          infoSections={mammalsInfo.infoSections}
          conclusion={mammalsInfo.conclusion}
        />
      </section>
      
      {/* Mammals Checklist Section */}
      <section className="py-8">
        <MammalsChecklist 
          mammalsChecklist={mammalsInfo.mammalsChecklist}
        />
      </section>
      
      {/* Mammals Wisdom Section */}
      <section className="py-8 bg-gray-50">
        <MammalsWisdom 
          wisdomItems={mammalsInfo.mammalWisdom}
        />
      </section>
      
      {/* Second Gallery Section */}
      <section className="py-8">
        <MammalsGallery 
          title="More Mammals photo's from Sharvan's lens"
          galleryImages={mammalsInfo.galleryImages2} 
          showViewMoreButton={true}
        />
      </section>
      
      {/* Call to Action */}
      <MammalsCallToAction />
    </main>
  );
}