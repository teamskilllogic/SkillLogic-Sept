import React from "react";
import { CheckCircle, Layout, Code2, Palette, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button"; // using your custom button
import "@/components/common/common.css";

const services = [
    {
        icon: <Code2 className="h-6 w-6 text-blue-600" />,
        title: "Website Development",
        duration: "Timeline: 2–6 weeks",
        description:
            "Custom websites built with modern technologies and responsive design.",
        included: [
            "Responsive Design",
            "SEO Optimized",
            "Fast Loading",
            "Modern UI/UX",
        ],
        deliverables: ["Live Website", "Source Code", "SEO Report"],
        image: "/public/images/web_development.png",
    },
    {
        icon: <Palette className="h-6 w-6 text-blue-600" />,
        title: "Mobile App Development",
        duration: "Timeline: 4–10 weeks",
        description:
            "Native and cross-platform mobile applications for iOS and Android.",
        included: [
            "iOS & Android",
            "Cross-platform",
            "Native Performance",
            "App Store Ready",
        ],
        deliverables: ["App Store Submission", "Source Code", "User Guide"],
        image: "/public/images/mobile_development.png",
    },
    {
        icon: <Layout className="h-6 w-6 text-blue-600" />,
        title: "CRM Development",
        duration: "Timeline: 3–8 weeks",
        description:
            "Customer Relationship Management systems tailored to your business needs.",
        included: [
            "Lead Management",
            "Sales Tracking",
            "Customer Analytics",
            "Automation",
        ],
        deliverables: ["CRM Platform", "Admin Dashboard", "Training Manual"],
        image: "/public/images/crm_development.png",
    },
    {
        icon: <BarChart className="h-6 w-6 text-blue-600" />,
        title: "ERP Development",
        duration: "Timeline: 6–12 weeks",
        description:
            "Enterprise Resource Planning solutions to streamline your operations.",
        included: [
            "Resource Planning",
            "Inventory Management",
            "Financial Control",
            "Process Automation",
        ],
        deliverables: ["ERP Platform", "Integration Guide", "Support Plan"],
        image: "/public/images/erp_development.png",
    },
    {
        icon: <Layout className="h-6 w-6 text-blue-600" />,
        title: "Product Strategy",
        duration: "Timeline: 2–4 weeks",
        description:
            "From market research to user personas, we help you build products that matter. Our strategic approach ensures your product meets real user needs.",
        included: [
            "Market Research & Analysis",
            "User Personas & Journey Mapping",
            "Competitive Analysis",
            "Product Roadmap Development",
        ],
        deliverables: ["Strategy Document", "User Research Report", "Roadmap & Timeline"],
        image: "/public/images/strategy.png",
    },
    {
        icon: <Palette className="h-6 w-6 text-blue-600" />,
        title: "Design",
        duration: "Timeline: 3–6 weeks",
        description:
            "Beautiful, functional designs that create memorable user experiences. We focus on both aesthetics and usability to create designs that convert.",
        included: [
            "UI/UX Design",
            "Interactive Prototyping",
            "Design System Creation",
            "Usability Testing",
        ],
        deliverables: ["Design System", "Interactive Prototypes", "Design Specifications"],
        image: "/public/images/ui_ux_development.png",
    },
    {
        icon: <BarChart className="h-6 w-6 text-blue-600" />,
        title: "Marketing",
        duration: "Timeline: Ongoing",
        description:
            "Strategic growth initiatives to scale your product and maximize impact. We use data-driven approaches to optimize your marketing efforts.",
        included: [
            "SEO Strategy & Implementation",
            "Analytics & Performance Tracking",
            "A/B Testing & Optimization",
            "Content Marketing Strategy",
        ],
        deliverables: ["Marketing Plan", "Analytics Dashboard", "Performance Reports"],
        image: "/public/images/marketing.png",
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
        title: "Other Services",
        duration: "Timeline: Varies",
        description:
            "Additional technology solutions to support your business growth.",
        included: [
            "API Development",
            "Cloud Solutions",
            "DevOps",
            "Maintenance",
        ],
        deliverables: ["API Documentation", "Cloud Setup", "Maintenance Plan"],
        image: "/public/images/basic_web_design.png",
    },
];

const Services = () => {
    return (
        // w-full py-20 flex justify-center items-center
        // max-w-7xl  w-full mx-auto px-6 flex flex-col items-center justify-center text-center
        <div className="w-full flex justify-center items-center body-bg">
            <section className="w-full max-w-7xl mx-auto px-6 py-20 ">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Section Label */}
                    <span className="relative z-[100] inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200"
                        style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                        Our Services
                    </span>
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                        Build, Launch, and Gro All in One Place
                    </h2>
                    {/* Description */}
                    <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                        Comprehensive digital solutions to transform your business and drive innovation, From product strategy to marketing, our integrated services help you turn ideas into scalable digital products—fast.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid gap-10">
                    {services.map((service, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`group relative bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${!isEven ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row`}
                                style={{
                                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Content */}
                                <div className="relative flex-1 p-10 lg:p-14 flex flex-col">
                                    {/* Header with enhanced styling */}
                                    <div className="flex items-start space-x-5 mb-6">
                                        <div className="relative">
                                            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                                                {React.cloneElement(service.icon as React.ReactElement, {
                                                    className: "h-7 w-7 text-blue-600"
                                                })}
                                            </div>
                                            {/* Subtle ring on hover */}
                                            <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-200 ring-opacity-0 group-hover:ring-opacity-50 transition-all duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-blue-900 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                                                <span className="text-sm text-blue-700 font-medium">{service.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced description */}
                                    <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium">
                                        {service.description}
                                    </p>

                                    {/* What's included with better styling */}
                                    <div className="mb-10">
                                        <h4 className="font-bold text-black mb-5 text-lg">What's included:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.included.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-3 group/item">
                                                    <div className="relative">
                                                        <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                                                        <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                                                    </div>
                                                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-200">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Enhanced deliverables */}
                                    <div className="mt-auto">
                                        <h4 className="font-bold text-black mb-5 text-lg">Deliverables:</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {service.deliverables.map((d, i) => (
                                                <span
                                                    key={i}
                                                    className="px-5 py-2.5 text-sm font-semibold rounded-full bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default shadow-sm"
                                                >
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="flex-1 p-8 lg:p-12 flex items-center justify-center bg-gray-50">
                                    <div className="w-full max-w-md">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto object-contain rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <h3 className="text-lg font-bold text-blue-500 mt-16 text-center">
                    <span className="block text-blue-500 font-bold">Expert solutions, delivered fast.</span>
                    <span className="text-gray-500 font-normal">
                        From web and app development to ERP and growth strategy, Skill Logic Technologies is your partner for reliable, scalable digital services.
                    </span>
                </h3>
            </section>
        </div>
    );
};

export { Services };
