import React from 'react';
import { Navbar } from "@/components/common/navigations/navigations";
import { Footer } from "@/components/common/footer/footer";
import { Hero } from "@/components/common/hero/hero";
import ContactSection from "@/components/contact/ContactSection";
import NeedHelp from "@/components/contact/NeedHelp";
import { GetStarted } from "@/components/common/services/get_started";
import "@/components/common/common.css";

const Contact = () => {
    return (
        <div className="min-h-screen bg-white service-bg">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Hero
                    title="Get In Touch"
                    description="Ready to transform your business? Let's discuss your project and explore how our expertise can drive your success."
                />
                
                {/* Contact Section */}
                <ContactSection />
                
                {/* Need Help Section */}
                <NeedHelp />
                
                {/* Get Started Section */}
                <GetStarted />
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
