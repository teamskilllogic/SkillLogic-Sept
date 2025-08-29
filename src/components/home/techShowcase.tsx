import React from "react";
import { Button } from "@/components/ui/button";

const logos = [
    { name: "NextJS", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "TypeScript", src: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "ReactJS", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express.js", src: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "Javascript", src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "MySQL", src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    { name: "PostgreSQL", src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "MongoDB", src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Firebase", src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "Flutter", src: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Laravel", src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "Python", src: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Docker", src: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "Git", src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Razorpay", src: "https://cdn.worldvectorlogo.com/logos/razorpay.svg" },
];

const TechShowcase: React.FC = () => {
    return (
        <section className="w-full py-20 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 rounded-3xl border p-10 bg-black shadow-sm" style={{ zIndex: 1, position: 'relative' }}>
                {/* Left Content */}
                <div className="flex-1">
                    <p className="text-xs font-semibold tracking-wide text-white uppercase">
                        Our Expertise
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-3 text-white">
                        Modern Web, App & Cloud Solutions
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-lg text-white">
                        We help startups and businesses launch secure, scalable, and beautiful digital products. Our team specializes in custom web apps, mobile solutions, cloud infrastructure, and UI/UX design—using the latest technologies to turn your vision into reality.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button className="bg-white text-black px-6 py-2 rounded-xl hover:bg-white hover:text-black hover:border-black border border-white">
                            See Technologies
                        </Button>
                        <Button variant="outline" className="px-6 py-2 rounded-xl border border-white bg-black text-white">
                            Why Choose Us?
                        </Button>
                    </div>
                </div>

                {/* Right Logos Grid */}
                <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-6">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <h3 className="text-lg font-bold text-blue-500 mt-16 text-center">
                <span className="block text-blue-500 font-bold">Inspired by our work?</span>
                <span className="text-gray-500 font-normal">
                    Let’s create something amazing together. Share your vision with us and become our next success story—reach out to start your project today!
                </span>
            </h3>
        </section>
    );
};

export { TechShowcase };
