import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const educationData = {
    education: {
      icon: GraduationCap,
      title: 'Education',
      items: [
        { label: 'SMAN 1 TUREN', value: 'Grade 11' },
        { label: 'Active in', value: 'Digital Skill, Double Track: Graphic Design, Athletics' },
      ],
    },
    achievements: {
      icon: Award,
      title: 'Achievements',
      items: [
        { label: 'OSN', value: '4th Place Winner of the Indonesian Science Olympiad in Informatics (Regency Level)' },
        { label: 'LKS', value: 'Participant' },
        { label: 'Festika Jatim', value: 'Participant' },
        { label: 'CTF', value: 'Participant' },
      ],
    },
  };

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            Education & Achievements
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(educationData).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {/* PERBAIKAN DI SINI: Background dihapus, Icon diperbesar & diberi warna */}
              <div className="flex items-center gap-4 mb-6">
                <section.icon className="text-cyan-400" size={36} />
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400">{item.label}</span>
                    <span className="text-base text-white font-medium break-words">{item.value}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;