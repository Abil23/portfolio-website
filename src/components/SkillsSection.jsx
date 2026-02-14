import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Palette } from 'lucide-react';

// Komponen Helper untuk Logo Skill
const SkillIcon = ({ name }) => {
  // Database URL Logo Teknologi
  // MENGGUNAKAN VERSI "-original" AGAR WARNA LEBIH JELAS SAAT HOVER
  const icons = {
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Tailwind CSS': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    
    // Perbaikan: Menggunakan 'ubuntu-original' agar warnanya orange, bukan hitam
    'Ubuntu': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg',
    'CLI/Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    'Server Setup': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',  // Menggunakan logo GNU/Bash yang lebih berwarna
    
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Canva': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  };

  const iconUrl = icons[name];
  if (!iconUrl) return null;

  return (
    <div className="group relative flex items-center justify-center p-2">
      {/* LOGIC CSS:
        - w-10 h-10: Ukuran diperkecil (sebelumnya w-12 h-12).
        - grayscale: Mode hitam-putih saat diam.
        - group-hover:grayscale-0: Warna asli muncul saat hover.
        - invert: Khusus logo GitHub/Next.js yang hitam pekat, kita balik jadi putih di mode gelap.
      */}
      <img 
        src={iconUrl} 
        alt={name}
        className={`w-10 h-10 transition-all duration-300 
          grayscale opacity-60 
          group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
          ${(name === 'GitHub') ? 'invert group-hover:invert-0' : ''} 
        `}
      />
      
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap pointer-events-none z-20">
        {name}
      </span>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Front-End',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React.js'],
    },
    // {
    //   icon: Terminal,
    //   title: 'Linux & SysAdmin',
    //   skills: ['Ubuntu', 'CLI/Bash', 'Server Setup', 'Shell Scripting'],
    // },
    // {
    //   icon: Database,
    //   title: 'Backend Basic',
    //   skills: ['PHP', 'MySQL', 'Laravel'],
    // },
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
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Header Kategori - PERBAIKAN: Hapus background gradient pada ikon */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <category.icon className="text-cyan-400" size={28} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              {/* Grid Ikon Skill */}
              <div className="flex flex-wrap gap-4 justify-start">
                {category.skills.map((skill, idx) => (
                  <SkillIcon key={idx} name={skill} />
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