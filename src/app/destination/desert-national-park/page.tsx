'use client';

import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';
import { desertNationalParkInfoHindi } from '@/constant/desertNationalParkInfoHindi';
import HeroSection from '@/components/contact/HeroSection';
import ParkInfo from '@/components/desert-national-park/ParkInfo';
import ParkTimings from '@/components/desert-national-park/ParkTimings';
import HowToReach from '@/components/desert-national-park/HowToReach';
import BestTimeToVisit from '@/components/desert-national-park/BestTimeToVisit';
import ParkDetails from '@/components/desert-national-park/ParkDetails';
import BirdsChecklist from '@/components/desert-national-park/BirdsChecklist';
import MammalsChecklist from '@/components/desert-national-park/MammalsChecklist';
import ReptilesChecklist from '@/components/desert-national-park/ReptilesChecklist';
import Gallery from '@/components/desert-national-park/Gallery';
import GoogleMap from '@/components/desert-national-park/GoogleMap';
import CallToAction from '@/components/contact/CallToAction';
import WhatsAppFloat from '@/components/contact/WhatsAppFloat';
import { useLanguage } from '@/context/LanguageContext';

export default function DesertNationalParkPage() {
  const { language } = useLanguage();
  const content = language === 'en' ? desertNationalParkInfo : desertNationalParkInfoHindi;
  return (
    <main>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Hero Section */}
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.heroImage}
        primaryButtonText={content.aboutButtonText}
        primaryButtonLink={content.aboutButtonLink}
        secondaryButtonText={content.bookButtonText}
        secondaryButtonLink={content.bookButtonLink}
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
