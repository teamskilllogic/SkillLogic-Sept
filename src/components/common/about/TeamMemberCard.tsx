import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "./util";

type SocialLinks = {
  linkedin: string;
  github: string;
  twitter: string;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  img: string;
  skills: string[];
  social: SocialLinks;
};

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Icons + Colors (monochrome palette)
  const socialIcons = { linkedin: Linkedin, github: Github, twitter: Twitter };
  const socialColors = {
    linkedin: "text-blue-600",
    github: "text-gray-800",
    twitter: "text-blue-400",
  };

  // One consistent card style
  const cardGradient = "from-white to-gray-100";
  const cardBorder = "border-gray-300/70";
  const ringColor = "ring-gray-300 group-hover:ring-blue-400";

  return (
    <article
      className="group relative h-96 perspective-1000 transition-all duration-500 ease-out hover:scale-105"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front Card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full backface-hidden rounded-2xl border-2 bg-gradient-to-br p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500",
            `bg-gradient-to-br ${cardGradient} ${cardBorder}`
          )}
        >
          {/* Profile image (no dot) */}
          <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28 mb-4">
            <img
              src={member.img}
              alt={member.name}
              className={cn(
                "h-full w-full object-cover rounded-full ring-4 transition-all duration-500",
                ringColor
              )}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-gray-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-1">
            {member.name}
          </h3>
          <p className="text-blue-700 font-semibold text-sm mb-3 px-3 py-1 bg-white/60 rounded-full inline-block">
            {member.role}
          </p>
          <p className="text-gray-700 text-xs leading-relaxed px-2">
            {member.description}
          </p>

          {/* Hover indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700/90 to-blue-800/90 rounded-full text-white shadow-lg border border-white/20 group-hover:from-blue-700/90 group-hover:to-gray-800/90 transition-all duration-300">
                <div className="flex space-x-1">
                  <div
                    className="w-1 h-1 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
                <span className="text-xs font-medium">Hover to explore</span>
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border-2 border-gray-300/70 bg-gradient-to-br from-white via-gray-50 to-blue-50 p-6 shadow-xl">
          <div className="relative z-10">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent mb-2">
                Skills & Expertise
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full mx-auto"></div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {member.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className={cn(
                    "px-3 py-1.5 text-xs font-semibold rounded-full border-2 transition-all duration-200 hover:scale-105",
                    skillIndex % 2 === 0
                      ? "bg-gray-100 text-gray-700 border-gray-300"
                      : "bg-blue-100 text-blue-700 border-blue-300"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full"></div>
                Let's Connect
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-gray-600 rounded-full"></div>
              </h4>
              <div className="flex justify-center gap-4">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="group/social p-3 bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 border-2 border-transparent hover:border-gray-200"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {React.createElement(socialIcons[platform as keyof typeof socialIcons], {
                        className: `w-full h-full ${socialColors[platform as keyof typeof socialColors]} group-hover/social:scale-110 transition-transform duration-200`,
                      })}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;
