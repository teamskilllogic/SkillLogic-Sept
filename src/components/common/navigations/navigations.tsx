"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/button";
import { Menu, X, Phone, FileText } from "lucide-react";

function Navbar() {
    const navigationItems = [
        { title: "Home", href: "/home" },
        { title: "Services", href: "/services" },
        { title: "Portfolio", href: "/portfolio" },
        { title: "Testimonials", href: "/testimonials" },
    ];

    const [isOpen, setOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "dark" ? "dark" : "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header[data-navbar]');
            if (header) {
                if (window.scrollY > 0) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        };

        // Immediate check
        handleScroll();

        // Use the most direct scroll listener
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);    return (
        <>
            <style>{`
                .navbar-header {
                    background: transparent;
                    transition: all 50ms ease;
                }
                .navbar-header.scrolled {
                    background: rgba(255, 255, 255, 0.3) !important;
                    backdrop-filter: blur(12px) !important;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
                }
                .dark .navbar-header.scrolled {
                    background: rgba(0, 0, 0, 0.3) !important;
                    border-bottom: 1px solid rgba(128, 128, 128, 0.8) !important;
                }
            `}</style>
            <header
                data-navbar
                className="w-full z-40 fixed top-0 left-0 navbar-header"
            >
            <div className="container mx-auto flex min-h-20 items-center justify-between px-4 lg:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)}>
                    <img
                        src="/images/logo.png"
                        alt="SkillLogic Logo"
                        className="h-9 w-auto md:h-10"
                    />
                    <span className="font-semibold text-black dark:text-white">
                        SkillLogic
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <div className="flex justify-start gap-4 flex-row">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                onClick={() => window.scrollTo(0, 0)}
                                className="px-3 py-2 text-black dark:text-white font-medium hover:text-blue-600 transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <div className="flex justify-end w-full gap-4">
                        {/* Desktop - text buttons */}
                        <Link to="/about" className="hidden md:inline" onClick={() => window.scrollTo(0, 0)}>
                            <Button variant="ghost">
                                About
                            </Button>
                        </Link>
                        <div className="border-r hidden md:inline"></div>
                        <Link to="/contact" className="hidden md:inline" onClick={() => window.scrollTo(0, 0)}>
                            <Button variant="outline">Contact Us</Button>
                        </Link>
                        <Button className="hidden md:inline" onClick={() => window.scrollTo(0, 0)}>Get a Quote</Button>

                        {/* Mobile - icon buttons */}
                        <Link to="/contact" className="md:hidden" onClick={() => window.scrollTo(0, 0)}>
                            <Button variant="outline" size="sm">
                                <Phone className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Button size="sm" className="md:hidden" onClick={() => window.scrollTo(0, 0)}>
                            <FileText className="w-4 h-4" />
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            className="lg:hidden"
                            onClick={() => setOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-black shadow-md border-t dark:border-gray-800">
                    <div className="container mx-auto flex flex-col gap-4 py-4 px-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="text-black dark:text-white hover:underline"
                                onClick={() => {
                                    setOpen(false);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {item.title}
                            </Link>
                        ))}
                        {/* Add About link for mobile */}
                        <Link
                            to="/about"
                            className="text-black dark:text-white hover:underline"
                            onClick={() => {
                                setOpen(false);
                                window.scrollTo(0, 0);
                            }}
                        >
                            About
                        </Link>
                    </div>
                </div>
            )}
            </header>
        </>
    );
}export { Navbar };
