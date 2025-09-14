import React, { useEffect } from "react";
import { data } from "./data";
import { HandPlatter, Rocket } from "lucide-react";

const CompanySection = () => {
    // Handle scroll to section when component mounts with hash
    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Remove the # from hash
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    // Add a small delay to ensure the component has rendered
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        };

        // Handle initial load
        handleHashScroll();

        // Handle hash changes (if user clicks another link while on the page)
        window.addEventListener('hashchange', handleHashScroll);

        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashScroll);
        };
    }, []);

    return (
        <section id="about-section" className="w-full py-20 flex justify-center items-center body-bg">
            <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
                {/* Section Label (same as Services) */}
                <span
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                    style={{
                        boxShadow:
                            "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)",
                    }}
                >
                    <HandPlatter className="w-4 h-4 text-black-500" />
                    About
                </span>

                {/* Heading (mirrors Services typography) */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Our Focus
                </h2>

                {/* Description (same width + rhythm as Services) */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto mb-5 md:mb-[30px]">
                    SkillLogic is a trusted technology partner delivering innovative web, mobile, and cloud solutions.
                    We focus on creating measurable business impact through clean engineering, modern design, and
                    scalable architectures that grow with your business.
                </p>

                {/* Values Grid (kept from your design, just sits inside the unified section shell) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full mt-12">
                    {data.values.map((value, index) => (
                        <div
                            key={value.title}
                            className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: "fadeInUp 0.5s ease-out forwards",
                                opacity: 0,
                                transform: "translateY(20px)",
                            }}
                        >
                            {/* Hover background sheen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-200" />

                            <div className="relative z-10">
                                {/* Icon block (kept) */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                                        {React.createElement(value.icon, {
                                            className: "w-8 h-8 text-white",
                                        })}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-center text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-150">
                                    {value.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-center text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-150">
                                    {value.desc}
                                </p>
                            </div>

                            {/* Hover border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/5 rounded-2xl transition-all duration-150" />
                        </div>
                    ))}
                </div>

                {/* CTA (same as Services) */}
                <div className="flex items-center gap-4 mt-8">
                    <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
                        <Rocket size={18} />
                        Explore All Services
                    </button>
                </div>

                {/* Bottom tagline (same pattern as Services) */}
                <h3 className="text-lg font-bold text-blue-500 mt-8">
                    <span className="block text-blue-500 font-bold">Expert solutions, delivered fast.</span>
                    <span className="text-gray-500 font-normal">
                        From web and app development to ERP and growth strategy, Skill Logic Technologies is your partner
                        for reliable, scalable digital services.
                    </span>
                </h3>
            </div>

            {/* Animations (optimized for faster load) */}
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .group:hover { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
        @media (max-width: 768px) { .group { padding: 1.5rem; } }
      `}</style>
        </section>
    );
};

export default CompanySection;
