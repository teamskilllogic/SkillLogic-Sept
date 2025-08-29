import React from "react";
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { GetStarted } from "@/components/common/services/get_started";
import PortfolioMain from "@/components/portfolio/portfolioMain";
import { projects } from "@/data/project";
import "@/components/common/common.css";

const PortfolioPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white body-bg">
            <Navbar />

            <main>
                <Hero
                    page="Skilllogic Technologies | Portfolio"
                    title="Work Portfolio"
                    description="Explore our recent projects that have helped businesses achieve their digital goals."
                />

                {/* Portfolio main component (pass projects array) */}
                <PortfolioMain items={projects} />

                <GetStarted />
            </main>

            <Footer />
        </div>
    );
};

export default PortfolioPage;
