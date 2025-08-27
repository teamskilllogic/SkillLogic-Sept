import React from "react";
import { Settings, PenTool, Code2, BarChart3 } from "lucide-react";

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
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Section Label */}
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200">
                    Services
                </span>
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Build, Launch, and Gro All in One Place
                </h2>
                {/* Description */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                    Comprehensive digital solutions to transform your business and drive innovation, From product strategy to marketing, our integrated services help you turn ideas into scalable digital products—fast.
                </p>

                {/* Service Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            {/* Icon Circle */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-5">
                                {React.cloneElement(service.icon, { className: "h-8 w-8 text-black" })}
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-bold text-black mb-1">{service.title}</h3>
                            {/* Description */}
                            <p className="text-gray-500 text-base mt-1 mb-1">
                                {service.description}
                            </p>
                            {/* Sub Items */}
                            <ul className="mt-3 space-y-1 text-base text-gray-700">
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Services };
