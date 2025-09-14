import React from "react";

// Integration logos (public domain or CC-licensed)
const techWeUse = [
    { name: "NextJS", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "ReactJS", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "Javascript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "MySQL", logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Razorpay", logo: "https://cdn.worldvectorlogo.com/logos/razorpay.svg" }
];


const TechWeUse = () => (
    <section id="testimonials-section" className="w-full max-w-7xl mx-auto px-6 py-20 mt-16">
        <div className="text-center mb-12">
            {/* Section Label */}
            <span
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Technologies
            </span>
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                Modern Web, App & Cloud Solutions
            </h2>
            {/* Description */}
            <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                We help startups and businesses launch secure, scalable, and beautiful digital products. Our team specializes in custom web apps, mobile solutions, cloud infrastructure, and UI/UX design—using the latest technologies to turn your vision into reality.
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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

        <h3 className="text-lg font-bold text-blue-500 mt-16 text-center">
            <span className="block text-blue-500 font-bold">Inspired by our work?</span>
            <span className="text-gray-500 font-normal">Let’s create something amazing together. Share your vision with us and become our next success story—reach out to start your project today!</span>
        </h3>
    </section>
);

export { TechWeUse };
