// OurStory.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { HandPlatter, Rocket } from "lucide-react";

// Memoized counter component using single animation frame per render
const Counter = React.memo(({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = useState(from);
  const raf = useRef<number>();

  useEffect(() => {
    let start: number = 0;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * easeOut);
      if (count !== current) setCount(current);
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
    // eslint-disable-next-line
  }, [from, to, duration]);

  return <span>{count.toLocaleString()}</span>;
});
Counter.displayName = 'Counter';

// Image component using native lazy loading and single-use IntersectionObserver
const OptimizedImage = React.memo(({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className: string;
  children?: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {show && (
        <>
          <img
            src={src}
            alt={alt}
            className="w-full rounded-2xl transition-all duration-500 hover:scale-105"
            loading="lazy"
          />
          {children}
        </>
      )}
    </div>
  );
});
OptimizedImage.displayName = 'OptimizedImage';

// Static data outside component
const STATS_DATA = [
  { to: 1000, label: "Completed Projects", duration: 2, suffix: "+" },
  { to: 1500, label: "Satisfied Customers", duration: 2.5, suffix: "" },
  { to: 10, label: "Years Of Mastery", duration: 2, suffix: "+" },
  { to: 45, label: "Worldwide Honors", duration: 1.5, suffix: "+" },
];

const AVATAR_IMAGES = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
];

// Top-level component, memoized
const OurStory = () => {
  const [countersInView, setCountersInView] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);

  // Minimal IntersectionObserver to enable counters animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (countersRef.current) observer.observe(countersRef.current);
    return () => observer.disconnect();
  }, []);

  const handleWatchIntro = useCallback(() => {
    // Handle watch intro action
    console.log('Watch intro clicked');
  }, []);

  return (
    <section className="w-full py-20 flex justify-center items-center bg-white">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Top Pill Label */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4 shadow-lg"
        >
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
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <OptimizedImage
              src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              alt="Team Discussion"
              className="w-full shadow-xl"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10 text-left"
          >
            {/* Top Images */}
            <div className="flex gap-4">
              <OptimizedImage
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                alt="Tech Blog"
                className="w-1/2"
              >
                <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Tech Blog
                </span>
                <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Trends
                </span>
              </OptimizedImage>

              <OptimizedImage
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Trends"
                className="w-1/2"
              >
                <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Tech Blog
                </span>
                <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Trends
                </span>
              </OptimizedImage>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              At <span className="font-semibold">SkillLogic Technologies</span>, we believe every great success story starts with
              a clear vision. Our team blends creativity with expertise to transform your
              ideas into impactful digital experiences.
            </p>

            {/* Counters */}
            <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS_DATA.map((item, idx) => (
                <div key={idx} className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                    {countersInView && (
                      <Counter from={0} to={item.to} duration={item.duration} />
                    )}
                    {item.suffix}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Avatars */}
            <div className="flex items-center gap-4 justify-start">
              <div className="flex -space-x-3">
                {AVATAR_IMAGES.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`user-${idx}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={handleWatchIntro}
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
          >
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

export default React.memo(OurStory);
