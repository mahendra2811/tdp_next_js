import React from 'react';
import HeroSection from '@/components/jojari-river/HeroSection';
import RiverInfo from '@/components/jojari-river/RiverInfo';
import RiverDetails from '@/components/jojari-river/RiverDetails';
import RiverTimings from '@/components/jojari-river/RiverTimings';
import HowToReach from '@/components/jojari-river/HowToReach';
import BestTimeToVisit from '@/components/jojari-river/BestTimeToVisit';
import GoogleMap from '@/components/jojari-river/GoogleMap';
import PoliticalPromises from '@/components/jojari-river/PoliticalPromises';
import EnvironmentalImpacts from '@/components/jojari-river/EnvironmentalImpacts';
import EconomicBenefits from '@/components/jojari-river/EconomicBenefits';
import ConservationProjects from '@/components/jojari-river/ConservationProjects';
import Gallery from '@/components/jojari-river/Gallery';

export const metadata = {
  title: 'Jojari River | Thar Desert Photography',
  description:
    'Explore the significance, history, and current challenges of the Jojari River in the Thar Desert region.',
};

export default function JojariRiverPage() {
  return (
    <main>
      <div className="min-h-screen">
        <HeroSection />

        {/* Main content sections */}
        <RiverInfo />
        <RiverDetails />
        <RiverTimings />
        <HowToReach />
        <BestTimeToVisit />
        <GoogleMap />
        <PoliticalPromises />
        <EnvironmentalImpacts />
        <EconomicBenefits />
        <ConservationProjects />
        <Gallery />
      </div>
    </main>
  );
}
