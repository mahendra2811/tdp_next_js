import type { Metadata } from "next";
import TeamHeroSection from "@/components/team/TeamHeroSection";
import TeamSection from "@/components/team/TeamSection";
import TeamCallToAction from "@/components/team/TeamCallToAction";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Our Team | Thar Desert Photography",
  description: "Meet our passionate team of wildlife photographers and conservationists dedicated to preserving the unique ecosystem of the Thar Desert.",
  keywords: [
    "Thar Desert Photography Team",
    "Wildlife Conservationists",
    "Desert Photography Experts",
    "Rajasthan Wildlife Team",
    "Nature Conservation Team"
  ],
};

export default function TeamPage() {
  return (
    <>
      <TeamHeroSection />
      <TeamSection />
      <TeamCallToAction />
      <WhatsAppFloat />
    </>
  );
}