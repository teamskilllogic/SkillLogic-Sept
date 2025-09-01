import React from "react";

const steps = [
  {
    title: "Discovery",
    desc: "I gather information about goals, target audience, and competitors to understand the project scope.",
  },
  {
    title: "Planning",
    desc: "I create a detailed plan with milestones, timelines, and deliverables for effective project management.",
  },
  {
    title: "Design",
    desc: "I design wireframes, mockups, and prototypes ensuring user-friendly, visually appealing, and functional layouts.",
  },
  {
    title: "Development",
    desc: "Using programming languages and CMS, I build responsive websites optimized for SEO and accessibility.",
  },
  {
    title: "Testing",
    desc: "I perform rigorous testing for compatibility, security, and performance to ensure everything works flawlessly.",
  },
  {
    title: "Launch",
    desc: "I launch the website on the client’s server, ensuring everything is smooth and accessible to all users.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clear step-by-step roadmap to delivering high-quality, reliable,
            and client-focused web solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 transform -translate-x-1/2" />

          <ul className="space-y-12">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`relative flex items-center justify-between w-full ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Step content */}
                <div className="w-5/12 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>

                {/* Step number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold shadow-md z-10">
                  {i + 1}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
