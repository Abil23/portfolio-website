import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';

// Komponen Helper untuk Logo Teknologi
const TechIcon = ({ name }) => {
  // Database URL Logo Teknologi
  const icons = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TailwindCSS': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Framer Motion': 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',
  };

  const iconUrl = icons[name];

  if (!iconUrl) return null;

  return (
    <div className="group relative flex items-center justify-center">
      {/* Logic Warna Logo */}
      <img 
        src={iconUrl} 
        alt={name}
        className="w-8 h-8 transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
      />
      
      {/* Tooltip Nama Teknologi */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap pointer-events-none z-20">
        {name}
      </span>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'LIFE - Legacy of Islamic Fusion Empires',
      year: '2025',
      description: '“LIFE” adalah sebuah media pembelajaran IPS yang mempelajari materi “Interaksi Budaya Pada Masa Kerajaan Islam di Nusantara”.',
      image: 'https://i.ibb.co.com/d4Nd7hbk/LIFE-Legacy-of-Islamic-Fusion-Empires-02-14-2026-09-52-AM.png',
      techStack: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript'],
      liveDemo: 'https://life28.netlify.app/',
      sourceCode: 'https://github.com/Abil23/life',
    },
    {
      title: 'SIMPEL SMANERE',
      year: '2025',
      description: 'SIMPEL SMANERE adalah website yang digunakan untuk mendata data siswa yang terkena poin tata tertib.',
      image: 'https://i.ibb.co.com/tMxKmYD2/SIMPEL-SMANERE-02-14-2026-10-02-AM.png',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      liveDemo: 'https://abil23.github.io/simpel-smanere/Sistem%20Tata%20Tertib/index.html',
      sourceCode: 'https://github.com/Abil23/simpel-smanere',
    },
    {
      title: 'Portfolio Website',
      year: '2026',
      description: 'Portofolio responsif yang menampilkan prinsip-prinsip desain modern dan interaksi yang lancar.',
      image: 'https://i.ibb.co.com/G4McHWvt/Irsyad-02-14-2026-01-35-PM.png',
      techStack: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'React'],
      liveDemo: 'https://www.itsabil.my.id/',
      sourceCode: 'https://github.com/Abil23/portfolio-website',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video w-full group">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-gray-400 font-mono">{project.year}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <TechIcon key={idx} name={tech} />
                  ))}
                </div>
                
                {/* --- MODERN BUTTONS (NO NEON GLOW) --- */}
                <div className="flex gap-4 mt-auto">
                  {/* Tombol Live Demo */}
                  <Button
                    className="flex-1 group relative overflow-hidden bg-transparent border border-cyan-500/50 text-cyan-400 font-medium py-6 rounded-xl transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 active:scale-95"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Live Demo
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </Button>

                  {/* Tombol Source Code */}
                  <Button
                    className="flex-1 group relative overflow-hidden bg-transparent border border-purple-500/50 text-purple-400 font-medium py-6 rounded-xl transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 active:scale-95"
                    onClick={() => window.open(project.sourceCode, '_blank')}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Source Code
                      <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                    </span>
                  </Button>
                </div>
                {/* --- END BUTTONS --- */}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;