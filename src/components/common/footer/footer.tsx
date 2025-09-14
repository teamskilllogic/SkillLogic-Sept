import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import GetAQuote from "@/components/common/modal/getAQuote";

interface Footer7Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "Navigation",
        links: [
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "About", href: "/about" },
            { name: "Contact Us", href: "/contact" },
            { name: "Get a Quote", href: "/get-quote" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Website Development", href: "/services#website-development" },
            { name: "Mobile App Development", href: "/services#mobile-app-development" },
            { name: "CRM Development", href: "/services#crm-development" },
            { name: "ERP Development", href: "/services#erp-development" },
            { name: "UI/UX Design", href: "/services#design" },
            { name: "Digital Marketing", href: "/services#marketing" },
            { name: "Other Services", href: "/services#other-services" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { name: "Civil Lines, Power House Road", href: "#" },
            { name: "Bhadohi - 221401", href: "#" },
            { name: "Uttar Pradesh, India", href: "#" },
            { name: "+91 8318943040", href: "tel:+918318943040" },
            { name: "+91 9125138209", href: "tel:+919125138209" },
            { name: "info@skilllogic.in", href: "mailto:info@skilllogic.in" },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/skilllogic.in?igsh=aml3dDNza2thZ2Q5", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/share/12KmFpRPYYR/", label: "Facebook" },
    { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/skilllogic-technologies/", label: "LinkedIn" },
    // { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
    logo = {
        url: "/",
        src: "/images/logo.png",
        alt: "SkillLogic Logo",
        title: "SkillLogic Technologies",
    },
    sections = defaultSections,
    description = "SkillLogic is your partner for services, portfolio, and more. Empowering Your Digital Success with Innovative Solutions",
    socialLinks = defaultSocialLinks,
    copyright = "© 2025 SkillLogic. All rights reserved.",
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const handleGetQuoteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsQuoteModalOpen(true);
    };

    return (
        <section className="py-32">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    {/* Left Section - 35% */}
                    <div className="w-full lg:w-[35%] flex flex-col justify-between">
                        <div>
                            {/* Logo + Title */}
                            <div className="flex items-center gap-2 mb-3">
                                <a href={logo.url}>
                                    <img src={logo.src} alt={logo.alt} className="h-8" />
                                </a>
                                <h2 className="text-xl font-semibold">{logo.title}</h2>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground mb-4">{description}</p>

                            {/* Social Links */}
                            <ul className="flex items-center space-x-5 text-muted-foreground">
                                {socialLinks.map((social, idx) => (
                                    <li key={idx} className="hover:text-primary">
                                        <a href={social.href} aria-label={social.label}>{social.icon}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Make in India Image */}
                        <div className="mt-8 lg:mt-auto flex justify-start">
                            <img
                                src="/images/make_in_india.png"
                                alt="Make in India"
                                className="opacity-70 max-h-[120px] w-auto"
                            />
                        </div>
                    </div>

                    {/* Right Section - 65% */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 w-full lg:w-[65%]">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-semibold text-gray-900">{section.title}</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className="hover:text-primary">
                                            {link.name === "Get a Quote" ? (
                                                <button
                                                    onClick={handleGetQuoteClick}
                                                    className="text-left hover:text-primary transition-colors cursor-pointer"
                                                >
                                                    {link.name}
                                                </button>
                                            ) : (
                                                <a href={link.href}>{link.name}</a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary">
                                <a href={link.href}> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Get A Quote Modal */}
            <GetAQuote
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </section>
    );
};

// Export Footer as an alias for Footer7 for compatibility
export const Footer = Footer7;
