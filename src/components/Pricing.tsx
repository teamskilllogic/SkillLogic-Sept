import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Startup",
    price: "₹9,999",
    description: "Essential web presence for new businesses",
    features: [
      "5-Page Responsive Website",
      "SEO Basic Setup",
      "Contact Form",
      "Mobile Optimization",
      "1 Month Free Support"
    ],
    isPopular: false
  },
  {
    name: "Business",
    price: "₹15,999",
    description: "Comprehensive solution for growing businesses",
    features: [
      "10-Page Responsive Website",
      "SEO Advanced Setup",
      "Contact & Booking Forms",
      "Mobile Optimization",
      "Blog Setup",
      "Social Media Integration",
      "3 Months Free Support"
    ],
    isPopular: false
  },
  {
    name: "Premium",
    price: "₹29,999",
    description: "Advanced web presence for established businesses",
    features: [
      "15+ Page Responsive Website",
      "SEO Full Package",
      "Advanced Forms & Integrations",
      "Mobile Optimization",
      "Blog & Newsletter",
      "Social Media Integration",
      "E-commerce Setup (Basic)",
      "6 Months Free Support"
    ],
    isPopular: true
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Tailored solution for specific business needs",
    features: [
      "Custom Pages & Features",
      "Enterprise SEO Solutions",
      "Custom Integrations",
      "E-commerce (Advanced)",
      "Custom Web Applications",
      "Priority Support",
      "Dedicated Project Manager"
    ],
    isPopular: false
  }
];

const PricingCard = ({ name, price, description, features, isPopular }: any) => {
  const handleContactViaWhatsApp = () => {
    const message = `I'm interested in the ${name} pricing plan from SkillLogic Technologies.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918318943040?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className={`group animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 relative border ${isPopular ? 'border-secondary ring-2 ring-orange-500/40' : 'border-gray-200'} h-full flex flex-col rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      <CardHeader className={`text-center ${isPopular ? 'bg-secondary/10' : ''}`}>
        <CardTitle className="text-2xl font-bold text-primary">{name}</CardTitle>
        <div className="mt-4 mb-2">
          <span className="text-4xl font-bold">{price}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary shrink-0 mr-2 transition-transform group-hover:scale-125 duration-300" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className={`w-full ${isPopular ? 'bg-secondary hover:bg-secondary/80 text-white animate-pulse' : 'bg-primary hover:bg-primary/80 text-white'}`} onClick={handleContactViaWhatsApp}>
          {price === "Custom" ? "Request Quote" : "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Website Development Plans",
      "brand": { "@type": "Organization", "name": "SkillLogic Technologies" },
      "offers": pricingPlans.map(plan => ({
        "@type": "Offer",
        "name": plan.name,
        "price": plan.price.replace(/[₹,]/g, ''),
        "priceCurrency": "INR",
        "description": plan.description,
        "availability": "https://schema.org/InStock"
      }))
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section id="pricing" className="section-padding bg-accent">
      <Helmet>
        <title>Website Development Pricing | SkillLogic Technologies</title>
        <meta name="description" content="Affordable web development pricing plans from SkillLogic. Choose from Startup, Business, Premium, or Custom plans." />
        <link rel="canonical" href="https://skilllogic.in/#pricing" />
      </Helmet>

      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary mb-4">
            Website Development Pricing Plans
          </h2>
          <p className="animate-on-scroll delay-100 text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable plans tailored to your business needs. Get a professional website without breaking the bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;