'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech YouTuber",
    avatar: "SC",
    content: "TubeTool has completely transformed my content creation process. The keyword research tool alone helped me increase my views by 300% in just 2 months!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Gaming Creator",
    avatar: "MR",
    content: "The script generator saves me hours every week. I can focus on filming and editing while TubeTool handles the research and planning.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Lifestyle Vlogger",
    avatar: "ET",
    content: "Finally, an all-in-one solution that actually works! The thumbnail checker helped me improve my CTR from 2% to 8%.",
    rating: 5
  }
]

const stats = [
  { number: "500+", label: "Creators in Beta", isGrowth: true },
  { number: "660", label: "Signups in 7 Days", isGrowth: true },
  { number: "15+", label: "Powerful Tools" },
  { number: "4.9/5", label: "User Rating", isSuccess: true }
]

export default function Testimonials() {
  return (
    <section className="py-20 relative bg-foreground dark:bg-background">
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
            <span className="text-white">What </span>
            <span className="gradient-text">Creators Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto">
            Join hundreds of successful creators who are already using TubeTool to grow their channels.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.isGrowth ? 'text-growth-400' :
                stat.isSuccess ? 'text-success-400' :
                  'gradient-text'
                }`}>
                {stat.number}
              </div>
              <div className="text-dark-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-success-400 fill-current" />
                ))}
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-dark-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-dark-300 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-growth-500/10 to-success-500/10 border border-growth-500/20 rounded-2xl p-4 sm:p-6 md:p-8">
            <Quote className="w-12 h-12 text-growth-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the <span className="text-growth-400">Growth</span> Revolution?
            </h3>
            <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
              Join thousands of creators who are already using TubeTool to grow their channels faster and smarter.
            </p>
            <button className="bg-gradient-to-r from-growth-500 to-growth-600 hover:from-growth-600 hover:to-growth-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm md:text-lg">
              Start Growing Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 