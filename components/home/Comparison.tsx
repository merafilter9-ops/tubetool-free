'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: "AI-Powered Script Generation",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  },
  {
    feature: "Advanced Keyword Research",
    tubetool: true,
    vidIQ: true,
    tubeBuddy: true
  },
  {
    feature: "Thumbnail Optimization",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  },
  {
    feature: "Comment Sentiment Analysis",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  },
  {
    feature: "AlgoFit Algorithm Analysis",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  },
  {
    feature: "Sponsorship Matching",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  },
  {
    feature: "Free Tier Available",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  },
  {
    feature: "24/7 AI Support",
    tubetool: true,
    vidIQ: false,
    tubeBuddy: false
  }
]

export default function Comparison() {
  return (
    <section id="pricing" className="py-20 relative bg-foreground dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">TubeTool?</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            See how TubeTool compares to other YouTube tools and why creators are making the switch.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-dark-800/50 border border-dark-700 rounded-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-dark-700">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white">Features</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">TT</span>
              </div>
              <h3 className="text-lg font-semibold gradient-text">TubeTool</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-dark-300 font-bold text-sm">VI</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-300">VidIQ</h3>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-dark-300 font-bold text-sm">TB</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-300">TubeBuddy</h3>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-dark-700">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 gap-4 p-6 hover:bg-dark-700/30 transition-colors"
              >
                <div className="text-left">
                  <span className="text-dark-300">{row.feature}</span>
                </div>
                <div className="text-center">
                  {row.tubetool ? (
                    <Check className="w-6 h-6 text-primary-400 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-dark-500 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {row.vidIQ ? (
                    <Check className="w-6 h-6 text-dark-400 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-dark-500 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {row.tubeBuddy ? (
                    <Check className="w-6 h-6 text-dark-400 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-dark-500 mx-auto" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Switch?
            </h3>
            <p className="text-dark-300 mb-6">
              Join the creators who are already experiencing the TubeTool advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Compare Plans
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 