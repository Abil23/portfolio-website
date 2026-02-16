import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette } from 'lucide-react'; // Ganti Layout dengan Code2

// Database Logo & Warna Border Lengkap
// PENTING: Tulis class lengkap 'hover:border-xxx' di sini agar Tailwind mendeteksinya.
const skillData = {
  'HTML5': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
    border: 'hover:border-orange-500' 
  },
  'CSS3': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
    border: 'hover:border-blue-500' 
  },
  'JavaScript': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
    border: 'hover:border-yellow-400' 
  },
  'Tailwind CSS': { 
    icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', 
    border: 'hover:border-cyan-400' 
  },
  'React.js': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
    border: 'hover:border-cyan-400' 
  },
  
  'Figma': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 
    border: 'hover:border-purple-500' 
  },
  'Canva': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', 
    border: 'hover:border-blue-400' 
  },
  'Git': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
    border: 'hover:border-orange-600' 
  },
  'GitHub': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
    border: 'hover:border-white' 
  },
  'VS Code': { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', 
    border: 'hover:border-blue-500' 
  },
};

const SkillCard = ({ name }) => {
  const skill = skillData[name];
  
  // Fallback jika nama skill tidak ada di database (biar gak error)
  const borderClass = skill?.border || 'hover:border-cyan-500';
  const iconSrc = skill?.icon || '';

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      // Menggunakan borderClass yang sudah pasti valid
      className={`flex-grow flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-default ${borderClass}`}
    >
      <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
        <img 
          src={iconSrc} 
          alt={name}
          className={`w-full h-full object-contain transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 ${name === 'GitHub' ? 'invert group-hover:invert-0' : ''}`}
        />
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2, // Menggunakan ikon Code2 (</>)
      title: 'Front-End Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React.js'],
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: ['Figma', 'Canva', 'Git', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            Skills
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                {/* Ikon Kategori lebih besar */}
                <category.icon className="text-cyan-400 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;