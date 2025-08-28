import React, { useState } from "react";
import type { Project } from "@/data/project";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {
  items: Project[];
};

export default function PortfolioMain({ items }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const categories = [
    "All",
    "Hospital",
    "Corporate Site",
    "Construction",
    "Jewellery",
    "E-commerce",
    "Carpets",
  ];

  // Filtering
  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  // Slice for visible projects
  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section className="body-bg py-16 px-6">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Work Portfolio
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Each project is crafted with a balance of creativity, innovation, and
          precision. Explore how we deliver digital experiences across
          industries with a premium finish and consistent quality.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => {
              setActiveFilter(category);
              setVisibleCount(3); 
            }}
            className={`rounded-full px-5 py-2 text-sm font-medium shadow-md transition-all duration-300 ${
              activeFilter === category
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-0 py-12">
        <motion.div
          className="grid gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {visibleItems.map((project, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-0 items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
              }}
            >
              {/* Left content */}
              <div className="flex flex-col justify-between h-full px-6 md:px-8 py-6 md:py-8">
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium uppercase text-gray-600 border border-gray-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mt-5">
                    {project.title}
                  </h3>
                </div>

                <p className="-mt-4 text-gray-600 leading-relaxed text-base">
                  {project.description}
                </p>

                <div className="mt-3">
                  <Button
                    onClick={() => window.open(project.link, "_blank")}
                    className="px-5 py-2 bg-black text-white rounded-full shadow hover:shadow-lg transition-transform hover:scale-105"
                  >
                    View Project
                  </Button>
                </div>
              </div>

              {/* Right image */}
              <div className="relative h-64 md:h-[350px] flex items-center justify-center p-6">
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
