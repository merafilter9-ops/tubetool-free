'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations for content optimization, trending topics, and audience engagement strategies."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Find the perfect keywords, hashtags, and topics that resonate with your target audience."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate scripts, titles, descriptions, and thumbnails in seconds, not hours."
  },
  {
    icon: Shield,
    title: "Algorithm Optimized",
    description: "Stay ahead of YouTube's algorithm changes with our AlgoFit analyzer and optimization tools."
  },
  {
    icon: TrendingUp,
    title: "Growth Tracking",
    description: "Monitor your channel's performance with detailed analytics and growth predictions.",
    isGrowth: true
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Connect with other creators, find collaborations, and build meaningful partnerships.",
    isGrowth: true
  }
]

export default function Features() {
  return (
    <section id="features" className="mt-16 flex justify-center">
      <div className="w-full max-w-6xl text-center relative overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            What is TubeTool?
          </h2>
          <p className="text-center font-normal text-base text-secondary-foreground dark:text-gray-400 pt-2 max-w-3xl mx-auto">
            The ultimate all-in-one platform that combines AI-powered tools, analytics, and community features to help YouTube creators grow faster and smarter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover border rounded-lg p-4 text-left transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br from-primary-500 to-primary-700`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-1 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark`}>
                {feature.title}
              </h3>
              <p className="text-secondary-foreground dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link href="/auth/signin" className="p-0 m-0">
            <Button className="transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
              <span>Start Growing Today</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 