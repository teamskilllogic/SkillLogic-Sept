import React from "react";
import { Settings, PenTool, Code2, BarChart3 } from "lucide-react";

const services = [
    {
        icon: <Settings className="h-6 w-6 text-black" />,
        title: "Product Strategy",
        description:
            "From market research to user personas, we help you build products that matter.",
        items: ["Market Research", "User Personas"],
    },
    {
        icon: <PenTool className="h-6 w-6 text-black" />,
        title: "Design",
        description:
            "Beautiful, functional designs that create memorable user experiences.",
        items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
        icon: <Code2 className="h-6 w-6 text-black" />,
        title: "Web Development",
        description:
            "Robust, scalable applications built with modern technologies and frameworks.",
        items: ["Frontend Dev", "Backend Dev"],
    },
    {
        icon: <BarChart3 className="h-6 w-6 text-black" />,
        title: "Marketing",
        description:
            "Strategic growth initiatives to scale your product and maximize impact.",
        items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
];

const Services: React.FC = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Section Label */}
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200" style={{ zIndex: 2, position: 'relative' }}>
                    Services
                </span>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mt-4">
                    Build, Launch, and Gro All in One Place
                </h2>
                <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                    From product strategy to marketing, our integrated services help you turn ideas into scalable digital products—fast.
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
