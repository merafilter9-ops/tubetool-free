import { Metadata } from "next";
import Link from "next/link";
import { 
    Coffee, 
    ArrowRight, 
    Sparkles, 
    CheckCircle2, 
    XCircle, 
    Heart, 
    TrendingUp, 
    Users, 
    ShieldCheck, 
    Rocket, 
    Gift, 
    Target, 
    BarChart3, 
    Lightbulb, 
    HelpCircle, 
    Star, 
    Search, 
    Compass, 
    Video, 
    FileText, 
    Flame, 
    Award,
    ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CreatorSuiteShowcase from "@/components/mission/creator-suite-showcase";

import { BUY_ME_A_COFFEE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Our Mission — TubeTool.ai",
    description: "90% of YouTube channels fail due to lack of the right tools. Help us build premium YouTube growth tools and keep them 100% free for all creators.",
    keywords: ["Tubetool mission", "Free YouTube tools", "Buy me a coffee Tubetool", "TubeBuddy alternative free", "VidIQ alternative free"],
};

export default function OurMissionPage() {
    const COFFEE_URL = BUY_ME_A_COFFEE_URL;

    return (
        <div className="w-full max-w-6xl mx-auto py-6 px-3 sm:px-6 flex flex-col gap-12 text-foreground">
            
            {/* 1. HERO SECTION */}
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-card via-card to-red-500/5 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                
                {/* Background Glows */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Hero Left Content */}
                    <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold w-fit">
                            <Heart className="w-3.5 h-3.5 fill-current" />
                            <span>Creator-First Movement</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                            <span className="text-red-600 dark:text-red-500">90% of YouTube Channels Fail.</span>
                            <br />
                            <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                                Not because of talent — but wrong tools & info.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            Most creators put in massive effort, but they don't have access to the right insights, strategy, and tools. Platforms charge $25–$50/mo. We're building <strong className="text-foreground">Tubetool.ai</strong> to give every creator high-powered AI tools for <strong className="text-red-500">100% Free</strong>.
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a href={COFFEE_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-6 rounded-2xl shadow-xl shadow-red-600/25 gap-2 group">
                                    <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    <span>Support Free Creator Tools →</span>
                                </Button>
                            </a>
                            <span className="text-xs text-muted-foreground font-medium italic">
                                ❤️ Even ₹50 / $3 makes a difference
                            </span>
                        </div>
                    </div>

                    {/* Hero Right Visual Graphic */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative p-6 rounded-3xl bg-gradient-to-tr from-slate-900 via-zinc-900 to-slate-950 border border-white/10 shadow-2xl text-white flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                                    <Sparkles className="w-4 h-4" /> Tubetool.ai Ecosystem
                                </span>
                                <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full border border-red-500/30">
                                    Free Forever
                                </span>
                            </div>

                            <div className="space-y-2.5 text-xs">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span className="font-semibold">Better Video Ideas & Topic Validation</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span className="font-semibold">Smarter Algorithm Strategy</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span className="font-semibold">High CTR Thumbnail & Title Generator</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span className="font-semibold">Equal Opportunity for All Creators</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 4 STAT CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border/60">
                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1 text-center">
                        <span className="text-2xl font-black text-red-500">90%+</span>
                        <span className="text-xs text-muted-foreground">Channels fail within 1st year</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1 text-center">
                        <span className="text-2xl font-black text-amber-500">$10 – $49</span>
                        <span className="text-xs text-muted-foreground">Monthly cost of typical tools</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1 text-center">
                        <span className="text-2xl font-black text-blue-500">100M+</span>
                        <span className="text-xs text-muted-foreground">Small creators can't afford subscriptions</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1 text-center">
                        <span className="text-2xl font-black text-emerald-500">Our Mission</span>
                        <span className="text-xs text-muted-foreground">Premium tools FREE for everyone</span>
                    </div>
                </div>

            </div>

            {/* 2. THE REALITY VS MOST CHANNELS DON'T SUCCEED */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Reality Pill Cards */}
                <div className="lg:col-span-6 bg-card border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-1">The Reality for Most Creators</h2>
                        <p className="text-xs text-muted-foreground mb-4">Creating content is hard. Growing on YouTube without proper analytics is even harder.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col gap-1">
                            <Lightbulb className="w-5 h-5 text-amber-500" />
                            <span className="font-bold text-foreground">No Clarity</span>
                            <span className="text-muted-foreground text-[11px]">Unsure what video topic to make next</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex flex-col gap-1">
                            <BarChart3 className="w-5 h-5 text-blue-500" />
                            <span className="font-bold text-foreground">No Validation</span>
                            <span className="text-muted-foreground text-[11px]">No idea if a topic will actually get views</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex flex-col gap-1">
                            <XCircle className="w-5 h-5 text-rose-500" />
                            <span className="font-bold text-foreground">Expensive Tools</span>
                            <span className="text-muted-foreground text-[11px]">$10 – $49/mo pricing per channel</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-purple-500/5 border border-purple-500/20 flex flex-col gap-1">
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                            <span className="font-bold text-foreground">Random Content</span>
                            <span className="text-muted-foreground text-[11px]">Inconsistent uploads → No growth</span>
                        </div>
                    </div>
                </div>

                {/* Graph Card */}
                <div className="lg:col-span-6 bg-card border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-1">Most YouTube Channels Don't Succeed</h2>
                        <p className="text-xs text-muted-foreground mb-4">Over 90% of channels never reach 10,000 subscribers.</p>
                    </div>

                    <div className="space-y-4 text-xs">
                        <div>
                            <div className="flex justify-between font-bold mb-1">
                                <span className="text-red-500">Fail within 1 year</span>
                                <span className="text-red-500 font-extrabold">90%</span>
                            </div>
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 rounded-full w-[90%]" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-medium mb-1 text-muted-foreground">
                                <span>Reach 10K subscribers</span>
                                <span className="font-bold text-foreground">8%</span>
                            </div>
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary/40 rounded-full w-[8%]" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-medium mb-1 text-muted-foreground">
                                <span>Reach 100K+ subscribers</span>
                                <span className="font-bold text-foreground">2%</span>
                            </div>
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary/40 rounded-full w-[2%]" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* 3. CURRENT TOOLS EXPENSIVE VS TUBETOOL SOLUTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Expensive Tools */}
                <div className="lg:col-span-5 bg-rose-500/5 border border-rose-500/20 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-4">
                    <div>
                        <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mb-1">Traditional Model</span>
                        <h2 className="text-xl font-bold text-foreground mb-2">Current Tools Are Expensive</h2>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Popular tools charge $10 – $49 per month, which is not affordable for many emerging creators.
                        </p>
                    </div>

                    <div className="space-y-3 text-xs">
                        <div className="p-3.5 rounded-2xl bg-card border flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-red-500 text-white font-bold flex items-center justify-center text-xs">tb</div>
                                <div>
                                    <span className="font-bold block text-foreground">TubeBuddy</span>
                                    <span className="text-muted-foreground text-[11px]">Keyword research & Tag tools</span>
                                </div>
                            </div>
                            <span className="font-extrabold text-rose-500 text-sm">$10 – $49/mo</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-card border flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs">iq</div>
                                <div>
                                    <span className="font-bold block text-foreground">VidIQ</span>
                                    <span className="text-muted-foreground text-[11px]">SEO & Channel analytics</span>
                                </div>
                            </div>
                            <span className="font-extrabold text-rose-500 text-sm">$10 – $39/mo</span>
                        </div>
                    </div>
                </div>

                {/* Tubetool Solution */}
                <div className="lg:col-span-7 bg-card border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-4">
                    <div>
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-1">Our Solution</span>
                        <h2 className="text-xl font-bold text-foreground mb-2">Tubetool.ai — Completely FREE</h2>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            A powerful suite of AI YouTube growth tools available to every creator for $0.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <Search className="w-4 h-4 text-primary" />
                            <span className="font-bold">Keyword Research</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <Target className="w-4 h-4 text-emerald-500" />
                            <span className="font-bold">GO/NO-GO Predictor</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            <span className="font-bold">Video Topic Ideas</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <Award className="w-4 h-4 text-purple-500" />
                            <span className="font-bold">Competitor Analysis</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="font-bold">Audience Insights</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <FileText className="w-4 h-4 text-rose-500" />
                            <span className="font-bold">Script Generator</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                            <span className="font-bold">Trend Velocity</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/30 border text-center flex flex-col items-center gap-1">
                            <Compass className="w-4 h-4 text-primary" />
                            <span className="font-bold">Content Gap Finder</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* 3.5 THE COMPLETE TUBETOOL CREATOR SUITE (INTERACTIVE SHOWCASE) */}
            <CreatorSuiteShowcase />

            {/* 4. WHY WE ASK FOR COMMUNITY SUPPORT */}
            <div className="w-full bg-gradient-to-br from-amber-500/10 via-card to-amber-950/10 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    <div className="lg:col-span-7 space-y-3">
                        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Coffee className="w-4 h-4" /> Why We Ask For Community Support
                        </span>
                        <h2 className="text-2xl font-extrabold text-foreground">
                            Building Free AI Tools Requires Infrastructure
                        </h2>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            Running high-accuracy AI models, server hosting, and real-time YouTube data pipelines involves ongoing costs. Your contributions help us cover server bandwidth, build pending premium tools, and keep Tubetool.ai 100% free for everyone.
                        </p>
                    </div>

                    {/* Community Impact Box */}
                    <div className="lg:col-span-5 bg-card border border-amber-500/30 rounded-2xl p-6 shadow-md flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span>Community-Powered Movement</span>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                            🥤 <strong>Every voluntary contribution</strong> directly funds server bandwidth, GPU compute, and continuous feature development for creators around the world.
                        </p>

                        <a href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm h-11 rounded-xl gap-2 shadow-lg shadow-amber-500/20">
                                <Coffee className="w-4 h-4" />
                                <span>Support on Buy me a Coffee →</span>
                            </Button>
                        </a>
                    </div>

                </div>
            </div>

            {/* 5. YOUR SUPPORT HELPS US & MISSION CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1.5">
                        <Rocket className="w-5 h-5 text-primary" />
                        <span className="font-bold text-xs sm:text-sm text-foreground">Build More Tools</span>
                        <span className="text-[11px] text-muted-foreground">Launch advanced AI video optimizers, trend predictors & title generators.</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1.5">
                        <Gift className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-xs sm:text-sm text-foreground">Keep Platform Free</span>
                        <span className="text-[11px] text-muted-foreground">All core tools remain 100% free for creators with zero hidden paywalls.</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1.5">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-xs sm:text-sm text-foreground">Empower Small Creators</span>
                        <span className="text-[11px] text-muted-foreground">Give equal analytical power to creators who cannot afford expensive software.</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border flex flex-col gap-1.5">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        <span className="font-bold text-xs sm:text-sm text-foreground">Reduce Channel Failure</span>
                        <span className="text-[11px] text-muted-foreground">Help creators validate topics before filming so more channels succeed.</span>
                    </div>
                </div>

                {/* Be A Part Of This Mission Box */}
                <div className="lg:col-span-5 bg-gradient-to-br from-red-600/10 via-card to-amber-500/10 border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between gap-4">
                    <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">Be A Part of This Mission</span>
                        <h3 className="text-lg font-bold text-foreground mb-2">Help Us Level The Playing Field</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            You're not just supporting a platform. You're helping build an ecosystem where every creator gets equal access to growth insights.
                        </p>
                    </div>

                    <a href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm h-12 rounded-xl gap-2 shadow-lg shadow-red-600/25">
                            <Coffee className="w-4 h-4" />
                            <span>Support on Buy me a Coffee →</span>
                        </Button>
                    </a>
                </div>

            </div>

            {/* 6. WHAT CREATORS SAY (TESTIMONIALS) */}
            <div className="flex flex-col gap-6 pt-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">What Creators Say</h2>
                    <p className="text-xs text-muted-foreground">Real feedback from YouTubers using Tubetool.ai</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-2xl bg-card border flex flex-col justify-between gap-3 text-xs">
                        <p className="text-muted-foreground leading-relaxed italic">
                            "Tubetool saved me hours of research. Amazing work! Happy to support this mission to keep tools free."
                        </p>
                        <div className="flex items-center gap-3 pt-2 border-t">
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-xs">RS</div>
                            <div>
                                <span className="font-bold block text-foreground">Rohit Sharma</span>
                                <span className="text-[10px] text-muted-foreground">YouTuber (12K subscribers)</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-card border flex flex-col justify-between gap-3 text-xs">
                        <p className="text-muted-foreground leading-relaxed italic">
                            "Finally a free alternative to expensive tools like VidIQ. This is exactly what small creators need."
                        </p>
                        <div className="flex items-center gap-3 pt-2 border-t">
                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 font-bold flex items-center justify-center text-xs">PV</div>
                            <div>
                                <span className="font-bold block text-foreground">Priya Verma</span>
                                <span className="text-[10px] text-muted-foreground">YouTuber (8K subscribers)</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-card border flex flex-col justify-between gap-3 text-xs">
                        <p className="text-muted-foreground leading-relaxed italic">
                            "The GO/NO-GO predictor is super useful. Keeps me from wasting days filming low-demand topics."
                        </p>
                        <div className="flex items-center gap-3 pt-2 border-t">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 font-bold flex items-center justify-center text-xs">AS</div>
                            <div>
                                <span className="font-bold block text-foreground">Aman Singh</span>
                                <span className="text-[10px] text-muted-foreground">YouTuber (25K subscribers)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. FOOTER CALLOUT BANNER */}
            <div className="w-full bg-gradient-to-r from-red-950 via-zinc-950 to-red-950 border border-red-500/30 rounded-3xl p-8 shadow-2xl text-center text-white flex flex-col items-center gap-4 my-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>Creators Support Creators</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Let's Build a Better YouTube Together
                </h2>

                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                    Support Tubetool.ai and help us make YouTube growth tools free for everyone.
                </p>

                <a href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-6 rounded-2xl shadow-xl shadow-red-600/30 gap-2">
                        <Coffee className="w-5 h-5" />
                        <span>Support on Buy me a Coffee →</span>
                    </Button>
                </a>

                <span className="text-[11px] text-zinc-400">
                    No pressure — just support if you believe in this mission. ❤️
                </span>
            </div>

        </div>
    );
}
