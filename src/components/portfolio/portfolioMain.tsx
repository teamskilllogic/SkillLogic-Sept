import React, { useState } from "react";
import type { Project } from "@/data/project";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ContainerStagger,
} from "@/components/home/animatedGallery";
import { Sparkles } from "@/components/home/sparkles";
import { SquareChartGantt } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

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

  // filter 
  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((project) =>
          project.tags.some(
            (tag) =>
              tag.toLowerCase().replace(/\s+/g, "") ===
              activeFilter.toLowerCase().replace(/\s+/g, "")
          )
        );

  // Slice for visible projects
  const visibleItems = filteredItems.slice(0, visibleCount);
  const { theme } = useTheme();

  return (
    <section className="body-bg py-16 px-6">
      {/* Section Intro */}
      <ContainerStagger className="relative z-[10] place-self-center px-6 pt-12 text-center mb-12">
        {/* Background Half Circle */}
        <div className="relative h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] mb-[-80px]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#60a5fa,transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </div>

        {/* Section Label */}
        <span
          className="relative z-[100] inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
          style={{
            boxShadow:
              "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)",
          }}
        >
          <SquareChartGantt className="w-4 h-4 text-black-500" />
          Projects
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-6xl xl:text-[58px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full mx-auto mb-5 md:mb-[30px] tracking-tight leading-tight">
          Showcasing Our Impactful Work
        </h2>

        {/* Description */}
        <p className="text-zinc-600 text-base xl:text-lg font-medium leading-6 md:leading-[30px] w-[94%] md:w-[80%] xl:w-[56%] mx-auto">
          Explore a selection of our completed projects—each crafted to solve
          real business challenges and deliver measurable results.
        </p>
      </ContainerStagger>

      {/* ✅ Filters - fixed spacing */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => {
              setActiveFilter(category);
              setVisibleCount(3);
            }}
            className={`rounded-full px-5 py-2 text-sm font-medium shadow-md transition-all duration-300 ${
              activeFilter === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
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

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4">
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
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
