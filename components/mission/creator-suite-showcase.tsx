'use client';

import { useState } from 'react';
import { 
    Sparkles, 
    Rocket, 
    CheckCircle2, 
    Target, 
    Video, 
    BarChart3, 
    Search, 
    Zap, 
    Bot, 
    Calendar, 
    ShieldCheck, 
    Film, 
    Volume2, 
    Crown, 
    Lightbulb, 
    FileText, 
    TrendingUp, 
    Users, 
    DollarSign, 
    Compass, 
    Award,
    Tag,
    Hash,
    HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type CategoryId = 'all' | 'titling' | 'production' | 'analytics' | 'seo' | 'algorithm' | 'monetization';

interface ToolItem {
    id: string;
    name: string;
    category: CategoryId;
    badge: string;
    badgeColor: string;
    icon: any;
    description: string;
    highlights: string[];
    isFeatured?: boolean;
}

const TOOLS: ToolItem[] = [
    {
        id: 'workspace',
        name: '📅 Video Production Workspace',
        category: 'production',
        badge: 'NEW WORKSPACE',
        badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        icon: Calendar,
        description: 'Personal creator workspace with Calendar integration to track video projects, script status & daily to-do tasks.',
        highlights: ['Daily Creator To-Do Tasks', 'Calendar Project Timeline', 'Scripting & Video Production Status'],
        isFeatured: true
    },
    {
        id: 'channel-auditor',
        name: '📊 Channel Auditor & Feedback Tool',
        category: 'analytics',
        badge: 'ADVANCED AUDIT',
        badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
        icon: BarChart3,
        description: 'Evaluates overall channel metrics, highlighting channel strengths, weak areas & generating an automated daily growth task list.',
        highlights: ['Channel Strengths & Weaknesses', 'Automated To-Do Task List', 'Audience Retention & Churn Diagnosis'],
        isFeatured: true
    },
    {
        id: 'title-ace',
        name: '👑 Title Ace Engine',
        category: 'titling',
        badge: 'UNIQUE AI',
        badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        icon: Crown,
        description: 'Scrapes top-ranking competitor videos on any topic and crafts titles guaranteed to outrank them with higher CTR.',
        highlights: ['Competitor Out-ranking', 'High CTR Clickability', 'SEO Keyword Optimization']
    },
    {
        id: 'match-my-title',
        name: '🎯 Match My Title Tool',
        category: 'titling',
        badge: 'PERSONALIZED',
        badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        icon: Target,
        description: 'Analyzes your channel\'s past titles to mimic your personal tone, format, length & style automatically.',
        highlights: ['Learns Channel Tone', 'Personalized Style Match', 'Zero Generic AI Feeling']
    },
    {
        id: 'go-no-go',
        name: '🎯 GO/NO-GO Predictor',
        category: 'titling',
        badge: 'LIVE FREE',
        badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        icon: CheckCircle2,
        description: 'AI Topic Score & Virality Probability prediction before you waste days filming low-demand topics.',
        highlights: ['Topic Demand Score', 'Virality Probability', 'Subscriber Growth Potential']
    },
    {
        id: 'video-auditor',
        name: '📹 Video Auditor Tool',
        category: 'production',
        badge: 'SINGLE VIDEO AUDIT',
        badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        icon: Film,
        description: 'Single video performance audit analyzing CTR, watch time drop-off points & retention curves.',
        highlights: ['Retention Drop-Off Markers', 'CTR Improvement Tips', 'Audio & Visual Fix Cues']
    },
    {
        id: 'audio-enhancer',
        name: '🎙️ Audio Auditor & 1-Click Enhancer',
        category: 'production',
        badge: 'STUDIO AUDIO',
        badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        icon: Volume2,
        description: 'Audits background noise & speech clarity, then auto-enhances audio, removes hums & mouth clicks in 1-click.',
        highlights: ['Noise & Click Reduction', 'Speech Loudness Leveling', 'Automatic 1-Click Polish']
    },
    {
        id: 'advance-analytics',
        name: '📈 Advance Channel Analytics',
        category: 'analytics',
        badge: 'FLAGSHIP',
        badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
        icon: TrendingUp,
        description: 'Deep real-time analytics for subscriber growth velocity, retention %, sharing rate & churn diagnosis.',
        highlights: ['Growth Velocity Tracking', 'Subscriber Churn Shield', 'Sharing Rate Benchmarks']
    },
    {
        id: 'credibility-tracker',
        name: '🛡️ Channel Credibility & Trust Tracker',
        category: 'analytics',
        badge: 'TRUST METRICS',
        badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
        icon: ShieldCheck,
        description: 'Assesses channel consistency, audience trust score, content quality & subscriber retention.',
        highlights: ['Audience Trust Index', 'Content Quality Rating', 'Channel Reputation Health']
    },
    {
        id: 'keyword-research',
        name: '🔍 Keyword Research Tool',
        category: 'seo',
        badge: 'LIVE FREE',
        badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        icon: Search,
        description: 'Search volume, competition difficulty score & high-performing keyword discovery for YouTube search.',
        highlights: ['Search Volume Data', 'Competition Score', 'Related Keyword Opportunities']
    },
    {
        id: 'competitor-tags',
        name: '🏷️ Competitor Tag & Search Extractor',
        category: 'seo',
        badge: 'LIVE FREE',
        badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        icon: Tag,
        description: 'Extracts competitor tags and YouTube search suggestion keywords for higher search discoverability.',
        highlights: ['Competitor Tag Extraction', 'YouTube Search Suggestions', 'VPH Tag Rankings']
    },
    {
        id: 'algofit',
        name: '⚡ AlgoFit Algorithm Analyzer',
        category: 'algorithm',
        badge: 'ALGORITHM AI',
        badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
        icon: Zap,
        description: 'Evaluates your videos against YouTube\'s official recommendation algorithm rules & suggested feed criteria.',
        highlights: ['Algorithm Compliance Score', 'Suggested Feed Optimization', 'Impression Multipliers']
    },
    {
        id: 'know-niche',
        name: '🧭 Know Your Niche Space',
        category: 'algorithm',
        badge: 'NICHE INTEL',
        badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
        icon: Compass,
        description: 'Personalized niche dashboard with competitor tactics, trending topic alerts & collaboration matchmaker.',
        highlights: ['Niche Trend Alerts', 'Competitor Upload Strategy', 'Cross-Promotion Matches']
    },
    {
        id: 'tubetool-genie',
        name: '🤖 TubeTool Genie (AI Channel Coach)',
        category: 'monetization',
        badge: 'AI COACH',
        badgeColor: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
        icon: Bot,
        description: 'Interactive AI assistant connected directly to your channel analytics data to answer growth queries instantly.',
        highlights: ['Channel Analytics AI Chat', 'Customized Growth Advice', 'Instant Performance Diagnostics']
    },
    {
        id: 'sponsorship-pitch',
        name: '💰 Sponsorship Pitch & Rate Calculator',
        category: 'monetization',
        badge: 'MONETIZATION',
        badgeColor: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
        icon: DollarSign,
        description: 'Generates professional brand deal proposals & rate card email templates for landing paid sponsors.',
        highlights: ['Brand Deal Rate Card', 'Sponsorship Email Pitches', 'Monetization Benchmarks']
    }
];

const CATEGORIES = [
    { id: 'all', label: 'All Tools', icon: Sparkles, count: TOOLS.length },
    { id: 'titling', label: 'Title & Ideation', icon: Target, count: TOOLS.filter(t => t.category === 'titling').length },
    { id: 'production', label: 'Production & Workspace', icon: Video, count: TOOLS.filter(t => t.category === 'production').length },
    { id: 'analytics', label: 'Channel Auditor', icon: BarChart3, count: TOOLS.filter(t => t.category === 'analytics').length },
    { id: 'seo', label: 'SEO & Search Suite', icon: Search, count: TOOLS.filter(t => t.category === 'seo').length },
    { id: 'algorithm', label: 'Algorithm & Niche', icon: Zap, count: TOOLS.filter(t => t.category === 'algorithm').length },
    { id: 'monetization', label: 'AI Coach & Sponsors', icon: Bot, count: TOOLS.filter(t => t.category === 'monetization').length }
];

export default function CreatorSuiteShowcase() {
    const [activeTab, setActiveTab] = useState<CategoryId>('all');

    const filteredTools = activeTab === 'all' 
        ? TOOLS 
        : TOOLS.filter(tool => tool.category === activeTab);

    return (
        <div className="w-full bg-card border rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
            
            {/* Background Ambient Glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* SECTION HEADER */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold w-fit mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>No Paywalls • No $25/mo Subscriptions</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                        The Complete Tubetool Creator Suite
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
                        Competitors charge $20 to $50 every month for these tools. We are building and releasing all of them <strong className="text-foreground">100% Free</strong> for YouTubers.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
                    <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 100% Free Access
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center gap-1.5">
                        <Rocket className="w-3.5 h-3.5" /> Community Supported
                    </span>
                </div>
            </div>

            {/* CATEGORY FILTER TABS BAR */}
            <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border/40">
                {CATEGORIES.map(cat => {
                    const Icon = cat.icon;
                    const isActive = activeTab === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id as CategoryId)}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 shrink-0 transition-all ${
                                isActive 
                                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 scale-105' 
                                    : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50'
                            }`}
                        >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-primary'}`} />
                            <span>{cat.label}</span>
                            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                                isActive ? 'bg-white/20 text-white' : 'bg-background text-muted-foreground'
                            }`}>
                                {cat.count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* FEATURED HIGHLIGHT CARDS & GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map(tool => {
                    const Icon = tool.icon;
                    return (
                        <div 
                            key={tool.id}
                            className={`p-6 rounded-3xl bg-gradient-to-br from-card via-card to-muted/20 border transition-all duration-300 flex flex-col justify-between gap-4 group hover:shadow-xl hover:-translate-y-1 ${
                                tool.isFeatured 
                                    ? 'border-red-500/40 ring-1 ring-red-500/20 bg-gradient-to-br from-red-500/5 via-card to-amber-500/5 lg:col-span-2' 
                                    : 'border-border/70 hover:border-amber-500/40'
                            }`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${tool.badgeColor}`}>
                                        {tool.badge}
                                    </span>
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 group-hover:text-red-500 transition-colors">
                                    {tool.name}
                                </h3>

                                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                    {tool.description}
                                </p>
                            </div>

                            {/* Bullet Highlights */}
                            <div className="space-y-1.5 pt-3 border-t border-border/50 text-[11px]">
                                {tool.highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-foreground font-medium">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
