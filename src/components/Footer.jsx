import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  // Fungsi Smooth Scroll
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Abil23', 
      label: 'GitHub', 
      className: 'hover:text-white' // Ganti properti color jadi className biar konsisten
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/moch-irsyad/', 
      label: 'LinkedIn', 
      className: 'hover:text-blue-500' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/ab1lx1_', 
      label: 'Instagram', 
      className: 'hover:text-pink-500' 
    },
    { 
      icon: Mail, 
      href: '#contact', // Link Internal
      label: 'Email', 
      className: 'hover:text-red-500' 
    },
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Left Column - Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold ">
              Irsyad
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              An ambitious student passionate about web development, design, and creating innovative digital solutions.
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Social Media (LOGIC DIPERBAIKI) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
            <div className="flex gap-6">
              {socialLinks.map((social) => {
                const isInternal = social.href.startsWith('#');

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    // Jika internal, jangan buka tab baru
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    // Jika internal, jalankan smooth scroll
                    onClick={(e) => isInternal ? handleScroll(e, social.href) : undefined}
                    className={`relative group text-gray-400 transition-colors duration-300 ${social.className}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                     bg-gray-800 text-white text-xs px-2 py-1 rounded-md 
                                     whitespace-nowrap pointer-events-none border border-white/10 shadow-lg">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Moch Irsyad Sabilil Hamdy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;