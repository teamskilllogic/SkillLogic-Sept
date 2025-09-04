import React, { useState, useEffect } from "react";
import "@/components/common/common.css";
import { Rocket, Users } from "lucide-react";


const teamMembers = [
  {
    name: "Emily Kim",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop",
  },
  {
    name: "Himanshu Vishwakarma",
    role: "Software Developer",
    img: "/images/himanshu.jpeg"
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60",
  },
  {
    name: "Julia Gimmel",
    role: "UX Designer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop",
  },
];

const Team: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const updateCarousel = (newIndex: number) => {
    if (animating) return;
    setAnimating(true);

    setCurrentIndex((prev) => {
      const len = teamMembers.length;
      return (newIndex + len) % len;
    });

    setTimeout(() => setAnimating(false), 800); // match transition duration
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

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
            {/* Icon */}
            <Users className="w-4 h-4 text-black-500" />
            {/* {page} text */}
            Services
          </span>
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
            Meet Our Talented Team
          </h2>
          <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
            Empowering innovation through collaboration—our diverse team brings
            expertise, creativity, and passion to every project we build
            together.
          </p>
          {/* Carousel */}
          <div className="relative w-full max-w-6xl h-[450px] mt-6 perspective">
            {/* Cards */}
            <div className="w-full h-full relative flex items-center justify-center preserve-3d transition-transform duration-700">
              {teamMembers.map((member, i) => {
                const offset =
                  (i - currentIndex + teamMembers.length) % teamMembers.length;

                let className =
                  "absolute w-72 h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer";
                if (offset === 0) className += " scale-110 z-20";
                else if (offset === 1)
                  className +=
                    " translate-x-52 scale-90 opacity-90 z-10 grayscale";
                else if (offset === 2)
                  className +=
                    " translate-x-[400px] scale-80 opacity-70 grayscale";
                else if (offset === teamMembers.length - 1)
                  className +=
                    " -translate-x-52 scale-90 opacity-90 z-10 grayscale";
                else if (offset === teamMembers.length - 2)
                  className +=
                    " -translate-x-[400px] scale-80 opacity-70 grayscale";
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
          <div className="text-center mt-12 transition-all duration-500 mb-5 md:mb-[30px] tracking-tight">
            <h2
              className="text-3xl font-bold relative inline-block"
              style={{ color: "black" }}
            >
              {teamMembers[currentIndex].name}
            </h2>
            <p className="text-lg uppercase tracking-wide text-gray-500 mt-2">
              {teamMembers[currentIndex].role}
            </p>
          </div>

          {/* Dots */}
          {/* <div className="flex gap-3 mt-12">
                        {teamMembers.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === currentIndex ? "scale-125" : ""}`}
                                style={{ backgroundColor: i === currentIndex ? '#6b7280' : '#d1d5db' }}
                                onClick={() => updateCarousel(i)}
                            />
                        ))}
                    </div> */}

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
              <Rocket size={18} />
              Lets Get Started
            </button>
          </div>

          <h3 className="text-lg font-bold text-blue-500 mt-8">
            <span className="block text-blue-500 font-bold">
              Collaboration powers innovation.
            </span>
            <span className="text-gray-500 font-normal">
              Our team’s diverse skills and shared passion drive every project’s
              success. Together, we turn ideas into reality and help your
              business grow.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export { Team };
