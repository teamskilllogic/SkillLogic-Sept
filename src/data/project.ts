export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string; 
  link?: string;
};

export const projects: Project[] = [
    {
    id: "ishwar-rugs",
    title: "Ishwar Rugs",
    description:
      "An elegant digital showcase for handcrafted luxury rugs, designed to captivate global buyers and elevate the brand’s artistry online. The website blends rich visuals with smooth browsing for a premium shopping experience. It highlights heritage, craftsmanship, and modern lifestyle aesthetics.",
    tags: ["Rugs in Bhadohi", "Carpets", "Web Design"],
    image: "/images/ishwar.jpg",
    link: "http://52.66.121.231",
  },
    {
    id: "brantashop",
    title: "Brantashop",
    description:
      "A stylish e-commerce platform for imitation jewelry, designed to offer a seamless shopping journey with modern aesthetics and elegance. The site emphasizes product detail pages, fast navigation, and secure checkout. It enhances brand presence while engaging jewelry enthusiasts online.",
    tags: ["Jewellery", "E-commerce", "Web Design"],
    image: "/images/Brantashop.jpg",
    link: "https://brantashop.com/",
  },
  
  {
    id: "famzoa",
    title: "Famzoa",
    description:
      "A premium online store for trendy imitation jewelry collections, blending visual appeal with smooth user experience and performance. The design focuses on fashion-driven layouts, high-quality product showcases, and ease of purchase. It positions Famzoa as a modern lifestyle jewelry brand.",
    tags: ["Jewellery", "E-commerce", "Web Design"],
    image: "/images/famzoa.jpg",
    link: "https://famzoa.com/",
  },
  {
    id: "anant-digital",
    title: "Anant Digital Advertising Agency",
    description:
      "A sleek, high-performing digital agency website crafted to reflect innovation, creativity, and brand impact in the online space. Designed with user-centric layouts, it highlights services, portfolios, and client success stories. The interface ensures easy navigation and positions the agency as a leader in digital branding.",
    tags: ["Corporate Site", "Web Design", "Digital Agency"],
    image: "/images/adada.png",
    link: "https://adada.co.in",
  },
  {
    id: "as-constructs",
    title: "A S Construction Company",
    description:
      "A modern corporate site designed to showcase premium construction expertise, completed projects, and services with clarity and style. The platform builds trust through impactful visuals, service breakdowns, and structured layouts. It creates a strong digital identity for a growing construction business.",
    tags: ["Construction", "Corporate Site", "Web Design"],
    image: "/images/asconstructs.png",
    link: "https://asconstructs.com",
  },
  {
    id: "sknph",
    title: "Shrikrishna Neuro-Psychiatry Hospital",
    description:
      "An advanced, responsive healthcare platform built to highlight world-class infrastructure and specialized neuro-psychiatric services. The website focuses on patient care, showcasing treatment facilities, and expert doctors. It conveys professionalism and trust for both patients and caregivers.",
    tags: ["Hospital in Azamgarh", "Hospital", "Web Design"],
    image: "/images/sknph.jpg",
    link: "https://www.sknph.com/",
  },
  {
    id: "vardaan",
    title: "VARDAAN HOSPITAL",
    description:
      "A dynamic and patient-focused website that emphasizes modern healthcare facilities and compassionate medical services in Bhadohi. With clear navigation and service sections, it builds confidence for patients. The site also reflects the hospital’s dedication to quality healthcare delivery.",
    tags: ["Hospital in Bhadohi", "Health Care", "Web Design"],
    image: "/images/Vardan.jpg",
    link: "https://www.vardaanhealth.com/",
  },
,
  {
    id: "smile-care",
    title: "Smile Care Dental Clinic",
    description:
      "A professional, responsive website tailored to highlight advanced dental care services with a focus on patient trust and comfort. The design makes information on treatments and appointments accessible. It reflects a warm, approachable, and modern healthcare identity.",
    tags: ["Hospital in Bhadohi", "Hospital", "Web Design"],
    image: "/images/smilecare.jpeg",
    link: "https://smilecaredentalclinic.com/",
  },

];
