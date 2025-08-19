import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "WEBSITE DEVELOPMENT",
      description: "Custom websites built with modern technologies and responsive design"
    },
    {
      id: 2,
      title: "MOBILE APP DEVELOPMENT",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      id: 3,
      title: "CRM Development",
      description: "Customer Relationship Management systems tailored to your business needs"
    },
    {
      id: 4,
      title: "ERP Development",
      description: "Enterprise Resource Planning solutions to streamline your operations"
    },
    {
      id: 5,
      title: "Other Services",
      description: "Additional technology solutions to support your business growth"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-black">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
