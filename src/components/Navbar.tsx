import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/providers/ThemeProvider';
import { Toggle } from "@/components/ui/toggle";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleGetQuote = () => {
    // Default message
    const message = "Hello, I'm interested in getting a quote for a project. Please get in touch!";
    const encodedMessage = encodeURIComponent(message);
    // Open WhatsApp with primary number
    window.open(`https://wa.me/918318943040?text=${encodedMessage}`, '_blank');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-primary/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-section flex justify-between items-center">
        {/* Logo & SkillLogic Text */}
        <Link to="/" className="flex items-center space-x-3 z-50">
          <img 
            src="/images/logo.png" 
            alt="SkillLogic Logo" 
            className="h-9 w-auto md:h-10" // Slightly larger logo, responsive sizing
          />
          <span className="text-xl md:text-2xl font-extrabold text-primary dark:text-white tracking-tight">
            SkillLogic<span className="text-secondary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.name === 'Services' ? (
              <Link
                key={item.name}
                to="/service"
                className="text-sm font-medium transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"
              >
                {item.name}
              </Link>
            ) : item.name === 'Home' ? (
              <Link
                key={item.name}
                to="/"
                className="text-sm font-medium transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"
              >
                {item.name}
              </a>
            )
          ))}
          
          {/* Theme Toggle */}
          <Toggle 
            aria-label="Toggle theme" 
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            className="mr-2"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Toggle>
          
          <Button 
            className="bg-secondary hover:bg-secondary/80 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={handleGetQuote}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4 z-50">
          {/* Theme Toggle for Mobile */}
          <Toggle 
            aria-label="Toggle theme" 
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Toggle>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-primary dark:text-white" /> : <Menu size={24} className="text-primary dark:text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-primary/95 dark:bg-gray-900/95 flex flex-col items-center justify-center space-y-8 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {navItems.map((item) => (
            item.name === 'Services' ? (
              <Link
                key={item.name}
                to="/service"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-white hover:text-secondary"
              >
                {item.name}
              </Link>
            ) : item.name === 'Home' ? (
              <Link
                key={item.name}
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-white hover:text-secondary"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-white hover:text-secondary"
              >
                {item.name}
              </a>
            )
          ))}
          <Button 
            className="bg-secondary hover:bg-secondary/80 text-white mt-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => {
              handleGetQuote();
              setIsOpen(false);
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;