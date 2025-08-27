import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Startup",
        description:
            "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        price: "$40",
        features: [
            "Fast and reliable",
            "Fast and reliable",
            "Fast and reliable",
        ],
        button: { text: "Sign up today", variant: "outline" },
    },
    {
        name: "Growth",
        description:
            "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        price: "$40",
        features: [
            "Fast and reliable",
            "Fast and reliable",
            "Fast and reliable",
        ],
        button: { text: "Sign up today", variant: "default" },
    },
    {
        name: "Enterprise",
        description:
            "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        price: "$40",
        features: [
            "Fast and reliable",
            "Fast and reliable",
            "Fast and reliable",
        ],
        button: { text: "Book a meeting", variant: "outline" },
    },
];

const Pricing: React.FC = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center mt-16 text-center">

            {/* Section Label */}
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl w-full bg-white" style={{ zIndex: 1, position: 'relative' }}>
                {plans.map((plan, idx) => (
                    <Card key={idx} className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="text-xl">{plan.name}</CardTitle>
                            <p className="text-gray-500 mt-2">{plan.description}</p>
                            <div className="mt-4 text-3xl font-bold">
                                {plan.price}
                                <span className="text-base font-normal text-gray-500"> / month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 flex-1">
                            <ul className="space-y-3 mt-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <Check className="w-5 h-5 text-black shrink-0" />
                                        <div>
                                            <span className="font-medium">{feature}</span>
                                            <p className="text-gray-500 text-xs">
                                                We've made it fast and reliable.
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <Button
                                    variant={plan.button.variant as "default" | "outline"}
                                    className={`w-full${plan.name === 'Growth' && plan.button.variant === 'default' ? ' bg-black text-white hover:bg-gray-900' : ''}`}
                                >
                                    {plan.button.text}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Custom Plan Card */}
            <Card className="mt-12 max-w-6xl w-full bg-white" style={{ zIndex: 1, position: 'relative' }}>
                <CardContent className="flex flex-col md:flex-row justify-between gap-8 p-8">
                    {/* Left side */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold">Platform</h3>
                        <p className="text-gray-500 mt-2">
                            Observee is the unified platform for everything you need to ship integrations
                        </p>
                        <div className="mt-6">
                            <p className="text-4xl font-bold">Custom</p>
                            <p className="text-gray-500 mt-1">contact for pricing</p>
                        </div>
                        <Button className="mt-6 w-full md:w-auto bg-black text-white hover:bg-gray-900">Get Started</Button>
                    </div>

                    {/* Right side */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Core Features */}
                        <div>
                            <h4 className="font-semibold mb-4">Core Features:</h4>
                            <ul className="space-y-3">
                                {[
                                    "Unlimited Integrations & Custom Connectors",
                                    "Fully Managed Authentication",
                                    "Event Logs",
                                    "Vision Based Browser Automation",
                                    "Built in Observability & Monitoring",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <Check className="w-5 h-5 text-black shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enterprise Features */}
                        <div>
                            <h4 className="font-semibold mb-4">Enterprise Features:</h4>
                            <ul className="space-y-3">
                                {[
                                    "Self-host / Forward-deploy",
                                    "Priority Support & SLAs",
                                    "Professional Services",
                                    "Dynamic Field Mapping",
                                    "SAML-based SSO",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <Check className="w-5 h-5 text-black shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export { Pricing };
