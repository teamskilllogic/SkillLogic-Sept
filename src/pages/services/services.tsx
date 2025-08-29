import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { Services } from "@/components/common/services/services";
import { GetStarted } from "@/components/common/services/get_started";
import { TechWeUse } from "@/components/common/services/tech_use";
import "@/components/common/common.css";

const Service = () => {
    return (
        <div className="min-h-screen body-bg">
            <Navbar />
            <main>
                {/* Section 2: Banner (two lines overview of services) */}
                <Hero
                    page="Skilllogic Technologies | Services"
                    title="Our Solutions for your Digital Growth"
                    description="We deliver cutting-edge technology solutions to transform your business and drive growth."
                />
                {/* Section 3: Services */}
                <Services />
                {/* Section 4: Tech We Use */}
                <TechWeUse />
                {/* Section 5: Get Started with SkillLogic */}
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
};

export default Service;
