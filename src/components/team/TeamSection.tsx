'use client';
import { teamMembers, teamIntro } from "@/constant/teamData";
import { teamMembersHindi, teamIntroHindi } from "@/constant/teamDataHindi";
import TeamMemberCard from "./TeamMemberCard";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamSection() {
  const { language } = useLanguage();
  
  // Select content based on language
  const currentTeamMembers = language === 'en' ? teamMembers : teamMembersHindi;
  const currentTeamIntro = language === 'en' ? teamIntro : teamIntroHindi;
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4">
            {currentTeamIntro.subtitle}
          </p>
          
          <p className="text-gray-700 max-w-4xl mx-auto">
            {currentTeamIntro.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {currentTeamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
              contact={member.contact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}