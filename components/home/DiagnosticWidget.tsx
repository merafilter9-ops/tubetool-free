'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, Lightbulb, TrendingUp, Calendar, Image as ImageIcon, Search, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const challenges = [
  {
    id: 'content-ideas',
    title: "I don't know what to post",
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    percentage: 82,
    description: "Struggling to come up with engaging content ideas",
    solutions: [
      {
        tool: "Daily Topic Ideas",
        description: "Get trending video ideas tailored to your niche",
        icon: <TrendingUp className="w-4 h-4 text-white" />
      },
      {
        tool: "Content Research Tool",
        description: "Discover what your audience actually wants to watch",
        icon: <Search className="w-4 h-4 text-white" />
      },
      {
        tool: "Content Gap Finder",
        description: "Find untapped opportunities in your niche",
        icon: <Lightbulb className="w-4 h-4 text-white" />
      }
    ]
  },
  {
    id: 'low-views',
    title: "My videos don't get views",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    percentage: 78,
    description: "Videos aren't reaching the right audience",
    solutions: [
      {
        tool: "Keyword Research Tool",
        description: "Target high-performing keywords for better discoverability",
        icon: <Search className="w-4 h-4 text-white" />
      },
      {
        tool: "AlgoFit Analyzer",
        description: "Optimize your content for YouTube's algorithm",
        icon: <TrendingUp className="w-4 h-4 text-white" />
      },
      {
        tool: "Thumbnail Quality Checker",
        description: "Create click-worthy thumbnails that drive views",
        icon: <ImageIcon className="w-4 h-4 text-white" />
      }
    ]
  },
  {
    id: 'consistency',
    title: "I struggle with consistency",
    icon: <Calendar className="w-5 h-5 text-white" />,
    percentage: 75,
    description: "Finding it hard to maintain a regular upload schedule",
    solutions: [
      {
        tool: "Content Calendar",
        description: "Plan and schedule your content in advance",
        icon: <Calendar className="w-4 h-4 text-white" />
      },
      {
        tool: "Script Generator Tool",
        description: "Create scripts faster to maintain consistency",
        icon: <Lightbulb className="w-4 h-4 text-white" />
      },
      {
        tool: "Video Production Planner",
        description: "Streamline your entire production workflow",
        icon: <Calendar className="w-4 h-4 text-white" />
      }
    ]
  },
  {
    id: 'thumbnails',
    title: "I can't design thumbnails",
    icon: <ImageIcon className="w-5 h-5 text-white" />,
    percentage: 71,
    description: "Thumbnails don't look professional or click-worthy",
    solutions: [
      {
        tool: "Thumbnail Design Guide",
        description: "Learn proven thumbnail design principles",
        icon: <ImageIcon className="w-4 h-4 text-white" />
      },
      {
        tool: "Thumbnail Quality Checker",
        description: "Analyze and improve your thumbnail performance",
        icon: <CheckCircle className="w-4 h-4 text-white" />
      },
      {
        tool: "Title Generator Tool",
        description: "Create compelling titles that work with thumbnails",
        icon: <Lightbulb className="w-4 h-4 text-white" />
      }
    ]
  },
  {
    id: 'seo',
    title: "I don't understand SEO",
    icon: <Search className="w-5 h-5 text-white" />,
    percentage: 68,
    description: "YouTube SEO feels overwhelming and confusing",
    solutions: [
      {
        tool: "Keyword Research Tool",
        description: "Find the best keywords for your niche",
        icon: <Search className="w-4 h-4 text-white" />
      },
      {
        tool: "Description Generator Tool",
        description: "Create SEO-optimized descriptions automatically",
        icon: <Lightbulb className="w-4 h-4 text-white" />
      },
      {
        tool: "Tag Generator",
        description: "Generate relevant tags for better discoverability",
        icon: <TrendingUp className="w-4 h-4 text-white" />
      }
    ]
  }
]

export default function DiagnosticWidget() {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null)
  const [showSolutions, setShowSolutions] = useState(false)

  const handleChallengeSelect = (challengeId: string) => {
    setSelectedChallenge(challengeId)
    setShowSolutions(true)
  }

  const resetDiagnostic = () => {
    setSelectedChallenge(null)
    setShowSolutions(false)
  }

  const selectedChallengeData = challenges.find(c => c.id === selectedChallenge)

  return (
    <section className="mt-16 flex justify-center">
      <div className="w-full max-w-6xl rounded-lg text-center relative overflow-hidden">

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-2 py-1 bg-card/50 dark:bg-card/0 border rounded-full text-xs font-medium mb-6"
          >
            <HelpCircle className="h-5 w-5 mr-1.5 px-1 py-0.5" />
            Creator Diagnostic Tool
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark"
          >
            What&apos;s Holding You Back on YouTube?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center font-normal text-base text-secondary-foreground dark:text-gray-400 pt-2 mb-6"
          >
            Identify your biggest challenge and get personalized solutions to overcome it
          </motion.p>

          <AnimatePresence mode="wait">
            {!showSolutions ? (
              <motion.div
                key="challenges"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
              >
                {challenges.map((challenge, index) => (
                  <motion.button
                    key={challenge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    onClick={() => handleChallengeSelect(challenge.id)}
                    className="border rounded-lg p-4 text-left transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {challenge.icon}
                      </div>
                      <div className="bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark text-sm font-medium">
                        {challenge.percentage}% struggle
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                      {challenge.title}
                    </h3>
                    <p className="text-secondary-foreground dark:text-gray-400 text-sm">
                      {challenge.description}
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="solutions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                {/* Challenge Summary */}
                <div className="bg-gradient-to-r from-primary-500/10 to-success-500/10 border border-primary-500/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                      {selectedChallengeData?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl text-left font-semibold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">{selectedChallengeData?.title}</h3>
                      <p className="text-primary-400 text-sm">You&apos;re not alone — {selectedChallengeData?.percentage}% of creators struggle with this</p>
                    </div>
                  </div>
                </div>

                {/* Solutions */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-4">Try These 3 TubeTool Solutions:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedChallengeData?.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="border rounded-lg p-4 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-700 rounded-lg flex items-center justify-center">
                            {solution.icon}
                          </div>
                          <h4 className="text-lg text-left font-semibold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">{solution.tool}</h4>
                        </div>
                        <p className="text-secondary-foreground dark:text-gray-400 text-sm text-left leading-relaxed">
                          {solution.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pb-2">
                  <Link href="/tools/title-generator" className="p-0 m-0">
                    <Button className="transition-all duration-200 transform max-sm:w-full hover:scale-105 flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      Try These Solutions Free
                    </Button>
                  </Link>
                  <Button
                    onClick={resetDiagnostic}
                    className="transition-all duration-200 transform max-sm:w-full hover:scale-105 flex items-center gap-2"
                    variant="outline"
                  >
                    Choose Different Challenge
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA */}
          {!showSolutions && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <p className="text-gray-800 dark:text-dark-300 mb-4">
                Don&apos;t see your challenge? <span className="text-primary-600 dark:text-primary-400">TubeTool has solutions for everything</span>
              </p>
              <Link href="/tools/title-generator" className="p-0 m-0">
                <Button className="transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
                  <span>Explore All Tools</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
} 