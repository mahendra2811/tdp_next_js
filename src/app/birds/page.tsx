import { Metadata } from "next";
import { birdsInfo } from "@/constant/birdsInfo";
import HeroSection from "@/components/contact/HeroSection";
import BirdsInfo from "@/components/birds/BirdsInfo";
import BirdsGallery from "@/components/birds/BirdsGallery";
import BirdsChecklist from "@/components/birds/BirdsChecklist";
import BirdingWisdom from "@/components/birds/BirdingWisdom";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Birds - Thar Desert Photography",
  description: "Explore the diverse bird species of Desert National Park in Rajasthan, India. Learn about the unique avian life in this arid ecosystem.",
};

export default function BirdsPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={birdsInfo.title}
        subtitle={birdsInfo.subtitle}
        backgroundImage={birdsInfo.heroImage}
        primaryButtonText={birdsInfo.contactButtonText}
        primaryButtonLink={birdsInfo.contactButtonLink}
        secondaryButtonText={birdsInfo.bookButtonText}
        secondaryButtonLink={birdsInfo.bookButtonLink}
      />
      
      {/* First Gallery Section */}
      <section className="py-8">
        <BirdsGallery 
          title="Birds photo's from radhe's lens"
          galleryImages={birdsInfo.galleryImages1} 
        />
      </section>
      
      {/* Birds Information Section */}
      <section className="py-8 bg-gray-50">
        <BirdsInfo 
          introText={birdsInfo.introText}
          infoSections={birdsInfo.infoSections}
          conclusion={birdsInfo.conclusion}
        />
      </section>
      
      {/* Birds Checklist Section */}
      <section className="py-8">
        <BirdsChecklist 
          birdsChecklist={birdsInfo.birdsChecklist}
          additionalBirdsChecklist={birdsInfo.additionalBirdsChecklist}
        />
      </section>
      
      {/* Birding Wisdom Section */}
      <section className="py-8 bg-gray-50">
        <BirdingWisdom 
          wisdomItems={birdsInfo.birdingWisdom}
        />
      </section>
      
      {/* Second Gallery Section */}
      <section className="py-8">
        <BirdsGallery 
          title="Birds photo's from radhe's lens"
          galleryImages={birdsInfo.galleryImages2} 
          showViewMoreButton={true}
        />
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}