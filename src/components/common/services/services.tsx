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
        <div className="min-h-screen bg-white body-bg">
            <section className="w-full max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Comprehensive digital solutions to transform your business and drive innovation
                    </h2>
                </div>
                {/* Service Cards */}
                <div className="space-y-8">
                    {services.map((service, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col md:flex-row border rounded-lg bg-white shadow-sm hover:shadow-md transition overflow-hidden ${!isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content */}
                                <div className="w-full md:w-1/2 p-8 flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="p-2 bg-gray-100 rounded-full">{service.icon}</div>
                                        <h3 className="text-lg font-semibold">{service.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">{service.duration}</p>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    {/* Included */}
                                    <div className="mb-4">
                                        <p className="font-medium text-gray-900 mb-2">What’s included:</p>
                                        <ul className="space-y-2">
                                            {service.included.map((item, i) => (
                                                <li key={i} className="flex items-start space-x-2">
                                                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="mt-auto">
                                        <p className="font-medium text-gray-900 mb-2">Deliverables:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.deliverables.map((d, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700"
                                                >
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                                    <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="object-cover max-w-[390px] w-auto h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export { Services };
