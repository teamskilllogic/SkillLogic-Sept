import React, { useEffect, useState } from "react";
import CompanySection from "./CompanySection";
import WhyChooseUs from "./WhyChooseUs";
import ProcessSection from "./ProcessSection";
import TeamSection from "./TeamSection";
import StickyNoteTestimonials from "@/components/StickyNoteTestimonials";

const AboutContent = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="body-bg bg-gradient-to-b from-white via-slate-50/50 to-white text-gray-900 overflow-hidden relative">
        {/* 1) About Company (values icons) */}
        <CompanySection />

        {/* 2) Process (list + image) */}
        <ProcessSection />

        {/* 3) Why Choose Us (four cards) */}
        <WhyChooseUs />

        {/* 4) Client Reviews */}
        <StickyNoteTestimonials />

        {/* 5) Team (flip cards) */}
        <TeamSection />
      </main>
    </>
  );
};

export default AboutContent;
