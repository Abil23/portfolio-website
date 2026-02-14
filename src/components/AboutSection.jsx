import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-10 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">
            <span className="relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>

          <motion.div
            className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center">
              Hello! I'm <span className="text-cyan-400 font-semibold">Irsyad</span>, a student with a deep passion for the world of <span className="text-purple-400 font-semibold">Web Development</span>. I believe that <span className="text-cyan-400 font-semibold">technology</span> is a powerful tool to create innovative solutions and make a positive impact on the world.
            </p>

            <p className="text-center">
              With a blend of <span className="text-purple-400 font-semibold">creativity</span> and <span className="text-cyan-400 font-semibold">technical skills</span>, I am eager to tackle challenges in the tech industry. I actively participate in various <span className="text-purple-400 font-semibold">competitions</span> and <span className="text-cyan-400 font-semibold">workshops</span> to continuously refine my craft.
            </p>

            <p className="text-center">
              Beyond coding, I also have a strong interest in <span className="text-purple-400 font-semibold">design</span> and <span className="text-cyan-400 font-semibold">digital marketing</span>. I firmly believe that <span className="text-purple-400 font-semibold">collaboration</span> and <span className="text-cyan-400 font-semibold">continuous learning</span> are the true keys to success.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;