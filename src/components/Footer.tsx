import React from 'react';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 dark:bg-gray-900">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SkillLogic Technologies</h3>
            <p className="text-white/80 mb-4">
              Empowering Your Digital Success with Innovative Solutions
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/skilllogic-technologies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/skilllogic.in?igsh=aml3dDNza2thZ2Q5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://www.facebook.com/share/12KmFpRPYYR/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-secondary transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-secondary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-secondary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">Web App Development</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">SEO Optimization</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">E-commerce Solutions</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mr-2 mt-1" />
                <span className="text-white/80">
                  Civil Lines, Power House Road, <br />
                  Bhadohi - 221401, <br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary shrink-0 mr-2 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+918318943040" className="text-white/80 hover:text-secondary transition-colors">
                    +91 8318943040
                  </a>
                  <a href="tel:+919125138209" className="text-white/80 hover:text-secondary transition-colors">
                    +91 9125138209
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary shrink-0 mr-2" />
                <a 
                  href="mailto:info@skilllogic.in" 
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  info@skilllogic.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} SkillLogic Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
