import React from "react";

const ProcessSection = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main bordered container */}
        <div className="rounded-xl bg-gradient-to-r from-white-60 to-white-0 shadow-sm p-10 mx-auto">
          {/* Title + description */}
          <h2 className="text-2xl font-bold mb-3 text-center">Process</h2>
          <p className="text-gray-600 mb-8 text-center">
            As a web developer, I follow a structured process to deliver every
            project on time, within budget, and tailored to client needs.
          </p>

          {/* Grid for text and image side by side */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Steps List */}
            <ul className="space-y-4">
              {[
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
              ].map((step) => (
                <li key={step.title}>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/public/images/About/Process Image.jpg"
                alt="Process"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
