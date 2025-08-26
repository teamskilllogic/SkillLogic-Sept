import React from "react";
import { data } from "./data";

const CompanySection = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          About <span className="text-blue-600">Us</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            SkillLogic is a trusted technology partner delivering innovative
            web, mobile, and cloud solutions. We focus on creating measurable
            business impact through clean engineering, modern design, and
            scalable architectures that grow with your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {data.values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-4xl mb-4 flex justify-center">
                  {React.createElement(value.icon, {
                    className: "w-10 h-10 text-blue-500",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
