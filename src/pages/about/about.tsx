import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { GetStarted } from "@/components/common/getstarted/getstarted";
import { Team } from "@/components/home/team";
import { Testimonial } from "@/components/home/testimonials";
import "@/components/common/common.css";
import CompanySection from "@/components/common/about/CompanySection";
import { OurStory } from "@/components/common/about/OurStory";
import ProcessSection from "@/components/common/about/ProcessSection";
import { FAQ } from "@/components/home/faqs";

const About = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <Navbar />

            <main className="body-bg bg-gradient-to-b from-white via-slate-50/50 to-white text-gray-900 overflow-hidden relative">
                {/* Banner */}
                <Hero
                    page="SkillLogic Technologies | About Us"
                    title="About SkillLogic Technologies"
                    description="At SkillLogic, we craft reliable web, app, and SEO solutions. Our mission is simple — to help businesses scale faster with technology that actually works."
                />
                {/* About Company (values icons) */}
                <CompanySection />
                {/* Our Story Section with Counter Animation */}
                <OurStory />
                {/* Process (list + image) */}
                <ProcessSection />
                {/* Client Reviews */}
                <Testimonial />
                {/* Team */}
                <Team />
                {/* Get Started */}
                <GetStarted />
                {/* FAQ */}
                <FAQ />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
