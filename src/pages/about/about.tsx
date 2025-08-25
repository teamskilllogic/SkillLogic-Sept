import React from "react";
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import { GetStarted } from "@/components/common/services/get_started";
import AboutContent from "@/components/common/about/AboutContent";
import "@/components/common/common.css";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Section 2: Banner (two lines overview of services) */}
        <Hero
          title="About SkillLogic Technologies"
          description="At SkillLogic, we craft reliable web, app, and SEO solutions. Our mission is simple — to help businesses scale faster with technology that actually works."
        />
        {/* Section 3: About */}
        <AboutContent />
        {/* Section 5: Get Started with SkillLogic */}
        <GetStarted />
      </main>

      <Footer />
    </div>
  );
};
export default About;
