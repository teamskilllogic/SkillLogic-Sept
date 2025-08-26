import React from "react";
import { CheckCircle, Star, MessageSquare, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-black mb-4 tracking-tight">
          Why <span className="text-blue-600">Choose Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We’re not just developers — we’re partners in your journey. Our blend
          of experience, creativity, and dedication ensures that your project
          isn’t just completed, but truly elevated.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Star className="w-10 h-10 text-blue-600" />,
              title: "Expertise",
              desc: "Years of hands-on experience building modern websites across diverse industries.",
            },
            {
              icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
              title: "Attention to Detail",
              desc: "Every pixel matters. We craft each project with precision and care.",
            },
            {
              icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
              title: "Clear Communication",
              desc: "We keep you in the loop at every stage, ensuring zero surprises.",
            },
            {
              icon: <Headphones className="w-10 h-10 text-blue-600" />,
              title: "Customer Service",
              desc: "We don’t just deliver projects — we build long-lasting client relationships.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-md border border-gray-200 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
