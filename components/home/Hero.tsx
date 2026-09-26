'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex bg-foreground dark:bg-background items-center justify-center pt-24 sm:pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 bg-growth-500/10 border border-growth-500/20 rounded-full text-growth-400 text-sm max-sm:text-xs font-medium mb-8"
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Used by 500+ creators in beta
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">All-in-One</span>
          <br />
          <span className="gradient-text">YouTube Growth</span>
          <br />
          <span className="text-white">Toolkit</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto mb-8"
        >
          Plan, Create, Optimize, and Grow with powerful AI-driven tools designed specifically for YouTube content creators.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row flex-wrap gap-4 justify-center items-center mb-12"
        >
          <Link href="/tools/title-generator" className="p-0 m-0">
            <button className="btn-primary flex items-center space-x-2 text-sm md:text-lg">
              <span>Start Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <button className="btn-secondary flex items-center space-x-2 text-sm md:text-lg">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-growth-400 mb-2">660+</div>
            <div className="text-dark-400">Signups in 7 days</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-dark-400">Powerful Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success-400 mb-2">24/7</div>
            <div className="text-dark-400">AI Support</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
} 