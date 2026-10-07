"use client";

import { useState, useTransition, ChangeEvent } from "react";
import { Copy, Check, Swords, Upload, Image as ImageIcon, Sparkles, RefreshCw, Smartphone, Monitor, ShieldCheck, AlertTriangle, Zap, Target, Layers, Crosshair, BarChart3, Eye, Search, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

interface RealCompetitor {
    videoId: string;
    title: string;
    channelName: string;
    views: string;
    publishedTime: string;
    thumbnailUrl: string;
}

interface BattleFactor {
    name: string;
    userScore: number;
    competitorAvg: number;
    status: string;
}

interface CompetitorCard {
    rank: number;
    title: string;
    channelName: string;
    views: string;
    age: string;
    thumbnailText: string;
    strength: string;
    thumbnailUrl?: string;
}

interface ABVariation {
    name: string;
    thumbnailText: string;
    visualConcept: string;
    predictedPackagingScore: number;
    ctrPotential: string;
}

interface BattlefieldResult {
    packagingScore: number;
    scoreGrade: string;
    ctrPositionPercentile: string;
    estimatedCtrRange: string;
    publishReadinessScore: number;
    publishVerdict: string;
    verdictSummary: string;
    battleAnalysis: {
        userScore: number;
        competitorAverage: number;
        topCompetitorScore: number;
        biggestWeakness: string;
        biggestAdvantage: string;
        factors: BattleFactor[];
    };
    titleThumbnailSynergy: {
        clarityScore: number;
        curiosityScore: number;
        redundancyLevel: string;
        redundancyFeedback: string;
        titleRole: string;
        thumbnailRole: string;
        suggestedThumbnailText: string;
        suggestedTitleRefinement: string;
    };
    searchShelfSimulation: {
        keyword: string;
        visualSaturationWarning: string;
        differentiationOpportunity: string;
        competitors: CompetitorCard[];
    };
    surfaceReadiness: {
        search: { score: number; verdict: string };
        homeFeed: { score: number; verdict: string };
        suggested: { score: number; verdict: string };
        mobileSearch: { score: number; verdict: string };
    };
    beatCompetitorFixes: {
        title: string;
        fix: string;
    }[];
    aBTestVariations: ABVariation[];
}

// ----------------------------------------------------------------------
// SVG SPEEDOMETER GAUGE
// ----------------------------------------------------------------------
const SpeedometerGauge = ({ score, label, sublabel }: { score: number; label: string; sublabel?: string }) => {
    const radius = 75;
    const strokeWidth = 12;
    const circumference = Math.PI * radius; // ~235.6
    const fillPercent = Math.min(Math.max(score, 0), 100) / 100;
    const strokeDashoffset = circumference * (1 - fillPercent);
    const angle = -90 + (fillPercent * 180);

    return (
        <div className="relative flex flex-col items-center justify-center p-2">
            <svg className="w-52 h-32 overflow-visible" viewBox="0 0 180 100">
                <defs>
                    <linearGradient id="speedometerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <filter id="needleGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
                    </filter>
                </defs>
                {/* Background Arc */}
                <path
                    d="M 15 90 A 75 75 0 0 1 165 90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    className="text-muted/20"
                />
                {/* Active Score Arc */}
                <path
                    d="M 15 90 A 75 75 0 0 1 165 90"
                    fill="none"
                    stroke="url(#speedometerGradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                />
                {/* Ticks */}
                <circle cx="15" cy="90" r="2" fill="currentColor" className="text-muted-foreground/40" />
                <circle cx="90" cy="15" r="2" fill="currentColor" className="text-muted-foreground/40" />
                <circle cx="165" cy="90" r="2" fill="currentColor" className="text-muted-foreground/40" />

                {/* Needle */}
                <g transform={`translate(90, 90) rotate(${angle})`} filter="url(#needleGlow)" className="transition-transform duration-1000 ease-out">
                    <line x1="0" y1="0" x2="0" y2="-62" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="0" cy="0" r="7" fill="#e11d48" />
                    <circle cx="0" cy="0" r="3" fill="#ffffff" />
                </g>
            </svg>
            <div className="flex flex-col items-center -mt-7 text-center">
                <span className="text-4xl font-black tracking-tight text-foreground">{score}<span className="text-lg text-muted-foreground font-semibold">/100</span></span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary mt-0.5">{label}</span>
                {sublabel && <span className="text-[10px] text-muted-foreground font-medium">{sublabel}</span>}
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// FACTOR COMPARISON BAR GRAPH
// ----------------------------------------------------------------------
const FactorComparisonChart = ({ factors }: { factors: BattleFactor[] }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold pb-2 border-b border-border">
                <span className="font-bold text-foreground">Packaging Criteria</span>
                <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> You</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600 inline-block" /> Comp Avg</span>
                </div>
            </div>

            <div className="flex flex-col gap-3.5">
                {factors.map((factor, idx) => {
                    const isWinning = factor.userScore >= factor.competitorAvg;
                    return (
                        <div key={idx} className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-foreground flex items-center gap-1.5">
                                    {factor.name}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className={`font-extrabold ${isWinning ? "text-emerald-500" : "text-rose-500"}`}>
                                        You: {factor.userScore}
                                    </span>
                                    <span className="text-muted-foreground text-[10px]">vs {factor.competitorAvg} avg</span>
                                    <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${isWinning ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`}>
                                        {factor.status}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Visual Dual Progress Bar */}
                            <div className="w-full flex flex-col gap-1">
                                <div className="w-full h-2.5 rounded-full bg-muted/40 overflow-hidden relative">
                                    {/* Competitor Avg Bar */}
                                    <div
                                        className="h-full rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-700"
                                        style={{ width: `${factor.competitorAvg}%` }}
                                    />
                                    {/* User Overlay Bar */}
                                    <div
                                        className={`h-full rounded-full transition-all duration-700 -mt-2.5 ${isWinning ? "bg-gradient-to-r from-emerald-500 to-teal-400" : "bg-gradient-to-r from-rose-500 to-amber-500"}`}
                                        style={{ width: `${factor.userScore}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const ThumbnailBattlefieldForm = () => {
    const [keyword, setKeyword] = useState("");
    const [title, setTitle] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    
    // Live Feed Controls
    const [previewDevice, setPreviewDevice] = useState<"mobile" | "desktop">("mobile");
    const [activeSurface, setActiveSurface] = useState<"search" | "home" | "suggested" | "mobile">("search");
    const [userPosition, setUserPosition] = useState<number>(1);

    const [channelSize, setChannelSize] = useState("1K-10K");
    const [targetRegion, setTargetRegion] = useState("Global");

    // Real YouTube competitors scraped from backend
    const [realCompetitors, setRealCompetitors] = useState<RealCompetitor[]>([]);
    const [isFetchingCompetitors, setIsFetchingCompetitors] = useState(false);

    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<BattlefieldResult | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

    // Fetch real YouTube competitors whenever keyword search button is pressed or before analysis
    const handleFetchCompetitors = async (searchKw: string) => {
        if (!searchKw.trim()) return;
        setIsFetchingCompetitors(true);
        try {
            const res = await fetch("/api/youtube/search", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ keyword: searchKw }),
            });
            if (res.ok) {
                const data = await res.json();
                if (data.videos && data.videos.length > 0) {
                    setRealCompetitors(data.videos);
                }
            }
        } catch (err) {
            console.error("Failed to fetch real YouTube competitors:", err);
        } finally {
            setIsFetchingCompetitors(false);
        }
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setPreviewImage(base64);
                setThumbnailUrl(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCopy = (text: string, indexId: string) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(indexId);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!keyword.trim()) {
            toast.error("Please enter your target keyword or topic.");
            return;
        }

        if (!title.trim()) {
            toast.error("Please enter your video title.");
            return;
        }

        startTransition(async () => {
            try {
                // Fetch real YouTube competitors simultaneously
                handleFetchCompetitors(keyword);

                const imageToSend = (thumbnailUrl || previewImage || "").startsWith("data:")
                    ? "[Uploaded User Thumbnail Image]"
                    : (thumbnailUrl || previewImage);

                const response = await fetch("/api/ai/thumbnail-battlefield", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        keyword,
                        title,
                        thumbnailUrl: imageToSend,
                        hasImageUploaded: !!previewImage,
                        channelSize,
                        targetRegion,
                        surface: activeSurface
                    }),
                });

                if (!response.ok) {
                    const errJson = await response.json().catch(() => ({}));
                    throw new Error(errJson.error || "Failed to run Thumbnail Battlefield audit");
                }

                const resData = await response.json();
                if (resData.data) {
                    setResult(resData.data);
                    confetti({
                        particleCount: 120,
                        spread: 80,
                        origin: { y: 0.6 }
                    });
                    toast.success("Thumbnail Battlefield analysis complete!");
                } else {
                    toast.error("Something went wrong while analyzing.");
                }
            } catch (err) {
                console.error(err);
                toast.error("Failed to run analysis. Please try again.");
            }
        });
    };

    // Blend real YouTube scraped competitors into AI result cards if available
    const blendedCompetitors = result?.searchShelfSimulation.competitors.map((comp, idx) => {
        const real = realCompetitors[idx];
        return {
            ...comp,
            thumbnailUrl: real?.thumbnailUrl || `https://i.ytimg.com/vi/${real?.videoId || 'dummy'}/hqdefault.jpg`,
            realTitle: real?.title || comp.title,
            realChannel: real?.channelName || comp.channelName,
            realViews: real?.views || comp.views,
            realAge: real?.publishedTime || comp.age,
        };
    }) || [];

    // Construct array of videos for live preview simulator based on user position
    const userVideoMock = {
        isUser: true,
        title: title || "Your Planned Video Title Goes Here",
        channelName: "Your Channel Name",
        views: "0 views",
        publishedTime: "Just now",
        thumbnailUrl: previewImage || thumbnailUrl || "",
        packagingScore: result?.packagingScore || 85,
    };

    const competitorMocks = realCompetitors.length > 0 ? realCompetitors.map((c) => ({
        isUser: false,
        title: c.title,
        channelName: c.channelName,
        views: c.views,
        publishedTime: c.publishedTime,
        thumbnailUrl: c.thumbnailUrl,
        packagingScore: 78,
    })) : [
        { isUser: false, title: "10 Mins INTENSE Chest Workout | Beginners to Advanced", channelName: "Fitness Pro", views: "3.8M views", publishedTime: "2 years ago", thumbnailUrl: "https://i.ytimg.com/vi/kBJTLMaJZrQ/hqdefault.jpg", packagingScore: 88 },
        { isUser: false, title: "Home Chest Exercises (NO EQUIPMENT NEEDED!!)", channelName: "ATHLEAN-X™", views: "5.1M views", publishedTime: "3 years ago", thumbnailUrl: "https://i.ytimg.com/vi/a9vL6BsgkPg/hqdefault.jpg", packagingScore: 82 },
        { isUser: false, title: "Dumbbell Chest Workout at Home - Full Session", channelName: "Rowan Row", views: "1.2M views", publishedTime: "1 year ago", thumbnailUrl: "https://i.ytimg.com/vi/fUk-rdHDl3w/hqdefault.jpg", packagingScore: 75 },
    ];

    // Build the ordered list for preview simulation based on userPosition (1-indexed)
    const simulatedFeedList = [...competitorMocks];
    simulatedFeedList.splice(userPosition - 1, 0, userVideoMock);

    return (
        <div className="w-full flex flex-col gap-6 items-center pt-4 md:pt-8 max-w-6xl mx-auto px-2 sm:px-4">
            {/* TOOL HEADER */}
            <div className="flex flex-col items-center gap-2 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold uppercase tracking-wider">
                    <Swords className="w-3.5 h-3.5" /> YouTube Thumbnail Battlefield™
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                    Test Your Thumbnail Against Real YouTube Competitors
                </h1>
                <p className="text-sm text-muted-foreground max-w-2xl">
                    See your thumbnail side-by-side in live YouTube search feeds, analyze CTR packaging scores, and fix weaknesses before you publish.
                </p>
            </div>

            {/* MAIN INPUT FORM */}
            <form onSubmit={handleAnalyze} className="w-full flex flex-col gap-6">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Target Keyword */}
                    <div className="flex flex-col gap-2 text-left">
                        <Label htmlFor="keyword" className="text-xs font-bold text-foreground flex items-center justify-between">
                            <span>Target Keyword / Search Topic <span className="text-rose-500">*</span></span>
                            {isFetchingCompetitors && (
                                <span className="text-[10px] text-primary flex items-center gap-1">
                                    <RefreshCw className="w-3 h-3 animate-spin" /> Fetching YouTube Competitors...
                                </span>
                            )}
                        </Label>
                        <div className="relative">
                            <Input
                                id="keyword"
                                placeholder="e.g. chest workout at home, python tutorial..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                onBlur={() => handleFetchCompetitors(keyword)}
                                className="h-11 text-xs border-border w-full pr-24"
                            />
                            <button
                                type="button"
                                onClick={() => handleFetchCompetitors(keyword)}
                                className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-muted hover:bg-muted/80 text-foreground text-[10px] font-bold rounded-md flex items-center gap-1 transition-colors"
                            >
                                <Search className="w-3 h-3" /> Fetch Competitors
                            </button>
                        </div>
                    </div>

                    {/* Video Title */}
                    <div className="flex flex-col gap-2 text-left">
                        <Label htmlFor="title" className="text-xs font-bold text-foreground">
                            Planned Video Title <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                            id="title"
                            placeholder="e.g. 5 Best Chest Exercises for a Bigger Chest At Home..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="h-11 text-xs border-border w-full"
                        />
                    </div>
                </div>

                {/* Thumbnail Upload or Image URL */}
                <div className="w-full flex flex-col gap-3 text-left">
                    <Label className="text-xs font-bold text-foreground">
                        Thumbnail Image (Upload File or Paste Image URL)
                    </Label>
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-8 flex flex-col gap-3">
                            <div className="relative border-2 border-dashed border-border rounded-2xl p-5 text-center hover:border-rose-500/60 transition-colors bg-muted/20">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                />
                                <div className="flex flex-col items-center justify-center gap-1.5 py-1">
                                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-1">
                                        <Upload className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold text-foreground">Drag & drop your thumbnail or click to upload</span>
                                    <span className="text-[11px] text-muted-foreground">PNG, JPG, WEBP recommended (1280x720 16:9)</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-muted-foreground whitespace-nowrap">OR Paste Image URL:</span>
                                <Input
                                    placeholder="https://i.ytimg.com/vi/.../maxresdefault.jpg"
                                    value={thumbnailUrl}
                                    onChange={(e) => {
                                        setThumbnailUrl(e.target.value);
                                        setPreviewImage(e.target.value);
                                    }}
                                    className="h-9 text-xs border-border flex-1"
                                />
                            </div>
                        </div>

                        {/* Live Image Preview Frame */}
                        <div className="md:col-span-4 flex flex-col items-center justify-center">
                            {previewImage ? (
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-rose-500/40 shadow-md group bg-slate-900">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={previewImage} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 left-2 bg-rose-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow">
                                        YOUR THUMBNAIL
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPreviewImage("");
                                            setThumbnailUrl("");
                                        }}
                                        className="absolute top-2 right-2 bg-black/80 text-white text-[10px] px-2.5 py-0.5 rounded-full hover:bg-rose-600 transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex flex-col items-center justify-center text-muted-foreground gap-1.5 p-4 text-center">
                                    <ImageIcon className="w-7 h-7 text-muted-foreground/60" />
                                    <span className="text-xs font-semibold">No Thumbnail Uploaded Yet</span>
                                    <span className="text-[10px] text-muted-foreground">Upload to see live battlefield simulation</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Additional Settings */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] font-semibold text-muted-foreground">Channel Size</Label>
                        <select
                            value={channelSize}
                            onChange={(e) => setChannelSize(e.target.value)}
                            className="h-9 rounded-lg border border-border bg-background px-2.5 text-xs font-medium"
                        >
                            <option value="New (0-1K)">New Channel (0-1K)</option>
                            <option value="1K-10K">Small (1K-10K)</option>
                            <option value="10K-100K">Growing (10K-100K)</option>
                            <option value="100K+">Established (100K+)</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] font-semibold text-muted-foreground">Target Region</Label>
                        <select
                            value={targetRegion}
                            onChange={(e) => setTargetRegion(e.target.value)}
                            className="h-9 rounded-lg border border-border bg-background px-2.5 text-xs font-medium"
                        >
                            <option value="Global">Global</option>
                            <option value="United States">United States</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] font-semibold text-muted-foreground">Surface Context</Label>
                        <select
                            value={activeSurface}
                            onChange={(e) => setActiveSurface(e.target.value as any)}
                            className="h-9 rounded-lg border border-border bg-background px-2.5 text-xs font-medium"
                        >
                            <option value="search">🔎 YouTube Search</option>
                            <option value="home">🏠 Home Feed</option>
                            <option value="suggested">▶️ Suggested Videos</option>
                            <option value="mobile">📱 Mobile Search</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] font-semibold text-muted-foreground">User Rank Position</Label>
                        <select
                            value={userPosition}
                            onChange={(e) => setUserPosition(Number(e.target.value))}
                            className="h-9 rounded-lg border border-border bg-background px-2.5 text-xs font-medium"
                        >
                            <option value={1}>Rank #1 (Top Spot)</option>
                            <option value={2}>Rank #2</option>
                            <option value={3}>Rank #3</option>
                            <option value={4}>Rank #4</option>
                        </select>
                    </div>
                </div>

                {/* Submit Action Button */}
                <Button
                    type="submit"
                    disabled={isPending || !keyword.trim() || !title.trim()}
                    className="h-12 text-sm font-bold gap-2 w-full shadow-lg bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:opacity-95 text-white rounded-xl"
                >
                    {isPending ? (
                        <>
                            <RefreshCw className="w-4 h-4 animate-spin" /> Analyzing Thumbnail Packaging & Real Competitors...
                        </>
                    ) : (
                        <>
                            <Swords className="w-4 h-4" /> Enter Thumbnail Battlefield & Compare
                        </>
                    )}
                </Button>
            </form>

            {/* LIVE INTERACTIVE FEED SIMULATOR (MOBILE VS DESKTOP) */}
            <div className="w-full flex flex-col gap-4 mt-4 p-5 rounded-2xl bg-card border border-border shadow-sm text-left">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 font-bold">
                            <Eye className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-foreground">Live Feed Simulator</h3>
                            <p className="text-xs text-muted-foreground">Preview your thumbnail positioned against actual YouTube competitors in real-time</p>
                        </div>
                    </div>

                    {/* Mobile vs Desktop View Toggle */}
                    <div className="flex items-center gap-1.5 bg-muted p-1 rounded-xl">
                        <Button
                            type="button"
                            variant={previewDevice === "mobile" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setPreviewDevice("mobile")}
                            className="h-8 text-xs font-bold gap-1.5 rounded-lg"
                        >
                            <Smartphone className="w-3.5 h-3.5" /> Mobile Feed
                        </Button>
                        <Button
                            type="button"
                            variant={previewDevice === "desktop" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setPreviewDevice("desktop")}
                            className="h-8 text-xs font-bold gap-1.5 rounded-lg"
                        >
                            <Monitor className="w-3.5 h-3.5" /> Desktop Search
                        </Button>
                    </div>
                </div>

                {/* 📱 MOBILE PHONE SIMULATOR VIEW */}
                {previewDevice === "mobile" && (
                    <div className="w-full flex justify-center py-4">
                        <div className="w-full max-w-[390px] border-[8px] border-slate-900 dark:border-slate-800 rounded-[40px] bg-slate-950 text-white overflow-hidden shadow-2xl relative">
                            {/* Phone Notch / Island */}
                            <div className="w-28 h-4 bg-slate-900 rounded-b-xl mx-auto flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
                            </div>

                            {/* Mobile App Header */}
                            <div className="px-4 py-2.5 flex items-center justify-between border-b border-slate-800 bg-slate-950">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-5 h-3.5 bg-rose-600 rounded flex items-center justify-center text-[8px] font-black">▶</div>
                                    <span className="text-xs font-extrabold tracking-tight">YouTube</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <Search className="w-3.5 h-3.5" />
                                    <div className="w-5 h-5 rounded-full bg-slate-800 text-[9px] flex items-center justify-center font-bold">YOU</div>
                                </div>
                            </div>

                            {/* Mobile Query Bar */}
                            <div className="px-3 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-[11px]">
                                <span className="text-slate-300 line-clamp-1">🔎 &quot;{keyword || "chest workout at home"}&quot;</span>
                                <span className="text-[10px] text-rose-400 font-bold">Filter</span>
                            </div>

                            {/* Mobile Video Feed */}
                            <div className="flex flex-col divide-y divide-slate-800 max-h-[500px] overflow-y-auto">
                                {simulatedFeedList.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col transition-all ${item.isUser ? "bg-rose-950/40 ring-2 ring-rose-500/60" : "bg-slate-950"}`}
                                    >
                                        {/* User Badge Banner */}
                                        {item.isUser && (
                                            <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white text-[10px] font-extrabold px-3 py-1 flex items-center justify-between">
                                                <span>⚡ YOUR VIDEO (POSITION #{userPosition})</span>
                                                <span>{item.packagingScore}/100 Score</span>
                                            </div>
                                        )}

                                        {/* Video Thumbnail Frame */}
                                        <div className="relative aspect-video w-full bg-slate-900">
                                            {item.thumbnailUrl ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center text-xs text-slate-500">
                                                    <ImageIcon className="w-6 h-6 mb-1" />
                                                    <span>Upload Thumbnail</span>
                                                </div>
                                            )}
                                            <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                10:45
                                            </span>
                                        </div>

                                        {/* Video Metadata */}
                                        <div className="p-3 flex items-start gap-2.5">
                                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${item.isUser ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-300"}`}>
                                                {item.channelName.charAt(0)}
                                            </div>
                                            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                                <h4 className={`text-xs font-bold line-clamp-2 ${item.isUser ? "text-rose-200" : "text-slate-100"}`}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-[10px] text-slate-400">
                                                    {item.channelName} • {item.views} • {item.publishedTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 💻 DESKTOP BROWSER SIMULATOR VIEW */}
                {previewDevice === "desktop" && (
                    <div className="w-full border border-border rounded-xl bg-slate-950 text-white overflow-hidden shadow-xl">
                        {/* macOS Window Controls */}
                        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                                <span className="text-xs text-slate-400 ml-2 font-mono">youtube.com/results?search_query={encodeURIComponent(keyword || "chest workout")}</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Desktop Search View</span>
                        </div>

                        {/* Search Desktop Feed List */}
                        <div className="p-4 flex flex-col gap-4 max-h-[550px] overflow-y-auto">
                            {simulatedFeedList.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col sm:flex-row gap-4 p-3 rounded-xl transition-all ${item.isUser ? "bg-rose-950/30 border-2 border-rose-500/50" : "hover:bg-slate-900/60 border border-slate-800/60"}`}
                                >
                                    {/* Thumbnail 16:9 */}
                                    <div className="relative w-full sm:w-64 aspect-video rounded-xl overflow-hidden bg-slate-900 flex-shrink-0">
                                        {item.thumbnailUrl ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-xs text-slate-500">
                                                <ImageIcon className="w-6 h-6 mb-1" />
                                                <span>Your Thumbnail</span>
                                            </div>
                                        )}
                                        {item.isUser && (
                                            <span className="absolute top-2 left-2 bg-rose-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow">
                                                YOUR VIDEO PREVIEW
                                            </span>
                                        )}
                                        <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                            12:15
                                        </span>
                                    </div>

                                    {/* Desktop Info */}
                                    <div className="flex flex-col gap-1.5 flex-1 min-w-0 py-0.5 text-left">
                                        <h4 className={`text-sm font-bold line-clamp-2 ${item.isUser ? "text-rose-300" : "text-slate-100"}`}>
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-slate-400">
                                            {item.views} • {item.publishedTime}
                                        </p>
                                        <div className="flex items-center gap-2 my-1">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${item.isUser ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-300"}`}>
                                                {item.channelName.charAt(0)}
                                            </div>
                                            <span className="text-xs text-slate-300 font-semibold">{item.channelName}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 line-clamp-2">
                                            Comprehensive step-by-step breakdown covering exact exercises, form corrections, and high-CTR packaging strategies.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border">
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                        <Skeleton className="h-8 w-48 rounded-xl" />
                        <Skeleton className="h-6 w-32 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Skeleton className="h-44 w-full rounded-2xl" />
                        <Skeleton className="h-44 w-full rounded-2xl" />
                        <Skeleton className="h-44 w-full rounded-2xl" />
                    </div>
                </div>
            )}

            {/* ANALYZED RESULTS DASHBOARD */}
            {result && !isPending && (
                <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300">
                    
                    {/* 📊 SPEEDOMETER & PACKAGING OVERVIEW DASHBOARD */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        
                        {/* Speedometer Gauge Box */}
                        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-muted/20 border border-border/60">
                            <SpeedometerGauge
                                score={result.publishReadinessScore}
                                label={result.publishVerdict}
                                sublabel={result.scoreGrade}
                            />
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                    {result.ctrPositionPercentile}
                                </span>
                            </div>
                        </div>

                        {/* Executive Summary Stats */}
                        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Packaging Audit Executive Summary</span>
                                <h2 className="text-lg font-extrabold text-foreground line-clamp-2">{title}</h2>
                                <p className="text-xs text-muted-foreground leading-relaxed">{result.verdictSummary}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                                <div className="p-3 rounded-xl bg-muted/30 border border-border flex flex-col gap-0.5">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Estimated CTR Position</span>
                                    <span className="text-lg font-black text-rose-500">{result.estimatedCtrRange}</span>
                                    <span className="text-[10px] text-muted-foreground">Against Niche Competitors</span>
                                </div>
                                <div className="p-3 rounded-xl bg-muted/30 border border-border flex flex-col gap-0.5">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Packaging Score</span>
                                    <span className="text-lg font-black text-emerald-500">{result.packagingScore}/100</span>
                                    <span className="text-[10px] text-muted-foreground">{result.scoreGrade}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 🔎 SEARCH SHELF COMPETITOR MATRIX (REAL THUMBNAILS) */}
                    <div className="w-full flex flex-col gap-5 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-4">
                            <div className="flex items-center gap-2">
                                <Crosshair className="w-5 h-5 text-rose-500" />
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Competitor Thumbnail Battle Matrix</h3>
                                    <p className="text-xs text-muted-foreground">Comparing your thumbnail against top real YouTube videos for: <span className="font-semibold text-foreground">&quot;{keyword}&quot;</span></p>
                                </div>
                            </div>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/30">
                                Real Competitor Thumbnails
                            </span>
                        </div>

                        {/* Saturation Alert */}
                        {result.searchShelfSimulation.visualSaturationWarning && (
                            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
                                <div>
                                    <span className="font-bold">Visual Saturation Alert: </span>
                                    {result.searchShelfSimulation.visualSaturationWarning}
                                </div>
                            </div>
                        )}

                        {/* Competitor Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            {/* User Video Card */}
                            <div className="flex flex-col gap-2.5 p-3 rounded-xl bg-rose-500/10 border-2 border-rose-500/60 relative shadow-sm">
                                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-rose-600 text-white text-[9px] font-black uppercase tracking-wider">
                                    YOUR THUMBNAIL
                                </div>
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border bg-slate-900">
                                    {previewImage ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={previewImage} alt="Your Thumbnail" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-xs text-muted-foreground">
                                            <span>Your Thumbnail</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-xs font-bold line-clamp-2 text-foreground">{title}</h4>
                                    <p className="text-[10px] text-muted-foreground">Your Channel • 0 views</p>
                                    <div className="mt-1 flex items-center justify-between text-[11px] pt-1.5 border-t border-rose-500/20">
                                        <span className="font-semibold text-muted-foreground">Score:</span>
                                        <span className="font-extrabold text-rose-500">{result.packagingScore}/100</span>
                                    </div>
                                </div>
                            </div>

                            {/* Competitor Real Thumbnail Cards */}
                            {blendedCompetitors.map((comp) => (
                                <div key={comp.rank} className="flex flex-col gap-2.5 p-3 rounded-xl bg-muted/30 border border-border shadow-xs">
                                    <div className="flex items-center justify-between">
                                        <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-[9px] font-bold">
                                            #{comp.rank} COMPETITOR
                                        </span>
                                        <span className="text-[10px] font-bold text-muted-foreground">{comp.realViews}</span>
                                    </div>
                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-900 border border-border">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={comp.thumbnailUrl} alt={comp.realTitle} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-xs font-bold line-clamp-2 text-foreground">{comp.realTitle}</h4>
                                        <p className="text-[10px] text-muted-foreground">{comp.realChannel} • {comp.realAge}</p>
                                        <div className="mt-1 p-2 rounded-lg bg-muted/50 border border-border/50 text-[10px]">
                                            <span className="font-bold text-amber-500">Visual Angle: </span>
                                            <span className="text-muted-foreground line-clamp-2">{comp.strength}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* 🥊 FACTOR COMPARISON GRAPH & STRENGTHS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Factor Bar Graph Component */}
                        <div className="lg:col-span-7 flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-rose-500" /> Competitive Factor Battle Graph
                                </h3>
                                <span className="text-xs text-muted-foreground">You vs Competitors</span>
                            </div>

                            <FactorComparisonChart factors={result.battleAnalysis.factors} />
                        </div>

                        {/* Strengths, Weaknesses & Surface Readiness */}
                        <div className="lg:col-span-5 flex flex-col gap-4 text-left">
                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4" /> Your Biggest Advantage
                                </span>
                                <p className="text-xs text-emerald-950 dark:text-emerald-200 font-medium">
                                    {result.battleAnalysis.biggestAdvantage}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <AlertTriangle className="w-4 h-4" /> Your Biggest Weakness
                                </span>
                                <p className="text-xs text-rose-950 dark:text-rose-200 font-medium">
                                    {result.battleAnalysis.biggestWeakness}
                                </p>
                            </div>

                            {/* Surface Readiness */}
                            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border shadow-sm">
                                <span className="text-xs font-bold text-foreground">Packaging Score Across YouTube Surfaces</span>
                                <div className="grid grid-cols-2 gap-2.5">
                                    <div className="p-3 rounded-xl bg-muted/30 border border-border text-xs flex flex-col gap-0.5">
                                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Search Shelf</span>
                                        <span className="font-extrabold text-rose-500">{result.surfaceReadiness.search.score}/100</span>
                                        <span className="text-[10px] text-muted-foreground line-clamp-1">{result.surfaceReadiness.search.verdict}</span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-muted/30 border border-border text-xs flex flex-col gap-0.5">
                                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Home Feed</span>
                                        <span className="font-extrabold text-amber-500">{result.surfaceReadiness.homeFeed.score}/100</span>
                                        <span className="text-[10px] text-muted-foreground line-clamp-1">{result.surfaceReadiness.homeFeed.verdict}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 🧩 TITLE + THUMBNAIL SYNERGY ANALYSIS */}
                    <div className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-500" />
                                <h3 className="text-base font-bold text-foreground">Title + Thumbnail Synergy Analysis</h3>
                            </div>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/30">
                                Synergy Score: {result.titleThumbnailSynergy.clarityScore}/100
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-muted/30 border border-border">
                                <span className="text-xs font-bold text-rose-500">Title Role (WHAT IT IS)</span>
                                <p className="text-xs text-foreground font-medium">{result.titleThumbnailSynergy.titleRole}</p>
                            </div>

                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-muted/30 border border-border">
                                <span className="text-xs font-bold text-emerald-500">Thumbnail Role (WHY CLICK NOW)</span>
                                <p className="text-xs text-foreground font-medium">{result.titleThumbnailSynergy.thumbnailRole}</p>
                            </div>
                        </div>

                        {result.titleThumbnailSynergy.redundancyFeedback && (
                            <div className="text-xs text-muted-foreground bg-muted/40 p-3.5 rounded-xl border border-border/60 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-foreground">Redundancy Check: </span>
                                    {result.titleThumbnailSynergy.redundancyFeedback}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 🥊 3 ACTIONABLE FIXES TO BEAT COMPETITOR #1 */}
                    <div className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-rose-500" />
                            <h3 className="text-base font-bold text-foreground">3 Actionable Fixes to Out-Click Competitor #1</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {result.beatCompetitorFixes.map((fixItem, idx) => (
                                <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-muted/30 border border-border">
                                    <span className="text-xs font-bold text-rose-500 flex items-center gap-1.5">
                                        <Zap className="w-4 h-4" /> Fix #{idx + 1}: {fixItem.title}
                                    </span>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{fixItem.fix}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🧪 RECOMMENDED A/B THUMBNAIL VARIATIONS */}
                    {result.aBTestVariations && result.aBTestVariations.length > 0 && (
                        <div className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-amber-500" /> Recommended A/B Thumbnail Concepts
                                </h3>
                                <span className="text-xs text-muted-foreground">High-CTR Packaging Alternatives</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {result.aBTestVariations.map((varItem, idx) => (
                                    <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl bg-muted/30 border border-border">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-foreground">{varItem.name}</span>
                                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Score: {varItem.predictedPackagingScore}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/60 text-xs font-bold text-rose-500">
                                            <span>Text: &quot;{varItem.thumbnailText}&quot;</span>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleCopy(varItem.thumbnailText, `ab-${idx}`)}
                                                className="h-6 w-6 p-0 text-xs flex-shrink-0"
                                            >
                                                {copiedIndex === `ab-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
                                            </Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{varItem.visualConcept}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            )}

            {/* Support Banner */}
            <div className="w-full mt-4">
                <BuyMeCoffeeBanner />
            </div>
        </div>
    );
};
