import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "sonner";

const PHONE_NUMBERS = {
  primary: "+91 8318943040",
  secondary: "+91 9125138209",
};

const ContactInfo = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Contact Information</h3>
    <div className="flex items-start space-x-4">
      <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
      <div>
        <p className="font-medium dark:text-white">Office Address</p>
        <p className="text-gray-600 dark:text-gray-300">
          Civil Lines, Power House Road,<br />
          Bhadohi - 221401,<br />
          Uttar Pradesh, India
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Phone className="h-5 w-5 text-secondary shrink-0" />
      <div>
        <p className="font-medium dark:text-white">Phone</p>
        <div className="flex flex-col">
          <a href={`tel:${PHONE_NUMBERS.primary.replace(/\s/g, '')}`} className="text-gray-600 dark:text-gray-300 hover:text-secondary">
            {PHONE_NUMBERS.primary}
          </a>
          <a href={`tel:${PHONE_NUMBERS.secondary.replace(/\s/g, '')}`} className="text-gray-600 dark:text-gray-300 hover:text-secondary">
            {PHONE_NUMBERS.secondary}
          </a>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Mail className="h-5 w-5 text-secondary shrink-0" />
      <div>
        <p className="font-medium dark:text-white">Email</p>
        <a href="mailto:info@skilllogic.in" className="text-gray-600 dark:text-gray-300 hover:text-secondary">
          info@skilllogic.in
        </a>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [phoneOption, setPhoneOption] = useState("primary");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const number = phoneOption === "primary"
      ? PHONE_NUMBERS.primary.replace(/\D/g, '')
      : PHONE_NUMBERS.secondary.replace(/\D/g, '');
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    toast.success("Message sent via WhatsApp");

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Send us a message</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium dark:text-white">Name*</label>
              <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium dark:text-white">Email*</label>
              <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium dark:text-white">Subject</label>
            <Input id="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium dark:text-white">Message*</label>
            <Textarea id="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium dark:text-white">Send message to:</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="phoneOption" value="primary" checked={phoneOption === "primary"} onChange={() => setPhoneOption("primary")} />
                <span className="text-sm dark:text-white">{PHONE_NUMBERS.primary}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="phoneOption" value="secondary" checked={phoneOption === "secondary"} onChange={() => setPhoneOption("secondary")} />
                <span className="text-sm dark:text-white">{PHONE_NUMBERS.secondary}</span>
              </label>
            </div>
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/80 text-white">
            Send via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SkillLogic Technologies",
      "image": "https://skilllogic.in/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Civil Lines, Power House Road",
        "addressLocality": "Bhadohi",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "221401",
        "addressCountry": "IN"
      },
      "telephone": "+91-8318943040",
      "email": "info@skilllogic.in",
      "url": "https://skilllogic.in"
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <Helmet>
        <title>Contact SkillLogic | Reach Us via WhatsApp, Call, or Email</title>
        <meta name="description" content="Get in touch with SkillLogic Technologies for digital services. Call, WhatsApp or email us now." />
        <link rel="canonical" href="https://skilllogic.in/#contact" />
      </Helmet>

      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Contact Us</h2>
          <p className="animate-on-scroll delay-100 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your online presence? Let's talk about your project!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <ContactInfo />
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Location</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4811.540565053485!2d82.55755940126596!3d25.385302277322992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe1d3e8a22c77%3A0x9408742a05b0ad93!2sSkill%20Logic%20Technologies!5e0!3m2!1sen!2sin!4v1746546233889!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SkillLogic Technologies Map Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll delay-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;