import React from "react";
import { Cog, PenTool, Code2, Megaphone, MessageSquare, Phone, Headphones } from "lucide-react";
import { Button } from "@/components/common/button";

const services = [
    {
        icon: <Cog className="h-6 w-6 text-black" />,
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
        icon: <Megaphone className="h-6 w-6 text-black" />,
        title: "Marketing",
        description:
            "Strategic growth initiatives to scale your product and maximize impact.",
        items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
];

const GetStarted = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Get Started with SkillLogic
                </h2>
                <p className="text-gray-600 mb-8">
                    Ready to transform your business with cutting-edge technology solutions?
                    Let's discuss your project and bring your vision to life.
                </p>

                {/* Buttons */}
                <div className="flex space-x-4 mb-10">
                    <Button >Start Your Project</Button>
                    <Button variant="outline">Call Us Now</Button>
                </div>

                {/* Features */}
                <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                        <MessageSquare className="h-6 w-6 text-black" />
                        <div>
                            <h4 className="font-semibold text-black">Free Consultation</h4>
                            <p className="text-gray-600 text-sm">
                                Get expert advice on your project requirements
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <Phone className="h-6 w-6 text-black" />
                        <div>
                            <h4 className="font-semibold text-black">Quick Response</h4>
                            <p className="text-gray-600 text-sm">
                                We'll get back to you within 24 hours
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <Headphones className="h-6 w-6 text-black" />
                        <div>
                            <h4 className="font-semibold text-black">Support Hours</h4>
                            <p className="text-gray-600 text-sm">
                                Available from morning 9 am till evening 9 pm for your projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center">
                <img
                    src="/images/getting_started.jpg"
                    alt="Team working illustration"
                    className="w-full max-w-md rounded-lg"
                />
            </div>
        </section>
    );
};


export { GetStarted };
