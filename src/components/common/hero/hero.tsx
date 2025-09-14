import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Rocket, Phone, X } from "lucide-react"; // icons
import { Star } from "lucide-react"; // example icon
import HeroCanvas from '@/components/home/HeroCanvas';
import { useState, useEffect } from "react";

interface Hero {
    page: string;
    title: string;
    description: string;
    className?: string;
}

export function Hero({ page, title, description, className }: Hero) {
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
        <section
            className={cn(
                "relative bg-background text-foreground body-bg",
                "py-12 px-4 md:py-24 lg:py-32",
                "overflow-hidden",
                className
            )}
        >
            <div className="relative mx-auto max-w-[1280px] flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
                {/* Text Content - 75% on desktop */}
                <div className="relative z-10 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left lg:w-[75%]
                       pt-12 sm:pt-8 md:pt-8" >
                    {/* page */}
                    <span
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200"
                        style={{
                            boxShadow:
                                "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)",
                        }}
                    >
                        <img src="/images/logo.png" alt="icon" className="w-5 h-5" />
                        {/* Icon on the left */}
                        {/* <Star className="w-4 h-4 text-black-500" /> */}
                        {/* {page} text */}
                        {page}
                    </span>
                    {/* Heading */}
                    <h1
                        className={cn(
                            "inline-block animate-appear",
                            "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
                            "bg-clip-text text-transparent",
                            "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
                            "leading-[1.1] sm:leading-[1.1]",
                            "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        )}
                    >
                        {title}
                    </h1>
                    {/* Description */}
                    <p
                        className={cn(
                            "max-w-[700px] animate-appear opacity-0 [animation-delay:150ms]",
                            "text-base sm:text-lg md:text-xl",
                            "text-muted-foreground",
                            "font-medium"
                        )}
                    >
                        {description}
                    </p>
                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://wa.me/918318943040?text=Hi%20SkillLogic%20Team!%20I%20want%20to%20get%20started%20with%20my%20project.%20Could%20you%20please%20help%20me%20understand%20your%20services?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                        >
                            <FaWhatsapp size={18} />
                            Get Started
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <Phone size={18} />
                            Book a Call
                        </button>
                    </div>
                </div>

                {/* HeroCanvas - 25% on desktop, hidden on mobile/tablet */}
                <div className="hidden lg:flex lg:w-[25%] lg:justify-center lg:items-center">
                    <div className="relative h-[380px] w-[380px] xl:h-[450px] xl:w-[450px]">
                        <HeroCanvas />
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            {/* -------------------------------------  */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Glow
                    variant="above"
                    className="animate-appear-zoom opacity-0 [animation-delay:1000ms]"
                />
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
        </section>
    );
}
