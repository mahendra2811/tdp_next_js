import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { createLanguageMetadata } from '@/utils/seo';

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
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <main className="flex-1 w-full max-w-8xl mx-auto py-4">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
