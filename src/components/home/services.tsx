import React from "react";
import { Settings, PenTool, Code2, BarChart3, Rocket } from "lucide-react";
import { HandPlatter } from "lucide-react";

const services = [
    {
        icon: <Code2 className="h-6 w-6 text-black" />,
        title: "Web Development",
        description:
            "Robust, scalable applications built with modern technologies and frameworks.",
        items: ["Frontend Dev", "Backend Dev"],
    },
    {
        icon: <Settings className="h-6 w-6 text-black" />,
        title: "App Development",
        description:
            "From market research to user personas, we help you build products that matter.",
        items: ["Market Research", "User Personas"],
    },
    {
        icon: <PenTool className="h-6 w-6 text-black" />,
        title: "ERP Development",
        description:
            "Beautiful, functional designs that create memorable user experiences.",
        items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
        icon: <BarChart3 className="h-6 w-6 text-black" />,
        title: "Others",
        description:
            "Strategic growth initiatives to scale your product and maximize impact.",
        items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
];

const Services: React.FC = () => {
    return (
        <section className="w-full py-20 flex justify-center items-center body-bg">
            <div className="max-w-7xl  w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
                {/* Section Label */}
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                        style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                {/* Icon */}
                <HandPlatter className="w-4 h-4 text-black-500" />
                {/* {page} text */}
                    Services
                </span>
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Build, Launch, and Gro All in One Place
                </h2>
                {/* Description */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Comprehensive digital solutions to transform your business and drive innovation, From product strategy to marketing, our integrated services help you turn ideas into scalable digital products—fast.
                </p>

                {/* Service Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-5 md:mb-[30px] tracking-tight">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
                            {/* Enhanced Icon Circle */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-5 group-hover:bg-blue-100 transition-colors duration-300 shadow-sm">
                                {React.cloneElement(service.icon, { className: "h-8 w-8 text-blue-600" })}
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                            {/* Description */}
                            <p className="text-gray-500 text-base mb-4">
                                {service.description}
                            </p>
                            {/* Sub Items with clean styling */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {service.items.map((item, i) => (
                                    <span key={i} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Button */}
                <div className="flex items-center gap-4 mt-8">
                    <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                        <Rocket size={20} />
                        Explore All Services
                    </button>
                </div>

                <h3 className="text-lg font-bold text-blue-500 mt-8">
                    <span className="block text-blue-500 font-bold">Expert solutions, delivered fast.</span>
                    <span className="text-gray-500 font-normal">From web and app development to ERP and growth strategy, Skill Logic Technologies is your partner for reliable, scalable digital services.</span>
                </h3>

            </div>
        </section>
    );
};

export { Services };
