import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { MdSupportAgent, MdAccessTime, MdOutlineFlashOn } from "react-icons/md";


const GetStarted: React.FC = () => {
    return (
        <section className="w-full py-20 text-center">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Section Label */}
                <span className="relative z-[100] inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200">
                    Get Started Today
                </span>
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Are you still waiting for the right time to get things done?
                </h2>
                {/* Description */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                    How about putting an end to your procrastination and getting things
                    done from now on? Doesn’t that sound better? We thought the same.
                    Choose the right investment for your startup today.
                </p>

                {/* Main CTA Button */}
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition"
                    >
                        <LightningBoltIcon className="w-5 h-5 mr-2" />
                        Get Ideas Come to Life
                    </a>
                </div>
            </div>

            {/* WhatsApp Section */}
            <div className="max-w-6xl mx-auto mt-20 px-6">
                <div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="flex items-center space-x-4">
                        <FaWhatsapp className="w-12 h-12 text-green-500" />
                        <div>
                            <h3 className="text-xl font-semibold">Connect with us on WhatsApp!</h3>
                            <p className="text-gray-300">
                                Feel free to ask questions, get quick support, and chat with our team directly.
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-6 md:mt-0">
                        <a
                            href="https://wa.me/1234567890" // <-- replace with your WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full border border-gray-400 text-white font-medium hover:bg-gray-900 transition"
                        >
                            Chat with us on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Extra Info Section */}
            <div className="max-w-6xl mx-auto mt-16 px-6 grid gap-8 md:grid-cols-3">
                {/* Free Consultation */}
                <div className="text-center p-6 border rounded-2xl transition bg-white" style={{ zIndex: 2, position: 'relative', boxShadow: '0 10px 32px rgb(34 42 53 / 0.12), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(34 42 53 / 0.05), 0 4px 6px rgb(34 42 53 / 0.08), 0 24px 108px rgb(47 48 55 / 0.10)' }}>
                    <MdSupportAgent className="w-10 h-10 mx-auto text-black mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900">Free Consultation</h4>
                    <p className="mt-2 text-gray-600">
                        Get expert advice on your project requirements
                    </p>
                </div>

                {/* Quick Response */}
                <div className="text-center p-6 border rounded-2xl transition bg-white" style={{ zIndex: 2, position: 'relative', boxShadow: '0 10px 32px rgb(34 42 53 / 0.12), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(34 42 53 / 0.05), 0 4px 6px rgb(34 42 53 / 0.08), 0 24px 108px rgb(47 48 55 / 0.10)' }}>
                    <MdOutlineFlashOn className="w-10 h-10 mx-auto text-black mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900">Quick Response</h4>
                    <p className="mt-2 text-gray-600">
                        We'll get back to you within 24 hours
                    </p>
                </div>

                {/* Support Hours */}
                <div className="text-center p-6 border rounded-2xl transition bg-white" style={{ zIndex: 2, position: 'relative', boxShadow: '0 10px 32px rgb(34 42 53 / 0.12), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(34 42 53 / 0.05), 0 4px 6px rgb(34 42 53 / 0.08), 0 24px 108px rgb(47 48 55 / 0.10)' }}>
                    <MdAccessTime className="w-10 h-10 mx-auto text-black mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900">Support Hours</h4>
                    <p className="mt-2 text-gray-600">
                        Available from 9 AM to 9 PM for your projects
                    </p>
                </div>
            </div>

            <h3 className="text-lg font-bold text-blue-500 mt-16">
                <span className="block text-blue-500 font-bold">Ready to get started?</span>
                <span className="text-gray-500 font-normal">
                    Take the first step towards transforming your business. Reach out to our team and let’s turn your ideas into reality!
                </span>
            </h3>
        </section>
    );
};



export { GetStarted };
