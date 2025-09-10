import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Users, Database, Settings } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "WEBSITE DEVELOPMENT",
      description: "Custom websites built with modern technologies and responsive design",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      id: 2,
      title: "MOBILE APP DEVELOPMENT",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Ready"]
    },
    {
      id: 3,
      title: "CRM Development",
      description: "Customer Relationship Management systems tailored to your business needs",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      features: ["Lead Management", "Sales Tracking", "Customer Analytics", "Automation"]
    },
    {
      id: 4,
      title: "ERP Development",
      description: "Enterprise Resource Planning solutions to streamline your operations",
      icon: Database,
      color: "from-orange-500 to-red-500",
      features: ["Resource Planning", "Inventory Management", "Financial Control", "Process Automation"]
    },
    {
      id: 5,
      title: "Other Services",
      description: "Additional technology solutions to support your business growth",
      icon: Settings,
      color: "from-indigo-500 to-blue-500",
      features: ["API Development", "Cloud Solutions", "DevOps", "Maintenance"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4 flex items-center justify-center`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
