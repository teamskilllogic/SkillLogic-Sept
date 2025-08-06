import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import HeroCanvas from './HeroCanvas';
import { ArrowDownCircle } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const techStack = [
  { label: 'React', icon: '⚛️' },
  { label: 'Node.js', icon: '🟢' },
  { label: 'TypeScript', icon: '🔷' },
  { label: 'Next.js', icon: '▲' },
  { label: 'MongoDB', icon: '🌿' },
  { label: 'Tailwind CSS', icon: '💨' },
  { label: 'HTML5', icon: '🌐' },
  { label: 'CSS3', icon: '🎨' },
];

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleGetQuote = () => {
    const message = "Hello, I'm interested in getting a quote for a project. Please get in touch!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918318943040?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />

      <div className="relative h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="z-10 px-6 py-20 md:py-0 md:px-12 lg:px-16 flex flex-col justify-center items-start lg:h-screen">
          <div className="max-w-xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-secondary animate-on-scroll">
                <TypewriterEffect text="SkillLogic Technologies" speed={80} className="font-bold" />
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary dark:text-white animate-on-scroll leading-tight">
                Empowering Your Digital Success
              </h1>
            </div>
            <div className="animate-on-scroll delay-200 pt-4">
              <Button
                className="bg-secondary hover:bg-secondary/80 text-white px-8 py-6 text-lg rounded-md transition transform hover:scale-105 hover:shadow-lg duration-300"
                onClick={handleGetQuote}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-[40vh] lg:h-screen w-full z-0 order-first lg:order-last">
          <HeroCanvas />
        </div>
      </div>

      {/* Technologies We Use */}
      <div className="relative z-10 px-6 pb-20 pt-12 md:px-16 lg:px-32 bg-white dark:bg-gray-900">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary dark:text-white animate-on-scroll">
            Technologies We Use
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4 animate-on-scroll delay-100">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:scale-105
                ${index % 2 === 0 ? 'animate-float' : 'animate-pulse'}`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationDuration: '2.5s',
              }}
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-gray-800 dark:text-white">{tech.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300 flex flex-col items-center"
        aria-label="Scroll down to services"
      >
        <span className="text-sm mb-2 font-medium">Scroll Down</span>
        <ArrowDownCircle size={36} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;