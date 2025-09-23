"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "SkillLogic team delivered a modern and user-friendly website on time. Very professional and committed to quality. Highly recommended!",
        by: "Mr Abdul Salam, Owner at A.S. Construction Company",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },

     {
        tempId: 2,
        testimonial: "We are very happy with the website SkillLogic built for Vardaan Hospital. Professional, timely, and high-quality service!",
        by: "Dr. Piyush Jaiswal, Founder at Vardaan Hospital",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },

     {
        tempId: 3,
        testimonial: "SkillLogic created a stunning website for us that beautifully showcases our handcrafted rugs. The design is elegant, smooth to navigate, and truly reflects our brand’s identity. Highly recommended!",
        by: "Mr Ishwar  Srivastava, Owner at Ishwar Rugs",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },

     {
        tempId: 4,
        testimonial: "Our hospital website designed by SkillLogic is user-friendly, informative, and professional. Great work and timely delivery!",
        by: "Dr. Nitish Kumar Yadav, Owner at Shri Krishna Neuro-Psychiatry Hospital",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },

     {
        tempId: 5,
        testimonial: "Our new website by SkillLogic is responsive, professional, and highlights our services perfectly. Smooth experience and timely delivery!",
        by: "Dr. Raj Kumar Yadav, Founder at Smile Care Dental Clinic",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },

     {
        tempId: 6,
        testimonial: "Our new website by SkillLogic is modern, responsive, and perfectly aligned with our agency’s identity. Great work and timely delivery!",
        by: "Mr Nityesh Srivastava, Owner at Anant Digital Advertising Agency",
        imgSrc: "https://ui-avatars.com/api/?name=Male&size=150&background=e5e7eb&color=374151&format=svg"
    },

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
