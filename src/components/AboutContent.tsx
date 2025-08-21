import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutHero from '../assets/AboutHero.webp';

const stats = [
    { label: 'User Satisfaction', value: '98%' },
    { label: 'Faster Response', value: '5X' },
    { label: 'Availability', value: '24/7' },
    { label: 'Interactions', value: '1M+' },
];

const services = [
    'Web Development',
    'Mobile Development',
    'Digital Marketing',
    'SEO Services',
    'Cloud Solutions',
];

const teamMembers = [
    {
        name: 'Satyam Srivastava',
        role: 'CEO & Technical Architect',
        description:
            'Expert in Web Development and DevOps with over 8 years experience building high-performance websites and managing scalable infrastructure.',
        img: '/team/satyam.jpg',
    },
    {
        name: 'Arpit Srivastava',
        role: 'Software Engineer',
        description:
            'Software Engineer specializing in Web Development, focused on building robust and high-performance web applications.',
        img: '/team/arpit.jpg',
    },
    {
        name: 'Shreya Srivastava',
        role: 'SEO & Digital Marketing Specialist',
        description:
            'Data-driven SEO & Digital Marketing expert who helps businesses improve their search rankings and visibility.',
        img: '/team/shreya.jpg',
    },
];

const AboutContent: React.FC = () => {
    return (
        // If your navbar is fixed, add mt-20 (or mt-[var(--nav-h)]) to this main in the page wrapper, not here.
        <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 bg-white dark:bg-[rgb(16_23_38)]">
            {/* HERO */}
            <section className="px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-[34px] sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Our Journey to{' '}
                        <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Smarter Conversations
                        </span>
                    </h1>

                    <p className="mt-3 sm:mt-4 text-[15px] sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Explore how our passion for innovation fuels intelligent, human-like digital
                        experiences for the brands we build.
                    </p>

                    <div className="mt-6 sm:mt-8">
                        <img
                            src={aboutHero}
                            alt="Team collaborating"
                            className="mx-auto w-full max-w-6xl rounded-xl border border-black/10 dark:border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] object-cover"
                        />
                    </div>

                    {/* Stats row */}
                    <div className="mx-auto mt-6 sm:mt-8 max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-xl bg-white dark:bg-[rgb(16_23_38)] ring-1 ring-black/5 dark:ring-white/10 shadow-sm px-3 py-5 sm:py-6 flex flex-col items-center"
                            >
                                <span className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-300">
                                    {s.value}
                                </span>
                                <span className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="px-4 py-10 sm:py-12">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
                        Why SkillLogic
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed">
                        SkillLogic is a results‑driven team delivering SaaS, web/mobile apps, and cloud
                        solutions. We blend expertise, innovation, and agility to accelerate business growth.
                        Our mission is to empower clients with meaningful solutions and measurable impact for a
                        digital future. We value partnership, transparency, and quality for outcomes at scale.
                    </p>

                    <ul className="mt-6 list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
                        {services.map((service) => (
                            <li key={service} className="marker:text-indigo-500">
                                {service}
                            </li>
                        ))}
                    </ul>

                    {/* decorative bubbles */}
                    <div className="relative mt-8 h-20 pointer-events-none select-none">
                        <div className="absolute left-1/3 top-0 w-28 h-28 bg-indigo-600/30 rounded-full blur-2xl" />
                        <div className="absolute left-1/2 top-8 w-8 h-8 bg-sky-400/50 rounded-full blur-sm" />
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="px-4 pb-16 sm:pb-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 dark:text-white">
                        Meet the people behind SkillLogic
                    </h2>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {teamMembers.map((m) => (
                            <article
                                key={m.name}
                                className="rounded-2xl bg-white dark:bg-[rgb(16_23_38)] ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 sm:p-8 text-center"
                            >
                                <img
                                    src={m.img}
                                    alt={m.name}
                                    className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4 ring-2 ring-indigo-400/40 border-4 border-indigo-400/30"
                                />
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                                    {m.name}
                                </h3>
                                <p className="mt-1 text-indigo-600 dark:text-indigo-300 font-medium">
                                    {m.role}
                                </p>
                                <p className="mt-3 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                                    {m.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutContent;
