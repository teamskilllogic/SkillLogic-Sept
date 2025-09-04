// OurStory.tsx - Simplified static component
import React from "react";
import { HandPlatter, Rocket } from "lucide-react";

// Static data
const STATS_DATA = [
    { value: "1000+", label: "Completed Projects" },
    { value: "1500", label: "Satisfied Customers" },
    { value: "10+", label: "Years Of Mastery" },
    { value: "45+", label: "Worldwide Honors" },
];

const OurStory = () => {
    return (
        <section className="w-full py-20 flex justify-center items-center bg-white">
            <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
                {/* Top Pill Label */}
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4 shadow-lg">
                    <HandPlatter className="w-4 h-4 text-black" />
                    Our Story
                </span>

                {/* Heading */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-[58px] leading-tight font-extrabold text-zinc-900 text-center w-[85%] md:w-full mx-auto mb-6 tracking-tight">
                    OUR STORY
                </h2>

                {/* Description */}
                <p className="text-zinc-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed w-[94%] md:w-[80%] xl:w-[56%] mx-auto mb-10">
                    Your Vision, Our Expertise, Your Success. We believe in building meaningful
                    experiences that inspire and connect people. We help businesses get noticed,
                    generate leads, and dominate with confidence.
                </p>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
                    {/* Left Side Image */}
                    <div>
                        <img
                            src="/images/about_page/randomPeople1.jpeg"
                            alt="Team Discussion"
                            className="w-full shadow-xl rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="space-y-10 text-left">
                        {/* Top Images */}
                        <div className="flex gap-4">
                            <div className="relative w-1/2">
                                <img
                                    src="/images/about_page/randomPeople2.jpeg"
                                    alt="Tech Blog"
                                    className="w-full rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    loading="lazy"
                                />
                                <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                                    Tech Blog
                                </span>
                                <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                                    Trends
                                </span>
                            </div>

                            <div className="relative w-1/2">
                                <img
                                    src="/images/about_page/randomPeople3.jpeg"
                                    alt="Trends"
                                    className="w-full rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    loading="lazy"
                                />
                                <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                                    Tech Blog
                                </span>
                                <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                                    Trends
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                            At <span className="font-semibold">SkillLogic Technologies</span>, we believe every great success story starts with
                            a clear vision. Our team blends creativity with expertise to transform your
                            ideas into impactful digital experiences.
                        </p>

                        {/* Counters - Simple static display */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {STATS_DATA.map((item, idx) => (
                                <div key={idx} className="text-center">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                                        {item.value}
                                    </h2>
                                    <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Avatars */}
                        <div className="flex items-center gap-4 justify-start">
                            <div className="flex -space-x-3">
                                <img
                                    src="/images/about_page/randomuser1.jpg"
                                    alt="user-1"
                                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 hover:z-10 transition-transform duration-200 cursor-pointer"
                                    loading="lazy"
                                />
                                <img
                                    src="/images/about_page/randomuser2.jpg"
                                    alt="user-2"
                                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 hover:z-10 transition-transform duration-200 cursor-pointer"
                                    loading="lazy"
                                />
                                <img
                                    src="/images/about_page/randomuser3.jpg"
                                    alt="user-3"
                                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 hover:z-10 transition-transform duration-200 cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4 mt-12">
                    <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200">
                        <Rocket size={18} />
                        WATCH INTRO
                    </button>
                </div>

                {/* Closing tagline */}
                <div className="text-lg md:text-xl font-bold text-blue-500 mt-8">
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold">
                        <Rocket className="w-4 h-4" />
                        Driving innovation with passion.
                    </div>
                    <p className="text-gray-500 font-normal mt-2">
                        From clean engineering to scalable architectures, we empower businesses with reliable digital solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export { OurStory };
