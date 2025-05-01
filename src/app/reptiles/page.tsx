import { Metadata } from "next";
import { reptilesInfo } from "@/constant/reptilesInfo";
import HeroSection from "@/components/contact/HeroSection";
import ReptilesInfo from "@/components/reptiles/ReptilesInfo";
import ReptilesGallery from "@/components/reptiles/ReptilesGallery";
import ReptilesChecklist from "@/components/reptiles/ReptilesChecklist";
import ReptilesCallToAction from "@/components/reptiles/ReptilesCallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Reptiles - Thar Desert Photography",
  description: "Explore the diverse reptile species of the Thar Desert in Rajasthan, India. Learn about the unique adaptations of these remarkable creatures in this arid ecosystem.",
};

export default function ReptilesPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={reptilesInfo.title}
        subtitle={reptilesInfo.subtitle}
        backgroundImage={reptilesInfo.heroImage}
        primaryButtonText={reptilesInfo.contactButtonText}
        primaryButtonLink={reptilesInfo.contactButtonLink}
        secondaryButtonText={reptilesInfo.bookButtonText}
        secondaryButtonLink={reptilesInfo.bookButtonLink}
      />
      
      {/* First Gallery Section */}
      <section className="py-8">
        <ReptilesGallery 
          galleryImages={reptilesInfo.galleryImages1} 
        />
      </section>
      
      {/* Reptiles Information Section */}
      <section className="py-8 bg-gray-50">
        <ReptilesInfo 
          introText={reptilesInfo.introText}
          infoSections={reptilesInfo.infoSections}
        />
      </section>
      
      {/* Reptiles Checklist Section */}
      <section className="py-8">
        <ReptilesChecklist 
          reptilesChecklist={reptilesInfo.reptilesChecklist}
        />
      </section>
      
      {/* Second Gallery Section */}
      <section className="py-8 bg-gray-50">
        <ReptilesGallery 
          galleryImages={reptilesInfo.galleryImages2} 
        />
      </section>
      
      {/* Third Gallery Section */}
      <section className="py-8">
        <ReptilesGallery 
          galleryImages={reptilesInfo.galleryImages3} 
        />
      </section>
      {/* Fourth Gallery Section with View More Button */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">MORE REPTILE PHOTOS</h2>
          <ReptilesGallery
            galleryImages={reptilesInfo.galleryImages4}
            showViewMoreButton={true}
          />
        </div>
      </section>
      
      {/* Call to Action Section */}
      <div id="call-to-action-section">
        <ReptilesCallToAction />
      </div>
    </main>
  );
}