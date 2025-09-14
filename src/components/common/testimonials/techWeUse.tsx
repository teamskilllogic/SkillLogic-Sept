import React from "react";
import { HandPlatter } from "lucide-react";

// Integration logos (public domain or CC-licensed)
const techWeUse = [
    {
        name: "ReactJS",
        logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", // ✅ Reliable React logo
    },
    {
        name: "NextJS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
        name: "Laravel",
        logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", // ✅ Fixed Laravel logo
    },
    {
        name: "Node.js",
        logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
        name: "TypeScript",
        logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
        name: "Python",
        logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
        name: "MongoDB",
        logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
        name: "PostgreSQL",
        logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    {
        name: "AWS",
        logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    },
    {
        name: "Docker",
        logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    },
    {
        name: "Git",
        logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
        name: "Figma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // ✅ Wikimedia always works
    }
];


const TechWeUse = () => (
    <section id="testimonials-section" className="w-full max-w-7xl mx-auto px-6 py-20 mt-8 text-center ">
        {/* Section Label */}
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
            style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
            {/* Icon */}
            <HandPlatter className="w-4 h-4 text-black-500" />
            {/* {page} text */}
            Technologies
        </span>
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
            Modern Web, App & Cloud Solutions
        </h2>
        {/* Description */}
        <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto mb-5 md:mb-[30px] tracking-tight">
            We help startups and businesses launch secure, scalable, and beautiful digital products. Our team specializes in custom web apps, mobile solutions, cloud infrastructure, and UI/UX design—using the latest technologies to turn your vision into reality.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techWeUse.map((tech, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-transform"
                    style={{ zIndex: 2, position: 'relative', boxShadow: '0 10px 32px rgb(34 42 53 / 0.12), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(34 42 53 / 0.05), 0 4px 6px rgb(34 42 53 / 0.08), 0 24px 108px rgb(47 48 55 / 0.10)' }}
                >
                    <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-12 w-12 mb-4 object-contain"
                    />
                    <h3 className="text-sm font-medium text-gray-800 text-center">
                        {tech.name}
                    </h3>
                </div>
            ))}
        </div>
        {/* CTA + concluding line */}
        <div className="flex items-center justify-center gap-4 mt-12 mb-6">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                Inspired by our work?
            </button>
        </div>
        <h3 className="text-center text-base sm:text-lg font-bold text-blue-500 mt-4 sm:mt-6 mb-8">
            <span className="block text-blue-500 font-bold mb-2">Modern stack, proven results.</span>
            <span className="text-gray-500 font-normal text-sm sm:text-base">We choose technologies that speed delivery and scale with your growth. <br /> Let’s create something amazing together. Share your vision with us and become our next success story—reach out to start your project today!</span>
        </h3>
    </section>
);

export { TechWeUse };
