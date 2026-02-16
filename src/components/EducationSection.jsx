import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Medal, Star } from 'lucide-react';

const EducationSection = () => {
  // Data Pendidikan
  const educationData = [
    {
      school: 'SMAN 1 TUREN',
      period: '2023 - Present',
      grade: 'Grade 11 (Science/Informatics Focus)',
      activities: [
        'Active in Digital Skills Program',
        'Double Track: Graphic Design',
        'Member of Athletics Team'
      ]
    }
  ];

  // Data Prestasi
  const achievementsData = [
    {
      title: 'OSN Informatics',
      level: 'Regency Level',
      rank: '4th Place Winner',
      icon: Trophy,
      color: 'text-yellow-400',
      borderColor: 'group-hover:border-yellow-500/50'
    },
    {
      title: 'LKS Web Tech',
      level: 'Regency Level',
      rank: 'Participant',
      icon: Medal,
      color: 'text-blue-400',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      title: 'Festika Jatim',
      level: 'Provincial Level',
      rank: 'Participant',
      icon: Star,
      color: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      title: 'CTF Competition',
      level: 'National/Regional',
      rank: 'Participant',
      icon: Award,
      color: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50'
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Elements */}
      <motion.div
        className="absolute top-40 left-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* JUDUL */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            Education & Awards
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: EDUCATION (Timeline Style) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-white/10 ml-4">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Dot Timeline */}
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"></span>
                  
                  {/* Content Card */}
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group-hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                    <p className="text-gray-300 mb-4">{edu.grade}</p>
                    
                    <ul className="space-y-2">
                      {edu.activities.map((act, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* KOLOM KANAN: ACHIEVEMENTS (No Background Icon) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((award, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 ${award.borderColor}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    
                    {/* PERUBAHAN DI SINI: Background div dihapus, icon diperbesar jadi w-8 */}
                    <award.icon className={`w-8 h-8 ${award.color}`} />
                    
                    <span className="text-xs text-gray-500 font-mono border border-white/10 px-2 py-1 rounded">
                      {award.level}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-400">{award.rank}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;