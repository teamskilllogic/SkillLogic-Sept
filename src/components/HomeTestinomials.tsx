import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "SkillLogic completely transformed our online presence. Their team not only designed a beautiful website but also helped us implement strategies that significantly increased our conversion rates. The ROI has been incredible!",
    author: "Nitesh Srivastava",
    title: "Founder & CEO",
    company: "Anant Digital Advertising Agency",
    image: "/images/Nitesh.jpg",
    rating: 5
  },
  {
    quote: "Their SEO expertise boosted our rankings in weeks. Highly recommend!",
    author: "Sanket Mishra",
    title: "E-commerce Manager",
    company: "StyleHub",
    image: "/images/sanket.jpeg",
    rating: 5
  },
  {
    quote: "The team delivered a flawless app UI that our users love.",
    author: "Sunny",
    title: "CTO",
    company: "R&R Networks Bhadohi",
    image: "/images/Sunny.jpeg",
    rating: 5
  },
  {
    quote: "Working with SkillLogic was the best decision we made for our website redesign.",
    author: "Puja Patel",
    title: "Marketing Head",
    company: "InnoSolutions",
    image: "/images/puja.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef<number | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current !== null) {
      const diff = touchStartX.current - touchEndX;
      if (diff > 50) nextTestimonial();
      if (diff < -50) prevTestimonial();
    }
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden text-white py-20"
      style={{
        background: 'linear-gradient(135deg, #1e1e2f 0%, #3b1a5a 50%, #1e1e2f 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 20s ease infinite',
        backgroundAttachment: 'fixed',
      }}
    >
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet" />
        <title>Client Testimonials | What Our Clients Say | SkillLogic</title>
      </Helmet>

      <div className="container-section relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses we've helped succeed.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl">
                    <CardContent className="p-8 flex items-start space-x-6">
                      <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full border-2 border-white/30" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-white">{testimonial.author}</h4>
                        <p className="text-gray-400 text-sm mb-2">{testimonial.title}, {testimonial.company}</p>
                        <blockquote className="text-white text-lg">"{testimonial.quote}"</blockquote>
                        <div className="mt-4 flex space-x-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={prevTestimonial} variant="outline" size="icon" className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowLeft />
          </Button>

          <Button onClick={nextTestimonial} variant="outline" size="icon" className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowRight />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white scale-110' : 'bg-gray-400/50'} transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
