'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, FileText, Search, Tag, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const timeBreakdowns = [
  {
    icon: <FileText className="w-5 h-5 text-white" />,
    category: "Script Writing",
    hours: 2847,
    description: "AI-powered script generation",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Search className="w-5 h-5 text-white" />,
    category: "SEO Research",
    hours: 2136,
    description: "Keyword research & optimization",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Tag className="w-5 h-5 text-white" />,
    category: "Tag Generation",
    hours: 1424,
    description: "Automated tag & hashtag creation",
    color: "from-green-500 to-green-600"
  }
]

export default function TimeSaverWidget() {
  const [totalHours, setTotalHours] = useState(0)
  const [currentWeek, setCurrentWeek] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set current week
    const now = new Date()
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay()))
    const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6))
    setCurrentWeek(`${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`)

    // Animate counter
    const targetHours = 6407 // Total of all breakdowns
    const duration = 3000 // 3 seconds for larger number
    const steps = 80
    const increment = targetHours / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetHours) {
        setTotalHours(targetHours)
        setIsVisible(true)
        clearInterval(timer)
      } else {
        setTotalHours(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mt-16 flex justify-center">
      <div className="w-full max-w-6xl text-center relative overflow-hidden">

        <div className="relative z-10 pb-2">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-2 py-1 bg-card/50 dark:bg-card/0 border rounded-full text-xs font-medium mb-6"
          >
            <Clock className="h-5 w-5 mr-1.5 px-1 py-0.5" />
            Time Savings Tracker
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark"
          >
            How Much Time TubeTool Saves You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center font-normal text-base text-secondary-foreground dark:text-gray-400 pt-2 mb-6"
          >
            Real-time tracking of time saved by creators using our AI-powered tools
          </motion.p>

          {/* Main Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="border rounded-lg p-4">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                {totalHours.toLocaleString()}
              </div>
              <div className="text-xl font-medium sm:text-2xl mb-2">hours saved</div>
              <div className="text-sm sm:text-base text-secondary-foreground dark:text-gray-400">
                for creators this week ({currentWeek})
              </div>
            </div>
          </motion.div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {timeBreakdowns.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="border rounded-lg p-6 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">{item.category}</h3>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">{item.hours.toLocaleString()}h</div>
                <p className="text-sm text-secondary-foreground dark:text-gray-400">{item.description}</p>

                {/* Progress Bar */}
                <div className="mt-4 bg-gray-300 dark:bg-gray-400 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${(item.hours / 2847) * 100}%` : 0 }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-0 sm:mb-2">
                ⏱️&nbsp;<span className='bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark'>12.8h</span>
              </div>
              <div className="text-secondary-foreground dark:text-gray-400 text-sm sm:text-base">Average time saved per creator</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-0 sm:mb-2">⚡&nbsp;<span className='bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark'>73%</span></div>
              <div className="text-secondary-foreground dark:text-gray-400 text-sm sm:text-base">Faster content creation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-0 sm:mb-2">🎯&nbsp;<span className='bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark'>24/7</span></div>
              <div className="text-secondary-foreground dark:text-gray-400 text-sm sm:text-base">AI assistance available</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8"
          >
            <Link href="/auth/signin" className="p-0 m-0">
              <Button className="transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
                <Zap className="w-5 h-5" />
                Start Saving Time Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 