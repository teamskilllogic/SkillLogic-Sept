import React from "react";
import { data } from "./data";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="text-blue-600">Our Team</span>
          </h2>
          <p className="text-lg text-gray-600">
            The talented people behind SkillLogic's success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member as any} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
