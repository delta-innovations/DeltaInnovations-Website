import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin, Zap, Heart } from 'lucide-react';
import logo from '../assets/group.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Why Choose Us', to: 'why-us' },
    { name: 'Contact', to: 'contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'UI/UX Design',
    'Backend Development',
    'Security & Testing'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-15 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="Delta Innovation" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We build cutting-edge software solutions to help businesses thrive in the digital age. 
                Transforming ideas into powerful digital experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all duration-300 border border-white/10 hover:border-transparent"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      spy={true} 
                      smooth={true} 
                      offset={-70} 
                      duration={500} 
                      className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-amber-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Faisalabad, Pakistan
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">+92 335-9335454</p>
                    <p className="text-gray-300 text-sm">+92 332-2795419</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">contact@deltainnovations.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Delta Innovation. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500" /> for innovation
              </span>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  );
};