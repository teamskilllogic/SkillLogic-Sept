import React, { useState } from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        whatsappNumber: "+91 8318943040"
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        };

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === "");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Create WhatsApp message
            const whatsappMessage = `Hi SkillLogic Team!

I'm reaching out regarding: ${formData.subject}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Looking forward to hearing from you!`;

            // Remove + and spaces from phone number for WhatsApp URL
            const phoneNumber = formData.whatsappNumber.replace(/[^0-9]/g, '');
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <Card className="w-full h-full shadow-xl border border-gray-100 bg-white z-10 relative">
            <CardHeader className="text-center pb-2 bg-white border-b border-gray-100">
                <CardTitle className="text-2xl md:text-3xl font-bold text-black mb-2">
                    Get In Touch
                </CardTitle>
                <p className="text-gray-700 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px]">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </CardHeader>
            <CardContent className="p-8 bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <Label htmlFor="name" className="text-sm font-semibold text-black">
                                Full Name *
                            </Label>
                            <div className="relative group">
                                <User className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`pl-12 h-10 border-2 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="email" className="text-sm font-semibold text-black">
                                Email Address *
                            </Label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`pl-12 h-10 border-2 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <Label htmlFor="phone" className="text-sm font-semibold text-black">
                                Phone Number *
                            </Label>
                            <div className="relative group">
                                <Phone className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`pl-12 h-10 border-2 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="subject" className="text-sm font-semibold text-black">
                                Subject *
                            </Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className={`h-10 border-2 ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                placeholder="What's this about?"
                            />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="message" className="text-sm font-semibold text-black">
                            Message *
                        </Label>
                        <div className="relative group">
                            <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                            <Textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={`pl-12 pt-4 border-2 ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 resize-none rounded-lg`}
                                placeholder="Tell us more about your project or inquiry..."
                            />
                        </div>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* WhatsApp Number Selection */}
                    <div className="space-y-4">
                        <Label className="text-sm font-semibold text-black flex items-center gap-2">
                            <FaWhatsapp className="text-green-500 text-lg" />
                            Choose WhatsApp Number to Send Message
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 p-2 border-2 rounded-lg bg-gray-50 hover:bg-white transition-all duration-200 cursor-pointer group"
                                 onClick={() => setFormData({...formData, whatsappNumber: "+91 8318943040"})}>
                                <input
                                    type="radio"
                                    id="whatsapp1"
                                    name="whatsappNumber"
                                    value="+91 8318943040"
                                    checked={formData.whatsappNumber === "+91 8318943040"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
                                />
                                <label htmlFor="whatsapp1" className="text-sm font-medium text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <FaWhatsapp className="text-green-500" />
                                        <span>+91 8318943040</span>
                                    </div>
                                </label>
                            </div>

                            <div className="flex items-center space-x-3 p-2 border-2 rounded-lg bg-gray-50 hover:bg-white transition-all duration-200 cursor-pointer group"
                                 onClick={() => setFormData({...formData, whatsappNumber: "+91 9125138209"})}>
                                <input
                                    type="radio"
                                    id="whatsapp2"
                                    name="whatsappNumber"
                                    value="+91 9125138209"
                                    checked={formData.whatsappNumber === "+91 9125138209"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
                                />
                                <label htmlFor="whatsapp2" className="text-sm font-medium text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <FaWhatsapp className="text-green-500" />
                                        <span>+91 9125138209</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full h-14 bg-black hover:bg-gray-800 text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-3"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span>Send via WhatsApp</span>
                            <span className="hidden sm:inline text-sm opacity-80">({formData.whatsappNumber})</span>
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
