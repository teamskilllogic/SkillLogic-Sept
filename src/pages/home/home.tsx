import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { Timeline } from "@/components/home/timeline";
import "@/components/common/common.css";

const Home = () => {
    return (
        <div className="min-h-screen bg-white service-bg">
            <Navbar />
            <main>
                {/* Section 2: Banner */}
                <Hero
                    page="Skilllogic Technologies"
                    title="Its time to make your software in weeks"
                    description={`Ready to build your next Website, Mobile App, CRM, or ERP ? \n We empower startups and businesses to scale and grow—fast. \n Get started today and launch in weeks!`}
                />
                {/* Section 3: Timeline */}
                <Timeline />
            </main>
            <Footer />
        </div>
    );
};

export { Home };
