'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  TrendingUp,
  Target,
  Users,
  CheckCircle,
  BarChart3,
  Zap
} from 'lucide-react'

interface TopicIntelData {
  mainKeyword: string
  monthlySearchVolume: string
  trendDirection: string
  competitionLevel: string
  evergreenPotential: string
  suggestedUploadTimeframe: string
  searchIntentAnalysis: Array<{
    searchQuery: string
    intentType: string
    viewerGoal: string
    contentFormatExpected: string
    idealVideoType: string
  }>
  relatedKeywords: Array<{
    keyword: string
    volume: string
    competition: string
    intentType: string
  }>
  audienceSegments: Array<{
    viewerType: string
    likelyInterest: string
    videoAngleRecommendation: string
  }>
  finalRecommendation: {
    searchVolume: { status: string; notes: string }
    competition: { status: string; notes: string }
    monetizationPotential: { status: string; notes: string }
    evergreenReusability: { status: string; notes: string }
  }
  verdict: string
  recommendations: string[]
}

export default function TopicIntelWidget() {
  const [topic, setTopic] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [intelData, setIntelData] = useState<TopicIntelData | null>(null)
  const [error, setError] = useState('')

  const generateTopicIntel = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic to analyze')
      return
    }

    setIsAnalyzing(true)
    setError('')

    // Simulate API call with realistic delay
    setTimeout(() => {
      const mockData: TopicIntelData = {
        mainKeyword: topic,
        monthlySearchVolume: `${Math.floor(Math.random() * 50 + 10)}K-${Math.floor(Math.random() * 100 + 50)}K`,
        trendDirection: '🔼 Rising (seasonal spikes: weekends, holidays, new year)',
        competitionLevel: '🔴 High',
        evergreenPotential: '🟡 Moderate',
        suggestedUploadTimeframe: 'During holidays, weekends, or peak seasons',
        searchIntentAnalysis: [
          {
            searchQuery: `${topic}`,
            intentType: 'Informational',
            viewerGoal: 'Discover relevant content',
            contentFormatExpected: 'Listicle / Countdown',
            idealVideoType: 'Engaging list with visuals'
          },
          {
            searchQuery: `Best ${topic}`,
            intentType: 'Informational',
            viewerGoal: 'Find top recommendations',
            contentFormatExpected: 'Ranked list with commentary',
            idealVideoType: 'Voiceover + examples'
          },
          {
            searchQuery: `${topic} to watch`,
            intentType: 'Navigational',
            viewerGoal: 'Entertainment planning',
            contentFormatExpected: 'Recommendations / Compilation',
            idealVideoType: 'Quick-paced list with reasons'
          }
        ],
        relatedKeywords: [
          {
            keyword: `Best ${topic}`,
            volume: `${Math.floor(Math.random() * 80 + 20)}K`,
            competition: '🔴 High',
            intentType: 'Informational'
          },
          {
            keyword: `Top 10 ${topic}`,
            volume: `${Math.floor(Math.random() * 60 + 15)}K`,
            competition: '🟠 Medium',
            intentType: 'Informational'
          },
          {
            keyword: `${topic} for beginners`,
            volume: `${Math.floor(Math.random() * 40 + 10)}K`,
            competition: '🟢 Low',
            intentType: 'Informational'
          }
        ],
        audienceSegments: [
          {
            viewerType: 'Casual viewers',
            likelyInterest: 'Looking for quick recommendations',
            videoAngleRecommendation: 'Fast-paced list with direct recommendations'
          },
          {
            viewerType: 'Enthusiasts',
            likelyInterest: 'Interested in detailed analysis',
            videoAngleRecommendation: 'Detailed breakdown with facts and insights'
          },
          {
            viewerType: 'Newcomers',
            likelyInterest: 'Learning and discovery',
            videoAngleRecommendation: 'Beginner-friendly with explanations'
          }
        ],
        finalRecommendation: {
          searchVolume: {
            status: '✅ Good',
            notes: 'Steady monthly demand with occasional spikes'
          },
          competition: {
            status: '⚠️ Medium',
            notes: 'Consider niching down for lower competition'
          },
          monetizationPotential: {
            status: '✅ Strong',
            notes: 'Potential for affiliate links and sponsorships'
          },
          evergreenReusability: {
            status: '⚠️ Medium',
            notes: 'Needs updates periodically to stay relevant'
          }
        },
        verdict: '✅ Yes, create the video. The topic has good search volume and broad audience appeal.',
        recommendations: [
          'Use strong visuals and engaging content to stand out',
          'Add voiceover with insights to enrich value',
          'Target niche angles to reduce competition',
          'Include timestamps and structured content for higher engagement'
        ]
      }

      setIntelData(mockData)
      setIsAnalyzing(false)
    }, 2000)
  }

  const getCompetitionColor = (level: string) => {
    switch (level) {
      case '🔴 High': return 'text-red-500'
      case '🟠 Medium': return 'text-orange-500'
      case '🟢 Low': return 'text-green-500'
      default: return 'text-gray-500'
    }
  }

  const getStatusColor = (status: string) => {
    if (status.includes('✅')) return 'text-green-500'
    if (status.includes('⚠️')) return 'text-yellow-500'
    if (status.includes('❌')) return 'text-red-500'
    return 'text-gray-500'
  }

  return (
    <div className='bg-foreground dark:bg-background'>
      <div className="max-w-6xl mx-auto px-4 py-8 bg-foreground dark:bg-background">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            📊 YouTube Topic Research Intel
          </h2>
          <p className="text-dark-300 text-base sm:text-lg">
            Get comprehensive research and analysis for any YouTube topic
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-dark-800 rounded-xl p-4 sm:p-6 mb-8 border border-dark-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter your topic (e.g., 'Top 10 Hollywood Movies to Watch')"
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base sm:text-lg"
              />
            </div>
            <button
              onClick={generateTopicIntel}
              disabled={isAnalyzing}
              className="btn-primary flex items-center gap-2 px-6 py-3"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Generate Intel
                </>
              )}
            </button>
          </div>
          {error && (
            <p className="text-red-400 mt-2 text-sm">{error}</p>
          )}
        </div>

        {/* Results Section */}
        <AnimatePresence>
          {intelData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
                <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                  📊 YouTube Topic Research: &quot;{intelData.mainKeyword}&quot;
                </h3>
              </div>

              {/* 1. Keyword & Topic Overview */}
              <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary-400" />
                  1. 📈 Keyword & Topic Overview
                </h4>
                <div className="bg-dark-700 rounded-lg p-3 sm:p-4 border border-dark-600">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="">
                      <div className="flex items-center justify-between py-3 pt-0 border-b border-dark-600">
                        <span className="text-dark-300 font-medium max-sm:text-sm">Main Keyword</span>
                        <span className="text-white font-semibold bg-dark-600 px-3 py-1 rounded-md max-sm:text-sm">{intelData.mainKeyword}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-dark-600">
                        <span className="text-dark-300 font-medium max-sm:text-sm">Monthly Search Volume (Est.)</span>
                        <span className="text-primary-400 font-bold text-lg max-sm:text-sm">{intelData.monthlySearchVolume}</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-dark-300 font-medium max-sm:text-sm">Trend Direction</span>
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-green-400 text-lg max-sm:text-sm">🔼</span>
                          <span className="text-green-400 font-medium max-sm:text-sm">{intelData.trendDirection}</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-between py-3 border-b border-dark-600">
                        <span className="text-dark-300 font-medium max-sm:text-sm">Competition Level</span>
                        <div className="flex items-center gap-2 max-sm:text-sm">
                          <span className={`${getCompetitionColor(intelData.competitionLevel)} text-lg`}>{intelData.competitionLevel.split(' ')[0]}</span>
                          <span className={`${getCompetitionColor(intelData.competitionLevel)} font-semibold`}>{intelData.competitionLevel.split(' ')[1]}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-dark-600">
                        <span className="text-dark-300 font-medium max-sm:text-sm">Evergreen Potential</span>
                        <div className="flex items-center gap-2 max-sm:text-sm">
                          <span className="text-yellow-400 text-base sm:text-lg">🟡</span>
                          <span className="text-yellow-400 font-semibold">{intelData.evergreenPotential.split(' ')[1]}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-dark-300 font-medium max-sm:text-sm">Suggested Upload Timeframe</span>
                        <span className="text-blue-400 font-medium text-sm text-right max-w-xs">{intelData.suggestedUploadTimeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Search Intent Analyzer */}
              <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-400" />
                  2. 🔍 Search Intent Analyzer (YouTube-Specific)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-2 text-dark-300">Search Query</th>
                        <th className="text-left py-2 text-dark-300">Intent Type</th>
                        <th className="text-left py-2 text-dark-300">Viewer Goal</th>
                        <th className="text-left py-2 text-dark-300">Content Format Expected</th>
                        <th className="text-left py-2 text-dark-300">Ideal Video Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intelData.searchIntentAnalysis.map((item, index) => (
                        <tr key={index} className="border-b border-dark-700">
                          <td className="py-2 text-white">{item.searchQuery}</td>
                          <td className="py-2 text-blue-400">{item.intentType}</td>
                          <td className="py-2 text-dark-300">{item.viewerGoal}</td>
                          <td className="py-2 text-green-400">{item.contentFormatExpected}</td>
                          <td className="py-2 text-yellow-400">{item.idealVideoType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Related Keywords */}
              <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  3. 🔗 Related Keywords (with Competition)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-2 text-dark-300">Keyword</th>
                        <th className="text-left py-2 text-dark-300">Volume</th>
                        <th className="text-left py-2 text-dark-300">Competition</th>
                        <th className="text-left py-2 text-dark-300">Intent Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intelData.relatedKeywords.map((item, index) => (
                        <tr key={index} className="border-b border-dark-700">
                          <td className="py-2 text-white">{item.keyword}</td>
                          <td className="py-2 text-primary-400">{item.volume}</td>
                          <td className={`py-2 ${getCompetitionColor(item.competition)}`}>{item.competition}</td>
                          <td className="py-2 text-blue-400">{item.intentType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Audience Intent Segments */}
              <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-400" />
                  4. 🎯 Audience Intent Segments
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-2 text-dark-300">Viewer Type</th>
                        <th className="text-left py-2 text-dark-300">Likely Interest</th>
                        <th className="text-left py-2 text-dark-300">Video Angle Recommendation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intelData.audienceSegments.map((item, index) => (
                        <tr key={index} className="border-b border-dark-700">
                          <td className="py-2 text-white font-medium">{item.viewerType}</td>
                          <td className="py-2 text-dark-300">{item.likelyInterest}</td>
                          <td className="py-2 text-green-400">{item.videoAngleRecommendation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Final Recommendation Table */}
              <div className="bg-dark-800 rounded-xl p-4 sm:p-6 border border-dark-700">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  5. ✅ Final Recommendation Table
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="text-left py-2 text-dark-300">Criteria</th>
                        <th className="text-left py-2 text-dark-300">Status</th>
                        <th className="text-left py-2 text-dark-300">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-dark-700">
                        <td className="py-2 text-white">Search volume</td>
                        <td className={`py-2 ${getStatusColor(intelData.finalRecommendation.searchVolume.status)}`}>
                          {intelData.finalRecommendation.searchVolume.status}
                        </td>
                        <td className="py-2 text-dark-300">{intelData.finalRecommendation.searchVolume.notes}</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-2 text-white">Competition</td>
                        <td className={`py-2 ${getStatusColor(intelData.finalRecommendation.competition.status)}`}>
                          {intelData.finalRecommendation.competition.status}
                        </td>
                        <td className="py-2 text-dark-300">{intelData.finalRecommendation.competition.notes}</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-2 text-white">Monetization potential</td>
                        <td className={`py-2 ${getStatusColor(intelData.finalRecommendation.monetizationPotential.status)}`}>
                          {intelData.finalRecommendation.monetizationPotential.status}
                        </td>
                        <td className="py-2 text-dark-300">{intelData.finalRecommendation.monetizationPotential.notes}</td>
                      </tr>
                      <tr className="border-b border-dark-700">
                        <td className="py-2 text-white">Evergreen/reusability</td>
                        <td className={`py-2 ${getStatusColor(intelData.finalRecommendation.evergreenReusability.status)}`}>
                          {intelData.finalRecommendation.evergreenReusability.status}
                        </td>
                        <td className="py-2 text-dark-300">{intelData.finalRecommendation.evergreenReusability.notes}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Verdict */}
              <div className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 rounded-xl p-4 sm:p-6 border border-primary-500/20">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-400" />
                  📌 Verdict
                </h4>
                <p className="text-white mb-4">{intelData.verdict}</p>
                <div className="space-y-2">
                  {intelData.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">●</span>
                      <span className="text-dark-300">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 