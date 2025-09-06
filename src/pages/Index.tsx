import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Testimonials from '../components/HomeTestinomials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'SkillLogic Technologies',
      'url': 'https://skilllogic.in',
      'logo': 'https://skilllogic.in/logo.png',
      'description': 'SkillLogic Technologies offers innovative web development and digital services to help businesses thrive.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Civil Lines, Power House Road',
        'addressLocality': 'Bhadohi',
        'addressRegion': 'Uttar Pradesh',
        'postalCode': '221401',
        'addressCountry': 'IN'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-8318943040',
        'contactType': 'customer service'
      },
      'sameAs': [
        'https://linkedin.com/company/skilllogic-technologies',
        'https://instagram.com/skilllogictech'
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SkillLogic Technologies | Best Web Development & SEO Services in India</title>
        <meta name="description" content="We build SEO-ready websites, web apps and digital solutions that grow your business online." />
        <meta name="keywords" content="web development, SEO services, digital marketing, Bhadohi, SkillLogic Technologies" />
        <link rel="canonical" href="https://skilllogic.in/" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
