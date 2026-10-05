'use client';

import { useState } from "react";
import { 
    CheckCircle2, 
    XCircle, 
    AlertTriangle, 
    TrendingUp, 
    TrendingDown, 
    BarChart3, 
    Users, 
    Check, 
    X, 
    Globe, 
    Target, 
    Sparkles, 
    Copy, 
    Award,
    Compass
} from "lucide-react";
import { toast } from "sonner";

interface GoNoGoDashboardProps {
    data: any;
}

export const GoNoGoDashboard = ({ data }: GoNoGoDashboardProps) => {
    const [copiedTitle, setCopiedTitle] = useState(false);

    if (!data) return null;

    const { 
        prediction, 
        metrics, 
        trendAnalysis, 
        audienceByRegion, 
        audienceAnalysis, 
        searchIntent, 
        competitorAnalysis, 
        contentGap, 
        videoStrategy, 
        dosAndDonts 
    } = data;

    // Helper functions for decision styles
    const getDecisionConfig = (decision: string) => {
        if (decision === 'GO') {
            return {
                bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
                scoreColor: '#10b981',
                text: 'text-emerald-600 dark:text-emerald-400',
                icon: <CheckCircle2 className="w-8 h-8 text-emerald-500 shrink-0" />
            };
        }
        if (decision === 'Conditional GO') {
            return {
                bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
                scoreColor: '#f59e0b',
                text: 'text-amber-600 dark:text-amber-400',
                icon: <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
            };
        }
        return {
            bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
            scoreColor: '#f43f5e',
            text: 'text-rose-600 dark:text-rose-400',
            icon: <XCircle className="w-8 h-8 text-rose-500 shrink-0" />
        };
    };

    const config = getDecisionConfig(prediction.decision);

    const getLevelBadge = (level: string) => {
        if (level === 'High') return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400';
        if (level === 'Medium') return 'bg-amber-500/15 text-amber-600 dark:text-amber-400';
        return 'bg-rose-500/15 text-rose-600 dark:text-rose-400';
    };

    const isPositiveTrend = metrics.trend ? metrics.trend.startsWith('+') : true;

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedTitle(true);
        toast.success("Suggested title copied to clipboard!");
        setTimeout(() => setCopiedTitle(false), 2000);
    };

    return (
        <div className="w-full max-w-6xl mx-auto my-4 text-sm">
            
            {/* UNIFIED SINGLE MASTER CONTAINER */}
            <div className="w-full bg-card border rounded-2xl shadow-sm flex flex-col divide-y divide-border overflow-hidden">
                
                {/* SECTION 1: HERO VERDICT & SUMMARY BANNER */}
                <div className="w-full p-5 sm:p-6 md:p-8 flex flex-col gap-6">
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Validation Results</span>
                                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${config.bg}`}>
                                    {prediction.decision}
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                                Video Idea Analysis Report
                            </h2>
                        </div>

                        <div className="flex items-center gap-4 bg-muted/40 border p-3 rounded-xl">
                            {/* Score Ring */}
                            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                                <svg className="w-14 h-14 transform -rotate-90">
                                    <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="5" fill="transparent" className="opacity-15" />
                                    <circle 
                                        cx="28" 
                                        cy="28" 
                                        r="22" 
                                        stroke={config.scoreColor} 
                                        strokeWidth="5" 
                                        fill="transparent" 
                                        strokeDasharray="138" 
                                        strokeDashoffset={138 - (138 * (prediction.score || 75)) / 100} 
                                        strokeLinecap="round" 
                                    />
                                </svg>
                                <span className="absolute text-sm font-bold">{prediction.score}</span>
                            </div>
                            <div>
                                <span className="text-xs text-muted-foreground block">Viability Score</span>
                                <span className={`text-base font-bold ${config.text}`}>{prediction.score}/100</span>
                            </div>
                        </div>
                    </div>

                    {/* Verdict Box & Why GO Reasons */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-muted/20 border p-4 sm:p-5 rounded-xl">
                        
                        <div className="lg:col-span-7 flex flex-col gap-2 justify-center">
                            <div className="flex items-center gap-2.5">
                                {config.icon}
                                <h3 className={`text-xl sm:text-2xl font-bold ${config.text}`}>
                                    {prediction.decision} Verdict
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                {prediction.decisionText}
                            </p>
                        </div>

                        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6 flex flex-col gap-2 justify-center">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-primary" /> Key Decision Factors:
                            </h4>
                            <ul className="space-y-1.5">
                                {prediction.whyGo?.map((reason: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-foreground">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="leading-tight">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                {/* SECTION 2: PERFORMANCE INDICATORS GRID */}
                <div className="w-full p-5 sm:p-6 bg-muted/10">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-primary" /> Core Performance Indicators
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                        
                        <div className="p-3.5 rounded-xl bg-card border flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">Search Volume</span>
                            <div>
                                <span className="text-lg font-bold block">{metrics.searchVolume?.value}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold inline-block ${getLevelBadge(metrics.searchVolume?.level)}`}>
                                    {metrics.searchVolume?.level}
                                </span>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-card border flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">Global Volume</span>
                            <div>
                                <span className="text-lg font-bold block">{metrics.globalSearchVolume?.value}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold inline-block ${getLevelBadge(metrics.globalSearchVolume?.level)}`}>
                                    {metrics.globalSearchVolume?.level}
                                </span>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-card border flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">Competition</span>
                            <div>
                                <span className={`text-lg font-bold block ${metrics.competition === 'High' ? 'text-rose-500' : metrics.competition === 'Medium' ? 'text-amber-500' : 'text-emerald-500'}`}>
                                    {metrics.competition}
                                </span>
                                <div className="h-1.5 w-full bg-muted rounded-full mt-1 overflow-hidden">
                                    <div className={`h-full rounded-full ${metrics.competition === 'High' ? 'w-4/5 bg-rose-500' : metrics.competition === 'Medium' ? 'w-1/2 bg-amber-500' : 'w-1/4 bg-emerald-500'}`} />
                                </div>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-card border flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">12m Trend</span>
                            <div>
                                <div className="flex items-center gap-1">
                                    <span className={`text-lg font-bold ${isPositiveTrend ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {metrics.trend}
                                    </span>
                                    {isPositiveTrend ? <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> : <TrendingDown className="w-3.5 h-3.5 text-rose-500" />}
                                </div>
                                <span className="text-[10px] text-muted-foreground">Trajectory</span>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-card border flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">Opportunity</span>
                            <div>
                                <span className="text-lg font-bold block">{metrics.opportunityScore?.value}<span className="text-xs font-normal text-muted-foreground">/100</span></span>
                                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold inline-block ${getLevelBadge(metrics.opportunityScore?.level)}`}>
                                    {metrics.opportunityScore?.level}
                                </span>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-card border flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">Est. 30d Views</span>
                            <div>
                                <span className="text-lg font-bold block truncate">{metrics.estimatedViews}</span>
                                <span className="text-[10px] text-muted-foreground">Optimized video</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SECTION 3: TREND ANALYSIS & GEOGRAPHIC DEMAND */}
                <div className="w-full p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Trend Chart */}
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                                <BarChart3 className="w-4 h-4 text-primary" /> Monthly Search Velocity
                            </h4>
                            <span className="text-xs text-muted-foreground">12-Month Index</span>
                        </div>

                        <div className="flex items-end gap-1.5 h-32 pt-2 border-b border-border pb-1">
                            {trendAnalysis?.map((t: any, i: number) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                                    <div 
                                        className="w-full bg-primary/30 hover:bg-primary rounded-t transition-all" 
                                        style={{ height: `${Math.max(t.interest, 15)}%` }}
                                    />
                                    <span className="text-[10px] text-muted-foreground truncate w-full text-center">{t.month}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regional breakdown */}
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                                <Globe className="w-4 h-4 text-blue-500" /> Geographic Demand
                            </h4>
                            <span className="text-xs text-muted-foreground">Top Markets</span>
                        </div>

                        <div className="space-y-2.5 pt-1">
                            {audienceByRegion?.map((a: any, i: number) => (
                                <div key={i} className="flex items-center gap-3 text-xs">
                                    <span className="w-24 font-medium truncate text-foreground">{a.country}</span>
                                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary/70 rounded-full" style={{ width: `${a.percentage}%` }} />
                                    </div>
                                    <span className="w-8 text-right font-semibold text-muted-foreground">{a.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* SECTION 4: AUDIENCE & INTENT */}
                <div className="w-full p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-muted/10">
                    
                    {/* Audience Personas */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                        <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                            <Users className="w-4 h-4 text-primary" /> Viewer Segmentation
                        </h4>

                        <div className="space-y-3">
                            {audienceAnalysis?.types?.map((type: any, i: number) => (
                                <div key={i} className="p-3.5 rounded-xl border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="font-bold text-xs sm:text-sm text-foreground">{type.name}</span>
                                            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.2 rounded-full">
                                                {type.percentage}% Share
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{type.description}</p>
                                    </div>

                                    <div className="sm:w-1/3 p-2 bg-muted/30 rounded-lg text-xs border">
                                        <span className="font-semibold block text-[10px] text-muted-foreground">Hook Strategy:</span>
                                        <span className="text-foreground text-xs leading-tight">{type.targetStrategy}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Search Intent */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                            <Target className="w-4 h-4 text-primary" /> Search Intent Breakdown & Guidance
                        </h4>

                        <div className="p-4 rounded-xl border bg-card flex flex-col gap-3.5">
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden flex">
                                <div style={{ width: `${searchIntent?.informational || 40}%` }} className="bg-blue-500 h-full" />
                                <div style={{ width: `${searchIntent?.transformational || 25}%` }} className="bg-purple-500 h-full" />
                                <div style={{ width: `${searchIntent?.problemSolving || 20}%` }} className="bg-amber-500 h-full" />
                                <div style={{ width: `${searchIntent?.comparison || 15}%` }} className="bg-emerald-500 h-full" />
                            </div>

                            <div className="space-y-2.5 pt-1">
                                
                                {/* INFORMATIONAL */}
                                <div className="p-2.5 rounded-lg border bg-muted/20 flex flex-col gap-1">
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                            Informational
                                        </div>
                                        <span className="font-extrabold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">{searchIntent?.informational}%</span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground leading-tight">
                                        Viewers want core concepts, facts, or high-level explanations.
                                    </p>
                                    <span className="text-[10px] text-foreground font-medium bg-background border px-2 py-1 rounded inline-block mt-0.5">
                                        💡 <strong>Tip:</strong> Use visual diagrams & clear chapter markers.
                                    </span>
                                </div>

                                {/* TRANSFORMATIONAL */}
                                <div className="p-2.5 rounded-lg border bg-muted/20 flex flex-col gap-1">
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                                            Transformational
                                        </div>
                                        <span className="font-extrabold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded">{searchIntent?.transformational}%</span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground leading-tight">
                                        Viewers seek a lifestyle change, skill gain, or before-and-after journey.
                                    </p>
                                    <span className="text-[10px] text-foreground font-medium bg-background border px-2 py-1 rounded inline-block mt-0.5">
                                        💡 <strong>Tip:</strong> Tease the end result in the first 15 seconds.
                                    </span>
                                </div>

                                {/* PROBLEM SOLVING */}
                                <div className="p-2.5 rounded-lg border bg-muted/20 flex flex-col gap-1">
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                            Problem Solving
                                        </div>
                                        <span className="font-extrabold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">{searchIntent?.problemSolving}%</span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground leading-tight">
                                        Viewers have an urgent issue or bug they need to fix immediately.
                                    </p>
                                    <span className="text-[10px] text-foreground font-medium bg-background border px-2 py-1 rounded inline-block mt-0.5">
                                        💡 <strong>Tip:</strong> Skip long intro hooks; get straight to the fix.
                                    </span>
                                </div>

                                {/* COMPARISON */}
                                <div className="p-2.5 rounded-lg border bg-muted/20 flex flex-col gap-1">
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                            Comparison
                                        </div>
                                        <span className="font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">{searchIntent?.comparison}%</span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground leading-tight">
                                        Viewers are deciding between 2+ tools, products, or approaches.
                                    </p>
                                    <span className="text-[10px] text-foreground font-medium bg-background border px-2 py-1 rounded inline-block mt-0.5">
                                        💡 <strong>Tip:</strong> Include a pros/cons table and declare a clear winner.
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* SECTION 5: COMPETITORS & CONTENT GAP */}
                <div className="w-full p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Competitors */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                            <Award className="w-4 h-4 text-amber-500" /> Top Ranking Videos
                        </h4>

                        <div className="space-y-2.5">
                            {competitorAnalysis?.map((comp: any, i: number) => (
                                <div key={i} className="flex gap-3 items-center p-2.5 rounded-xl border bg-muted/20">
                                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-bold shrink-0">
                                        #{i+1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-xs font-semibold truncate text-foreground">{comp.title}</h5>
                                        <p className="text-[11px] text-muted-foreground truncate">{comp.channel} • {comp.views} • {comp.age}</p>
                                    </div>
                                    <div className="shrink-0 text-right">
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted">
                                            SEO: {comp.seoScore}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Gap */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                            <Compass className="w-4 h-4 text-primary" /> Content Gap Opportunities
                        </h4>

                        <div className="p-4 rounded-xl border bg-card flex flex-col gap-4">
                            <div>
                                <span className="text-xs font-bold text-muted-foreground block mb-2 uppercase tracking-wider">What competitors miss:</span>
                                <ul className="space-y-1.5">
                                    {contentGap?.missing?.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2 text-xs">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-border pt-3">
                                <span className="text-xs font-bold text-muted-foreground block mb-2 uppercase tracking-wider">Untapped Angles:</span>
                                <div className="space-y-1.5">
                                    {contentGap?.untappedAngles?.map((item: string, i: number) => (
                                        <div key={i} className="text-xs p-2 rounded bg-muted/40 font-medium text-foreground">
                                            💡 {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SECTION 6: STRATEGY & CHECKLIST */}
                <div className="w-full p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-muted/20">
                    
                    {/* Strategy Playbook */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                        <h4 className="font-bold text-sm flex items-center gap-2 text-foreground">
                            <Sparkles className="w-4 h-4 text-primary" /> Strategy Playbook
                        </h4>

                        <div className="p-4 rounded-xl border bg-card flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-2 text-xs border-b border-border pb-2">
                                <div>
                                    <span className="text-muted-foreground block">Format:</span>
                                    <span className="font-semibold text-foreground">{videoStrategy?.contentType}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block">Length:</span>
                                    <span className="font-semibold text-foreground">{videoStrategy?.optimalLength}</span>
                                </div>
                            </div>

                            {/* Title with copy button */}
                            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Suggested High-CTR Title</span>
                                    <button 
                                        onClick={() => copyToClipboard(videoStrategy?.suggestedTitle)}
                                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                                    >
                                        <Copy className="w-3 h-3" />
                                        <span>{copiedTitle ? "Copied!" : "Copy"}</span>
                                    </button>
                                </div>
                                <p className="text-xs font-bold text-foreground">&quot;{videoStrategy?.suggestedTitle}&quot;</p>
                            </div>

                            <div className="text-xs">
                                <span className="text-muted-foreground block font-medium">Thumbnail Concept:</span>
                                <p className="text-foreground">{videoStrategy?.thumbnailIdea}</p>
                            </div>
                        </div>
                    </div>

                    {/* Do's & Don'ts */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        <h4 className="font-bold text-sm text-foreground">Creator Checklist</h4>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl border bg-card">
                                <h5 className="text-xs font-bold text-emerald-500 mb-2 flex items-center gap-1">
                                    <Check className="w-3.5 h-3.5" /> Do&apos;s
                                </h5>
                                <ul className="space-y-1 text-xs text-muted-foreground">
                                    {dosAndDonts?.dos?.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-1">
                                            <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1 shrink-0" />
                                            <span className="leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-3 rounded-xl border bg-card">
                                <h5 className="text-xs font-bold text-rose-500 mb-2 flex items-center gap-1">
                                    <X className="w-3.5 h-3.5" /> Don&apos;ts
                                </h5>
                                <ul className="space-y-1 text-xs text-muted-foreground">
                                    {dosAndDonts?.donts?.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-1">
                                            <span className="w-1 h-1 rounded-full bg-rose-500 mt-1 shrink-0" />
                                            <span className="leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};
