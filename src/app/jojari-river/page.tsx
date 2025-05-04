'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import { useLanguage } from '@/context/LanguageContext';
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

export default function JojariRiverPage() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  return (
    <main>
      <div className="min-h-screen">
        {/* Hero Section with Header */}
        <HeroWithHeader
          title={info.title}
          subtitle={info.subtitle}
          backgroundImage={info.heroImage}
          primaryButtonText={info.aboutButtonText}
          primaryButtonLink={info.aboutButtonLink}
          secondaryButtonText={info.bookButtonText}
          secondaryButtonLink={info.bookButtonLink}
        />

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
