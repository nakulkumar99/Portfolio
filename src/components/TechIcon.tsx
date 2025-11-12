import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  icon: string;
  delay: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="w-24 h-24 bg-purple-900/20 rounded-[30%] transform rotate-45 border border-purple-500/20 
        group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 
        group-hover:scale-110 group-hover:border-purple-400/50" />
      <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
        <img src={icon} alt={name} className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white text-sm font-medium whitespace-nowrap bg-purple-900/80 px-3 py-1 rounded-full">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export default TechIcon;