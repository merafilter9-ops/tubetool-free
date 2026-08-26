'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// const tools = [
//   {
//     name: 'Keyword Research Tool',
//     href: '/tools/keyword-research',
//     icon: <Search className="w-4 h-4" />,
//     description: 'Find high-performing keywords'
//   },
//   {
//     name: 'Daily Topic Ideas Tool',
//     href: '/tools/daily-topic-ideas',
//     icon: <Lightbulb className="w-4 h-4" />,
//     description: 'Generate daily content ideas'
//   },
//   {
//     name: 'Thumbnail Quality Checker',
//     href: '/tools/thumbnail-checker',
//     icon: <Target className="w-4 h-4" />,
//     description: 'Analyze thumbnail performance'
//   },
//   {
//     name: 'Thumbnail Designing Guide',
//     href: '/tools/thumbnail-guide',
//     icon: <Eye className="w-4 h-4" />,
//     description: 'Learn thumbnail design principles'
//   },
//   {
//     name: 'Video Optimization Tool',
//     href: '/tools/video-optimization',
//     icon: <BarChart3 className="w-4 h-4" />,
//     description: 'Optimize video performance'
//   },
//   {
//     name: 'Content Research Tool',
//     href: '/tools/content-research',
//     icon: <TrendingUp className="w-4 h-4" />,
//     description: 'Research trending content'
//   },
//   {
//     name: 'Script Generator Tool',
//     href: '/tools/script-generator',
//     icon: <Users className="w-4 h-4" />,
//     description: 'Generate video scripts'
//   },
//   {
//     name: 'Title Generator Tool',
//     href: '/tools/title-generator',
//     icon: <Target className="w-4 h-4" />,
//     description: 'Create compelling titles'
//   },
//   {
//     name: 'Short Description Generator',
//     href: '/tools/description-generator',
//     icon: <Eye className="w-4 h-4" />,
//     description: 'Generate video descriptions'
//   },
//   {
//     name: 'Tags Generator Tool',
//     href: '/tools/tags-generator',
//     icon: <Search className="w-4 h-4" />,
//     description: 'Generate relevant tags'
//   },
//   {
//     name: 'Hashtag Generator Tool',
//     href: '/tools/hashtag-generator',
//     icon: <TrendingUp className="w-4 h-4" />,
//     description: 'Create trending hashtags'
//   },
//   {
//     name: 'Comment Analysis Tool',
//     href: '/tools/comment-analysis',
//     icon: <Users className="w-4 h-4" />,
//     description: 'Analyze audience comments'
//   },
//   {
//     name: 'Video Production Management',
//     href: '/tools/production-management',
//     icon: <Clock className="w-4 h-4" />,
//     description: 'Plan and manage video production'
//   }
// ]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image
                src="/brand/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className={cn("w-8 h-8 mr-2")}
              />
            </div>
            <span className="text-xl font-bold gradient-text">TubeTool</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors">
              Features
            </a>

            <a href="#tools" className="text-dark-300 hover:text-primary-400 transition-colors">
              Tools
            </a>

            {/* Tools Dropdown */}
            {/* <div className="relative">
              <button
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className="flex items-center gap-1 text-dark-300 hover:text-primary-400 transition-colors"
              >
                Tools
                <ChevronDown className={`w-4 h-4 transition-transform ${isToolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-dark-800 border border-dark-600 rounded-xl shadow-xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-1">
                      {tools.map((tool, index) => (
                        <a
                          key={tool.name}
                          href={tool.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-700 transition-colors group"
                        >
                          <div className="text-primary-400 group-hover:text-primary-300">
                            {tool.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-primary-300 transition-colors">
                              {tool.name}
                            </div>
                            <div className="text-dark-300 text-sm">
                              {tool.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-dark-600">
                      <a
                        href="/tools"
                        className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                      >
                        View All Tools
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            <a href="#how-it-works" className="text-dark-300 hover:text-primary-400 transition-colors">
              How It Works
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/tools/title-generator" className="p-0 m-0">
              <button className="btn-primary">
                Use Tools
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark-300 hover:text-primary-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Features
              </a>

              {/* Mobile Tools Section */}
              {/* <div>
                <div className="text-dark-300 font-medium mb-2">Tools</div>
                <div className="ml-4 space-y-2">
                  {tools.slice(0, 4).map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      className="block text-dark-300 hover:text-primary-400 transition-colors text-sm"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {tool.name}
                    </a>
                  ))}
                  <a
                    href="/tools/"
                    className="block text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    View All Tools →
                  </a>
                </div>
              </div> */}

              <a href="#how-it-works" className="text-dark-300 hover:text-primary-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                How It Works
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/tools/title-generator" className="p-0 m-0">
                  <button className="btn-primary w-full">
                    Use Tools
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {isToolsDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsToolsDropdownOpen(false)}
        />
      )}
    </header>
  )
} 