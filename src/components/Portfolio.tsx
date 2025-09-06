import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Anant Digital Advertising Agency',
    description: 'Designed and developed a full-featured website for a digital advertising agency.',
    tags: ['Corporate Site', 'Web Design', 'Digital Agency'],
    image: '/images/adada.png',
    link: 'https://adada.co.in',
  },
  {
    title: 'A S Construction Company',
    description: 'Created a modern website showcasing construction services and projects.',
    tags: ['Construction', 'Corporate Site', 'Web Design'],
    image: '/images/asconstructs.png',
    link: 'https://asconstructs.com',
  },
  {
    title: 'Shrikrishna Neuro-Psychiatry Hospital',
    description: 'Designed a responsive website to highlight advanced healthcare services and infrastructure.',
    tags: ['Hospital in Azamgarh', 'Hospital', 'Web Design'],
    image: '/images/sknph.jpg',
    link: 'https://www.sknph.com/',
  },
  {
    title: 'VARDAAN HOSPITAL',
    description: 'Designed a responsive website to highlight advanced healthcare services and infrastructure.',
    tags: ['Hospital in Bhadohi', 'Health Care', 'Web Design'],
    image: '/images/Vardan.jpg',
    link: 'https://www.vardaanhealth.com/',
  },
  {
    title: 'Ishwar Rugs',
    description: 'Created an elegant website to display handcrafted rugs and boost customer engagement.',
    tags: ['Rugs in Bhadohi', 'Carpets', 'Carpets Web Design'],
    image: '/images/ishwar.jpg',
    link: 'http://52.66.121.231',
  },
  {
    title: 'Smile Care Dental Clinic',
    description: 'Designed a responsive website to highlight advanced healthcare services and infrastructure.',
    tags: ['Hospital in Bhadohi', 'Hospital', 'Hospital Web Design'],
    image: '/images/smilecare.jpeg',
    link: 'https://smilecaredentalclinic.com/',
  },
  {
    title: 'Brantashop',
    description: 'Developed an e-commerce website to showcase and sell trendy, affordable imitation jewellery collections.',
    tags: ['Jewellery in Bhadohi', 'Bracelets', 'Necklaces Web Design'],
    image: '/images/Brantashop.jpg',
    link: 'https://brantashop.com/',
  },
  {
    title: 'Famzoa',
    description: 'Developed an e-commerce website to showcase and sell trendy, affordable imitation jewellery collections.',
    tags: ['Jewellery in Bhadohi', 'Bracelets', 'Necklaces Web Design'],
    image: '/images/famzoa.jpg',
    link: 'https://famzoa.com/',
  },
];

const PortfolioCard = ({ title, description, tags, image, link }: any) => (
  <div className="group rounded-xl overflow-hidden border border-gray-200 shadow-md dark:border-gray-700 bg-white dark:bg-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg">
    <div className="relative w-full h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold text-primary dark:text-white group-hover:underline transition-all">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <Button asChild variant="outline" className="w-full mt-2">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </Button>
    </div>
  </div>
);

const Portfolio = () => {
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
    <section id="portfolio" className="section-padding bg-white dark:bg-gray-900">
      <Helmet>
        <title>Our Work Portfolio | SkillLogic Technologies</title>
        <meta name="description" content="Explore our recent website design and development projects. From corporate websites to digital agencies, we've done it all." />
        <link rel="canonical" href="https://skilllogic.in/#portfolio" />
      </Helmet>

      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="animate-on-scroll delay-100 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our recent projects that have helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2 text-sm font-medium rounded">
            <a href="#portfolio">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
