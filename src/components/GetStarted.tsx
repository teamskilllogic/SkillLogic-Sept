import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const GetStarted = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-30"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 opacity-20 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 opacity-20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillLogic</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 group"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1.5">Free Consultation</h3>
            <p className="text-gray-600 text-sm">Get expert advice on your project requirements</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1.5">Quick Response</h3>
            <p className="text-gray-600 text-sm">We'll get back to you within 24 hours</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center border border-green-200 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1.5">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Round-the-clock assistance for your projects</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
