'use client'

// import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  // Sprout, 
  // TreePine, 
  // Sparkles, 
  // Droplets, 
  // Sun, 
  // TrendingUp, 
  // Zap, 
  ArrowRight,
  Users
} from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

// const growthStages = [
//   {
//     name: "Seed",
//     icon: "Sprout",
//     subs: 0,
//     description: "Your channel journey begins",
//     color: "from-amber-500 to-amber-600"
//   },
//   {
//     name: "Sprout",
//     icon: "Sprout",
//     subs: 100,
//     description: "First 100 subscribers",
//     color: "from-green-500 to-green-600"
//   },
//   {
//     name: "Sapling",
//     icon: "TreePine",
//     subs: 1000,
//     description: "Growing community of 1K",
//     color: "from-emerald-500 to-emerald-600"
//   },
//   {
//     name: "Young Tree",
//     icon: "TreePine",
//     subs: 10000,
//     description: "Thriving with 10K subscribers",
//     color: "from-teal-500 to-teal-600"
//   },
//   {
//     name: "Mature Tree",
//     icon: "TreePine",
//     subs: 100000,
//     description: "Flourishing at 100K",
//     color: "from-cyan-500 to-cyan-600"
//   },
//   {
//     name: "Forest",
//     icon: "TreePine",
//     subs: 1000000,
//     description: "A million-strong community",
//     color: "from-blue-500 to-blue-600"
//   }
// ]

// const creatorTypes = [
//   {
//     id: 'struggling',
//     name: "Struggling Creator",
//     description: "Inconsistent uploads, low engagement",
//     monthlyGrowth: 0.025, // 2.5% monthly
//     annualGrowth: 0.35, // 35% total
//     color: "from-red-500 to-red-600",
//     icon: "Sprout"
//   },
//   {
//     id: 'consistent',
//     name: "Consistent Creator",
//     description: "Regular uploads, decent engagement",
//     monthlyGrowth: 0.065, // 6.5% monthly
//     annualGrowth: 1.15, // 115% total
//     color: "from-yellow-500 to-yellow-600",
//     icon: "TreePine"
//   },
//   {
//     id: 'optimized',
//     name: "Optimized Creator",
//     description: "Strategic content, good optimization",
//     monthlyGrowth: 0.125, // 12.5% monthly
//     annualGrowth: 3.19, // 319% total
//     color: "from-green-500 to-green-600",
//     icon: "TreePine"
//   },
//   {
//     id: 'viral',
//     name: "Viral/Niche Expert",
//     description: "Trending content, expert positioning",
//     monthlyGrowth: 0.25, // 25% monthly
//     annualGrowth: 15.0, // 1500% total
//     color: "from-purple-500 to-purple-600",
//     icon: "TreePine"
//   }
// ]

// const tubetoolImpact = [
//   {
//     id: 'occasional',
//     name: "Occasional Usage",
//     description: "Use TubeTool occasionally",
//     multiplier: 1.5, // 1.5x improvement
//     monthlyGrowth: 0.0375, // 3.75% monthly
//     totalGrowth: 1.56, // 1.56x total growth
//     color: "from-orange-500 to-orange-600"
//   },
//   {
//     id: 'regular',
//     name: "Regular Usage",
//     description: "Use TubeTool regularly",
//     multiplier: 2.5, // 2.5x improvement
//     monthlyGrowth: 0.0625, // 6.25% monthly
//     totalGrowth: 2.05, // 2.05x total growth
//     color: "from-green-500 to-green-600"
//   },
//   {
//     id: 'daily',
//     name: "Daily Usage",
//     description: "Use TubeTool daily",
//     multiplier: 4.0, // 4x improvement
//     monthlyGrowth: 0.10, // 10% monthly
//     totalGrowth: 3.1, // 3.1x total growth
//     color: "from-purple-500 to-purple-600"
//   }
// ]

// const careFactors = [
//   {
//     icon: "Sun",
//     name: "Sunlight",
//     description: "Views & Discoverability",
//     color: "text-yellow-400"
//   },
//   {
//     icon: "Droplets",
//     name: "Water",
//     description: "Engagement & Comments",
//     color: "text-blue-400"
//   },
//   {
//     icon: "Sparkles",
//     name: "Nutrients",
//     description: "Content Quality",
//     color: "text-purple-400"
//   }
// ]

// const getIconComponent = (iconName: string, size: string = "w-6 h-6") => {
//   switch (iconName) {
//     case "Sprout":
//       return <Sprout className={size} />
//     case "TreePine":
//       return <TreePine className={size} />
//     case "Sun":
//       return <Sun className={size} />
//     case "Droplets":
//       return <Droplets className={size} />
//     case "Sparkles":
//       return <Sparkles className={size} />
//     default:
//       return <Sprout className={size} />
//   }
// }

// interface GrowthProjection {
//   month: number;
//   subscribers: number;
//   growth: number;
//   growthRate: number;
// }

// const calculateGrowthProjection = (
//   currentSubs: number,
//   creatorType: any,
//   tubetoolLevel: any,
//   months: number
// ) => {
//   const projections: {
//     withoutTubeTool: GrowthProjection[];
//     withTubeTool: GrowthProjection[];
//   } = {
//     withoutTubeTool: [],
//     withTubeTool: []
//   }

//   let subsWithoutTubeTool = currentSubs
//   let subsWithTubeTool = currentSubs

//   for (let month = 1; month <= months; month++) {
//     // Without TubeTool - compound monthly growth
//     const monthlyGrowthWithout = Math.floor(subsWithoutTubeTool * creatorType.monthlyGrowth)
//     subsWithoutTubeTool += monthlyGrowthWithout

//     // With TubeTool - use proven growth rates from data
//     const monthlyGrowthWith = Math.floor(subsWithTubeTool * tubetoolLevel.monthlyGrowth)
//     subsWithTubeTool += monthlyGrowthWith

//     projections.withoutTubeTool.push({
//       month,
//       subscribers: subsWithoutTubeTool,
//       growth: monthlyGrowthWithout,
//       growthRate: creatorType.monthlyGrowth
//     })

//     projections.withTubeTool.push({
//       month,
//       subscribers: subsWithTubeTool,
//       growth: monthlyGrowthWith,
//       growthRate: tubetoolLevel.monthlyGrowth
//     })
//   }

//   return projections
// }

export default function FutureChannelWidget() {
  // const [currentSubs, setCurrentSubs] = useState('')
  // const [selectedCreatorType, setSelectedCreatorType] = useState('consistent')
  // const [selectedUsage, setSelectedUsage] = useState('regular')
  // // const [targetSubs, setTargetSubs] = useState(100000)
  // const [currentStage, setCurrentStage] = useState(0)
  // const [showGrowth, setShowGrowth] = useState(false)
  // const [growthProjection, setGrowthProjection] = useState<any>({})
  // const [currentMonth, setCurrentMonth] = useState(0)

  // const handleSubsChange = (value: string) => {
  //   setCurrentSubs(value)
  //   const subs = parseInt(value) || 0

  //   // Determine current growth stage
  //   let stage = 0
  //   for (let i = growthStages.length - 1; i >= 0; i--) {
  //     if (subs >= growthStages[i].subs) {
  //       stage = i
  //       break
  //     }
  //   }
  //   setCurrentStage(stage)
  //   console.log("Current Stage:", currentStage)
  // }

  // const startGrowthSimulation = () => {
  //   if (!currentSubs || parseInt(currentSubs) === 0) return

  //   const currentSubsNum = parseInt(currentSubs)
  //   const creatorType = creatorTypes.find(c => c.id === selectedCreatorType)
  //   const tubetoolLevel = tubetoolImpact.find(t => t.id === selectedUsage)

  //   if (!creatorType || !tubetoolLevel) return

  //   // Calculate 12-month projection
  //   const projection = calculateGrowthProjection(
  //     currentSubsNum,
  //     creatorType,
  //     tubetoolLevel,
  //     12
  //   )
  //   setGrowthProjection(projection)
  //   setShowGrowth(true)
  //   setCurrentMonth(0)

  //   // Animate through months
  //   const animateMonths = () => {
  //     let month = 0
  //     const timer = setInterval(() => {
  //       month++
  //       setCurrentMonth(month)

  //       if (month >= 12) {
  //         clearInterval(timer)
  //       }
  //     }, 400) // Show each month for 0.4 seconds
  //   }

  //   setTimeout(animateMonths, 1000) // Start after initial animation
  // }

  // const getNextMilestone = () => {
  //   const currentSubsNum = parseInt(currentSubs) || 0
  //   for (const stage of growthStages) {
  //     if (stage.subs > currentSubsNum) {
  //       return stage
  //     }
  //   }
  //   return growthStages[growthStages.length - 1]
  // }

  // const nextMilestone = getNextMilestone()
  // const currentStageData = growthStages[currentStage]
  // const currentProjectionWithout = growthProjection.withoutTubeTool?.[currentMonth] || growthProjection.withoutTubeTool?.[growthProjection.withoutTubeTool?.length - 1]
  // const currentProjectionWith = growthProjection.withTubeTool?.[currentMonth] || growthProjection.withTubeTool?.[growthProjection.withTubeTool?.length - 1]
  // const selectedCreatorData = creatorTypes.find(c => c.id === selectedCreatorType)
  // const selectedUsageData = tubetoolImpact.find(t => t.id === selectedUsage)

  // Calculate total growth difference
  // const totalGrowthWithout = currentProjectionWithout?.subscribers - parseInt(currentSubs) || 0
  // const totalGrowthWith = currentProjectionWith?.subscribers - parseInt(currentSubs) || 0
  // const growthDifference = totalGrowthWith - totalGrowthWithout

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-6xl text-center relative overflow-hidden">

        <div className="relative z-10">
          {/* Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-growth-500/10 border border-growth-500/20 rounded-full text-growth-400 text-sm max-sm:text-xs font-medium mb-6"
          >
            <Sprout className="w-4 h-4 mr-2" />
            Growth Comparison Simulator
          </motion.div> */}

          {/* <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            See the <span className="text-growth-400">TubeTool</span> Difference
          </motion.h2> */}

          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 mb-8"
          >
            Compare your growth potential with and without TubeTool optimization
          </motion.p> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-white font-semibold mb-1 sm:mb-3 text-base sm:text-lg">
                  Current Subscribers
                </label>
                <input
                  type="number"
                  value={currentSubs}
                  onChange={(e) => handleSubsChange(e.target.value)}
                  placeholder="Enter current subscribers"
                  className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 sm:px-6 py-2 sm:py-4 text-white placeholder-dark-400 focus:outline-none focus:border-growth-500 text-base sm:text-lg transition-all"
                />
              </div>

              
              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Your Current Creator Type
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {creatorTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedCreatorType(type.id)}
                      className={`p-3 rounded-lg border transition-all text-left ${selectedCreatorType === type.id
                        ? 'border-growth-500 bg-growth-500/10'
                        : 'border-dark-600 bg-dark-800/50 hover:border-dark-500'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${type.color}`} />
                        <div className="flex-1">
                          <div className="text-white font-medium">{type.name}</div>
                          <div className="text-dark-300 text-sm">{type.description}</div>
                          <div className="text-xs text-dark-400 mt-1">
                            {type.monthlyGrowth * 100}% monthly growth
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              
              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  TubeTool Usage Intensity
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {tubetoolImpact.map((usage) => (
                    <button
                      key={usage.id}
                      onClick={() => setSelectedUsage(usage.id)}
                      className={`p-3 rounded-lg border transition-all text-left ${selectedUsage === usage.id
                        ? 'border-primary-500 bg-primary-500/10'
                        : 'border-dark-600 bg-dark-800/50 hover:border-dark-500'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${usage.color}`} />
                        <div className="flex-1">
                          <div className="text-white font-medium">{usage.name}</div>
                          <div className="text-dark-300 text-sm">{usage.description}</div>
                          <div className="text-xs text-dark-400 mt-1">
                            {usage.monthlyGrowth * 100}% monthly growth
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {currentSubs && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-dark-800/50 border border-dark-700 rounded-xl p-4 sm:p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">Growth Projection</h3>

                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-white">{parseInt(currentSubs).toLocaleString()}</div>
                    <div className="text-dark-300 text-sm">Current Subscribers</div>
                  </div>

                  {selectedCreatorData && selectedUsageData && (
                    <div className="bg-dark-700/50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-dark-300 mb-2">Proven Growth Enhancement</div>
                      <div className="text-lg font-bold text-growth-400">
                        {selectedUsageData.totalGrowth}x total growth
                      </div>
                      <div className="text-xs text-dark-400 mt-1">
                        From {selectedCreatorData.monthlyGrowth * 100}% to {selectedUsageData.monthlyGrowth * 100}% monthly growth
                      </div>
                    </div>
                  )}

                  {nextMilestone.subs > parseInt(currentSubs) && (
                    <div className="text-center">
                      <button
                        onClick={startGrowthSimulation}
                        className="bg-gradient-to-r from-growth-500 to-success-600 hover:from-growth-600 hover:to-success-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm md:text-base flex items-center gap-2 mx-auto"
                      >
                        <TrendingUp className="w-4 h-4" />
                        Compare Growth Scenarios
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              
              <div className="bg-dark-800/30 border border-dark-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white mb-2 sm:mb-4">Nurture Your Channel</h3>
                <div className="grid grid-cols-1 gap-3">
                  {careFactors.map((factor, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-lg">
                      <div className={factor.color}>
                        {getIconComponent(factor.icon, "w-5 h-5")}
                      </div>
                      <div>
                        <div className="text-white font-medium text-left">{factor.name}</div>
                        <div className="text-dark-300 text-sm">{factor.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-b from-dark-800/50 to-dark-900/50 border border-dark-700 rounded-2xl p-4 sm:p-6 md:p-8 min-h-[500px] flex items-center justify-center">
                {!showGrowth ? (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sprout className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-white font-semibold text-lg mb-2">Growth Comparison</div>
                    <div className="text-dark-300">Enter your stats to see the TubeTool difference</div>
                  </div>
                ) : (
                  <div className="text-center w-full">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="relative"
                    >
                    
                      <div className="mb-6">
                        <div className="text-lg text-white mb-2">
                          Month {currentMonth} of 12
                        </div>

                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-dark-700/50 rounded-lg p-3">
                            <div className="text-sm text-dark-300 mb-1">Without TubeTool</div>
                            <div className="text-xl font-bold text-red-400">
                              {currentProjectionWithout?.subscribers?.toLocaleString() || parseInt(currentSubs).toLocaleString()}
                            </div>
                            <div className="text-xs text-dark-400">subscribers</div>
                          </div>
                          <div className="bg-dark-700/50 rounded-lg p-3">
                            <div className="text-sm text-dark-300 mb-1">With TubeTool</div>
                            <div className="text-xl font-bold text-growth-400">
                              {currentProjectionWith?.subscribers?.toLocaleString() || parseInt(currentSubs).toLocaleString()}
                            </div>
                            <div className="text-xs text-dark-400">subscribers</div>
                          </div>
                        </div>

                        
                        {growthDifference > 0 && (
                          <div className="bg-gradient-to-r from-growth-500/20 to-success-500/20 border border-growth-500/30 rounded-lg p-3 mb-4">
                            <div className="text-sm text-dark-300 mb-1">Proven Additional Growth</div>
                            <div className="text-lg font-bold text-growth-400">
                              +{growthDifference.toLocaleString()} subscribers
                            </div>
                            <div className="text-xs text-dark-400">
                              {selectedUsageData?.totalGrowth}x total growth vs {((totalGrowthWithout / parseInt(currentSubs)) + 1).toFixed(1)}x without TubeTool
                            </div>
                          </div>
                        )}
                      </div>

                      
                      <div className="mb-6">
                        <div className="text-sm text-dark-300 mb-2">Growth Comparison Over 12 Months</div>
                        <div className="flex items-end justify-center gap-1 h-32">
                          {growthProjection.withoutTubeTool?.map((month: any, index: number) => (
                            <div key={index} className="flex flex-col items-center gap-1">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{
                                  height: index <= currentMonth ? `${(month.subscribers / Math.max(...growthProjection.withTubeTool.map((m: any) => m.subscribers))) * 100}%` : 0
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="w-3 bg-red-500 rounded-t"
                              />
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{
                                  height: index <= currentMonth ? `${(growthProjection.withTubeTool[index]?.subscribers / Math.max(...growthProjection.withTubeTool.map((m: any) => m.subscribers))) * 100}%` : 0
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                                className="w-3 bg-gradient-to-t from-growth-500 to-success-500 rounded-t"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-dark-400 mt-2">
                          <span>Month 1</span>
                          <span>Month 12</span>
                        </div>
                        <div className="flex justify-center gap-4 mt-2 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span className="text-dark-300">Without TubeTool</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-gradient-to-r from-growth-500 to-success-500 rounded"></div>
                            <span className="text-dark-300">With TubeTool</span>
                          </div>
                        </div>
                      </div>

                      
                      {currentProjectionWithout && currentProjectionWith && (
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-red-400 font-semibold">+{currentProjectionWithout.growth?.toLocaleString()}</div>
                            <div className="text-dark-300">Without TubeTool</div>
                          </div>
                          <div>
                            <div className="text-success-400 font-semibold">+{currentProjectionWith.growth?.toLocaleString()}</div>
                            <div className="text-dark-300">With TubeTool</div>
                          </div>
                        </div>
                      )}

                      <div className="text-growth-400 font-semibold text-sm sm:text-base mt-4 flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        TubeTool Accelerates Your Growth!
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div> */}


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="border rounded-lg p-4 sm:p-6">
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-4">
                Join 500+ Creators Already Growing Faster
              </h3>
              <p className="text-dark-300 mb-6 max-w-2xl text-sm sm:text-base text-center font-normal text-secondary-foreground dark:text-gray-400 mx-auto">
                Don&apos;t let your channel grow slowly. With TubeTool, you can achieve in months what takes others years.
                Start optimizing your growth today.
              </p>
              <Link href="/tools/title-generator" className="p-0 m-0">
                <Button className="transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5" />
                  Start Growing Faster Today
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 