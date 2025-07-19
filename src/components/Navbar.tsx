import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/group.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Delta Innovation" 
            className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
          />
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="home" 
            label="Home" 
            isActive={activeSection === 'home'}
            onSetActive={handleSetActive}
          />
          <NavLink 
            to="services" 
            label="Services" 
            isActive={activeSection === 'services'}
            onSetActive={handleSetActive}
          />
          <NavLink 
            to="why-us" 
            label="Why Us" 
            isActive={activeSection === 'why-us'}
            onSetActive={handleSetActive}
          />
          <NavLink 
            to="contact" 
            label="Contact Us" 
            isActive={activeSection === 'contact'}
            onSetActive={handleSetActive}
          />
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gray-800 hover:text-blue-600 transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-4">
            <MobileNavLink 
              to="home" 
              label="Home" 
              onClick={toggleMenu}
              isActive={activeSection === 'home'}
              onSetActive={handleSetActive}
            />
            <MobileNavLink 
              to="services" 
              label="Services" 
              onClick={toggleMenu}
              isActive={activeSection === 'services'}
              onSetActive={handleSetActive}
            />
            <MobileNavLink 
              to="why-us" 
              label="Why Us" 
              onClick={toggleMenu}
              isActive={activeSection === 'why-us'}
              onSetActive={handleSetActive}
            />
            <MobileNavLink 
              to="contact" 
              label="Contact Us" 
              onClick={toggleMenu}
              isActive={activeSection === 'contact'}
              onSetActive={handleSetActive}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ 
  to, 
  label, 
  isActive, 
  onSetActive 
}: { 
  to: string; 
  label: string; 
  isActive: boolean;
  onSetActive: (to: string) => void;
}) => (
  <Link 
    to={to} 
    spy={true} 
    smooth={true} 
    offset={-70} 
    duration={500} 
    onSetActive={() => onSetActive(to)}
    className={`font-medium cursor-pointer transition-all duration-300 relative group ${
      isActive 
        ? 'text-blue-600' 
        : 'text-gray-800 hover:text-blue-600'
    }`}
  >
    {label}
    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  </Link>
);

const MobileNavLink = ({ 
  to, 
  label, 
  onClick, 
  isActive, 
  onSetActive 
}: { 
  to: string; 
  label: string; 
  onClick: () => void;
  isActive: boolean;
  onSetActive: (to: string) => void;
}) => (
  <Link 
    to={to} 
    spy={true} 
    smooth={true} 
    offset={-70} 
    duration={500} 
    onSetActive={() => onSetActive(to)}
    className={`font-medium cursor-pointer transition-all duration-300 w-full text-center py-3 px-4 rounded-lg ${
      isActive 
        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
        : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
    }`}
    onClick={onClick}
  >
    {label}
  </Link>
);