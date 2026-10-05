'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  X,
  Star,
  Zap,
  TrendingUp,
  Shield,
  Target,
  BarChart3,
  Play,
  Crown
} from 'lucide-react'

interface PlanFeature {
  name: string
  tubetool: boolean | string
  vidiq: boolean | string
  tubebuddy: boolean | string
  category: 'core' | 'advanced' | 'premium'
}

const features: PlanFeature[] = [
  // Core Features
  { name: 'Keyword Research', tubetool: true, vidiq: true, tubebuddy: true, category: 'core' },
  { name: 'Video Analytics', tubetool: true, vidiq: true, tubebuddy: true, category: 'core' },
  { name: 'Thumbnail Testing', tubetool: true, vidiq: true, tubebuddy: true, category: 'core' },
  { name: 'Title Optimization', tubetool: true, vidiq: true, tubebuddy: true, category: 'core' },
  { name: 'Competitor Analysis', tubetool: true, vidiq: true, tubebuddy: true, category: 'core' },

  // Advanced Features
  { name: 'AI Content Ideas', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },
  { name: 'Topic Intel Research', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },
  { name: 'Creator Journey Tracking', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },
  { name: 'Growth Prediction', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },
  { name: 'Time-Saving Tools', tubetool: true, vidiq: 'Limited', tubebuddy: 'Limited', category: 'advanced' },
  { name: 'Global User Insights', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },
  { name: 'Future Channel Analytics', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },
  { name: 'Diagnostic Tools', tubetool: true, vidiq: false, tubebuddy: false, category: 'advanced' },

  // Premium Features
  { name: 'Unlimited Searches', tubetool: true, vidiq: '500/day', tubebuddy: '1000/day', category: 'premium' },
  { name: 'Real-time Data', tubetool: true, vidiq: '15min delay', tubebuddy: '30min delay', category: 'premium' },
  { name: 'Priority Support', tubetool: true, vidiq: false, tubebuddy: false, category: 'premium' },
  { name: 'Custom Reports', tubetool: true, vidiq: 'Basic', tubebuddy: 'Basic', category: 'premium' },
  { name: 'API Access', tubetool: true, vidiq: false, tubebuddy: false, category: 'premium' },
  { name: 'White-label Solutions', tubetool: true, vidiq: false, tubebuddy: false, category: 'premium' }
]

const plans = [
  {
    name: 'Tubetool.ai',
    icon: <Play className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-700',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-400',
    price: '$0',
    period: 'Free Forever',
    description: '100% Free YouTube growth suite',
    features: features,
    badge: '100% Free Forever',
    badgeColor: 'bg-emerald-500'
  },
  {
    name: 'VidIQ',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-700',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-400',
    price: '$39',
    period: '/month',
    description: 'Traditional YouTube analytics',
    features: features,
    badge: null,
    badgeColor: ''
  },
  {
    name: 'TubeBuddy',
    icon: <Target className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-700',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-400',
    price: '$49',
    period: '/month',
    description: 'Browser extension focused',
    features: features,
    badge: null,
    badgeColor: ''
  }
]

export default function PlanComparisonWidget() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'advanced' | 'premium'>('all')

  const filteredFeatures = selectedCategory === 'all'
    ? features
    : features.filter(feature => feature.category === selectedCategory)

  const getFeatureDisplay = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <X className="w-5 h-5 text-red-500" />
      )
    }
    return (
      <span className="text-sm text-yellow-400 font-medium">{value}</span>
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return 'text-blue-400'
      case 'advanced': return 'text-green-400'
      case 'premium': return 'text-purple-400'
      default: return 'text-gray-400'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'core': return <BarChart3 className="w-4 h-4" />
      case 'advanced': return <Zap className="w-4 h-4" />
      case 'premium': return <Crown className="w-4 h-4" />
      default: return <Star className="w-4 h-4" />
    }
  }

  return (
    <div className='bg-foreground dark:bg-background'>
      <div className="max-w-7xl mx-auto px-4 py-12 bg-foreground dark:bg-background">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Why Choose Tubetool?
          </h2>
          <p className="text-dark-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Compare Tubetool with the competition and see why creators choose us for their YouTube growth
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-dark-800 rounded-xl p-4 sm:p-6 border-2 ${plan.borderColor} ${plan.name === 'Tubetool' ? 'ring-2 ring-primary-500/50 shadow-lg shadow-primary-500/20' : ''
                }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-dark-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-dark-300">{plan.period}</span>
                </div>
              </div>

              {/* Key Advantages */}
              <div className="space-y-3 mb-6">
                {plan.name.includes('Tubetool') && (
                  <>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">100% Free - No Paywalls</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">AI-Powered Growth Tools</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">No Credit Card Required</span>
                    </div>
                  </>
                )}
                {plan.name === 'VidIQ' && (
                  <>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Basic Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">Limited AI Features</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">$39/mo Paywall</span>
                    </div>
                  </>
                )}
                {plan.name === 'TubeBuddy' && (
                  <>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Browser Extension</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">No Advanced AI</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">$49/mo Paywall</span>
                    </div>
                  </>
                )}
              </div>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.name.includes('Tubetool')
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                : 'bg-dark-700 text-dark-300 border border-dark-600 hover:bg-dark-600'
                }`}>
                {plan.name.includes('Tubetool') ? 'Use All Tools Free →' : 'Compare Plan'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${selectedCategory === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
            >
              All Features
            </button>
            <button
              onClick={() => setSelectedCategory('core')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === 'core'
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
            >
              <BarChart3 className="w-3 sm:w-4 h-3 sm:h-4" />
              Core Features
            </button>
            <button
              onClick={() => setSelectedCategory('advanced')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === 'advanced'
                ? 'bg-green-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
            >
              <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
              Advanced Features
            </button>
            <button
              onClick={() => setSelectedCategory('premium')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === 'premium'
                ? 'bg-purple-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
            >
              <Crown className="w-3 sm:w-4 h-3 sm:h-4" />
              Premium Features
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-3 text-dark-300 font-semibold">Feature</th>
                  <th className="text-left py-3 text-dark-300 font-semibold">Tubetool</th>
                  <th className="text-left py-3 text-dark-300 font-semibold">VidIQ</th>
                  <th className="text-left py-3 text-dark-300 font-semibold">TubeBuddy</th>
                </tr>
              </thead>
              <tbody>
                {filteredFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-dark-700">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className={`${getCategoryColor(feature.category)}`}>
                          {getCategoryIcon(feature.category)}
                        </div>
                        <span className="text-white font-medium">{feature.name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-left">
                      {getFeatureDisplay(feature.tubetool)}
                    </td>
                    <td className="py-3 text-left">
                      {getFeatureDisplay(feature.vidiq)}
                    </td>
                    <td className="py-3 text-left">
                      {getFeatureDisplay(feature.tubebuddy)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Tubetool Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Insights</h3>
            <p className="text-dark-300">
              Advanced AI algorithms provide deeper insights than traditional analytics tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-dark-300">
              Creators using Tubetool see 3x faster growth compared to other platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Trusted Platform</h3>
            <p className="text-dark-300">
              Used by 50,000+ creators worldwide with 99.9% uptime guarantee
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 