'use client'

import { motion } from 'framer-motion'
import FeatureGrid from '@/components/ui/FeatureGrid'
import { Analytics } from '@vercel/analytics/next';

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold text-white mb-4 mt-4 tracking-tight text-center"
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
        className="text-2xl md:text-3xl text-purple-400 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        From Idea to Empire, Faster Than Ever
      </motion.p>
      <FeatureGrid />
      <Analytics debug={true} beforeSend={(e) => {
        if(e.url.includes('private')) return null
        return e
      }}/>

    </main>
  )
}