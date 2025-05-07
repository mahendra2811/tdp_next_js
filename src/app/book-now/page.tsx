'use client';

import React from 'react';
import BookingForm from '@/components/booking/BookingForm';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function BookNowPage() {
  const { language } = useLanguage();
  
  const content = {
    title: language === 'en' ? 'Book Now' : 'अभी बुक करें',
    subtitle: language === 'en' 
      ? 'Book your unforgettable desert experience with Sharvan Patel'
      : 'शरवन पटेल के साथ अपना अविस्मरणीय रेगिस्तान अनुभव बुक करें',
    heroImage: '/assets/Images/hero-banner-1.jpg',
    primaryButtonText: language === 'en' ? 'Contact Us' : 'संपर्क करें',
    primaryButtonLink: '/contact',
    secondaryButtonText: language === 'en' ? 'View Gallery' : 'गैलरी देखें',
    secondaryButtonLink: '/gallery',
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Header */}
      <HeroWithHeader
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.heroImage}
        primaryButtonText={content.primaryButtonText}
        primaryButtonLink={content.primaryButtonLink}
        secondaryButtonText={content.secondaryButtonText}
        secondaryButtonLink={content.secondaryButtonLink}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Main Booking Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">
            {language === 'en' ? 'Complete Booking' : 'पूर्ण बुकिंग'}
          </h2>
          <BookingForm />
        </div>
      </div>
    </main>
  );
}