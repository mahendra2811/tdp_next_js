'use client';
import { useEffect, useRef } from 'react';
import { contactInfo } from '@/constant/contactInfo';
import Link from 'next/link';

export default function SocialProfiles() {
  const twitterTimelineRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.async = true;
    document.body.appendChild(twitterScript);

    // Load Instagram embed script
    const instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Cleanup function
    return () => {
      document.body.removeChild(twitterScript);
      document.body.removeChild(instagramScript);
    };
  }, []);

  return (
    <section className="py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Connect with Us on Social Media</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram Profile */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-3">Instagram</h3>
            <p className="mb-4">Follow us on Instagram for stunning wildlife photography.</p>
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
              <blockquote
                className="instagram-media w-full"
                data-instgrm-permalink={contactInfo.socialMedia.instagram.link}
                data-instgrm-version="14"
              >
                <a href={contactInfo.socialMedia.instagram.link}>Loading Instagram content...</a>
              </blockquote>
            </div>
          </div>

          {/* Twitter Profile */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-3">Twitter</h3>
            <p className="mb-4">Follow us on Twitter for real-time updates and conversations.</p>
            <div
              ref={twitterTimelineRef}
              className="aspect-square w-full overflow-hidden rounded-md bg-gray-100"
            >
              <a
                className="twitter-timeline"
                data-height="400"
                href={contactInfo.socialMedia.twitter.link}
              >
                Tweets by Thar Desert Photography
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Find Us</h3>
          <div ref={googleMapRef} className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={contactInfo.googleMapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhawa Doli Wildlife Sanctuary Map"
            ></iframe>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-8 text-center">
          <Link
            href={contactInfo.bookingFormLink}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Click to open enquiry form
          </Link>
        </div>
      </div>
    </section>
  );
}
