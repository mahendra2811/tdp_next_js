import { Metadata } from "next";
import { galleryInfo } from "@/constant/galleryInfo";
import HeroSection from "@/components/contact/HeroSection";
import GallerySection from "@/components/gallery/GallerySection";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Gallery - Thar Desert Photography",
  description: "Explore our gallery showcasing the beauty of the Thar Desert, its wildlife, and the rich cultural heritage of Rajasthan through the lens of Sharvan Patel.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={galleryInfo.title}
        subtitle={galleryInfo.subtitle}
        backgroundImage={galleryInfo.heroImage}
        primaryButtonText={galleryInfo.contactButtonText}
        primaryButtonLink={galleryInfo.contactButtonLink}
        secondaryButtonText={galleryInfo.bookButtonText}
        secondaryButtonLink={galleryInfo.bookButtonLink}
      />
      
      {/* Gallery Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            All Photos are clicked by Sharvan's lens
          </p>
        </div>
      </section>
      
      {/* Gallery Sections */}
      {galleryInfo.sections.map((section) => (
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
