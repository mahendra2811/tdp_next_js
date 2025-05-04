'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/utils/analytics';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    // Only track if the path has changed
    if (previousPathRef.current !== pathname) {
      // Get the page title
      const pageTitle = document.title;
      
      // Create the full URL with search params
      const url = searchParams?.size
        ? `${pathname}?${searchParams.toString()}`
        : pathname;
      
      // Track the page view
      trackPageView(url, pageTitle, {
        referrer: previousPathRef.current || document.referrer,
        language: document.documentElement.lang || 'en'
      });
      
      // Update the previous path
      previousPathRef.current = pathname;
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}