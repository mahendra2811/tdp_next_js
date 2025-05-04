'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Image from 'next/image';

interface HeroWithHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
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
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 py-16 min-h-[400px] text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">{subtitle}</p>

        {/* Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-wrap justify-center gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Link href={primaryButtonLink}>
                <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  {primaryButtonText}
                </button>
              </Link>
            )}

            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <button className="bg-white hover:bg-gray-100 text-primary font-medium py-2 px-6 rounded-md transition-colors">
                  {secondaryButtonText}
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
