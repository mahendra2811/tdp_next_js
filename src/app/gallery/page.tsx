'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/common/Loading';

// Dynamically import the gallery page client component with SSR disabled
// This ensures the gallery page is only loaded when this route is accessed
const GalleryPageClient = dynamic(() => import('./page.client').then((mod) => mod.default), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <Loading />, // Show loading component while the page is being loaded
});

export default function GalleryPage() {
  return (
    <Suspense fallback={<Loading />}>
      <GalleryPageClient />
    </Suspense>
  );
}
