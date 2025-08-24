import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Contact Us
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Ready to start your next project? Get in touch with us today and let's discuss how we can help bring your vision to life.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Left Side - Contact Form */}
                <div className="flex-1">
                    <ContactForm />
                </div>

                {/* Right Side - Office Address & Map */}
                <div className="flex-1 flex flex-col gap-6">
                    <ContactMap />
                </div>
            </div>

            {/* Additional Contact Information */}
            <div className="mt-20 text-center">
                <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-black mb-4">
                        Why Choose SkillLogic?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        We're committed to providing exceptional service and support to all our clients.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold text-black mb-2">24/7</div>
                            <p className="text-gray-600">Support Available</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-black mb-2">100%</div>
                            <p className="text-gray-600">Client Satisfaction</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-black mb-2">Fast</div>
                            <p className="text-gray-600">Response Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;


