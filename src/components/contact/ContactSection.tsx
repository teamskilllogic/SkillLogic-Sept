import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import {
  mapConfig,
  generateMapEmbedUrl,
  generateMapSearchUrl,
} from "@/config/mapConfig";

const ContactSection = () => {
  // Handle scroll to section when component mounts with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from hash
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay to ensure the component has rendered
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes (if user clicks another link while on the page)
    window.addEventListener("hashchange", handleHashScroll);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <section
      id="contact-section"
      className="w-full max-w-7xl mx-auto px-6 py-20"
    >
      <div className="text-center mb-8 mt-9">
        <span
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
          style={{
            boxShadow:
              "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)",
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clipRule="evenodd"
            />
          </svg>
          Contact
        </span>
        <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-black mb-4 tracking-tight">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] mb-6">
          Ready to start your next project? Get in touch with us today and let's
          discuss how we can help bring your vision to life.
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

      {/* Enhanced Map Section */}
      <div className="mt-16 z-10">
        <Card className="shadow-xl border border-gray-100 bg-white rounded-2xl overflow-hidden  z-10">
          <CardHeader className="pb-6 bg-white border-b border-gray-100">
            <CardTitle className="text-2xl md:text-3xl font-bold text-black flex items-center justify-center gap-3">
              Find Us on Google Maps
            </CardTitle>
            <p className="text-center text-gray-600 text-base mt-3">
              Visit our office or get directions to reach us easily
            </p>
          </CardHeader>

          <CardContent className="p-0">
            <div className="relative h-[450px]">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.28181202112796!2d82.56139417279094!3d25.387767504641104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe1d3e8a22c77%3A0x9408742a05b0ad93!2sSkillLogic%20Technologies!5e0!3m2!1sen!2sin!4v1758636674184!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="SkillLogic Technologies Location"
              />
              {/* Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-black rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-lg text-black">
                    Our Office Location
                  </span>
                </div>

                <div className="space-y-1 mb-5">
                  <p className="text-base font-medium text-gray-800">
                    {mapConfig.address.company}
                  </p>
                  <p className="text-sm text-gray-600">
                    {mapConfig.address.street}
                  </p>
                  <p className="text-sm text-gray-600">
                    {mapConfig.address.city}, {mapConfig.address.state}{" "}
                    {mapConfig.address.pincode}
                  </p>
                </div>

                <a
                  href={generateMapSearchUrl(mapConfig)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 hover:from-gray-700 hover:to-black text-white font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Us Section */}
      {/* <div className="mt-24">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                        Why Choose SkillLogic?
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        We're committed to providing exceptional service and support to all our clients with unmatched dedication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-black mb-3">24/7</div>
                        <h4 className="text-xl font-semibold text-black mb-2">Support Available</h4>
                        <p className="text-gray-600 text-base leading-relaxed">Round-the-clock assistance whenever you need us most</p>
                    </div>
                    <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-black mb-3">100%</div>
                        <h4 className="text-xl font-semibold text-black mb-2">Client Satisfaction</h4>
                        <p className="text-gray-600 text-base leading-relaxed">Guaranteed quality and results that exceed expectations</p>
                    </div>
                    <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-black mb-3">Fast</div>
                        <h4 className="text-xl font-semibold text-black mb-2">Response Time</h4>
                        <p className="text-gray-600 text-base leading-relaxed">Quick turnaround times without compromising on quality</p>
                    </div>
                </div>
            </div> */}
    </section>
  );
};

export default ContactSection;
