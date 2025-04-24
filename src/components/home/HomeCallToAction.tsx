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
    <section className="py-20 bg-blue-600 text-white shadow-xl my-12">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-wider mb-3 opacity-90">{subtitle}</p>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-10">
          {description}
        </p>
        
        <a
          href={`tel:${phoneNumber}`}
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-10 rounded-md transition-colors text-lg shadow-md"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}