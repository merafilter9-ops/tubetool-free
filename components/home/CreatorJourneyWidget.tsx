"use client"

import { CheckCircle, ArrowRight, Lightbulb, Search, FileText, Image as ImageIcon, Settings, BarChart3, Users } from "lucide-react";

const stages = [
  {
    number: 1,
    icon: <Lightbulb className="w-6 h-6 text-primary-400" />,
    title: "Idea & Planning Stage",
    question: "What should I create next?",
    tools: ["Daily Topic Ideas", "Content Research Tool", "Content Gap Finder"],
    why: "Coming up with the right idea is half the battle. TubeTool helps you generate viral, trending, and niche-specific ideas instantly.",
    cta: "Find your next winning video idea"
  },
  {
    number: 2,
    icon: <Search className="w-6 h-6 text-primary-400" />,
    title: "Research & SEO Strategy",
    question: "Is this keyword worth targeting?",
    tools: ["Keyword Research Tool", "Competitor Analytics", "Hashtag Generator", "Tag Generator"],
    why: "Ranking on YouTube isn't luck — it's SEO. TubeTool shows you exactly what viewers are searching for and how to outperform competitors.",
    cta: "Research keywords like a pro"
  },
  {
    number: 3,
    icon: <FileText className="w-6 h-6 text-primary-400" />,
    title: "Scriptwriting & Content Development",
    question: "What should I say in the video?",
    tools: ["Script Generator Tool", "Title Generator Tool", "Description Generator Tool"],
    why: "Structured scripts, powerful titles, and optimized descriptions can massively increase retention and click-through.",
    cta: "Write your full video in minutes"
  },
  {
    number: 4,
    icon: <ImageIcon className="w-6 h-6 text-primary-400" />,
    title: "Thumbnail & Visuals Prep",
    question: "Will people actually click this video?",
    tools: ["Thumbnail Quality Checker", "Thumbnail Design Guide"],
    why: "90% of a video's performance depends on your title and thumbnail. TubeTool makes sure they're scroll-stopping.",
    cta: "Make scroll-stopping thumbnails"
  },
  {
    number: 5,
    icon: <Settings className="w-6 h-6 text-primary-400" />,
    title: "Optimization Before Upload",
    question: "Is this video ready to go live?",
    tools: ["Video Optimization Tool", "Hashtag Generator", "Description & Tag Validator", "AlgoFit Analyzer"],
    why: "Before you hit 'publish,' TubeTool checks everything to ensure your video is algorithm-friendly and optimized for discovery.",
    cta: "Run Final Optimization Check"
  },
  {
    number: 6,
    icon: <BarChart3 className="w-6 h-6 text-success-400" />,
    title: "Performance Monitoring & Feedback",
    question: "How did my video actually perform?",
    tools: ["Comment Analysis Tool", "Churn Shield Tool", "AlgoFit Analyzer", "Channel Credibility Tracker"],
    why: "Understanding your audience's reaction helps you improve. TubeTool gives AI-powered feedback and churn prediction.",
    cta: "See how your video is doing"
  },
  {
    number: 7,
    icon: <Users className="w-6 h-6 text-growth-400" />,
    title: "Growth & Monetization",
    question: "How do I grow, earn, and collaborate?",
    tools: ["Collaboration Tool", "Sponsorship Tool", "YouTuber Leaderboard", "Channel Credibility Tracker"],
    why: "Growth isn't just about views — it's also about partnerships, deals, and your brand image. TubeTool opens those doors.",
    cta: "Find collabs & brand deals"
  }
];

export default function CreatorJourneyWidget() {
  return (
    <section className="py-20 flex justify-center bg-foreground dark:bg-background">
      <div className="w-full max-w-7xl bg-dark-900/90 border border-dark-700 rounded-2xl shadow-xl p-4 sm:p-6 md:p-12 mx-2 sm:mx-4 text-center relative overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-16">Your Creator Journey with <span className="gradient-text">TubeTool</span></h3>

        {/* Desktop Timeline - Redesigned with proper spacing */}
        <div className="hidden lg:block">
          <div className="relative w-full">
            {/* Timeline container with proper spacing */}
            <div className="flex flex-col space-y-32">
              {stages.map((stage, idx) => (
                <div key={stage.number} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-16`}>
                  {/* Card */}
                  <div className="flex-1 bg-dark-800/95 border border-dark-700 rounded-xl p-8 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      {stage.icon}
                      <span className="font-bold text-white text-xl">{stage.title}</span>
                    </div>

                    <div className="text-primary-400 font-semibold mb-4 text-lg">{stage.question}</div>

                    <ul className="mb-6 flex flex-wrap gap-3">
                      {stage.tools.map(tool => (
                        <li key={tool} className="flex items-center gap-2 text-sm text-primary-300 bg-dark-700 px-4 py-2 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-sm">{tool}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-dark-300 text-base mb-6 leading-relaxed">{stage.why}</div>

                    <button className="btn-secondary flex items-center gap-2 text-base px-6 py-3 w-full justify-center">
                      {stage.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Timeline connector and number */}
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-dark-900 border-2 font-bold text-xl shadow-lg ${stage.number === 6 ? 'border-success-500 text-success-400' :
                      stage.number === 7 ? 'border-growth-500 text-growth-400' :
                        'border-primary-500 text-primary-400'
                      }`}>
                      {stage.number}
                    </div>
                    {idx < stages.length - 1 && (
                      <div className={`w-1 h-32 mt-4 ${stage.number === 6 ? 'bg-success-500' :
                        stage.number === 7 ? 'bg-growth-500' :
                          'bg-primary-500'
                        }`}></div>
                    )}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Timeline (2 columns) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 mb-16">
            {stages.map((stage) => (
              <div key={stage.number} className="relative">
                <div className="bg-dark-800/90 border border-dark-700 rounded-xl p-6 flex flex-col items-start text-left shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-dark-900 border-2 font-bold text-lg ${stage.number === 6 ? 'border-success-500 text-success-400' :
                      stage.number === 7 ? 'border-growth-500 text-growth-400' :
                        'border-primary-500 text-primary-400'
                      }`}>{stage.number}</div>
                    <div className="font-bold text-white text-lg flex items-center gap-2">{stage.icon} {stage.title}</div>
                  </div>

                  <div className="text-primary-400 font-semibold mb-3">{stage.question}</div>

                  <ul className="mb-4 flex flex-wrap gap-2">
                    {stage.tools.map(tool => (
                      <li key={tool} className="flex items-center gap-2 text-sm text-primary-300 bg-dark-700 px-3 py-2 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-xs">{tool}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-dark-300 text-sm mb-4 leading-relaxed">{stage.why}</div>

                  <button className="btn-secondary flex items-center gap-2 text-sm px-4 py-3 mt-2 w-full justify-center">
                    {stage.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="flex flex-col gap-10 md:hidden relative">
          {stages.map((stage, idx) => (
            <div key={stage.number} className="relative flex flex-col items-center">
              {/* Arrow above except for first */}
              {idx !== 0 && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-1 h-8 ${stage.number === 6 ? 'bg-success-500' :
                    stage.number === 7 ? 'bg-growth-500' :
                      'bg-primary-500'
                    }`} />
                </div>
              )}

              <div className="w-full bg-dark-800/90 border border-dark-700 rounded-xl p-6 flex flex-col items-start text-left shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-dark-900 border-2 font-bold text-lg ${stage.number === 6 ? 'border-success-500 text-success-400' :
                    stage.number === 7 ? 'border-growth-500 text-growth-400' :
                      'border-primary-500 text-primary-400'
                    }`}>{stage.number}</div>
                  <div className="font-bold text-white text-lg flex items-center gap-2">{stage.icon} {stage.title}</div>
                </div>

                <div className="text-primary-400 font-semibold mb-3">{stage.question}</div>

                <ul className="mb-4 flex flex-wrap gap-2">
                  {stage.tools.map(tool => (
                    <li key={tool} className="flex items-center gap-2 text-sm text-primary-300 bg-dark-700 px-3 py-2 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-xs">{tool}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-dark-300 text-sm mb-4 leading-relaxed">{stage.why}</div>

                <button className="btn-secondary flex items-center gap-2 text-sm px-4 py-3 mt-2 w-full justify-center">
                  {stage.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-lg sm:text-xl text-primary-400 font-bold">
          🎉 From zero to YouTube hero — your entire journey is powered by TubeTool.
        </div>
      </div>
    </section>
  );
} 