import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { TechWeUse } from "@/components/common/testimonials/techWeUse";
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
                {/* Section 1: Hero Banner */}
                <Hero
                    page="Skilllogic Technologies | Testimonials"
                    title="What clients say about SkillLogic"
                    description="Proof over promises — hear why teams trust us to deliver high‑impact products."
                    className="bg-transparent"
                />
                <div className="typography-testimonials px-4 sm:px-6 lg:px-8">
                    {/* Section 2: Tech We Use (reuse from Services) */}
                    <TechWeUse />
                    {/* Section 3: Why you should trust us */}
                    <WhyTrustUs />
                    {/* Section 4: Reviews from customers (main highlight) */}
                    <Testimonial />
                    {/* Section 4.1: Unique value add - impact metrics */}
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
