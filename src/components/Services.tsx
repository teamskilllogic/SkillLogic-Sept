import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Website Development",
    description: "Custom, responsive websites built to convert visitors into customers and rank high on search engines.",
    icon: "💻"
  },
  {
    title: "Web App Development",
    description: "Powerful, scalable web applications that streamline your business processes and enhance user experience.",
    icon: "⚙️"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging experiences that keep users coming back.",
    icon: "🎨"
  },
  {
    title: "SEO Optimization",
    description: "Data-driven strategies to improve your search rankings and drive organic traffic to your website.",
    icon: "📈"
  },
  {
    title: "Website Maintenance & Support",
    description: "Ongoing updates, security monitoring, and technical support to keep your website running smoothly.",
    icon: "🛠️"
  },
  {
    title: "E-commerce Solutions",
    description: "Feature-rich online stores that provide seamless shopping experiences and boost your sales.",
    icon: "🛒"
  }
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach(el => observer.observe(el));

    return () => animElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Our Services | SkillLogic Technologies</title>
        <meta name="description" content="Discover the digital solutions offered by SkillLogic — including web development, SEO, e-commerce and more." />
        <link rel="canonical" href="https://skilllogic.in/#services" />
      </Helmet>

      <div className="container-section text-center">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Our Digital Solutions</h2>
        <p className="animate-on-scroll delay-100 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          From stunning websites to top Google rankings, we deliver results that help businesses thrive in the digital world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg p-6 text-left transition-all transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;