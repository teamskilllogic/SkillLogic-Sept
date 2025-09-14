import React from "react";
import { HandPlatter } from "lucide-react";
import { ImpactMetrics } from "./impact_metrics";

const WhyTrustUs = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 mt-6">
            <div className="flex justify-center">
                {/* Section Label */}
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                    style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                    {/* Icon */}
                    <HandPlatter className="w-4 h-4 text-black-500" />
                    {/* {page} text */}
                    Trust
                </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                We deliver, we communicate, we stay accountable
            </h2>
            {/* Description */}
            <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[96%] md:w-[95%] lg:w-[88%] xl:w-[70%] mx-auto tracking-tight text-center">
                From discovery to launch, you get transparent progress updates, predictable
                timelines, and senior engineers focused on business impact—not just code.
                We understand that your success is our success, which is why we prioritize clear communication,
                meet every deadline, and ensure your project delivers real value to your customers and business growth.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mt-16 mb-12">
                {/* Features List */}
                <div className="space-y-8">

                    <div className="group hover:transform hover:translate-x-2 transition-all duration-300 ease-out">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-black mb-2 group-hover:text-blue-700 transition-colors">
                                    Proven Delivery
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Battle‑tested playbooks and checklists for reliable releases that ensure your project launches on time, every time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group hover:transform hover:translate-x-2 transition-all duration-300 ease-out">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-black mb-2 group-hover:text-blue-700 transition-colors">
                                    Business-First Approach
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Design and engineering decisions tied to measurable outcomes that drive real growth for your business.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group hover:transform hover:translate-x-2 transition-all duration-300 ease-out">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-black mb-2 group-hover:text-blue-700 transition-colors">
                                    Clear Communication
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                     Weekly demos, shared roadmaps, and single point of contact so you're always in the loop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-slate-200 to-blue-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <img
                            src="/images/strategy.png"
                            alt="Why trust us - Professional strategy and delivery"
                            className="relative w-full max-w-lg rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 border-4 border-white"
                        />
                    </div>
                </div>
            </div>

            {/* Unique value add - impact metrics */}
            <ImpactMetrics />

            <h3 className="text-center text-base sm:text-lg font-bold text-blue-500 mt-4 sm:mt-6 mb-8">
                <span className="block text-blue-500 font-bold mb-2">Trust built on delivery.</span>
                <span className="text-gray-500 font-normal text-sm sm:text-base">Transparent process, predictable outcomes, and support beyond launch.</span>
            </h3>
        </section>
    );
};

export { WhyTrustUs };
