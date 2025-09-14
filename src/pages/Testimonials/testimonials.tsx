import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { TechWeUse } from "@/components/common/services/tech_use";
import { WhyTrustUs } from "@/components/common/services/why_trust_us";
import { ImpactMetrics } from "@/components/common/services/impact_metrics";
import { GetStarted } from "@/components/common/services/get_started";
import { Testimonial } from "@/components/testimonials/testimonials";
import TestimonialsMetrics from "@/components/TestimonialsMetrics";
import "@/components/common/common.css";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen body-bg">
            <Navbar />
            <main>
                {/* Section 1: Hero Banner */}
                <Hero
                    page="Skilllogic Technologies | Testimonials"
                    title="What clients say about SkillLogic"
                    description="Proof over promises — hear why teams trust us to deliver high‑impact products."
                    className="bg-transparent"
                />
                {/* Why you should trust us */}
                <WhyTrustUs />
                {/* Reviews from customers (main highlight) */}
                <Testimonial />
                {/* Unique value add - impact metrics */}
                {/* <TestimonialsMetrics /> */}
                {/* Tech We Use (reuse from Services) */}
                <TechWeUse />
                {/* Get Started with Skill Logic */}
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
};

export default TestimonialsPage;
