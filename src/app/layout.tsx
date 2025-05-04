import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { GalleryProvider } from '@/context/GalleryContext';
import { createLanguageMetadata } from '@/utils/seo';
import Script from 'next/script';
import PageViewTracker from '@/components/analytics/PageViewTracker';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = createLanguageMetadata({
  en: {
    title: 'Thar Desert Photography | Jaisalmer, Rajasthan',
    description:
      'Desert safari, photography tours, and unforgettable experiences in the Thar Desert. Book now for an authentic adventure in Rajasthan!',
    keywords: [
      'Thar Desert',
      'Photography',
      'Jaisalmer',
      'Rajasthan',
      'Desert Safari',
      'Tour Packages',
      'India Travel',
      'Photo Gallery',
      'Book Tour',
      'Desert Adventure',
    ],
    openGraph: {
      title: 'Thar Desert Photography | Jaisalmer, Rajasthan',
      description:
        'Desert safari, photography tours, and unforgettable experiences in the Thar Desert.',
      url: 'https://thardesertphotography.com',
      siteName: 'Thar Desert Photography',
      type: 'website',
      images: [
        {
          url: 'https://thardesertphotography.com/images/hero.jpg',
          width: 1200,
          height: 600,
          alt: 'Thar Desert Photography Hero Image',
        },
      ],
    },
  },
  hi: {
    title: 'थार रेगिस्तान फोटोग्राफी | जैसलमेर, राजस्थान',
    description:
      'थार रेगिस्तान में रेगिस्तान सफारी, फोटोग्राफी टूर और अविस्मरणीय अनुभव। राजस्थान में प्रामाणिक साहसिक यात्रा के लिए अभी बुक करें!',
    keywords: [
      'थार रेगिस्तान',
      'फोटोग्राफी',
      'जैसलमेर',
      'राजस्थान',
      'रेगिस्तान सफारी',
      'टूर पैकेज',
      'भारत यात्रा',
      'फोटो गैलरी',
      'टूर बुक करें',
      'रेगिस्तान एडवेंचर',
    ],
    openGraph: {
      title: 'थार रेगिस्तान फोटोग्राफी | जैसलमेर, राजस्थान',
      description: 'थार रेगिस्तान में रेगिस्तान सफारी, फोटोग्राफी टूर और अविस्मरणीय अनुभव।',
      url: 'https://thardesertphotography.com',
      siteName: 'थार रेगिस्तान फोटोग्राफी',
      type: 'website',
      images: [
        {
          url: 'https://thardesertphotography.com/images/hero.jpg',
          width: 1200,
          height: 600,
          alt: 'थार रेगिस्तान फोटोग्राफी हीरो इमेज',
        },
      ],
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Initialize dataLayer */}
      <Script id="gtm-dataLayer-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
        `}
      </Script>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WXBP85DC');
        `}
      </Script>
      {/* End Google Tag Manager */}
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXBP85DC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <PageViewTracker />
        <LanguageProvider>
          <GalleryProvider>
            <main className="flex-1 w-full max-w-8xl mx-auto">{children}</main>
            <Footer />
          </GalleryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
