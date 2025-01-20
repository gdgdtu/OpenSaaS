'use client'

import { motion } from 'framer-motion'
import { FeatureGrid, ContactForm, HeroSection } from '@/components/ui'
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
      <HeroSection />
      <FeatureGrid />
      <ContactForm />
      <Analytics debug={true} beforeSend={(e) => {
        if (e.url.includes('private')) return null
        return e
      }} />
    </main>
  )
}
