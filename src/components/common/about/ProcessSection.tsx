// ProcessSection.tsx
import React from "react";
import {
  HandPlatter,
  Search,
  ClipboardList,
  PenTool,
  Code2,
  CheckCircle,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description:
      "I gather information about goals, target audience, and competitors to understand the project scope.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Planning",
    description:
      "I create a detailed plan with milestones, timelines, and deliverables for effective project management.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Design",
    description:
      "I design wireframes, mockups, and prototypes ensuring user-friendly, visually appealing, and functional layouts.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Development",
    description:
      "Using programming languages and CMS, I build scalable websites optimized for SEO and accessibility.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Testing",
    description:
      "I perform rigorous testing for compatibility, security, and performance to ensure everything works flawlessly.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Launch",
    description:
      "I launch the website on the client’s server, ensuring everything is smooth and accessible to all users.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full py-20 flex justify-center items-center bg-white">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Top Pill Label (same as OurStory) */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
          style={{
            boxShadow:
              "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)",
          }}
        >
          <HandPlatter className="w-4 h-4 text-black" />
          Process
        </span>

        {/* Heading (same size as OurStory) */}
        <h2 className="text-3xl md:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
          How We Work Step by Step
        </h2>

        {/* Description (matched with OurStory) */}
        <p className="text-zinc-600 text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[80%] xl:w-[56%] mx-auto mb-5 md:mb-[30px] tracking-tight">
          A structured process designed to take your idea from concept to reality
          with clarity, speed, and precision.
        </p>

        {/* Timeline Section */}
<div className="relative w-full mt-12">

  {/* ✅ Desktop / Tablet / Laptop: Center line with alternating cards */}
  <div className="hidden sm:block relative w-full">
    {/* Center line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full" />

    <div className="space-y-16">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative flex items-center w-full ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Timeline Number Circle */}
          <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white z-10 font-semibold text-lg">
            {index + 1}
          </div>

          {/* Step Card */}
          <div
            className={`w-[45%] bg-white border border-gray-200 rounded-2xl shadow-md p-8 text-left ${
              index % 2 === 0 ? "pr-10" : "pl-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-4 text-black">
              {step.icon}
              <h3 className="text-2xl font-bold">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ✅ Mobile: Left-side vertical line with steps */}
  <div className="sm:hidden relative flex flex-col gap-12">
    {/* Left Line */}
    <div className="absolute left-6 top-0 w-1 bg-gray-200 h-full" />

    {steps.map((step, index) => (
      <div key={index} className="relative flex items-start gap-6">
        {/* Number Circle */}
        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold text-sm">
          {index + 1}
        </div>

        {/* Step Card */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-3 text-black">
            {step.icon}
            <h3 className="text-lg font-bold">{step.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* CTA Button (same as OurStory) */}
        <div className="flex items-center gap-4 mt-16">
          <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition">
            <Rocket size={20} />
            Let’s Build Together
          </button>
        </div>

        {/* Bottom tagline (same as OurStory) */}
        <h3 className="text-lg font-bold text-blue-500 mt-8">
          <span className="block flex items-center justify-center gap-2 text-blue-500 font-bold">
            <Rocket className="w-4 h-4" />
            Clear process, strong outcomes.
          </span>
          <span className="text-gray-500 font-normal block mt-1">
            From discovery to launch, we ensure smooth delivery every time.
          </span>
        </h3>
      </div>
    </section>
  );
};

export default ProcessSection;
