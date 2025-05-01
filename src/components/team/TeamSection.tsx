import { teamMembers, teamIntro } from "@/constant/teamData";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4">
            {teamIntro.subtitle}
          </p>
          
          <p className="text-gray-700 max-w-4xl mx-auto">
            {teamIntro.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member) => (
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