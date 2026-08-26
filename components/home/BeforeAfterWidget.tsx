'use client'

import { Sparkles, ArrowRight, EyeOff, Eye } from 'lucide-react'

export default function BeforeAfterWidget() {
  return (
    <section className="py-16 flex justify-center bg-foreground dark:bg-background">
      <div className="w-full max-w-4xl bg-dark-900/90 border border-dark-700 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mx-4 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Without TubeTool <span className="text-dark-400 font-normal">vs</span> <span className="gradient-text">With TubeTool</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Before Card */}
            <div className="flex-1 bg-dark-800/80 border border-dark-700 rounded-xl p-4 sm:p-6 flex flex-col items-center">
              <div className="w-40 h-24 bg-dark-700 rounded-lg flex items-center justify-center mb-4">
                <EyeOff className="w-10 h-10 text-dark-400" />
              </div>
              <div className="text-lg font-semibold text-dark-300 mb-2">&quot;My Vlog&quot;</div>
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                <span className="bg-dark-700 text-dark-400 px-2 py-1 rounded text-xs">#vlog</span>
                <span className="bg-dark-700 text-dark-400 px-2 py-1 rounded text-xs">#life</span>
              </div>
              <div className="text-xs text-dark-500">Generic title, weak tags, poor thumbnail</div>
              <div className="mt-4 text-sm text-dark-500 font-medium">Without TubeTool</div>
            </div>
            {/* After Card */}
            <div className="flex-1 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 border border-primary-500 rounded-xl p-4 sm:p-6 flex flex-col items-center relative overflow-hidden">
              <div className="w-40 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-white" />
                <Sparkles className="w-6 h-6 text-yellow-400 absolute top-2 right-2 animate-pulse" />
              </div>
              <div className="text-lg font-bold text-white mb-2 text-center">&quot;10 Life-Changing Habits for 2024 (Proven Results)&quot;</div>
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                <span className="bg-primary-600/20 text-primary-400 px-2 py-1 rounded text-xs font-semibold">#Productivity</span>
                <span className="bg-primary-600/20 text-primary-400 px-2 py-1 rounded text-xs font-semibold">#LifeHacks</span>
                <span className="bg-primary-600/20 text-primary-400 px-2 py-1 rounded text-xs font-semibold">#2024</span>
                <span className="bg-primary-600/20 text-primary-400 px-2 py-1 rounded text-xs font-semibold">#Motivation</span>
              </div>
              <div className="flex items-center gap-2 mt-2 mb-2">
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">9x More Views!</span>
              </div>
              <div className="text-xs text-primary-400 font-medium mb-2">AI-enhanced thumbnail, optimized title, rich tags</div>
              <button className="btn-primary flex items-center gap-2 text-sm sm:text-base px-6 py-3 mt-2">
                Get Results Like This
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="mt-4 text-sm text-primary-400 font-medium">With TubeTool</div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <span className="text-dark-300 text-base">This video got <span className="text-primary-400 font-bold">9x more views</span> using TubeTool</span>
          </div>
        </div>
      </div>
    </section>
  )
} 