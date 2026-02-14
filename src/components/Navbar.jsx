import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mencegah scroll saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick('#home')}
            className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Irsyad
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className="relative group"
              >
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.href.substring(1) ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          {/* PERBAIKAN: Tombol ini HANYA MUNCUL jika isOpen = false */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[101] md:hidden bg-black/80"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed top-0 right-0 h-screen w-72 shadow-2xl z-[105] flex flex-col"
              style={{ 
                backgroundColor: '#020617', // Solid Background
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Header Menu Mobile (Tempat Tombol Close Satu-satunya) */}
              <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col space-y-2 p-6 overflow-y-auto">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.href)}
                    className={`text-left text-lg py-4 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30'
                        : 'text-white hover:bg-white/10 font-medium'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;