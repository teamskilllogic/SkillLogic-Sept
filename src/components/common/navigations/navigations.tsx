"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 fixed top-0 left-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex min-h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
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
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link to={item.href}>
                      <Button variant="ghost">{item.title}</Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex justify-end w-full gap-4">
            <Link to="/about">
              <Button variant="ghost" className="hidden md:inline">
                About
              </Button>
            </Link>
            <div className="border-r hidden md:inline"></div>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
            <Button>Get a Quote</Button>

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
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };
