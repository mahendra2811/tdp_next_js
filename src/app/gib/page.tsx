import { Metadata } from "next";
import { gibInfo } from "@/constant/gibInfo";
import HeroSection from "@/components/contact/HeroSection";
import Introduction from "@/components/gib/Introduction";
import GibGallery from "@/components/gib/GibGallery";
import ConservationPoints from "@/components/gib/ConservationPoints";
import GibInfoTable from "@/components/gib/GibInfoTable";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Great Indian Bustard - Thar Desert Photography",
  description: "Learn about the Great Indian Bustard (Godawan), a critically endangered bird species and symbol of India's rich biodiversity. Explore conservation efforts and the importance of this magnificent bird.",
};

export default function GibPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={gibInfo.title}
        subtitle={gibInfo.subtitle}
        backgroundImage={gibInfo.heroImage}
        primaryButtonText={gibInfo.aboutButtonText}
        primaryButtonLink={gibInfo.aboutButtonLink}
        secondaryButtonText={gibInfo.bookButtonText}
        secondaryButtonLink={gibInfo.bookButtonLink}
      />
      
      {/* Introduction */}
      <Introduction content={gibInfo.introduction} />
      
      {/* First Gallery */}
      <GibGallery images={gibInfo.galleryImages1} />
      
      {/* Conservation Points */}
      <ConservationPoints points={gibInfo.conservationPoints} />
      
      {/* Second Gallery */}
      <GibGallery 
        images={gibInfo.galleryImages2} 
        viewMoreLink="/gallery"
        viewMoreText="View gallery"
      />
      
      {/* GIB Info Table */}
      <GibInfoTable 
        data={gibInfo.tableData}
        title="Brief about GIB"
        moreInfoLink={gibInfo.moreInfoLink}
      />
      
      {/* Call to Action */}
      <div className="mt-24 mb-8">
        <CallToAction />
      </div>
    </main>
  );
}