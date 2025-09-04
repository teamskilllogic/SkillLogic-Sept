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
                <div className="relative w-full mt-16">

                    {/* ✅ Desktop / Tablet / Laptop: Center line with alternating cards */}
                    <div className="hidden sm:block relative w-full">
                        {/* Enhanced Center line with black color - dashed */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-full border-l-2 border-dashed border-black" />

                        <div className="space-y-20">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                                        }`}
                                >
                                    {/* Enhanced Timeline Number Circle with black border and transparent background */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center text-black z-10 font-bold text-xl shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Enhanced Step Card with black shadow hover */}
                                    <div
                                        className={`w-[42%] bg-white border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-10 text-left transition-all duration-150 hover:scale-[1.02] group ${index % 2 === 0 ? "pr-12" : "pl-12"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            {/* Enhanced icon with blue background */}
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-all duration-150">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-150">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-150">
                                            {step.description}
                                        </p>

                                        {/* Decorative element - blue only */}
                                        <div className={`absolute ${index % 2 === 0 ? "-right-4" : "-left-4"} top-8 w-8 h-8 bg-blue-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-150`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ✅ Mobile: Enhanced left-side vertical line with steps */}
                    <div className="sm:hidden relative flex flex-col gap-16">
                        {/* Enhanced Left Line with black color - dashed */}
                        <div className="absolute left-8 top-0 w-0 h-full border-l-2 border-dashed border-black" />

                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start gap-8">
                                {/* Enhanced Number Circle - black border, transparent background */}
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center text-black font-bold text-lg shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Enhanced Step Card - black shadow hover */}
                                <div className="w-full bg-white border-2 border-gray-100 rounded-3xl shadow-lg p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-150 group">
                                    <div className="flex items-center gap-4 mb-4">
                                        {/* Enhanced icon - blue */}
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-all duration-150">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-150">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-150">
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
                    <span className="flex items-center justify-center gap-2 text-blue-500 font-bold">
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
