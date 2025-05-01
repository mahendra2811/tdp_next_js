"use client";

import Link from "next/link";

interface HomeCallToActionProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  phoneNumber: string;
}

export default function HomeCallToAction({
  subtitle,
  title,
  description,
  buttonText,
  phoneNumber,
}: HomeCallToActionProps) {
  return (
    <section className="bg-[#1a73e8] py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[calc(100%-225px)] mb-8 md:mb-0">
            <p className="text-white uppercase font-medium text-sm mb-2 font-['Montserrat',_sans-serif]">
              {subtitle}
            </p>
            
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4 uppercase font-['Montserrat',_sans-serif]">
              {title}
            </h2>
            
            <p className="text-white text-base mb-6">
              {description}
            </p>
          </div>
          
          <a 
            href={`tel:${phoneNumber}`} 
            className="inline-block text-white text-sm uppercase font-medium py-3 px-6 rounded-full border-2 border-white hover:bg-white/10 transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}