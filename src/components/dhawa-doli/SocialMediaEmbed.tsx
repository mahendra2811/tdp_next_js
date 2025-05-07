'use client';

import React, { useEffect } from 'react';
import { dhawaDoliInfo } from '@/constant/dhawaDoliInfo';
import Script from 'next/script';

export default function SocialMediaEmbed() {
  // Function to load Facebook SDK
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    };

    // Check if the element is in viewport
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll for Facebook video
    const handleFacebookVideoScroll = () => {
      const facebookVideoSection = document.getElementById('facebookVideoSection');
      if (facebookVideoSection && isElementInViewport(facebookVideoSection)) {
        loadFacebookSDK();
        window.removeEventListener('scroll', handleFacebookVideoScroll);
      }
    };

    // Function to handle scroll for Instagram video
    const handleInstagramVideoScroll = () => {
      const instagramReelSection = document.getElementById('instagramReelSection');
      if (instagramReelSection && isElementInViewport(instagramReelSection)) {
        if (typeof window.instgrm !== 'undefined') {
          window.instgrm.Embeds.process();
        }
        window.removeEventListener('scroll', handleInstagramVideoScroll);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleFacebookVideoScroll);
    window.addEventListener('scroll', handleInstagramVideoScroll);

    // Initial check
    handleFacebookVideoScroll();
    handleInstagramVideoScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleFacebookVideoScroll);
      window.removeEventListener('scroll', handleInstagramVideoScroll);
    };
  }, []);

  return (
    <>
      {/* Facebook SDK Script */}
      <Script 
        async 
        defer 
        crossOrigin="anonymous" 
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0"
        strategy="lazyOnload"
      />
      
      {/* Instagram SDK Script */}
      <Script 
        async 
        defer 
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
      
      <section className="py-12">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          {/* Facebook Video Section */}
          <div id="facebookVideoSection" className="w-full flex justify-center">
            <div className="fb-video" 
              data-href={dhawaDoliInfo.facebookVideo} 
              data-width="500" 
              data-show-text="false"
            >
              <div className="fb-xfbml-parse-ignore">
                <blockquote cite={dhawaDoliInfo.facebookVideo}>
                  <a href={dhawaDoliInfo.facebookVideo}>Video</a>
                  <p>Dhawa Doli Wildlife Sanctuary video by Sarvan Patel</p>
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* Instagram Reel Section */}
          <div id="instagramReelSection" className="w-full flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink={dhawaDoliInfo.instagramReel} 
              data-instgrm-version="13"
              style={{ 
                maxWidth: '540px', 
                width: '100%', 
                background: '#FFF', 
                borderRadius: '3px', 
                border: '1px solid #dbdbdb', 
                boxShadow: 'none', 
                margin: '1px', 
                padding: '0', 
                minWidth: '326px' 
              }}
            ></blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

// Add TypeScript declarations for global window object
declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}