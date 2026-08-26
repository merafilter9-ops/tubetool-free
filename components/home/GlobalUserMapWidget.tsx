'use client'

import React, { useState, useEffect } from 'react'
import { Globe, Users } from 'lucide-react'

interface UserActivity {
  id: string
  location: string
  country: string
  action: string
  timestamp: number
}

const globalActivities: UserActivity[] = [
  // North America
  { id: '1', location: 'New York', country: 'USA', action: 'generated a viral video script', timestamp: Date.now() },
  { id: '2', location: 'Los Angeles', country: 'USA', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '3', location: 'Toronto', country: 'Canada', action: 'researched trending keywords', timestamp: Date.now() },
  { id: '4', location: 'Vancouver', country: 'Canada', action: 'created engaging video title', timestamp: Date.now() },
  { id: '5', location: 'Mexico City', country: 'Mexico', action: 'generated video tags', timestamp: Date.now() },

  // Europe
  { id: '6', location: 'London', country: 'UK', action: 'optimized SEO metadata', timestamp: Date.now() },
  { id: '7', location: 'Berlin', country: 'Germany', action: 'created viral title', timestamp: Date.now() },
  { id: '8', location: 'Paris', country: 'France', action: 'generated video script', timestamp: Date.now() },
  { id: '9', location: 'Madrid', country: 'Spain', action: 'researched audience insights', timestamp: Date.now() },
  { id: '10', location: 'Rome', country: 'Italy', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '11', location: 'Amsterdam', country: 'Netherlands', action: 'generated video tags', timestamp: Date.now() },
  { id: '12', location: 'Stockholm', country: 'Sweden', action: 'created engaging description', timestamp: Date.now() },
  { id: '13', location: 'Oslo', country: 'Norway', action: 'researched trending topics', timestamp: Date.now() },
  { id: '14', location: 'Copenhagen', country: 'Denmark', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '15', location: 'Helsinki', country: 'Finland', action: 'generated viral title', timestamp: Date.now() },

  // Asia
  { id: '16', location: 'Tokyo', country: 'Japan', action: 'researched SEO keywords', timestamp: Date.now() },
  { id: '17', location: 'Seoul', country: 'South Korea', action: 'created viral thumbnail', timestamp: Date.now() },
  { id: '18', location: 'Singapore', country: 'Singapore', action: 'generated video script', timestamp: Date.now() },
  { id: '19', location: 'Bangkok', country: 'Thailand', action: 'optimized video tags', timestamp: Date.now() },
  { id: '20', location: 'Jakarta', country: 'Indonesia', action: 'researched trending topics', timestamp: Date.now() },
  { id: '21', location: 'Kuala Lumpur', country: 'Malaysia', action: 'created engaging title', timestamp: Date.now() },
  { id: '22', location: 'Manila', country: 'Philippines', action: 'generated video description', timestamp: Date.now() },
  { id: '23', location: 'Ho Chi Minh City', country: 'Vietnam', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '24', location: 'Mumbai', country: 'India', action: 'researched audience insights', timestamp: Date.now() },
  { id: '25', location: 'Delhi', country: 'India', action: 'generated viral script', timestamp: Date.now() },
  { id: '26', location: 'Bangalore', country: 'India', action: 'created trending title', timestamp: Date.now() },
  { id: '27', location: 'Hong Kong', country: 'Hong Kong', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '28', location: 'Taipei', country: 'Taiwan', action: 'generated video tags', timestamp: Date.now() },

  // Oceania
  { id: '29', location: 'Sydney', country: 'Australia', action: 'generated video tags', timestamp: Date.now() },
  { id: '30', location: 'Melbourne', country: 'Australia', action: 'created viral thumbnail', timestamp: Date.now() },
  { id: '31', location: 'Auckland', country: 'New Zealand', action: 'researched trending topics', timestamp: Date.now() },

  // South America
  { id: '32', location: 'São Paulo', country: 'Brazil', action: 'generated video script', timestamp: Date.now() },
  { id: '33', location: 'Rio de Janeiro', country: 'Brazil', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '34', location: 'Buenos Aires', country: 'Argentina', action: 'created engaging title', timestamp: Date.now() },
  { id: '35', location: 'Santiago', country: 'Chile', action: 'researched SEO keywords', timestamp: Date.now() },
  { id: '36', location: 'Lima', country: 'Peru', action: 'generated video tags', timestamp: Date.now() },
  { id: '37', location: 'Bogotá', country: 'Colombia', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '38', location: 'Caracas', country: 'Venezuela', action: 'created viral description', timestamp: Date.now() },

  // Africa
  { id: '39', location: 'Cairo', country: 'Egypt', action: 'generated video script', timestamp: Date.now() },
  { id: '40', location: 'Lagos', country: 'Nigeria', action: 'researched trending topics', timestamp: Date.now() },
  { id: '41', location: 'Nairobi', country: 'Kenya', action: 'created engaging thumbnail', timestamp: Date.now() },
  { id: '42', location: 'Johannesburg', country: 'South Africa', action: 'optimized video tags', timestamp: Date.now() },
  { id: '43', location: 'Cape Town', country: 'South Africa', action: 'generated viral title', timestamp: Date.now() },
  { id: '44', location: 'Casablanca', country: 'Morocco', action: 'researched audience insights', timestamp: Date.now() },
  { id: '45', location: 'Tunis', country: 'Tunisia', action: 'created trending description', timestamp: Date.now() },

  // Middle East
  { id: '46', location: 'Dubai', country: 'UAE', action: 'generated video script', timestamp: Date.now() },
  { id: '47', location: 'Abu Dhabi', country: 'UAE', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '48', location: 'Riyadh', country: 'Saudi Arabia', action: 'researched SEO keywords', timestamp: Date.now() },
  { id: '49', location: 'Jeddah', country: 'Saudi Arabia', action: 'created viral title', timestamp: Date.now() },
  { id: '50', location: 'Tel Aviv', country: 'Israel', action: 'generated video tags', timestamp: Date.now() },
  { id: '51', location: 'Istanbul', country: 'Turkey', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '52', location: 'Ankara', country: 'Turkey', action: 'researched trending topics', timestamp: Date.now() },

  // Additional Global Cities
  { id: '53', location: 'Moscow', country: 'Russia', action: 'generated video script', timestamp: Date.now() },
  { id: '54', location: 'Saint Petersburg', country: 'Russia', action: 'created engaging thumbnail', timestamp: Date.now() },
  { id: '55', location: 'Warsaw', country: 'Poland', action: 'optimized video tags', timestamp: Date.now() },
  { id: '56', location: 'Prague', country: 'Czech Republic', action: 'researched trending topics', timestamp: Date.now() },
  { id: '57', location: 'Budapest', country: 'Hungary', action: 'generated viral title', timestamp: Date.now() },
  { id: '58', location: 'Vienna', country: 'Austria', action: 'created engaging description', timestamp: Date.now() },
  { id: '59', location: 'Zurich', country: 'Switzerland', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '60', location: 'Brussels', country: 'Belgium', action: 'researched audience insights', timestamp: Date.now() },
  { id: '61', location: 'Dublin', country: 'Ireland', action: 'generated video script', timestamp: Date.now() },
  { id: '62', location: 'Edinburgh', country: 'UK', action: 'created viral thumbnail', timestamp: Date.now() },
  { id: '63', location: 'Manchester', country: 'UK', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '64', location: 'Birmingham', country: 'UK', action: 'researched SEO keywords', timestamp: Date.now() },
  { id: '65', location: 'Glasgow', country: 'UK', action: 'generated video tags', timestamp: Date.now() },
  { id: '66', location: 'Chicago', country: 'USA', action: 'created trending title', timestamp: Date.now() },
  { id: '67', location: 'Houston', country: 'USA', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '68', location: 'Phoenix', country: 'USA', action: 'researched audience insights', timestamp: Date.now() },
  { id: '69', location: 'Philadelphia', country: 'USA', action: 'generated video script', timestamp: Date.now() },
  { id: '70', location: 'San Antonio', country: 'USA', action: 'created viral description', timestamp: Date.now() },
  { id: '71', location: 'San Diego', country: 'USA', action: 'optimized video tags', timestamp: Date.now() },
  { id: '72', location: 'Dallas', country: 'USA', action: 'researched trending topics', timestamp: Date.now() },
  { id: '73', location: 'San Jose', country: 'USA', action: 'generated engaging title', timestamp: Date.now() },
  { id: '74', location: 'Austin', country: 'USA', action: 'created viral thumbnail', timestamp: Date.now() },
  { id: '75', location: 'Jacksonville', country: 'USA', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '76', location: 'Fort Worth', country: 'USA', action: 'researched SEO keywords', timestamp: Date.now() },
  { id: '77', location: 'Columbus', country: 'USA', action: 'generated video script', timestamp: Date.now() },
  { id: '78', location: 'Charlotte', country: 'USA', action: 'created trending description', timestamp: Date.now() },
  { id: '79', location: 'San Francisco', country: 'USA', action: 'optimized thumbnail design', timestamp: Date.now() },
  { id: '80', location: 'Indianapolis', country: 'USA', action: 'researched audience insights', timestamp: Date.now() },
  { id: '81', location: 'Seattle', country: 'USA', action: 'generated viral title', timestamp: Date.now() },
  { id: '82', location: 'Denver', country: 'USA', action: 'created engaging tags', timestamp: Date.now() },
  { id: '83', location: 'Washington', country: 'USA', action: 'optimized video metadata', timestamp: Date.now() },
  { id: '84', location: 'Boston', country: 'USA', action: 'researched trending topics', timestamp: Date.now() },
  { id: '85', location: 'El Paso', country: 'USA', action: 'generated video script', timestamp: Date.now() },
  { id: '86', location: 'Nashville', country: 'USA', action: 'created viral thumbnail', timestamp: Date.now() },
  { id: '87', location: 'Detroit', country: 'USA', action: 'optimized video tags', timestamp: Date.now() },
  { id: '88', location: 'Oklahoma City', country: 'USA', action: 'researched SEO keywords', timestamp: Date.now() },
  { id: '89', location: 'Portland', country: 'USA', action: 'generated engaging title', timestamp: Date.now() },
  { id: '90', location: 'Las Vegas', country: 'USA', action: 'created trending description', timestamp: Date.now() },
]

export default function GlobalUserMapWidget() {
  const [recentActivities, setRecentActivities] = useState<UserActivity[]>([])
  const [currentActivity, setCurrentActivity] = useState<UserActivity | null>(null)
  const [activeUserCount, setActiveUserCount] = useState(847)
  const [totalCountries, setTotalCountries] = useState(94)

  useEffect(() => {
    const activityInterval = setInterval(() => {
      const randomActivity = globalActivities[Math.floor(Math.random() * globalActivities.length)]
      const newActivity = {
        ...randomActivity,
        id: Date.now().toString(),
        timestamp: Date.now()
      }

      setCurrentActivity(newActivity)
      setRecentActivities(prev => [newActivity, ...prev.slice(0, 8)])

      setActiveUserCount(prev => {
        const change = Math.floor(Math.random() * 10) - 5 // -5 to +5
        return Math.max(800, Math.min(1200, prev + change))
      })

      setTimeout(() => setCurrentActivity(null), 3000)
    }, 2000)
    setTotalCountries(94)
    return () => clearInterval(activityInterval)
  }, [])

  const formatTime = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const seconds = Math.floor(diff / 1000)

    if (seconds < 60) return `${seconds}s ago`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    return `${Math.floor(seconds / 3600)}h ago`
  }

  return (
    <div className="py-16 flex justify-center bg-foreground dark:bg-background">
      <div className="w-full max-w-7xl bg-dark-900/90 border border-dark-700 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mx-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm max-sm:text-xs font-medium mb-6">
          <Globe className="w-4 h-4 mr-2" />
          Live Global Activity
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Creators Using <span className="text-primary-400">TubeTool</span> Now
        </h2>

        <p className="text-lg sm:text-xl text-dark-300 mb-8">
          Join thousands of creators from {totalCountries}+ countries worldwide who are optimizing their content in real-time
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-dark-800/50 border border-dark-700 rounded-xl p-4 sm:p-6 h-[500px] flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-white">Live Activity Feed</h3>
            </div>

            {currentActivity && (
              <div className="bg-gradient-to-r from-primary-500/20 to-growth-500/20 border border-primary-500/30 rounded-lg p-4 mb-4 animate-pulse">
                <div className="text-white font-medium text-sm">
                  Creator in <span className="text-primary-400">{currentActivity.location}</span>
                </div>
                <div className="text-dark-300 text-xs">
                  {currentActivity.action}
                </div>
                <div className="text-primary-400 text-xs mt-1">
                  {formatTime(currentActivity.timestamp)}
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto space-y-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 bg-dark-700/30 rounded-lg hover:bg-dark-700/50 transition-all border-l-2 border-primary-500/30"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium text-sm">
                      {activity.location}, {activity.country}
                    </div>
                    <div className="text-dark-300 text-xs">
                      {activity.action}
                    </div>
                    <div className="text-primary-400 text-xs mt-1">
                      {formatTime(activity.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-dark-800/50 to-dark-900/50 border border-dark-700 rounded-2xl p-4 sm:p-6 md:p-8 h-[500px]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Global Creator Network</h3>
              <div className="flex items-center justify-center gap-4 text-sm text-dark-300 mb-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{activeUserCount} active now</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{totalCountries}+ countries</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center h-[300px] relative">
              <div className="relative">
                <div className="w-64 h-40 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full border border-blue-500/20 flex items-center justify-center mb-4 relative overflow-hidden">
                  <Globe className="w-20 h-20 text-primary-400 z-10" />

                  {/* Animated dots representing global activity */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-8 w-2 h-2 bg-primary-400/60 rounded-full animate-ping"></div>
                    <div className="absolute top-6 right-6 w-3 h-2 bg-growth-400/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-8 left-12 w-2 h-1 bg-primary-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-6 right-8 w-2 h-2 bg-growth-400/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-primary-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 right-4 w-1 h-1 bg-growth-400/60 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
                    <div className="absolute left-1/2 top-2 w-1 h-1 bg-primary-400/60 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute left-1/2 bottom-2 w-1 h-1 bg-growth-400/60 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-dark-300 text-sm mb-2">World Map with Live Activity</p>
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                      <span className="text-dark-300">Active creators</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-growth-400 rounded-full"></div>
                      <span className="text-dark-300">Using TubeTool</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-dark-700/30 rounded-lg p-2">
                <div className="text-lg font-bold text-primary-400">{totalCountries}+</div>
                <div className="text-dark-300 text-xs">Countries</div>
              </div>
              <div className="bg-dark-700/30 rounded-lg p-2">
                <div className="text-lg font-bold text-growth-400">24/7</div>
                <div className="text-dark-300 text-xs">Active</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-growth-500/10 border border-primary-500/20 rounded-2xl p-4 sm:p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join <span className="text-primary-400">Thousands of Creators</span> Worldwide 🌍
            </h3>
            <p className="text-dark-300 mb-6 max-w-2xl mx-auto text-base sm:text-lg">
              Don&apos;t miss out on the global creator revolution. Every second, creators from {totalCountries}+ countries
              are optimizing their content with TubeTool. Be part of the movement.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-growth-600 hover:from-primary-600 hover:to-growth-700 text-white font-semibold py-2 md:py-4 px-4 md:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-lg flex items-center gap-2 mx-auto">
              <Globe className="w-4 sm:w-5 h-4 sm:h-5" />
              Join the Global Creator Network
              {/* <Zap className="w-5 h-5" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 