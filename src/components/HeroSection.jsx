import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import WelcomeMessage from '../components/WelcomeMessage';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abil23', label: 'GitHub', hoverColor: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/moch-irsyad/', label: 'LinkedIn', hoverColor: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://www.instagram.com/ab1lx1_', label: 'Instagram', hoverColor: 'hover:text-pink-500' },
    { icon: Mail, href: 'mailto:contact@itsabil.my.id', label: 'Email', hoverColor: 'hover:text-red-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Right Column (IMAGE) - Ditaruh di atas secara kode agar bisa pakai order */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            /* PERUBAHAN: order-first di mobile, lg:order-last di desktop */
            className="relative order-first lg:order-last"
          >
            {/* Mengurangi translate-y di mobile agar tidak menabrak Navbar */}
            <div className="relative z-10 -translate-y-10 lg:-translate-y-32">
              <motion.img
                src="https://i.ibb.co.com/0V6Ck7HJ/IMG-20260211-161641-332-removebg-preview-1-1-removebg-preview.png"
                alt="Irsyad - Web Developer Portrait"
                className="w-full max-w-[280px] sm:max-w-md mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-30"></div>
          </motion.div>

          {/* Left Column (TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            /* PERUBAHAN: order-last di mobile agar turun ke bawah gambar */
            className="text-center lg:text-left order-last lg:order-first"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Irsyad</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              An ambitious student with a passion for innovation.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I build accessible, pixel-perfect, and performant web experiences. Currently exploring the intersection of design and server-side logic.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-6 text-base"
              >
                See Projects
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-6 text-base"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group text-white/70 transition-colors duration-300 ${social.hoverColor}`}
                >
                  <social.icon size={28} />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md border border-white/10">
                    {social.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
        <WelcomeMessage />
      </div>
    </section>
  );
};

export default HeroSection;