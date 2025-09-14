import React, { useState, useEffect } from "react";
import { Cog, PenTool, Code2, Megaphone, MessageSquare, Phone, Headphones, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
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
                        <a
                            href="https://wa.me/918318943040?text=Hi%20SkillLogic%20Team!%20I%20want%20to%20start%20my%20project%20with%20you.%20Could%20you%20please%20help%20me%20understand%20your%20services%20and%20get%20started?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>Start Your Project</Button>
                        </a>
                        <Button variant="outline" onClick={() => setIsModalOpen(true)}>Call Us Now</Button>
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
            {/* Centered CTA Section */}
            <div className="w-full flex justify-center items-center ">
                <h3 className="text-lg font-bold text-blue-500 text-center">
                    <span className="block text-blue-500 font-bold">Ready to get started?</span>
                    <span className="text-gray-500 font-normal">
                        Take the first step towards transforming your business. Reach out to our team and let’s turn your ideas into reality!
                    </span>
                </h3>
            </div>

            {/* Call Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Content */}
                        <div className="text-center">
                            <div className="mb-6">
                                <Phone className="w-16 h-16 mx-auto text-blue-500 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Call</h3>
                                <p className="text-gray-600">Choose a number to call our team directly</p>
                            </div>

                            {/* Phone Numbers */}
                            <div className="space-y-3">
                                <a
                                    href="tel:+919125138209"
                                    className="flex items-center justify-center gap-3 w-full bg-white text-blue-500 border border-blue-500 px-6 py-4 rounded-xl font-medium hover:bg-blue-50 transition"
                                >
                                    <Phone size={20} />
                                    +91 9125138209
                                </a>
                                <a
                                    href="tel:+918318943040"
                                    className="flex items-center justify-center gap-3 w-full bg-blue-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-blue-600 transition"
                                >
                                    <Phone size={20} />
                                    +91 8318943040
                                </a>
                            </div>

                            {/* Alternative Option */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 mb-3">Or message us on WhatsApp</p>
                                <a
                                    href="https://wa.me/918318943040?text=Hi%20SkillLogic%20Team!%20I%20would%20like%20to%20book%20a%20call%20to%20discuss%20my%20project%20requirements."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                                >
                                    <FaWhatsapp size={20} />
                                    Get Started | WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


export { GetStarted };
