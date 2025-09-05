import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { TechWeUse } from "@/components/common/services/tech_use";
import { WhyTrustUs } from "@/components/common/services/why_trust_us";
import { ImpactMetrics } from "@/components/common/services/impact_metrics";
import { GetStarted } from "@/components/common/services/get_started";
import { Testimonial } from "@/components/home/testimonials";
import TestimonialsMetrics from "@/components/TestimonialsMetrics";

import "@/components/common/common.css";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen bg-white body-bg">
            <Navbar />
            <main>
                {/* 01 */}
                
                {/* Section 1: Hero Banner */}
                <Hero
                    page="Skilllogic Technologies | Testimonials"
                    title="What clients say about SkillLogic"
                    description="Proof over promises — hear why teams trust us to deliver high‑impact products."
                    className="bg-transparent"
                />

                <div className="typography-testimonials px-4 sm:px-6 lg:px-8">
                    {/* 02 */}
                    
                    {/* Section 2: Tech We Use (reuse from Services) */}
                    <TechWeUse />
                    {/* CTA + concluding line */}
                    <div className="flex items-center justify-center gap-4 mt-3 mb-6">
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                            Explore Technologies
                        </button>
                    </div>
                    <h3 className="text-center text-base sm:text-lg font-bold text-blue-500 mt-4 sm:mt-6 mb-8">
                        <span className="block text-blue-500 font-bold mb-2">Modern stack, proven results.</span>
                        <span className="text-gray-500 font-normal text-sm sm:text-base">We choose technologies that speed delivery and scale with your growth.</span>
                    </h3>

                    {/* 03 */}
                    
                    {/* Section 3: Why you should trust us */}
                    <WhyTrustUs />
                    {/* CTA + concluding line */}
                    <div className="flex items-center justify-center -mt-4 mb-6">
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                            Why Choose Us?
                        </button>
                    </div>
                    <h3 className="text-center text-base sm:text-lg font-bold text-blue-500 mt-4 sm:mt-6 mb-8">
                        <span className="block text-blue-500 font-bold mb-2">Trust built on delivery.</span>
                        <span className="text-gray-500 font-normal text-sm sm:text-base">Transparent process, predictable outcomes, and support beyond launch.</span>
                    </h3>

                    {/* 04 */}
                    
                    {/* Section 3.1: Unique value add - impact metrics */}
                    <ImpactMetrics />
                    {/* CTA + concluding line */}
                    <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6 mb-6">
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                            See How We Measure Impact
                        </button>
                    </div>
                    <h3 className="text-center text-base sm:text-lg font-bold text-blue-500 mt-4 sm:mt-6 mb-8">
                        <span className="block text-blue-500 font-bold mb-2">Metrics that matter.</span>
                        <span className="text-gray-500 font-normal text-sm sm:text-base">We track time saved, reliability, and ROI—because outcomes are the goal.</span>
                    </h3>

                    {/* 05 */}
                    
                    {/* Section 4: Reviews from customers (main highlight) */}
                    <Testimonial />

                    {/* 06 */}
                    	<TestimonialsMetrics />
                    {/* Section 5: Get Started with Skill Logic */}
                    <GetStarted />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TestimonialsPage;
