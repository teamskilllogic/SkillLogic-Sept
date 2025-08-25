import React from "react";
import { CheckCircle, Star, MessageSquare, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why choose us</h2>
        <p className="text-gray-600 mb-12">
          Thank you for considering us as your web developer. We believe
          that our experience, skills, and dedication set us apart and make
          us the ideal choice for your project.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Expertise</h3>
            <p className="text-sm text-gray-600">
              We have extensive experience in designing and developing
              websites for clients across various industries.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Attention to Detail</h3>
            <p className="text-sm text-gray-600">
              We take pride in our work, and pay close attention to every
              detail to ensure the end product is of the highest quality.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <MessageSquare className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Communication</h3>
            <p className="text-sm text-gray-600">
              We believe clear and constant communication is crucial for the
              success of any project.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <Headphones className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Customer Service</h3>
            <p className="text-sm text-gray-600">
              We understand the importance of building long-term
              relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
