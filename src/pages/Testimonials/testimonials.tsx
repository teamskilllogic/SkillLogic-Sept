import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { TechWeUse } from "@/components/common/services/tech_use";
import { WhyTrustUs } from "@/components/common/services/why_trust_us";
import { ImpactMetrics } from "@/components/common/services/impact_metrics";
import { GetStarted } from "@/components/common/services/get_started";
import StickyNoteTestimonials from "@/components/StickyNoteTestimonials";
import TestimonialsHighlight from "@/components/TestimonialsHighlight";
import "@/components/common/common.css";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen bg-white body-bg">
            <Navbar />
            <main>
                {/* Section 1: Hero Banner */}
                <Hero
                    title="What clients say about SkillLogic"
                    description="Proof over promises — hear why teams trust us to deliver high‑impact products."
                    className="bg-transparent"
                />

                {/* Section 2: Tech We Use (reuse from Services) */}
                <TechWeUse />

                {/* Section 3: Why you should trust us */}
                <WhyTrustUs />

                {/* Section 3.1: Unique value add - impact metrics */}
                <ImpactMetrics />

                {/* Section 4: Reviews from customers (main highlight) */}
                <StickyNoteTestimonials />

                {/* Section 4.1: Animated main highlight */}
                <TestimonialsHighlight />

                {/* Section 5: Get Started with Skill Logic */}
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
};

export default TestimonialsPage;
