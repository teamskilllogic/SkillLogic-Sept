import React, { useState, useEffect } from "react";
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

    // Handle scroll to section when component mounts with hash
    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Remove the # from hash
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    // Add a small delay to ensure the component has rendered
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        };

        // Handle initial load
        handleHashScroll();

        // Handle hash changes (if user clicks another link while on the page)
        window.addEventListener('hashchange', handleHashScroll);

        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashScroll);
        };
    }, []);

    return (
        <section id="portfolio-section" className="body-bg py-16 px-6">
            {/* Section Intro */}
            <ContainerStagger className="relative z-[10] place-self-center px-6 text-center mb-12">
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

            {/* ✅ Filters - enhanced styling */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() => {
                            setActiveFilter(category);
                            setVisibleCount(3);
                        }}
                        className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 ${activeFilter === category
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
                            : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 shadow-sm"
                            }`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="max-w-6xl mx-auto px-0 py-12">
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
                            className="group grid md:grid-cols-2 gap-0 items-center bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                            style={{
                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)'
                            }}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Left content */}
                            <div className="relative flex flex-col justify-between h-full px-8 md:px-12 py-8 md:py-12">
                                <div className="flex flex-col">
                                    {/* Enhanced tags */}
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 border border-blue-200 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Enhanced title */}
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-blue-900 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Enhanced description */}
                                    <p className="text-gray-700 leading-relaxed text-lg font-medium mb-8">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Enhanced button */}
                                <div className="mt-auto">
                                    <Button
                                        onClick={() => window.open(project.link, "_blank")}
                                        className="group/btn inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                                    >
                                        <span>View Project</span>
                                        <svg
                                            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>

                            {/* Clean image section */}
                            <div className="relative h-64 md:h-[400px] flex items-center justify-center p-6 md:p-8">
                                <div className="w-full max-w-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain rounded-xl"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Load More */}
                {visibleCount < filteredItems.length && (
                    <div className="flex justify-center mt-16">
                        <Button
                            onClick={() => setVisibleCount((prev) => prev + 3)}
                            className="group inline-flex items-center px-8 py-4 bg-white text-black border-2 border-gray-200 rounded-full font-semibold shadow-lg hover:shadow-xl hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                        >
                            <span>View More Projects</span>
                            <svg
                                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
