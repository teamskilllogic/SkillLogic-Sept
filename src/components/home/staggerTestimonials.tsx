"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "SkillLogic team made our restaurant website in just 2 weeks. Very professional work and price was also reasonable. Highly recommend!",
        by: "Rajesh Kumar, Owner at Spice Garden Restaurant",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 1,
        testimonial: "My e-commerce site for sarees is running perfectly since 8 months. Good customer support also, they respond quickly when I have any issue.",
        by: "Priya Sharma, Founder of Elegant Sarees",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    },
    {
        tempId: 2,
        testimonial: "These guys are really good! Made our clinic management system exactly as we wanted. Now appointments booking is so easy for patients.",
        by: "Dr. Amit Patel, Patel Medical Center",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 3,
        testimonial: "Best decision we made for our coaching institute. The student portal they developed is helping us manage 200+ students easily. Worth every rupee!",
        by: "Neha Gupta, Director at Excel Academy",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    },
    {
        tempId: 4,
        testimonial: "I was tensed about my business website but SkillLogic team handled everything smoothly. Now getting more customers through online!",
        by: "Vikash Singh, Singh Electronics",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 5,
        testimonial: "Excellent work yaar! My gym's mobile app is working fantastic. Members are very happy with online class booking feature.",
        by: "Rohit Verma, FitLife Gym Owner",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 6,
        testimonial: "SkillLogic transformed our traditional jewellery business. Online catalogue and WhatsApp ordering system increased our sales by 40%.",
        by: "Kiran Shah, Shah Jewellers",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 7,
        testimonial: "Very satisfied with their service. They completed our real estate website before deadline and also provided free training to use admin panel.",
        by: "Suresh Agarwal, Agarwal Properties",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 8,
        testimonial: "Bahut accha kaam kiya hai! Our wedding planning website looks so beautiful and professional. Getting good inquiries now.",
        by: "Kavita Jain, Dream Weddings",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    },
    {
        tempId: 9,
        testimonial: "Initially I was worried about budget, but SkillLogic gave us a website within our range. Quality is also very good for the price.",
        by: "Manish Yadav, Yadav Auto Parts",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 10,
        testimonial: "Great team to work with! They understand our requirements perfectly and delivered exactly what we needed for our pharmacy.",
        by: "Deepak Mishra, City Medical Store",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 11,
        testimonial: "Our tuition classes website is getting so many admissions now! Simple design but very effective. Thank you SkillLogic team.",
        by: "Sunita Devi, Bright Future Classes",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    },
    {
        tempId: 12,
        testimonial: "Amazing experience! They made our construction company website mobile-friendly and SEO optimized. Getting leads from Google now.",
        by: "Ravi Chandra, RC Constructions",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 13,
        testimonial: "SkillLogic helped us shift from offline to online during COVID. Our textile business survived because of their e-commerce solution.",
        by: "Ashok Kumar, Kumar Textiles",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 14,
        testimonial: "Professional approach and reasonable pricing. My beauty parlour's booking system is working smoothly since 6 months. No complaints!",
        by: "Pooja Tripathi, Glamour Beauty Salon",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    },
    {
        tempId: 15,
        testimonial: "They delivered our grocery delivery app on time and within budget. Customer response has been very positive. Recommended!",
        by: "Arjun Pandey, Fresh Mart Grocery",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 16,
        testimonial: "Best web development company in our area. Made our school's admission portal and fee management system. Parents are very happy now.",
        by: "Sanjay Tiwari, Principal at Vidya Mandir School",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 17,
        testimonial: "SkillLogic team is very cooperative. They made changes in our hotel booking website whenever we asked. Good after-sales service.",
        by: "Rakesh Joshi, Hotel Grand Palace",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 18,
        testimonial: "Honest pricing and quality work. Our diagnostic center's report management system is helping us serve patients better.",
        by: "Dr. Shweta Singh, Singh Diagnostics",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    },
    {
        tempId: 19,
        testimonial: "Made our CA firm's website with client portal feature. Now document sharing with clients is so much easier. Great job!",
        by: "Manoj Agrawal, CA & Associates",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 20,
        testimonial: "Very happy with mobile app for my transport business. Driver tracking and customer notifications working perfectly since launch.",
        by: "Satish Kumar, Kumar Travels",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },
    {
        tempId: 21,
        testimonial: "SkillLogic understood our local market needs. E-commerce website for our handicrafts is bringing customers from other cities too!",
        by: "Geeta Devi, Handmade Crafts",
        imgSrc: "https://ui-avatars.com/api/?name=Female&size=150&background=fce7f3&color=be185d&format=svg"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-black text-primary-foreground border-black"
                    : "z-0 bg-card text-card-foreground border-border hover:border-black"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45 bg-border"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-12 bg-muted object-cover object-top"
                style={{
                    boxShadow: "3px 3px 0px hsl(var(--background))"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-primary-foreground" : "text-foreground"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
