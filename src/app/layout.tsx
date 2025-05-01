import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thar Desert Photography | Jaisalmer, Rajasthan",
  description:
    "Desert safari, photography tours, and unforgettable experiences in the Thar Desert. Book now for an authentic adventure in Rajasthan!",
  keywords: [
    "Thar Desert",
    "Photography",
    "Jaisalmer",
    "Rajasthan",
    "Desert Safari",
    "Tour Packages",
    "India Travel",
    "Photo Gallery",
    "Book Tour",
    "Desert Adventure",
  ],
  openGraph: {
    title: "Thar Desert Photography | Jaisalmer, Rajasthan",
    description:
      "Desert safari, photography tours, and unforgettable experiences in the Thar Desert.",
    url: "https://thardesertphotography.com",
    siteName: "Thar Desert Photography",
    type: "website",
    images: [
      {
        url: "https://thardesertphotography.com/images/hero.jpg",
        width: 1200,
        height: 600,
        alt: "Thar Desert Photography Hero Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 w-full max-w-8xl mx-auto  py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
