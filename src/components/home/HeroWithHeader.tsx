'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Link from 'next/link';

interface HeroWithHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function HeroWithHeader({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroWithHeaderProps) {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: '600px',
      }}
    >
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 pt-16 pb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-white drop-shadow mb-4 text-center">
          {title}
        </h2>
        <p className="text-white text-xl sm:text-2xl font-medium mb-6 text-center max-w-xl">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonLink}
            target="_blank"
            className="bg-white hover:bg-gray-100 text-primary rounded-md px-6 py-3 font-semibold transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
