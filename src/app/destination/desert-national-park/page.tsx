import { Metadata } from "next";
import { desertNationalParkInfo } from "@/constant/desertNationalParkInfo";
import { desertNationalParkInfoHindi } from "@/constant/desertNationalParkInfoHindi";
import HeroSection from "@/components/contact/HeroSection";
import ParkInfo from "@/components/desert-national-park/ParkInfo";
import ParkTimings from "@/components/desert-national-park/ParkTimings";
import HowToReach from "@/components/desert-national-park/HowToReach";
import BestTimeToVisit from "@/components/desert-national-park/BestTimeToVisit";
import ParkDetails from "@/components/desert-national-park/ParkDetails";
import BirdsChecklist from "@/components/desert-national-park/BirdsChecklist";
import MammalsChecklist from "@/components/desert-national-park/MammalsChecklist";
import ReptilesChecklist from "@/components/desert-national-park/ReptilesChecklist";
import Gallery from "@/components/desert-national-park/Gallery";
import GoogleMap from "@/components/desert-national-park/GoogleMap";
import CallToAction from "@/components/contact/CallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";
import { useLanguage } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Desert National Park - Thar Desert Photography",
  description: "Explore the magnificence of Desert National Park, a pristine oasis amidst the Thar Desert with Sarvan Patel. Discover wildlife safaris, bird watching, and breathtaking landscapes in Jaisalmer, Rajasthan.",
};

export default function DesertNationalParkPage() {
  // This is a server component, so we can't use the useLanguage hook directly
  // The language context will be used in the client components
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <HeroSection 
        title={desertNationalParkInfo.title}
        subtitle={desertNationalParkInfo.subtitle}
        backgroundImage={desertNationalParkInfo.heroImage}
        primaryButtonText={desertNationalParkInfo.aboutButtonText}
        primaryButtonLink={desertNationalParkInfo.aboutButtonLink}
        secondaryButtonText={desertNationalParkInfo.bookButtonText}
        secondaryButtonLink={desertNationalParkInfo.bookButtonLink}
      />
      
      {/* Park Information */}
      <ParkInfo />
      
      {/* Gallery - First Set */}
      <Gallery />
      
      {/* Park Timings */}
      <ParkTimings />
      
      {/* How to Reach */}
      <HowToReach />
      
      {/* Best Time to Visit */}
      <BestTimeToVisit />
      
      {/* Park Details */}
      <ParkDetails />
      
      {/* Birds Checklist */}
      <BirdsChecklist />
      
      {/* Mammals Checklist */}
      <MammalsChecklist />
      
      {/* Reptiles Checklist */}
      <ReptilesChecklist />
      
      {/* Google Map */}
      <GoogleMap />
      
      {/* Call to Action */}
      <div className="mt-24 mb-8">
        <CallToAction />
      </div>
    </main>
  );
}