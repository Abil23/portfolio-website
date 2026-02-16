import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Coffee, Gamepad2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* --- BACKGROUND DI SAMAKAN DENGAN HERO SECTION --- */}
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
      {/* ----------------------------------------------- */}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* JUDUL */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            <span className="relative inline-block">
              About Me
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* KOLOM KIRI: STORYTELLING (ENGLISH & CONCISE) */}
            <motion.div
              className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                My coding journey began with a simple curiosity: <span className="text-cyan-400 italic">"How does a line of code turn into something usable?"</span> That curiosity quickly turned into a passion. Now, as a <span className="text-white font-semibold">Web Developer</span>, I specialize in building pixel-perfect, accessible, and performant web experiences using modern technologies like <span className="text-purple-400 font-semibold">React</span> and <span className="text-cyan-400 font-semibold">Tailwind CSS</span>.
              </p>

              <p>
                Beyond the terminal, I believe in maintaining a healthy work-life balance to keep creativity flowing. You can often find me fueling my coding sessions with <span className="text-purple-400 font-semibold">coffee</span>, competing in <span className="text-cyan-400 font-semibold">online games</span>, or exploring the latest design trends. I am always eager to learn, collaborate, and tackle new challenges in the tech world.
              </p>
            </motion.div>

            {/* KOLOM KANAN: STATISTIK / HIGHLIGHT CARD */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Card 1: Experience */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 text-center group">
                <Code2 className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-white mb-1">2+</h3>
                <p className="text-sm text-gray-400">Years Exp</p>
              </div>

              {/* Card 2: Projects */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 text-center group">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-white mb-1">3</h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>

              {/* Card 3: Hobby 1 */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 text-center group">
                <Coffee className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-1">Coffee</h3>
                <p className="text-sm text-gray-400">Fuel & Love</p>
              </div>

              {/* Card 4: Hobby 2 */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-green-500/50 transition-all duration-300 text-center group">
                <Gamepad2 className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-1">Gamer</h3>
                <p className="text-sm text-gray-400">Hobbies</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;