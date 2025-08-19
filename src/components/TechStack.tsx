import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: "ReactJS", category: "Frontend", icon: "⚛️" },
    { name: "NextJS", category: "Frontend", icon: "⚡" },
    { name: "Laravel", category: "Backend", icon: "🔥" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "TypeScript", category: "Language", icon: "🔷" },
    { name: "Python", category: "Language", icon: "🐍" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "Git", category: "Version Control", icon: "📝" },
    { name: "Figma", category: "Design", icon: "🎨" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech We Use
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks to build robust, scalable solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -3,
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                  {tech.name}
                </h3>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
