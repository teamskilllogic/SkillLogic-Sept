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
            <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto tracking-tight">
                From discovery to launch, you get transparent progress updates, predictable
                timelines, and senior engineers focused on business impact—not just code.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                            <div>
                                <div className="font-semibold text-black">Proven delivery</div>
                                <p className="text-gray-600 text-sm">Battle‑tested playbooks and checklists for reliable releases.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                            <div>
                                <div className="font-semibold text-black">Business-first approach</div>
                                <p className="text-gray-600 text-sm">Design and engineering decisions tied to measurable outcomes.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                            <div>
                                <div className="font-semibold text-black">Clear communication</div>
                                <p className="text-gray-600 text-sm">Weekly demos, shared roadmaps, and single point of contact.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/strategy.png"
                        alt="Why trust us"
                        className="w-full max-w-md rounded-lg"
                    />
                </div>
            </div>

            {/* Unique value add - impact metrics */}
            <ImpactMetrics />

            {/* CTA + concluding line */}
            <div className="flex items-center justify-center mb-6 mt-6">
                <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                    Why Choose Us?
                </button>
            </div>
            <h3 className="text-center text-base sm:text-lg font-bold text-blue-500 mt-4 sm:mt-6 mb-8">
                <span className="block text-blue-500 font-bold mb-2">Trust built on delivery.</span>
                <span className="text-gray-500 font-normal text-sm sm:text-base">Transparent process, predictable outcomes, and support beyond launch.</span>
            </h3>
        </section>
    );
};

export { WhyTrustUs };
