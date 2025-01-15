'use client'
import { motion } from 'framer-motion';
import { titleVariants, wordVariants } from '@/components/variants';

export default function HeroSection(){
    return <>
        <motion.h1 
        className="text-5xl md:text-6xl font-extrabold text-white mt-60 tracking-tight text-center"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {'Empower Your SaaS Vision'.split(' ').map((word, index) => (
          <motion.span key={index} className="inline-block mr-2" variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
        className="text-2xl md:text-3xl text-purple-400 mb-24 mt-4 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        From Idea to Empire, Faster Than Ever
      </motion.p>
    </>
}