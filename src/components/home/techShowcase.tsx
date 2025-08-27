import React from "react";
import { Button } from "@/components/ui/button";

const logos = [
    { name: "Google", src: "/logos/google.svg" },
    { name: "LinkedIn", src: "/logos/linkedin.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Spotify", src: "/logos/spotify.svg" },
    { name: "Facebook", src: "/logos/facebook.svg" },
    { name: "TypeScript", src: "/logos/typescript.svg" },
    { name: "Instagram", src: "/logos/instagram.svg" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "VS Code", src: "/logos/vscode.svg" },
    { name: "Snowflake", src: "/logos/snowflake.svg" },
    { name: "Netflix", src: "/logos/netflix.svg" },
    { name: "Figma", src: "/logos/figma.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "Sketch", src: "/logos/sketch.svg" },
    { name: "Photoshop", src: "/logos/photoshop.svg" },
    { name: "YouTube", src: "/logos/youtube.svg" },
    { name: "Medium", src: "/logos/medium.svg" },
    { name: "Discord", src: "/logos/discord.svg" },
];

const TechShowcase: React.FC = () => {
    return (
        <section className="w-full py-20 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 rounded-3xl border p-10 bg-white shadow-sm" style={{ zIndex: 1, position: 'relative' }}>

                {/* Left Content */}
                <div className="flex-1">
                    <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Components
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-3">
                        Supercharge your workflow
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-lg">
                        Build sleek, responsive interfaces in record time with our carefully crafted
                        React and Tailwind CSS components.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button className="bg-black text-white px-6 py-2 rounded-xl">
                            Browse Components
                        </Button>
                        <Button
                            variant="outline"
                            className="px-6 py-2 rounded-xl border border-gray-300"
                        >
                            View Documentation →
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
        </section>
    );
};

export { TechShowcase };
