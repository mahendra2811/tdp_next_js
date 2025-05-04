'use client';
import { teamIntro } from '@/constant/teamData';
import { teamIntroHindi } from '@/constant/teamDataHindi';
import { useLanguage } from '@/context/LanguageContext';
import HeroWithHeader from '@/components/common/HeroWithHeader';

interface TeamHeroSectionProps {
  backgroundImage?: string;
}

export default function TeamHeroSection({
  backgroundImage = '/assets/Images/team/banner.JPG',
}: TeamHeroSectionProps) {
  const { language } = useLanguage();

  // Select content based on language
  const currentTeamIntro = language === 'en' ? teamIntro : teamIntroHindi;
  
  return (
    <HeroWithHeader
      title={currentTeamIntro.title}
      subtitle={currentTeamIntro.subtitle || ''}
      backgroundImage={backgroundImage}
      primaryButtonText={language === 'en' ? 'About me' : 'मेरे बारे में'}
      primaryButtonLink="/about"
      secondaryButtonText={language === 'en' ? 'Book now' : 'अभी बुक करें'}
      secondaryButtonLink="https://forms.gle/sBWPWkdsfHUVrkqD9"
    />
  );
}
