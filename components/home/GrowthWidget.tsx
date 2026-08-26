'use client'

import { useState } from 'react'
import { TrendingUp, Calculator, ArrowRight } from 'lucide-react'

export default function GrowthWidget() {
  const [subs, setSubs] = useState('')
  const [views, setViews] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const currentSubs = parseInt(subs) || 0
      const monthlyViews = parseInt(views) || 0
      if (currentSubs >= 10000) {
        setResult('You have already reached 10,000+ subscribers!')
        setLoading(false)
        return
      }
      // Estimate: 1 sub per 20 views, doubled for TubeTool
      const estGrowth = (monthlyViews / 20) * 2
      if (estGrowth <= 0) {
        setResult('Enter a valid number of monthly views.')
        setLoading(false)
        return
      }
      const months = Math.max(1, Math.ceil((10000 - currentSubs) / estGrowth))
      setResult(`With TubeTool optimization, you could reach 10,000 subs in ${months} month${months > 1 ? 's' : ''}.`)
      setLoading(false)
    }, 600)
  }

  return (
    <section className="py-16 flex justify-center bg-foreground dark:bg-background">
      <div className="w-full max-w-xl bg-dark-900/90 border border-dark-700 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mx-4 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-growth-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-growth-600/10 rounded-full blur-2xl" />
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-growth-500/10 border border-growth-500/20 rounded-full text-growth-400 text-sm max-sm:text-xs font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Growth Projection
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            How Fast Can You <span className="text-growth-400">Grow</span> with <span className="gradient-text">TubeTool?</span>
          </h3>
          <p className="text-dark-300 mb-6">
            Enter your current stats to see your growth potential!
          </p>
          <form onSubmit={handleCalculate} className="flex flex-col gap-4 items-center mb-4 w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="number"
                min="0"
                required
                value={subs}
                onChange={e => setSubs(e.target.value)}
                placeholder="Current Subscribers"
                className="flex-1 min-w-0 bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-growth-500 text-base sm:text-lg transition-all"
              />
              <input
                type="number"
                min="0"
                required
                value={views}
                onChange={e => setViews(e.target.value)}
                placeholder="Avg. Monthly Views"
                className="flex-1 min-w-0 bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-growth-500 text-base sm:text-lg transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-growth-500 to-growth-600 hover:from-growth-600 hover:to-growth-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 w-full text-base sm:text-lg"
              disabled={loading}
            >
              <Calculator className="w-4 sm:w-5 h-4 sm:h-5" />
              {loading ? 'Calculating...' : 'Calculate My Growth'}
            </button>
          </form>
          {result && (
            <div className="bg-growth-500/10 border border-growth-500/30 rounded-lg p-4 mb-4 animate-fade-in text-lg text-growth-400 font-semibold w-full">
              {result}
            </div>
          )}
          <button className="btn-secondary flex items-center gap-2 text-base sm:text-lg px-8 py-4 w-full mt-2 justify-center">
            Start Optimizing Now
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  )
} 