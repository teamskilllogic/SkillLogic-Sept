import React from "react";

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
    ,
];


const TechWeUse = () => (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 ">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-12">
            Technologies We Use
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techWeUse.map((tech, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-transform"
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
    </section>
);

export { TechWeUse };
