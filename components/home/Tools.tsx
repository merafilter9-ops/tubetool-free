'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  Image,
  // TrendingUp,
  MessageSquare,
  // DollarSign,
  Calendar,
  Shield,
  Lightbulb,
  CirclePlay
} from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const tools = [
  {
    icon: Search,
    title: "Keyword Research Tool",
    description: "Find high-performing keywords and trending topics to boost your video's discoverability.",
    category: "Planning"
  },
  {
    icon: FileText,
    title: "Script Generator",
    description: "Create engaging video scripts with AI assistance in seconds.",
    category: "Creation"
  },
  {
    icon: Image,
    title: "Thumbnail Checker",
    description: "Analyze and optimize your thumbnails for maximum click-through rates.",
    category: "Optimization"
  },
  // {
  //   icon: TrendingUp,
  //   title: "AlgoFit Analyzer",
  //   description: "Understand how well your content fits YouTube's algorithm and get optimization tips.",
  //   category: "Analytics"
  // },
  {
    icon: MessageSquare,
    title: "Comment Sentiment Analyzer",
    description: "Track audience sentiment and engagement patterns from your comments.",
    category: "Engagement"
  },
  // {
  //   icon: DollarSign,
  //   title: "Sponsorship Tool",
  //   description: "Connect with brands and secure lucrative sponsorship deals.",
  //   category: "Monetization"
  // },
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Plan and schedule your content with our intelligent calendar system.",
    category: "Productivity"
  },
  {
    icon: Shield,
    title: "Churn Shield",
    description: "Predict and prevent subscriber churn with advanced analytics.",
    category: "Retention"
  },
  {
    icon: Lightbulb,
    title: "Topic Ideas Tool",
    description: "Help generate video topic ideas based on trending searches and audience interests.",
    category: "Planning"
  },
  {
    icon: CirclePlay,
    title: "Video Optimization",
    description: "Video Optimization Tool is a tool that helps you to optimize your video for better performance.",
    category: "Optimization"
  }
]

export default function Tools() {
  return (
    <section id="tools" className="mt-16 flex justify-center">
      <div className="w-full max-w-6xl text-center relative overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            Top Tools
          </h2>
          <p className="text-center font-normal text-base text-secondary-foreground dark:text-gray-400 pt-2 max-w-3xl mx-auto">
            Everything you need to create, optimize, and grow your YouTube channel in one powerful platform.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-lg p-4 text-left transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <tool.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full">
                  {tool.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-1">
                {tool.title}
              </h3>
              <p className="text-secondary-foreground dark:text-gray-400 text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Tools CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 pb-2"
        >
          <Link href="/auth/signin" className="p-0 m-0">
            <Button className="transition-all duration-200 transform hover:scale-105">
              Signin to use all 15+ Tools for Free
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 