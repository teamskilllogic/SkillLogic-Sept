import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <img
          src="./public/images/About/About Image.jpg"
          alt="About us"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-600 mb-6">
            As a Web Development Services we are Committed to Building Custom
            Web Solutions that Drive Business Success.
          </p>
          <p className="text-gray-600 mb-4">
            At our web development services agency, we specialize in creating
            custom web solutions that help businesses achieve their online
            goals. Our team of experienced web developers, designers, and
            digital strategists work collaboratively to build websites, web
            applications, and e-commerce solutions that meet our clients’ unique
            needs and deliver results.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to provide our clients with the tools they need to
            succeed in the online marketplace. We are dedicated to staying
            up-to-date with the latest web technologies and trends to ensure
            that we are always delivering the highest quality work.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
