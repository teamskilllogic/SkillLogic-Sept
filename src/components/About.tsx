import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const team = [
  {
    name: 'Satyam Srivastava',
    role: 'Founder, CEO & Technical Architect',
    desc: 'Expert in Web Development and DevOps with over 8 years of experience building high-performance websites and managing scalable infrastructure.',
    initials: 'S',
    image: '/images/Satyam.jpeg',
  },
  {
    name: 'Arpit Srivastava',
    role: 'Software Engineer',
    desc: 'Software Engineer specializing in Web Development, focused on building robust and high-performance web applications.',
    initials: 'A',
    image: '/images/arpit.jpeg',
  },
  {
    name: 'Shreya Srivastava',
    role: 'SEO & Digital Marketing Specialist',
    desc: 'Data-driven SEO & Digital Marketing expert who helps businesses improve their search rankings and visibility.',
    initials: 'S',
    image: '/images/shreya.jpg',
  },
];

const TeamCard = ({ name, role, desc, initials, image }: any) => (
  <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center shadow hover:shadow-lg transition-all duration-300">
    <div className="flex justify-center mb-4">
      {image ? (
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover ring-4 ring-secondary group-hover:scale-110 transition-transform"
        />
      ) : (
        <Avatar className="h-16 w-16 ring-4 ring-secondary group-hover:scale-110 transition-transform">
          <AvatarFallback className="text-xl font-semibold bg-primary text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
    <h3 className="text-lg font-bold text-primary dark:text-white mb-1">{name}</h3>
    <p className="text-sm text-secondary mb-3 font-medium">{role}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
  </div>
);

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <Helmet>
        <title>About SkillLogic | Digital Development & SEO Experts</title>
        <meta
          name="description"
          content="SkillLogic is a team of tech-savvy professionals offering web development, SEO, and digital marketing services."
        />
        <link rel="canonical" href="https://skilllogic.in/#about" />
      </Helmet>

      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Meet Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
