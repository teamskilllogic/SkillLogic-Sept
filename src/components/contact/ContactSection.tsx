import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-8 mt-9">
                <span 
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                    style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                    Contact
                </span>
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-black mb-4 tracking-tight">
                    Get In Touch With Us
                </h2>
                <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] mb-6">
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


            <div className="mt-20 text-center">
                <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                        Why Choose SkillLogic?
                    </h3>
                    <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] mb-6">
                        We're committed to providing exceptional service and support to all our clients.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold text-black mb-2">24/7</div>
                            <p className="text-gray-600 text-base font-medium">Support Available</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-black mb-2">100%</div>
                            <p className="text-gray-600 text-base font-medium">Client Satisfaction</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-black mb-2">Fast</div>
                            <p className="text-gray-600 text-base font-medium">Response Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
