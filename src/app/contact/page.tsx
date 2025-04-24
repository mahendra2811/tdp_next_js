import { Metadata } from "next";
import HeroSection from "@/components/contact/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialProfiles from "@/components/contact/SocialProfiles";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";
import { contactInfo } from "@/constant/contactInfo";

export const metadata: Metadata = {
  title: "Contact - Thar Desert Photography",
  description: "Get in touch with Thar Desert Photography for wildlife tours, photography sessions, and more.",
};

export default function ContactPage() {
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title="Contact Me"
        subtitle="Guiding You to Nature's Secrets and Avian Delights of the incredible Rajasthan."
        backgroundImage="/assets/Images/contact/banner.JPG"
        primaryButtonText="About Me"
        primaryButtonLink="/about"
        secondaryButtonText="Book Now"
        secondaryButtonLink={contactInfo.inquiryFormLink}
      />
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* Contact Information */}
      <ContactInfo />
      
      {/* Social Media Profiles */}
      <SocialProfiles />
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
