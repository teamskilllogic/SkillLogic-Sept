import React from "react";
import { data } from "./data";

const ClientReviews = () => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Real feedback from satisfied customers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.reviews.map((review, index) => (
            <div
              key={review.name}
              className="group rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{review.review}"
              </p>
              <h4 className="font-bold text-gray-900 text-lg">
                {review.name}
              </h4>
              <p className="text-indigo-600 text-sm font-medium">
                {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
