import React, { useState } from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <Card className="w-full h-full shadow-xl border border-gray-100 bg-white z-10 relative">
            <CardHeader className="text-center pb-8 bg-white border-b border-gray-100">
                <CardTitle className="text-2xl md:text-3xl font-bold text-black mb-3">
                    Get In Touch
                </CardTitle>
                <p className="text-gray-700 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px]">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </CardHeader>
            <CardContent className="p-8 bg-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <Label htmlFor="name" className="text-sm font-semibold text-black">
                                Full Name *
                            </Label>
                            <div className="relative group">
                                <User className="absolute left-4 top-4 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-12 h-14 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="email" className="text-sm font-semibold text-black">
                                Email Address *
                            </Label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-4 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-12 h-14 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <Label htmlFor="phone" className="text-sm font-semibold text-black">
                                Phone Number
                            </Label>
                            <div className="relative group">
                                <Phone className="absolute left-4 top-4 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="pl-12 h-14 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg"
                                    placeholder="Enter your phone number"
                                />
                            </div>
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
                                    className="h-14 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg"
                                    placeholder="What's this about?"
                                />
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
                                    rows={6}
                                    className="pl-12 pt-4 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 resize-none rounded-lg"
                                    placeholder="Tell us more about your project or inquiry..."
                                />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full h-14 bg-black hover:bg-gray-800 text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
