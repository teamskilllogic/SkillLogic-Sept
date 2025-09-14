import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { Timeline } from "@/components/home/timeline";
import { ProjectShowcase } from "@/components/home/projectShowcase";
import { Team } from "@/components/home/team";
import { Pricing } from "@/components/home/pricing";
import { TechShowcase } from "@/components/home/techShowcase";
import { Testimonial } from "@/components/home/testimonials";
import { GetStarted } from "@/components/common/getstarted/getstarted";
import { Services } from "@/components/home/services";
import { FAQ } from "@/components/home/faqs";
import "@/components/common/common.css";

const Home = () => {
    return (
        <div className="min-h-screen body-bg">
            <Navbar />
            <main>
                <Hero
                    page="Skilllogic Technologies"
                    title="Its time to make your software in weeks"
                    description={`Ready to build your next Website, Mobile App, CRM, or ERP ? \n We empower startups and businesses to scale and grow—fast. \n Get started today and launch in weeks!`}
                />
                <Services />
                <ProjectShowcase />
                <TechShowcase />
                <Timeline />
                <Testimonial />
                <Pricing />
                <Team />
                <FAQ />
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
