import { TrendingUp, TrendingDown, Minus, PlayCircle, BarChart3, Target, PieChart, Users, AlertTriangle, Lightbulb, UserX, UserPlus, Play, Shield, DollarSign, Clock, Calendar } from 'lucide-react';

export const KeywordResearchDashboard = ({ data }: { data: any }) => {

    if (!data || !data.overview) return null;

    const { overview, viability, trendAnalysis, searchIntent, audienceInterest, audiencePsychology, audienceDemographics, keywordVariations, contentGap, videoStrategy, topRankingVideos } = data;

    // Helper to render circle score
    const ScoreCircle = ({ score, text, color }: { score: number, text: string, color: string }) => (
        <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4" style={{ borderColor: color }}>
            <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{score}</span>
                <span className="text-[10px] text-muted-foreground">{text}</span>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-6xl mx-auto mt-8 mb-20 text-sm">
            <div className="w-full bg-card border rounded-2xl shadow-sm flex flex-col">
                
                {/* OVERVIEW SECTION */}
                <div className="w-full p-6 lg:p-8 flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl font-bold">{overview.keyword}</h2>
                        <p className="text-muted-foreground text-sm mt-1">{overview.description}</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {overview.subTags?.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
                        <div className="flex flex-col gap-1 border-r border-border pr-2">
                            <span className="text-xs text-muted-foreground">Search Vol (Local)</span>
                            <span className="text-xl font-bold">{overview.localSearchVolume.value}</span>
                            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded w-fit mt-1">{overview.localSearchVolume.level}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-border pr-2">
                            <span className="text-xs text-muted-foreground">Global Search Vol</span>
                            <span className="text-xl font-bold">{overview.globalSearchVolume.value}</span>
                            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded w-fit mt-1">{overview.globalSearchVolume.level}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-border pr-2">
                            <span className="text-xs text-muted-foreground">Trend (12m)</span>
                            <span className="text-xl font-bold text-green-500">{overview.trendDirection}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-border pr-2 items-center">
                            <span className="text-xs text-muted-foreground mb-2">Competition</span>
                            <ScoreCircle score={overview.competition.score} text="/100" color="#ef4444" />
                            <span className="text-xs font-bold text-red-500 mt-1">{overview.competition.level}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-border pr-2">
                            <span className="text-xs text-muted-foreground">CPC (Ad Value)</span>
                            <span className="text-xl font-bold">{overview.cpc}</span>
                            <span className="text-xs text-yellow-500 font-medium">{overview.cpcLevel}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-border pr-2">
                            <span className="text-xs text-muted-foreground">Opportunity</span>
                            <span className="text-2xl font-bold text-green-500">{overview.opportunityScore.score}<span className="text-sm">/100</span></span>
                            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded w-fit mt-1">{overview.opportunityScore.label}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-border pr-2">
                            <span className="text-xs text-muted-foreground">Prediction</span>
                            <span className="text-lg font-bold text-green-500 flex items-center gap-1">{overview.trendPrediction.label} <TrendingUp className="w-4 h-4"/></span>
                            <span className="text-xs text-muted-foreground">{overview.trendPrediction.timeframe}</span>
                        </div>
                        <div className="flex flex-col gap-1 pr-2">
                            <span className="text-xs text-muted-foreground">Saturation</span>
                            <span className="text-lg font-bold text-red-500">{overview.contentSaturation.level}</span>
                            <span className="text-xs text-muted-foreground leading-tight">{overview.contentSaturation.description}</span>
                        </div>
                    </div>
                </div>

                <hr className="border-border w-full" />

                {/* VIABILITY & ECONOMICS ROW */}
                {viability && (
                    <>
                        <div className="w-full p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 bg-muted/20">
                            {/* Barrier to Entry */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2"><Shield className="w-5 h-5 text-indigo-500" /> Barrier to Entry</h3>
                                <div className="flex flex-col gap-3 text-xs">
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Avg Top 10 Subs</span>
                                        <span className="font-bold">{viability.barrierToEntry.averageTop10Subs}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Small Channel Hits</span>
                                        <span className="font-bold text-green-500">{viability.barrierToEntry.smallChannelBreakthrough}/10 Videos</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-1">
                                        <span className="text-muted-foreground">Views to Subs Ratio</span>
                                        <span className="font-bold">{viability.barrierToEntry.viewsToSubsRatio}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Monetization */}
                            <div className="flex flex-col gap-4 md:border-l border-border md:pl-8">
                                <h3 className="text-lg font-semibold flex items-center gap-2"><DollarSign className="w-5 h-5 text-emerald-500" /> Monetization</h3>
                                <div className="flex flex-col gap-3 text-xs">
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Est. RPM</span>
                                        <span className="font-bold text-emerald-500">{viability.monetization.estimatedRPM}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Top Sponsors</span>
                                        <span className="font-bold text-right">{viability.monetization.topSponsors.join(', ')}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-1">
                                        <span className="text-muted-foreground">Affiliate Potential</span>
                                        <span className="font-bold">{viability.monetization.affiliatePotential}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Format Benchmarks */}
                            <div className="flex flex-col gap-4 xl:border-l border-border xl:pl-8">
                                <h3 className="text-lg font-semibold flex items-center gap-2"><Clock className="w-5 h-5 text-amber-500" /> Format Benchmarks</h3>
                                <div className="flex flex-col gap-3 text-xs">
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Ideal Length</span>
                                        <span className="font-bold">{viability.benchmarks.idealLength}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Dominant Format</span>
                                        <span className="font-bold text-right">{viability.benchmarks.formatDominance}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-1">
                                        <span className="text-muted-foreground">Engagement Req.</span>
                                        <span className="font-bold">{viability.benchmarks.engagementRequired}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trends & Seasonality */}
                            <div className="flex flex-col gap-4 md:border-l border-border md:pl-8">
                                <h3 className="text-lg font-semibold flex items-center gap-2"><Calendar className="w-5 h-5 text-rose-500" /> Trends & Seasonality</h3>
                                <div className="flex flex-col gap-3 text-xs">
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Peak Months</span>
                                        <span className="font-bold text-right">{viability.seasonality.peakMonths}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-1">
                                        <span className="text-muted-foreground">Cross-Platform</span>
                                        <span className="font-bold text-right">{viability.seasonality.crossPlatform}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-border w-full" />
                    </>
                )}

                {/* CHARTS ROW */}
                <div className="w-full p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><BarChart3 className="w-5 h-5"/> Trend Analysis</h3>
                        <p className="text-xs text-muted-foreground mb-6">Search interest over time (last 12 months)</p>
                        <div className="w-full h-48 flex items-end justify-between gap-1">
                            {trendAnalysis.map((val: number, i: number) => (
                                <div key={i} className="w-full bg-primary/20 rounded-t-sm hover:bg-primary transition-all relative group" style={{ height: `${val}%` }}>
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-background border px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><PieChart className="w-5 h-5"/> Search Intent</h3>
                        <p className="text-xs text-muted-foreground mb-6">What are people searching for?</p>
                        <div className="flex flex-col gap-4">
                            {[
                                { k: 'Informational', v: searchIntent?.informational, c: 'bg-blue-500' },
                                { k: 'Transformational', v: searchIntent?.transformational, c: 'bg-green-500' },
                                { k: 'Problem Solving', v: searchIntent?.problemSolving, c: 'bg-orange-500' },
                                { k: 'Comparison', v: searchIntent?.comparison, c: 'bg-blue-300' }
                            ].map((item, i) => item.v && (
                                <div key={i} className="flex flex-col gap-1 w-full">
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${item.c}`}></div>
                                            <span className="font-semibold">{item.k}</span>
                                            <span className="text-muted-foreground ml-2 hidden sm:inline-block">{item.v.description}</span>
                                        </div>
                                        <span className="font-bold">{item.v.percentage}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                        <div className={`h-full ${item.c}`} style={{ width: `${item.v.percentage}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="border-border w-full" />

                {/* AUDIENCE ROW */}
                <div className="w-full p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><Target className="w-5 h-5"/> Audience Interest</h3>
                        <p className="text-xs text-muted-foreground mb-2">Interest level by audience segment</p>
                        {audienceInterest.map((aud: any, i: number) => (
                            <div key={i} className="flex justify-between items-center w-full gap-2 text-xs">
                                <span className="w-1/2 truncate">{aud.segment}</span>
                                <div className="w-1/3 h-3 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${aud.percentage}%` }}></div>
                                </div>
                                <span className="w-8 text-right font-bold">{aud.percentage}%</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><Lightbulb className="w-5 h-5"/> Audience Psychology</h3>
                        <div className="flex flex-col gap-3 text-xs mt-2">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                <div>
                                    <span className="font-semibold text-red-500">Pain Points: </span>
                                    <span className="text-muted-foreground">{audiencePsychology.painPoints.join(' • ')}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Target className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                <div>
                                    <span className="font-semibold text-green-500">Desires: </span>
                                    <span className="text-muted-foreground">{audiencePsychology.desires.join(' • ')}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <UserX className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                                <div>
                                    <span className="font-semibold text-blue-500">Fears: </span>
                                    <span className="text-muted-foreground">{audiencePsychology.fears.join(' • ')}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <UserPlus className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
                                <div>
                                    <span className="font-semibold text-purple-500">Triggers: </span>
                                    <span className="text-muted-foreground">{audiencePsychology.triggers.join(' • ')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><Users className="w-5 h-5"/> Demographics</h3>
                        <div className="flex gap-4 mb-2 mt-2">
                            <div className="bg-secondary px-3 py-1.5 rounded-lg flex flex-col w-full text-center">
                                <span className="text-[10px] text-muted-foreground">Age</span>
                                <span className="font-bold">{audienceDemographics.age}</span>
                            </div>
                            <div className="bg-secondary px-3 py-1.5 rounded-lg flex flex-col w-full text-center">
                                <span className="text-[10px] text-muted-foreground">Gender</span>
                                <span className="font-bold">{audienceDemographics.gender}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-xs">
                            {audienceDemographics.locations.map((loc: any, i: number) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span>{loc.country}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500" style={{ width: `${loc.percentage}%` }}></div>
                                        </div>
                                        <span className="font-bold min-w-8 text-right">{loc.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <span className="text-blue-500 font-semibold text-xs mb-1 block">Targeting Tip</span>
                            <p className="text-xs text-muted-foreground">{audienceDemographics.targetingTip}</p>
                        </div>
                    </div>
                </div>

                <hr className="border-border w-full" />

                {/* KEYWORDS & GAPS */}
                <div className="w-full p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Keyword Variations</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="text-muted-foreground border-b">
                                    <tr>
                                        <th className="pb-2">Keyword</th>
                                        <th className="pb-2">Vol</th>
                                        <th className="pb-2">Comp</th>
                                        <th className="pb-2">Trend</th>
                                        <th className="pb-2 text-right">Opp</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {keywordVariations.map((kw: any, i: number) => (
                                        <tr key={i} className="hover:bg-secondary/50">
                                            <td className="py-2.5 font-medium">{kw.keyword}</td>
                                            <td className="py-2.5">{kw.searchVolume}</td>
                                            <td className={`py-2.5 font-semibold ${kw.competition.toLowerCase() === 'high' ? 'text-red-500' : kw.competition.toLowerCase() === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>{kw.competition}</td>
                                            <td className="py-2.5">
                                                {kw.trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-500"/> : kw.trend === 'down' ? <TrendingDown className="w-4 h-4 text-red-500"/> : <Minus className="w-4 h-4 text-muted-foreground"/>}
                                            </td>
                                            <td className="py-2.5 text-right font-bold text-green-500">{kw.opportunity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                        <h3 className="text-lg font-semibold mb-6">Content Gap Analysis</h3>
                        <ul className="space-y-3 text-xs mb-6">
                            {contentGap.missing.map((miss: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                    <div className="mt-0.5 bg-green-500 rounded-full p-0.5"><Play className="w-2 h-2 text-white" /></div>
                                    {miss}
                                </li>
                            ))}
                        </ul>
                        <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl mt-auto">
                            <h4 className="text-purple-500 font-bold flex items-center gap-2 mb-2"><Lightbulb className="w-4 h-4"/> {contentGap.gapOpportunity.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{contentGap.gapOpportunity.description}</p>
                            <span className="text-[10px] font-bold bg-green-500/20 text-green-500 px-2 py-1 rounded-md">📈 {contentGap.gapOpportunity.nicheLabel}</span>
                        </div>
                    </div>
                </div>

                <hr className="border-border w-full" />

                {/* VIDEOS & STRATEGY */}
                <div className="w-full p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Top Ranking Videos</h3>
                        <div className="flex flex-col gap-4">
                            {topRankingVideos.map((vid: any, i: number) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 text-xs font-bold text-muted-foreground mt-1">{i + 1}</div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-sm font-semibold leading-tight">{vid.title}</h4>
                                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground flex-wrap">
                                            <span>{vid.channel}</span> • 
                                            <span>{vid.views} views</span> • 
                                            <span>{vid.likes} likes</span>
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex flex-col items-center justify-center bg-green-500/10 rounded-md p-1.5 min-w-10">
                                        <span className="text-[10px] text-green-500 font-bold">{vid.seoScore}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                        <h3 className="text-lg font-semibold mb-6">Video Strategy Recommendation</h3>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h4 className="text-sm font-bold text-blue-500 flex items-center gap-2 mb-2"><Target className="w-4 h-4"/> Title Ideas</h4>
                                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                    {videoStrategy.titleIdeas.map((t: string, i: number) => <li key={i}>{t}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-orange-500 flex items-center gap-2 mb-2"><PlayCircle className="w-4 h-4"/> Thumbnail Suggestion</h4>
                                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                    {videoStrategy.thumbnailSuggestion.bulletPoints.map((t: string, i: number) => <li key={i}>{t}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-purple-500 flex items-center gap-2 mb-2"><Lightbulb className="w-4 h-4"/> Hook Ideas (First 5-10s)</h4>
                                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                    {videoStrategy.hookIdeas.map((t: string, i: number) => <li key={i}>{t}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
