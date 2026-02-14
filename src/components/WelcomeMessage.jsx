import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mt-4">
      <motion.p
        className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Welcome to my digital space.
      </motion.p>
      
      <motion.p
        className="text-xs text-gray-400 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Scroll down to explore my journey
      </motion.p>
    </div>
  );
};

export default WelcomeMessage;