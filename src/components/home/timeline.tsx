import React from "react";
import "@/components/common/common.css";
import { Rocket } from "lucide-react";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

type Step = {
    time: string;
    text: string;
};

const steps: Step[] = [
    { time: "Discovery & Strategy", text: "Understanding your business goals and crafting a tailored digital roadmap." },
    { time: "UI/UX Design", text: "Designing intuitive, engaging interfaces for web, app, ERP, or CRM solutions." },
    { time: "Development", text: "Building robust websites, mobile apps, ERPs, and CRMs using modern technologies." },
    { time: "Integrations & Automation", text: "Connecting tools, automating workflows, and ensuring seamless operations." },
    { time: "Launch & Support", text: "Deploying your solution and providing ongoing support for growth and success." },
];

const Timeline: React.FC = () => {
    return (
        <section className="w-full py-20 flex justify-center items-center">
            <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden mt-16 text-center css-1we0dey">
                    {/* Section Label */}
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                        style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                        {/* Icon */}
                        <Clock className="w-4 h-4 text-black-500" />
                        {/* {page} text */}
                        Timeline
                    </span>
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                        How We Accelerate Your Digital Success
                    </h2>
                    {/* Description */}
                    <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                        From strategy to launch, our expert team delivers websites, apps, ERPs, and CRMs that save you hundreds of hours and drive real business results. We combine deep technical know-how with a startup mindset to help you innovate, scale, and succeed faster.
                    </p>

                    <div className="relative w-full flex justify-center body-bg mt-16 mb-5 md:mb-[30px] tracking-tight">
                        {/* Blue dashed connector (SVG curve) */}
                        <svg
                            className="absolute top-1/2 -translate-y-1/2 w-full h-32 pointer-events-none"
                            fill="none"
                            viewBox="0 0 1000 200"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M 0 100 Q 250 0, 500 100 T 1000 100"
                                stroke="url(#dashedStroke)"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="8 8"
                            />
                            <defs>
                                <linearGradient id="dashedStroke" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#3b82f6" /> {/* Tailwind blue-500 */}
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Steps */}
                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 px-6 py-4 w-56 text-center"
                                    style={{ boxShadow: '0 10px 32px rgb(34 42 53 / 0.12), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(34 42 53 / 0.05), 0 4px 6px rgb(34 42 53 / 0.08), 0 24px 108px rgb(47 48 55 / 0.10)' }}
                                >
                                    <p className="text-blue-500 font-semibold">{step.time}</p>
                                    <p className="text-black mt-1">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 mt-4">
                        <Link to="/about#about-section" className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
                            <Rocket size={18} />
                            Have Any Questions? Read More About Us
                        </Link>
                    </div>


                    <h3 className="text-lg font-bold text-blue-500 mt-8">
                        <span className="block text-blue-500 font-bold">Founders reclaim their time.</span>
                        <span className="text-gray-500 font-normal">Skill Logic Technologies turns months of work into weeks—so you can focus on growth, not gruntwork.</span>
                        <a className="text-blue-600 underline ml-2" href="#pricing">
                            <span className="font-semibold">See pricing</span>
                        </a>
                    </h3>
                </div>
            </div>
        </section>
    );
};

export { Timeline };
