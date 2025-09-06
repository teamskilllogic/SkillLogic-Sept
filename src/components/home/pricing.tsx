import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket } from "lucide-react";
import { IndianRupee } from "lucide-react";

const plans = [
    {
        name: "Startup",
        description: "Essential web presence for new businesses",
        price: "₹9,999",
        features: [
            "5-Page Responsive Website",
            "SEO Basic Setup",
            "Contact Form",
            "Mobile Optimization",
            "1 Month Free Support",
        ],
        button: { text: "Choose Plan", variant: "outline" },
    },
    {
        name: "Business",
        description: "Comprehensive solution for growing businesses",
        price: "₹15,999",
        features: [
            "10-Page Responsive Website",
            "SEO Advanced Setup",
            "Contact & Booking Forms",
            "Mobile Optimization",
            "Blog Setup",
            "Social Media Integration",
            "3 Months Free Support",
        ],
        button: { text: "Choose Plan", variant: "default" },
        popular: true,
    },
    {
        name: "Premium",
        description: "Advanced web presence for established businesses",
        price: "₹29,999",
        features: [
            "15+ Page Responsive Website",
            "SEO Full Package",
            "Advanced Forms & Integrations",
            "Mobile Optimization",
            "Blog & Newsletter",
            "Social Media Integration",
            "E-commerce Setup (Basic)",
            "6 Months Free Support",
        ],
        button: { text: "Choose Plan", variant: "outline" },
    },
];

const Pricing: React.FC = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center text-center items-center">
            <div className="max-w-7xl  w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
                 {/* Section Label */}
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                        style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                {/* Icon */}
                <IndianRupee className="w-4 h-4 text-black-500" />
                {/* {page} text */}
                    Pricing
                </span>
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Prices that make sense!
                </h2>
                {/* Description */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                    Managing a small business today is already tough.
                </p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl w-full" style={{ zIndex: 1, position: 'relative' }}>
                    {plans.map((plan, idx) => (
                        <Card key={idx} className="flex flex-col justify-between text-white border border-gray-800  rounded-3xl "  style={{ background: '#131316' }}>
                            <CardHeader>
                                <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                                <p className="text-gray-300 mt-2">{plan.description}</p>
                                <div className="mt-4 text-3xl font-bold text-white">
                                    {plan.price}
                                    <span className="text-base font-normal text-gray-400"> / month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 flex-1">
                                <ul className="space-y-3 mt-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check className="w-5 h-5 text-white shrink-0" />
                                            <div>
                                                <span className="font-medium text-white">{feature}</span>
                                                <p className="text-gray-400 text-xs">
                                                    We've made it fast and reliable.
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex-1" />
                                <div className="mt-6">
                                    <Button
                                        variant={plan.button.variant as "default" | "outline"}
                                        className={`w-full ${plan.name === 'Business' && plan.button.variant === 'default'
                                            ? 'bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white transition-colors duration-200'
                                            : 'bg-black text-white border border-white hover:bg-white hover:text-black hover:border-black transition-colors duration-200'}`}
                                    >
                                        {plan.button.text}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Custom Plan Card */}
                <Card className="mt-12 max-w-6xl w-full text-white border border-gray-800  rounded-3xl  mb-5 md:mb-[30px] tracking-tight" style={{ zIndex: 1, position: 'relative', background: '#131316'}}>
                    <CardContent className="flex flex-col md:flex-row justify-between gap-8 p-8">
                        {/* Left side */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-left text-white">Custom Solutions</h3>
                            <p className="text-gray-300 mt-2 text-left">
                                Bespoke digital products for unique business needs. Get a fully personalized website, app, or platform built to your exact requirements—no limits.
                            </p>
                            <div className="mt-6 text-left">
                                <p className="text-4xl font-bold text-white">Tailored Pricing</p>
                                <p className="text-gray-400 mt-1">Let's discuss your goals and create a custom quote.</p>
                            </div>
                            <div className="mt-6 flex justify-start">
                                <Button className="md:w-auto bg-white text-black hover:bg-gray-100">Get Started</Button>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Core Features */}
                            <div>
                                <h4 className="font-semibold mb-4 text-white">Core Features:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Custom Pages & Features",
                                        "Enterprise SEO Solutions",
                                        "Custom Integrations",
                                        "E-commerce (Advanced)",
                                        "Custom Web Applications",
                                        "Priority Support",
                                        "Dedicated Project Manager",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check className="w-5 h-5 text-white shrink-0" />
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Enterprise Features */}
                            <div>
                                <h4 className="font-semibold mb-4 text-white">Enterprise Features:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "API Development & Integrations",
                                        "Performance Optimization",
                                        "Security & Compliance Consulting",
                                        "Migration & Modernization Services",
                                        "Ongoing Maintenance & Upgrades",
                                        "Advanced Analytics & Reporting",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check className="w-5 h-5 text-white shrink-0" />
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
                        <Rocket size={18} />
                        Have Any Questions? Contact Us
                    </button>
                </div>

                <h3 className="text-lg font-bold text-blue-500 mt-8">
                    <span className="block text-blue-500 font-bold">Found the right plan for you?</span>
                    <span className="text-gray-500 font-normal">
                        Secure your spot and let us help you grow. If you need a custom solution or have questions, our team is ready to guide you every step of the way.
                    </span>
                </h3>
            </div>
        </section>
    );
};

export { Pricing };
