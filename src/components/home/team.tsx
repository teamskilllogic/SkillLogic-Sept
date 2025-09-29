import React, { useState, useEffect, useCallback } from "react";
import "@/components/common/common.css";
import { Rocket, Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  img: string;
}


const teamMembers: TeamMember[] = [
     {
    name: "Arpit Srivastava",
    role: "Strategy, Tech & Growth Lead",
    description:
      "Driving strategy, technology, and growth at Skilllogic with a focus on building impactful software solutions and lasting client success.",
    img: "/images/arpit.jpeg",
  },
  {
    name: "Ayush B Mishra",
    role: "Technical Lead & Full Stack Developer",
    description:
      "Website Development Expert with proven expertise in building modern, responsive, and high-performance websites. Skilled in delivering scalable digital solutions and ensuring seamless user experiences.",
    img: "images/Ayush.png",
  },
  {
    name: "Vidhi Srivastava",
    role: "CloudOps Engineer Intern",
    description:
      "Data-driven SEO & Digital Marketing expert who helps businesses improve their search rankings and visibility.",
    img: "/images/vidhi.png",
  },

  {
    name: "Shreya Srivastava",
    role: "SEO & Digital Marketing Specialist",
    description:
      "Data-driven SEO & Digital Marketing expert who helps businesses improve their search rankings and visibility.",
    img: "/images/shreya.jpg",
  },
 
];

const Team: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (animating) return;
      setAnimating(true);

      setCurrentIndex(() => {
        const len = teamMembers.length;
        return (newIndex + len) % len;
      });

      setTimeout(() => setAnimating(false), 800);
    },
    [animating]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, updateCarousel]);

  return (
    <section className="w-full py-20 flex justify-center items-center mt-16">
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center ">
        <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden text-center ">
          {/* Section Label */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
            style={{
              boxShadow:
                "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)",
            }}
          >
            <Users className="w-4 h-4 text-black-500" />
            Our Team
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] font-extrabold text-zinc-900 text-center mx-auto mb-5 tracking-tight">
            Meet Our Talented Team
          </h2>
          <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
            Empowering innovation through collaboration—our diverse team brings
            expertise, creativity, and passion to every project we build together.
          </p>

          {/* Carousel */}
          <div className="relative w-full max-w-6xl h-[450px] mt-6 perspective">
            <div className="w-full h-full relative flex items-center justify-center preserve-3d transition-transform duration-700">
              {teamMembers.map((member: TeamMember, i: number) => {
                const offset =
                  (i - currentIndex + teamMembers.length) % teamMembers.length;

                let className =
                  "absolute w-72 h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer";
                if (offset === 0) className += " scale-110 z-20";
                else if (offset === 1)
                  className += " translate-x-52 scale-90 opacity-90 z-10 grayscale";
                else if (offset === 2)
                  className += " translate-x-[400px] scale-80 opacity-70 grayscale";
                else if (offset === teamMembers.length - 1)
                  className += " -translate-x-52 scale-90 opacity-90 z-10 grayscale";
                else if (offset === teamMembers.length - 2)
                  className += " -translate-x-[400px] scale-80 opacity-70 grayscale";
                else className += " opacity-0 pointer-events-none";

                return (
                  <div
                    key={i}
                    className={className}
                    onClick={() => updateCarousel(i)}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

            {/* Arrows */}
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:scale-110 transition"
              style={{ backgroundColor: "black" }}
              onClick={() => updateCarousel(currentIndex - 1)}
            >
              ‹
            </button>
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:scale-110 transition"
              style={{ backgroundColor: "black" }}
              onClick={() => updateCarousel(currentIndex + 1)}
            >
              ›
            </button>
          </div>

          {/* Member Info */}
          <div className="text-center mt-12 transition-all duration-500 mb-5 tracking-tight">
            <h2
              className="text-3xl font-bold relative inline-block"
              style={{ color: "black" }}
            >
              {teamMembers[currentIndex].name}
            </h2>
            <p className="text-lg uppercase tracking-wide text-gray-500 mt-2">
              {teamMembers[currentIndex].role}
            </p>
            <p className="text-lg uppercase tracking-wide text-gray-500 mt-4">
              {teamMembers[currentIndex].description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4 mt-4">
            <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
              <Rocket size={18} />
              Lets Get Started
            </button>
          </div>

          {/* Closing Statement */}
          <h3 className="text-lg font-bold text-blue-500 mt-8">
            <span className="block text-blue-500 font-bold">
              Collaboration powers innovation.
            </span>
            <span className="text-gray-500 font-normal">
              Our team’s diverse skills and shared passion drive every
              project’s success. Together, we turn ideas into reality and help
              your business grow.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export { Team };
