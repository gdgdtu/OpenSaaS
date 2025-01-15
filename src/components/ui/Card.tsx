'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  Icon: LucideIcon;
  color: string;
  children?: React.ReactNode; // Added children prop
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
};

export function Card({ title, Icon, color, children }: CardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg relative group"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl z-10"></div>
      <div className="p-8 relative z-20">
        <Icon style={{ color }} className="w-16 h-16 mb-6 transition-colors duration-300" />
        <motion.h2 
          className="text-2xl font-extrabold mb-4 text-white tracking-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-gray-300 leading-relaxed font-medium"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        {/* Render children here */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
