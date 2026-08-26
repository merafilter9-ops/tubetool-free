'use client'

import { motion } from 'framer-motion'
import {
  UserPlus,
  Search,
  FileText,
  TrendingUp,
  // ArrowRight
} from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up Free",
    description: "Create your account in seconds and get instant access to all tools.",
    step: "01"
  },
  {
    icon: Search,
    title: "Research & Plan",
    description: "Use our keyword research and content planning tools to find trending topics.",
    step: "02"
  },
  {
    icon: FileText,
    title: "Create Content",
    description: "Generate scripts, titles, and descriptions with AI assistance.",
    step: "03"
  },
  {
    icon: TrendingUp,
    title: "Optimize & Grow",
    description: "Analyze performance, optimize thumbnails, and track your growth.",
    step: "04"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mt-16 flex justify-center">
      <div className="w-full max-w-6xl text-center relative overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            How It Works
          </h2>
          <p className="text-center font-normal text-base text-secondary-foreground dark:text-gray-400 pt-2 max-w-3xl mx-auto">
            Get started with TubeTool in just 4 simple steps and transform your YouTube channel today.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500 to-primary-500/20 transform -translate-y-1/2 z-0"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Step Number */}
                <div className="relative mb-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-0 -right-0 w-8 h-8 border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-400">{step.step}</span>
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-secondary-foreground dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="border rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-secondary-foreground dark:text-gray-400 mb-4">
              Join thousands of creators who are already growing their channels with TubeTool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signin" className="p-0 m-0">
                <Button className="transition-all duration-200 transform hover:scale-105">
                  Start Free Trial
                </Button>
              </Link>
              {/* <Button className="transition-all duration-200 transform hover:scale-105" variant="outline">
                Watch Demo
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div >
    </section >
  )
} 