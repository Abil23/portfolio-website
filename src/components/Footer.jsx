import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    // Menambahkan properti warna hover spesifik
    { icon: Github, href: 'https://github.com/Abil23', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/moch-irsyad/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://www.instagram.com/ab1lx1_', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Mail, href: 'mailto:contact@itsabil.my.id', label: 'Email', color: 'hover:text-red-500' },
  ];

  const handleClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo & Description */}
          <div>
            <span className="text-2xl font-bold text-white">Irsyad</span>
            <p className="mt-4 text-gray-400 text-sm">
              An ambitious student passionate about web development, design, and creating innovative digital solutions.
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-6"> {/* Gap diperbesar sedikit biar tooltip gak tabrakan */}
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group text-gray-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                   bg-gray-800 text-white text-xs px-2 py-1 rounded-md 
                                   whitespace-nowrap pointer-events-none border border-white/10">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Moch Irsyad Sabilil Hamdy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;