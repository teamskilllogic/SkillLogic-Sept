// OurStory.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [years, setYears] = useState(0);
  const [honors, setHonors] = useState(0);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => (prev < 10000 ? prev + 100 : 10000));
      setCustomers((prev) => (prev < 15000 ? prev + 150 : 15000));
      setYears((prev) => (prev < 10000 ? prev + 100 : 10000));
      setHonors((prev) => (prev < 45 ? prev + 1 : 45));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-transparent text-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
            OUR STORY
          </p>

          <h2 className="font-light text-base sm:text-lg md:text-xl lg:text-3xl leading-relaxed text-gray-700">
            Your Vision Our Expertise Your Success <br />
            Get Noticed Generate{" "}
            <span className="text-blue-500">Leads Dominate.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              alt="Team Discussion"
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Top Images */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-1/2"
              >
                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                  alt="Tech Blog"
                  className="w-full rounded-xl"
                />
                <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Tech Blog
                </span>
                <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Trends
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-1/2"
              >
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                  alt="Trends"
                  className="w-full rounded-xl"
                />
                <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Tech Blog
                </span>
                <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Trends
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              At "SkillLogic Technologies", we believe every great success story
              starts with a clear vision. Our team blends creativity with
              expertise to transform your ideas into impactful digital
              experiences. From strategy to execution, we help you get noticed,
              generate quality leads, and build lasting growth. Together, we
              don’t just follow trends—we create them.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-black-400 text-2xl font-bold">
                  {projects.toLocaleString()}+
                </h2>
                <p className="text-sm">Completed Projects</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-black-400 text-2xl font-bold">
                  {customers.toLocaleString()}
                </h2>
                <p className="text-sm">Satisfied Customers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-black-400 text-2xl font-bold">
                  {years.toLocaleString()}+
                </h2>
                <p className="text-sm">Years Of Mastery</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-black-400 text-2xl font-bold">{honors}+</h2>
                <p className="text-sm">Worldwide Honors</p>
              </motion.div>
            </div>

            {/* Intro Section */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition"
              >
                ▶ <span>WATCH INTRO</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
