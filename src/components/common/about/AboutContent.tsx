import React, { useEffect, useState } from "react";
import "./AboutContent.css";

// Components + sections
import AboutSection from "./AboutSection";
import CompanySection from "./CompanySection";
import WhyChooseUs from "./WhyChooseUs";
import ProcessSection from "./ProcessSection";
import TeamSection from "./TeamSection";
import ClientReviews from "./ClientReviews";

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
        {/* 1) About Us (image + text) */}
        {/* <AboutSection /> */}

        {/* 2) About Company (values icons) */}
        <CompanySection />

        {/* 3) Why Choose Us (four cards) */}
        <WhyChooseUs />

        {/* 4) Process (list + image) */}
        <ProcessSection />

        {/* 5) Team (flip cards) */}
        <TeamSection />

        {/* 6) Client Reviews */}
        <ClientReviews />
      </main>
    </>
  );
};

export default AboutContent;
