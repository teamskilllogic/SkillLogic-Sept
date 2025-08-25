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
        <Card className="w-full h-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-black">
                    Get In Touch
                </CardTitle>
                <p className="text-gray-600">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Full Name *
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-10 h-12 border-gray-300 focus:border-black focus:ring-black"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email Address *
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-10 h-12 border-gray-300 focus:border-black focus:ring-black"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                Phone Number
                            </Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="pl-10 h-12 border-gray-300 focus:border-black focus:ring-black"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                Subject *
                            </Label>
                                                            <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="h-12 border-gray-300 focus:border-black focus:ring-black"
                                    placeholder="What's this about?"
                                />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message *
                        </Label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                            <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="pl-10 border-gray-300 focus:border-black focus:ring-black resize-none"
                                    placeholder="Tell us more about your project or inquiry..."
                                />
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium"
                    >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;


