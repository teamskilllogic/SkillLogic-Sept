import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Banner from '@/components/Banner';
import ServicesSection from '@/components/ServicesSection';
import TechStack from '@/components/TechStack';
import GetStarted from '@/components/GetStarted';

const Service = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Section 2: Banner (two lines overview of services) */}
        <Banner />

        {/* Section 3: Services */}
        <ServicesSection />

        {/* Section 4: Tech We Use */}
        <TechStack />

        {/* Section 5: Get Started with SkillLogic */}
        <GetStarted />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Service;