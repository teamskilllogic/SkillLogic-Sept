import React from "react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  img: string;
};

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <article
      className="group relative h-auto transition-all duration-500 ease-out hover:scale-105"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="w-full h-full rounded-2xl border border-gray-200 bg-gray-100 p-10 text-center shadow-md hover:shadow-lg transition-all duration-500">

        {/* Profile Image */}
        <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28 mb-4">
          <img
            src={member.img}
            alt={member.name}
            className="h-full w-full object-cover rounded-full ring-4 ring-gray-100 group-hover:ring-blue-400 transition-all duration-500"
          />
        </div>

        {/* Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-blue-600 font-medium text-sm mb-3 px-3 py-1 bg-blue-50 rounded-full inline-block">
          {member.role}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed px-2">
          {member.description}
        </p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
