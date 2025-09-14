import React, { useState, useEffect } from "react";
import { X, Send, User, Mail, Phone, MessageSquare, Calendar } from "lucide-react";
import { FaWhatsapp, FaRupeeSign } from "react-icons/fa";

interface GetAQuoteProps {
    isOpen: boolean;
    onClose: () => void;
}

const GetAQuote: React.FC<GetAQuoteProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budgetRange: "",
        timeline: "",
        description: "",
        features: [] as string[],
        whatsappNumber: "+91 8318943040"
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: ""
    });

    const projectTypes = [
        "Website Development",
        "Mobile App Development",
        "E-commerce Platform",
        "Web Application",
        "UI/UX Design",
        "Digital Marketing",
        "SEO Services",
        "Other"
    ];

    const budgetRanges = [
        "Under ₹25,000 ($300)",
        "₹25,000 - ₹50,000 ($300 - $600)",
        "₹50,000 - ₹80,000 ($600 - $1,000)",
        "₹80,000 - ₹4,00,000 ($1,000 - $5,000)",
        "₹4,00,000 - ₹8,00,000 ($5,000 - $10,000)",
        "₹8,00,000 - ₹20,00,000 ($10,000 - $25,000)",
        "₹20,00,000 - ₹40,00,000 ($25,000 - $50,000)",
        "₹40,00,000+ ($50,000+)"
    ];

    const timelineOptions = [
        "ASAP (Rush Job)",
        "1-2 weeks",
        "1 month",
        "2-3 months",
        "3-6 months",
        "6+ months",
        "Flexible"
    ];

    const availableFeatures = [
        "Responsive Design",
        "Payment Integration",
        "User Authentication",
        "Admin Dashboard",
        "API Integration",
        "Database Management",
        "SEO Optimization",
        "Analytics Integration",
        "Social Media Integration",
        "Live Chat Support"
    ];

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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

    const handleFeatureChange = (feature: string) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }));
    };

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            phone: "",
            projectType: "",
            description: ""
        };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.projectType) {
            newErrors.projectType = "Please select a project type";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Project description is required";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === "");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Create comprehensive WhatsApp message
            const whatsappMessage = `🚀 NEW QUOTE REQUEST - SkillLogic Technologies

👤 CLIENT DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

📋 PROJECT INFORMATION:
Type: ${formData.projectType}
Budget Range: ${formData.budgetRange || 'Not specified'}
Timeline: ${formData.timeline || 'Flexible'}

✨ REQUESTED FEATURES:
${formData.features.length > 0 ? formData.features.map(feature => `• ${feature}`).join('\n') : '• No specific features selected'}

📝 PROJECT DESCRIPTION:
${formData.description}

💬 NEXT STEPS:
Please provide a detailed quote and timeline for this project. I'm excited to work with SkillLogic Technologies!

Thank you! 🙏`;

            // Remove + and spaces from phone number for WhatsApp URL
            const phoneNumber = formData.whatsappNumber.replace(/[^0-9]/g, '');
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Close modal after sending
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl z-50">
                    <div>
                        <h2 className="text-2xl font-bold text-black">Get a Quote</h2>
                        <p className="text-gray-600 text-sm mt-1">Tell us about your project and we'll provide a detailed quote</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black">Contact Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Full Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`pl-10 w-full h-10 border-2 ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                        placeholder="Your full name"
                                    />
                                </div>
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Phone Number *</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`pl-10 w-full h-10 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                        placeholder="Your phone number"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black">Email Address *</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`pl-10 w-full h-10 border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg`}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black">Project Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Project Type *</label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className={`w-full h-10 border-2 ${errors.projectType ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg px-3`}
                                >
                                    <option value="">Select project type</option>
                                    {projectTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.projectType && <p className="text-red-500 text-sm">{errors.projectType}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black">Budget Range</label>
                                <div className="relative">
                                    <FaRupeeSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <select
                                        name="budgetRange"
                                        value={formData.budgetRange}
                                        onChange={handleChange}
                                        className="pl-10 w-full h-10 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg"
                                    >
                                        <option value="">Select budget range</option>
                                        {budgetRanges.map(range => (
                                            <option key={range} value={range}>{range}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black">Timeline</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="pl-10 w-full h-10 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg"
                                >
                                    <option value="">When do you need this completed?</option>
                                    {timelineOptions.map(timeline => (
                                        <option key={timeline} value={timeline}>{timeline}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black">Desired Features</h3>
                        <p className="text-sm text-gray-600">Select any features you'd like included (optional)</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {availableFeatures.map(feature => (
                                <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.features.includes(feature)}
                                        onChange={() => handleFeatureChange(feature)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black">Project Description *</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                className={`pl-10 pt-3 w-full border-2 ${errors.description ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-2 focus:ring-black/10 bg-gray-50 focus:bg-white transition-all duration-200 rounded-lg resize-none`}
                                placeholder="Describe your project in detail. Include any specific requirements, goals, or features you have in mind..."
                            />
                        </div>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    {/* WhatsApp Number Selection */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black flex items-center gap-2">
                            <FaWhatsapp className="text-green-500" />
                            Send Quote Request To
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label className="flex items-center space-x-3 p-3 border-2 rounded-lg bg-gray-50 hover:bg-white transition-all duration-200 cursor-pointer">
                                <input
                                    type="radio"
                                    name="whatsappNumber"
                                    value="+91 8318943040"
                                    checked={formData.whatsappNumber === "+91 8318943040"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
                                />
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="text-green-500" />
                                    <span className="text-sm font-medium">+91 8318943040</span>
                                </div>
                            </label>

                            <label className="flex items-center space-x-3 p-3 border-2 rounded-lg bg-gray-50 hover:bg-white transition-all duration-200 cursor-pointer">
                                <input
                                    type="radio"
                                    name="whatsappNumber"
                                    value="+91 9125138209"
                                    checked={formData.whatsappNumber === "+91 9125138209"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
                                />
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="text-green-500" />
                                    <span className="text-sm font-medium">+91 9125138209</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-3"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>Send Quote Request</span>
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-3">
                            We'll respond with a detailed quote within 24 hours
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetAQuote;
