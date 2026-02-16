import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Download, ArrowRight, Code2, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import WelcomeMessage from '../components/WelcomeMessage';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abil23', label: 'GitHub', hoverColor: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/moch-irsyad/', label: 'LinkedIn', hoverColor: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://www.instagram.com/ab1lx1_', label: 'Instagram', hoverColor: 'hover:text-pink-500' },
    // PERBAIKAN 1: Ubah href mailto menjadi ID section '#contact'
    { icon: Mail, href: '#contact', label: 'Contact', hoverColor: 'hover:text-red-500' },
  ];

  // --- LOGIKA TYPEWRITER ---
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  
  const fullText1 = "Hi, I'm ";
  const fullText2 = "Irsyad.";

  useEffect(() => {
    let isMounted = true;
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const loopTyping = async () => {
      await wait(2000); 

      while (isMounted) {
        // Typing
        for (let i = 0; i <= fullText1.length; i++) {
          if (!isMounted) return;
          setText1(fullText1.slice(0, i));
          await wait(100);
        }
        await wait(300);
        for (let i = 0; i <= fullText2.length; i++) {
          if (!isMounted) return;
          setText2(fullText2.slice(0, i));
          await wait(150);
        }

        // Pause
        await wait(3000);

        // Deleting
        for (let i = fullText2.length; i >= 0; i--) {
          if (!isMounted) return;
          setText2(fullText2.slice(0, i));
          await wait(50);
        }
        for (let i = fullText1.length; i >= 0; i--) {
          if (!isMounted) return;
          setText1(fullText1.slice(0, i));
          await wait(50);
        }
        await wait(1000);
      }
    };

    loopTyping();
    return () => { isMounted = false; };
  }, []);
  // ------------------------------------------

  // Helper untuk scroll halus (Smooth Scroll)
  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Blobs */}
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

      <div className="max-w-7xl mx-auto w-full relative z-10 -mt-6 lg:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Right Column (IMAGE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative z-10">
              <motion.img
                src="/images/foto-profil.webp"
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
            className="text-center lg:text-left order-last lg:order-first"
          >
            {/* TYPEWRITER TITLE */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 h-20 sm:h-24 lg:h-20 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center">
                <span className="mr-3">{text1}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {text2}
                </span>
                <motion.span
                  className="inline-block w-[3px] h-8 sm:h-10 lg:h-12 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.h1>

            {/* BADGES */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-200">Web Developer</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-200">Student</span>
              </div>
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-6"
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

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-base font-semibold">
                  See Projects
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Button>
              
              <a 
                href="/CV-Moch-Irsyad-Sabilil-Hamdy.pdf" 
                download="CV-Moch-Irsyad-Sabilil-Hamdy.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  className="group w-full rounded-xl border border-cyan-500/50 bg-transparent px-8 py-6 text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 text-base font-semibold">
                    <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                    Download CV
                  </span>
                </Button>
              </a>
            </motion.div>

            {/* Social Icons - PERBAIKAN LOGIKA LOOP */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, index) => {
                // Cek apakah link ini internal (diawali #)
                const isInternal = social.href.startsWith('#');
                
                return (
                  <a
                    key={index}
                    href={social.href}
                    // Jika internal, jangan pakai target="_blank", jika eksternal pakai.
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    onClick={(e) => handleScrollTo(e, social.href)} // Tambahkan handler klik
                    className={`relative group text-white/70 transition-colors duration-300 ${social.hoverColor}`}
                  >
                    <social.icon size={28} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md border border-white/10 pointer-events-none whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                );
              })}
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