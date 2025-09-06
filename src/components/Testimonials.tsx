import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const testimonials = [
  {
    quote: "SkillLogic completely transformed our online presence. Their team not only designed a beautiful website but also helped us implement strategies that significantly increased our conversion rates. The ROI has been incredible!",
    author: "Nitesh Srivastava",
    context: "on website development & SEO",
    color: "from-emerald-400 to-teal-500",
    foldColor: "from-emerald-600 to-teal-700",
    image: "/images/Nitesh.jpg"
  },
  {
    quote: "Their SEO expertise boosted our rankings in weeks. The team's knowledge and dedication to our success exceeded all expectations. Highly recommend SkillLogic for any digital marketing needs!",
    author: "Sanket Mishra",
    context: "on SEO & digital marketing",
    color: "from-yellow-400 to-orange-400",
    foldColor: "from-yellow-600 to-orange-600",
    image: "/images/sanket.jpeg"
  },
  {
    quote: "Working with SkillLogic was the best decision we made for our app development. The team delivered a flawless UI that our users absolutely love. Their attention to detail is unmatched.",
    author: "Sunny Kumar",
    context: "on mobile app development",
    color: "from-blue-400 to-indigo-500",
    foldColor: "from-blue-600 to-indigo-700",
    image: "/images/Sunny.jpeg"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 bg-gray-50"
    >
      <Helmet>
        <title>Client Testimonials | What Our Clients Say | SkillLogic</title>
      </Helmet>

      <div className="container-section relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            OUR CUSTOMERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hear from SkillLogic clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories of what it means to work with SkillLogic
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative w-full max-w-sm lg:max-w-xs transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  zIndex: testimonials.length - index 
                }}
              >
                                 {/* Sticky Note Card */}
                 <div className={`sticky-note relative bg-gradient-to-br ${testimonial.color} rounded-lg shadow-xl transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer`}>
                   {/* Folded Corner */}
                   <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-current rounded-bl-lg" style={{ borderTopColor: testimonial.foldColor.includes('emerald') ? '#059669' : testimonial.foldColor.includes('yellow') ? '#d97706' : '#2563eb' }}></div>
                   
                   {/* Content */}
                   <div className="p-6 text-white">
                     <blockquote className="text-sm leading-relaxed mb-4 font-medium">
                       "{testimonial.quote}"
                     </blockquote>
                     <div className="border-t border-white/20 pt-3">
                       <div className="flex items-center space-x-3">
                         <img 
                           src={testimonial.image} 
                           alt={testimonial.author}
                           className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-lg"
                         />
                         <div>
                           <div className="font-semibold text-sm">{testimonial.author}</div>
                           <div className="text-xs text-white/80">{testimonial.context}</div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                                 {/* Shadow */}
                 <div className="sticky-note-shadow"></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Trusted by 100+ Clients</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>5-Star Rating</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
