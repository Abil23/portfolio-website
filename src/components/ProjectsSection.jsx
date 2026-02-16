import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

// Data Proyek
const projects = [
  {
    title: 'LIFE - Legacy of Islamic Fusion Empires',
    category: 'Education Platform',
    image: '/images/LIFE.webp',
    description: 'An interactive learning medium for Islamic Cultural History material. Equipped with quizzes, visual material, and simple gamification to increase students\' interest in learning.',
    techStack: ['HTML5', 'TailwindCSS', 'JavaScript'],
    liveDemo: 'https://life28.netlify.app/',
    sourceCode: 'https://github.com/Abil23/life',
    featured: true, // Opsi untuk highlight project utama
  },
  {
    title: 'SIMPEL SMANERE',
    category: 'Management System',
    image: '/images/SIMPEL-SMANERE.webp',
    description: 'Student Violation Information System (SIMPEL) for SMAN 1 Turen. Helps teachers record and monitor student discipline points digitally and in real time.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://abil23.github.io/simpel-smanere/Sistem%20Tata%20Tertib/index.html',
    sourceCode: 'https://github.com/Abil23/simpel-smanere',
  },
  {
    title: 'Personal Portfolio',
    category: 'Web Design',
    image: '/images/Portfolio-Website.webp',
    description: 'A personal portfolio website designed with a modern interface, smooth animations using Framer Motion, and high performance. ',
    techStack: ['React', 'TailwindCSS', 'Framer Motion'],
    liveDemo: 'https://www.itsabil.my.id/',
    sourceCode: 'https://github.com/Abil23/portfolio-website',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* 1. Project Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Image with Zoom Effect */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient (biar teks di atasnya kebaca kalau ada) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        
        {/* Floating Action Button (muncul saat hover) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform duration-200"
            title="View Live Site"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-800 text-white rounded-full hover:scale-110 transition-transform duration-200 border border-white/20"
            title="View Source Code"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header: Category & Title */}
        <div className="mb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 block">
            {project.category}
          </span>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify"> 
          {project.description}
        </p>

        {/* Tech Stack Pills (Bottom aligned) */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Ornaments (Sama dengan section lain agar konsisten) */}
      <motion.div
        className="absolute top-40 right-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* JUDUL SECTION */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="relative inline-block">
              Featured Projects
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
    
        </motion.div>

        {/* GRID PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* VIEW MORE BUTTON (Opsional, kalau nanti project makin banyak) */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Abil23?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors border-b border-cyan-500/30 hover:border-cyan-400 pb-1"
          >
            View all repositories on GitHub <Github size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;