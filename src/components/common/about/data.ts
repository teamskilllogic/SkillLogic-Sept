import { Users, Zap, Clock, MessageCircle, Target, Rocket, Handshake } from "lucide-react";

export const data = {
  stats: [
    { label: "User Satisfaction", value: "100%", icon: Users },
    { label: "Faster Response", value: "5X", icon: Zap },
    { label: "Availability", value: "24/7", icon: Clock },
    { label: "Interactions", value: "1M+", icon: MessageCircle },
  ],
  values: [
    {
      icon: Target,
      title: "Mission-Driven",
      desc: "Focused on delivering measurable results",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      desc: "Using cutting-edge technologies",
    },
    {
      icon: Handshake,
      title: "Partnership",
      desc: "Building long-term relationships",
    },
  ],
  team: [
    {
      name: "Satyam Srivastava",
      role: "CEO & Technical Architect",
      description:
        "Expert in Web Development and DevOps with 8+ years building high-performance websites and scalable infrastructure.",
      img: "/images/Satyam.jpeg",
      skills: ["React", "Node.js", "AWS", "DevOps"],
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Arpit Srivastava",
      role: "Software Engineer",
      description:
        "Specializes in robust, high-performance web apps with a focus on clean architecture and developer experience.",
      img: "/images/arpit.jpeg",
      skills: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Shreya Srivastava",
      role: "SEO & Digital Marketing",
      description:
        "Data-driven strategist helping brands grow visibility and rank across competitive niches.",
      img: "/images/shreya.jpg",
      skills: ["SEO", "Analytics", "Content Strategy", "PPC"],
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
  ],
  reviews: [
    {
      name: "Ankit Sharma",
      role: "CEO, TechStart",
      review:
        "SkillLogic transformed our online presence completely. Their web development team is absolutely top-notch and delivered beyond our expectations!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "Marketing Director",
      review:
        "The SEO results were incredible. We ranked on the first page within 3 months and saw a 300% increase in organic traffic!",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "CTO, CloudCorp",
      review:
        "Cloud migration was smooth and cost-effective. Their support team is responsive and truly understands enterprise needs.",
      rating: 5,
    },
  ],
};
