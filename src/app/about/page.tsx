import { Metadata } from "next";
import { aboutInfo } from "@/constant/aboutInfo";
import HeroSection from "@/components/contact/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import AboutCallToAction from "@/components/about/AboutCallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "About - Thar Desert Photography",
  description: "Learn about Sharvan Patel, a passionate photographer and conservationist from the Thar Desert region of Rajasthan, India.",
};

export default function AboutPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={aboutInfo.title}
        subtitle={aboutInfo.subtitle}
        backgroundImage={aboutInfo.heroImage}
        primaryButtonText={aboutInfo.contactButtonText}
        primaryButtonLink={aboutInfo.contactButtonLink}
        secondaryButtonText={aboutInfo.bookButtonText}
        secondaryButtonLink={aboutInfo.bookButtonLink}
      />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Call to Action */}
      <AboutCallToAction />
    </main>
  );
}
