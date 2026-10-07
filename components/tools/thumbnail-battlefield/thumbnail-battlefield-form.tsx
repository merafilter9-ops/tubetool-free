"use client";

import { useState, useTransition, ChangeEvent } from "react";
import { Copy, Check, Swords, Upload, Image as ImageIcon, Sparkles, RefreshCw, Smartphone, Monitor, ShieldCheck, AlertTriangle, Zap, Target, Layers, Crosshair, BarChart3, Eye, Search, CheckCircle2, Sun, Moon, Maximize2 } from "lucide-react";
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
                        <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
                    </filter>
                </defs>
                {/* Background Arc */}
                <path
                    d="M 15 90 A 75 75 0 0 1 165 90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    className="text-muted/30"
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
                <circle cx="15" cy="90" r="2.5" fill="currentColor" className="text-muted-foreground/40" />
                <circle cx="90" cy="15" r="2.5" fill="currentColor" className="text-muted-foreground/40" />
                <circle cx="165" cy="90" r="2.5" fill="currentColor" className="text-muted-foreground/40" />

                {/* Needle */}
                <g transform={`translate(90, 90) rotate(${angle})`} filter="url(#needleGlow)" className="transition-transform duration-1000 ease-out">
                    <line x1="0" y1="0" x2="0" y2="-62" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="0" cy="0" r="7" fill="#e11d48" />
                    <circle cx="0" cy="0" r="3" fill="#ffffff" />
                </g>
            </svg>
            <div className="flex flex-col items-center -mt-7 text-center">
                <span className="text-4xl font-black tracking-tight text-foreground">{score}<span className="text-lg text-muted-foreground font-semibold">/100</span></span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-500 dark:text-rose-400 mt-0.5">{label}</span>
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
                                    <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${isWinning ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-rose-500/10 text-rose-500 border border-rose-500/20"}`}>
                                        {factor.status}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Visual Dual Progress Bar */}
                            <div className="w-full flex flex-col gap-1">
                                <div className="w-full h-2.5 rounded-full bg-muted/50 overflow-hidden relative">
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
    const [simulatorTheme, setSimulatorTheme] = useState<"light" | "dark">("light");
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

    // Fetch real YouTube competitors
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
        <div className="w-full flex flex-col gap-6 items-center pt-2 md:pt-6 max-w-6xl mx-auto px-2 sm:px-4">
            
            {/* TOOL HEADER */}
            <div className="w-full flex flex-col gap-2 items-center text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                    <Swords className="w-3.5 h-3.5" />
                    <span>YouTube Thumbnail Battlefield™</span>
                    <span className="text-[10px] bg-rose-500/20 text-rose-600 dark:text-rose-300 px-1.5 py-0.2 rounded font-semibold ml-1">Live Feed</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Thumbnail Battlefield & Competitor Simulator
                </h1>
                <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Test your thumbnail directly alongside real YouTube competitors in live mobile & desktop feeds. Evaluate CTR packaging, readability, and title synergy before publishing.
                </p>
            </div>

            {/* FORM CONTAINER CARD */}
            <div className="w-full bg-card border rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm flex flex-col gap-5 text-left">
                <form onSubmit={handleAnalyze} className="w-full flex flex-col gap-5">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Target Keyword */}
                        <div className="flex flex-col gap-2 text-left">
                            <Label htmlFor="keyword" className="text-xs font-semibold text-foreground flex items-center justify-between">
                                <span>1. Target Keyword / Search Topic <span className="text-rose-500">*</span></span>
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
                                    className="h-10 text-xs border-border w-full pr-28 rounded-xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleFetchCompetitors(keyword)}
                                    className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-muted hover:bg-muted/80 text-foreground text-[10px] font-bold rounded-lg flex items-center gap-1 transition-colors"
                                >
                                    <Search className="w-3 h-3" /> Fetch Real
                                </button>
                            </div>
                        </div>

                        {/* Video Title */}
                        <div className="flex flex-col gap-2 text-left">
                            <Label htmlFor="title" className="text-xs font-semibold text-foreground">
                                2. Planned Video Title <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                id="title"
                                placeholder="e.g. 5 Best Chest Exercises for a Bigger Chest At Home..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="h-10 text-xs border-border w-full rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Thumbnail Upload or Image URL */}
                    <div className="w-full flex flex-col gap-2.5 text-left">
                        <Label className="text-xs font-semibold text-foreground">
                            3. Thumbnail Image (Upload File or Paste Image URL)
                        </Label>
                        
                        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            <div className="md:col-span-8 flex flex-col gap-2.5">
                                <div className="relative border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-rose-500/60 transition-colors bg-muted/20">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                    />
                                    <div className="flex flex-col items-center justify-center gap-1 py-1">
                                        <div className="w-9 h-9 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-0.5">
                                            <Upload className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-foreground">Drag & drop your thumbnail or click to browse</span>
                                        <span className="text-[10px] text-muted-foreground">PNG, JPG, WEBP (Recommended: 1280x720 16:9)</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground whitespace-nowrap">OR Image URL:</span>
                                    <Input
                                        placeholder="https://i.ytimg.com/vi/.../maxresdefault.jpg"
                                        value={thumbnailUrl}
                                        onChange={(e) => {
                                            setThumbnailUrl(e.target.value);
                                            setPreviewImage(e.target.value);
                                        }}
                                        className="h-9 text-xs border-border flex-1 rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Live Image Preview Frame */}
                            <div className="md:col-span-4 flex flex-col items-center justify-center">
                                {previewImage ? (
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-rose-500/50 shadow-sm group bg-slate-900">
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
                                            className="absolute top-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded-full hover:bg-rose-600 transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ) : (
                                    <div className="w-full aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex flex-col items-center justify-center text-muted-foreground gap-1.5 p-3 text-center">
                                        <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                                        <span className="text-xs font-medium">No Thumbnail Uploaded</span>
                                        <span className="text-[10px] text-muted-foreground">Upload image to view live battlefield</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional Settings */}
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-border/60 text-left">
                        <div className="flex flex-col gap-1">
                            <Label className="text-[11px] font-medium text-muted-foreground">Channel Size</Label>
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
                            <Label className="text-[11px] font-medium text-muted-foreground">Target Region</Label>
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
                            <Label className="text-[11px] font-medium text-muted-foreground">Surface Context</Label>
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
                            <Label className="text-[11px] font-medium text-muted-foreground">User Rank Spot</Label>
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

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isPending || !keyword.trim() || !title.trim()}
                        className="h-11 text-xs font-bold gap-2 w-full shadow-md bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:opacity-95 text-white rounded-xl"
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
            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex gap-4 flex-col items-center mt-4">
                    <Skeleton className="w-full h-[380px] rounded-2xl" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <Skeleton className="w-full h-[280px] rounded-2xl" />
                        <Skeleton className="w-full h-[280px] rounded-2xl" />
                    </div>
                </div>
            )}

            {/* UNIFIED SINGLE MASTER OUTPUT CONTAINER (Matches go-no-go, video-audit, title-ab-tester) */}
            {result && !isPending && (
                <div className="w-full bg-card border rounded-2xl shadow-sm flex flex-col divide-y divide-border overflow-hidden text-left animate-in fade-in duration-300 my-4">
                    
                    {/* SECTION 1: MASTER SPEEDOMETER & EXECUTIVE AUDIT SUMMARY */}
                    <div className="w-full p-5 sm:p-6 md:p-8 flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Thumbnail Battlefield Report</span>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                        {result.ctrPositionPercentile}
                                    </span>
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight line-clamp-1">
                                    {title}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-muted/20 border p-5 rounded-2xl items-center">
                            
                            {/* Speedometer Gauge */}
                            <div className="lg:col-span-5 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-border pb-4 lg:pb-0 lg:pr-6">
                                <SpeedometerGauge
                                    score={result.publishReadinessScore}
                                    label={result.publishVerdict}
                                    sublabel={result.scoreGrade}
                                />
                            </div>

                            {/* Executive Summary */}
                            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Packaging Audit Executive Summary</span>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{result.verdictSummary}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                                    <div className="p-3 rounded-xl bg-card border flex flex-col gap-0.5">
                                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Estimated CTR Position</span>
                                        <span className="text-base sm:text-lg font-black text-rose-500">{result.estimatedCtrRange}</span>
                                        <span className="text-[10px] text-muted-foreground">Against Niche Competitors</span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-card border flex flex-col gap-0.5">
                                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Packaging Score</span>
                                        <span className="text-base sm:text-lg font-black text-emerald-500">{result.packagingScore}/100</span>
                                        <span className="text-[10px] text-muted-foreground">{result.scoreGrade}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* SECTION 2: LIVE FEED SIMULATOR (MOBILE vs DESKTOP & LIGHT vs DARK THEME) */}
                    <div className="w-full p-5 sm:p-6 flex flex-col gap-5 bg-muted/10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 font-bold">
                                    <Eye className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Live Feed Simulator</h3>
                                    <p className="text-xs text-muted-foreground">Preview your thumbnail positioned against actual YouTube competitors in real-time</p>
                                </div>
                            </div>

                            {/* Viewport & Theme Controls */}
                            <div className="flex items-center gap-2">
                                {/* Theme Switcher (Light vs Dark) */}
                                <div className="flex items-center gap-1 bg-background border p-1 rounded-xl">
                                    <Button
                                        type="button"
                                        variant={simulatorTheme === "light" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setSimulatorTheme("light")}
                                        className="h-7 text-[11px] font-semibold gap-1 px-2 rounded-lg"
                                    >
                                        <Sun className="w-3 h-3 text-amber-500" /> Light
                                    </Button>
                                    <Button
                                        type="button"
                                        variant={simulatorTheme === "dark" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setSimulatorTheme("dark")}
                                        className="h-7 text-[11px] font-semibold gap-1 px-2 rounded-lg"
                                    >
                                        <Moon className="w-3 h-3 text-indigo-400" /> Dark
                                    </Button>
                                </div>

                                {/* Mobile vs Desktop Device Switcher */}
                                <div className="flex items-center gap-1 bg-background border p-1 rounded-xl">
                                    <Button
                                        type="button"
                                        variant={previewDevice === "mobile" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setPreviewDevice("mobile")}
                                        className="h-7 text-[11px] font-semibold gap-1 px-2 rounded-lg"
                                    >
                                        <Smartphone className="w-3 h-3" /> Mobile
                                    </Button>
                                    <Button
                                        type="button"
                                        variant={previewDevice === "desktop" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setPreviewDevice("desktop")}
                                        className="h-7 text-[11px] font-semibold gap-1 px-2 rounded-lg"
                                    >
                                        <Monitor className="w-3 h-3" /> Desktop
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* 📱 MOBILE PHONE SIMULATOR VIEW (Supports Light & Dark Themes) */}
                        {previewDevice === "mobile" && (
                            <div className="w-full flex justify-center py-2">
                                <div className={`w-full max-w-[390px] border-[8px] border-slate-800 rounded-[40px] overflow-hidden shadow-2xl relative transition-colors ${simulatorTheme === "light" ? "bg-white text-slate-900" : "bg-slate-950 text-white"}`}>
                                    {/* Phone Notch */}
                                    <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700" />
                                    </div>

                                    {/* Mobile App Header */}
                                    <div className={`px-4 py-2.5 flex items-center justify-between border-b ${simulatorTheme === "light" ? "bg-white border-slate-200 text-slate-900" : "bg-slate-950 border-slate-800 text-white"}`}>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-5 h-3.5 bg-rose-600 rounded flex items-center justify-center text-[8px] font-black text-white">▶</div>
                                            <span className="text-xs font-extrabold tracking-tight">YouTube</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Search className="w-3.5 h-3.5 opacity-70" />
                                            <div className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center font-bold ${simulatorTheme === "light" ? "bg-slate-200 text-slate-800" : "bg-slate-800 text-slate-200"}`}>YOU</div>
                                        </div>
                                    </div>

                                    {/* Query Bar */}
                                    <div className={`px-3 py-1.5 border-b flex items-center justify-between text-[11px] ${simulatorTheme === "light" ? "bg-slate-100 border-slate-200 text-slate-800" : "bg-slate-900 border-slate-800 text-slate-300"}`}>
                                        <span className="line-clamp-1">🔎 &quot;{keyword || "chest workout at home"}&quot;</span>
                                        <span className="text-[10px] text-rose-500 font-bold">Filter</span>
                                    </div>

                                    {/* Mobile Feed Items */}
                                    <div className={`flex flex-col divide-y max-h-[480px] overflow-y-auto ${simulatorTheme === "light" ? "divide-slate-200 bg-white" : "divide-slate-800 bg-slate-950"}`}>
                                        {simulatedFeedList.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex flex-col transition-all ${item.isUser ? (simulatorTheme === "light" ? "bg-rose-50/90 ring-2 ring-rose-500/60" : "bg-rose-950/40 ring-2 ring-rose-500/60") : ""}`}
                                            >
                                                {item.isUser && (
                                                    <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white text-[10px] font-extrabold px-3 py-1 flex items-center justify-between">
                                                        <span>⚡ YOUR VIDEO (POSITION #{userPosition})</span>
                                                        <span>{item.packagingScore}/100 Score</span>
                                                    </div>
                                                )}

                                                <div className="relative aspect-video w-full bg-slate-900">
                                                    {item.thumbnailUrl ? (
                                                        // eslint-disable-next-line @next/next/no-img-element
                                                        <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex flex-col items-center justify-center text-xs text-slate-400">
                                                            <ImageIcon className="w-6 h-6 mb-1" />
                                                            <span>Upload Thumbnail</span>
                                                        </div>
                                                    )}
                                                    <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                        10:45
                                                    </span>
                                                </div>

                                                <div className="p-3 flex items-start gap-2.5">
                                                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${item.isUser ? "bg-rose-600 text-white" : (simulatorTheme === "light" ? "bg-slate-200 text-slate-800" : "bg-slate-800 text-slate-200")}`}>
                                                        {item.channelName.charAt(0)}
                                                    </div>
                                                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                                        <h4 className={`text-xs font-bold line-clamp-2 ${item.isUser ? (simulatorTheme === "light" ? "text-rose-950" : "text-rose-200") : (simulatorTheme === "light" ? "text-slate-900" : "text-white")}`}>
                                                            {item.title}
                                                        </h4>
                                                        <p className={`text-[10px] ${simulatorTheme === "light" ? "text-slate-500" : "text-slate-400"}`}>
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

                        {/* 💻 DESKTOP BROWSER SIMULATOR VIEW (Supports Light & Dark Themes) */}
                        {previewDevice === "desktop" && (
                            <div className={`w-full border rounded-xl overflow-hidden shadow-xl ${simulatorTheme === "light" ? "bg-white text-slate-900 border-slate-200" : "bg-slate-950 text-white border-slate-800"}`}>
                                {/* macOS Window Header */}
                                <div className={`px-4 py-2.5 border-b flex items-center justify-between ${simulatorTheme === "light" ? "bg-slate-100 border-slate-200" : "bg-slate-900 border-slate-800"}`}>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                                        <span className="text-xs opacity-60 ml-2 font-mono">youtube.com/results?search_query={encodeURIComponent(keyword || "chest workout")}</span>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${simulatorTheme === "light" ? "bg-slate-200 text-slate-700" : "bg-slate-800 text-slate-300"}`}>
                                        Desktop Search View
                                    </span>
                                </div>

                                {/* Desktop Search Feed List */}
                                <div className="p-4 flex flex-col gap-3.5 max-h-[500px] overflow-y-auto">
                                    {simulatedFeedList.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex flex-col sm:flex-row gap-4 p-3 rounded-xl transition-all ${item.isUser ? (simulatorTheme === "light" ? "bg-rose-50 border-2 border-rose-500/60" : "bg-rose-950/30 border-2 border-rose-500/50") : (simulatorTheme === "light" ? "hover:bg-slate-50 border border-slate-200" : "hover:bg-slate-900/60 border border-slate-800/60")}`}
                                        >
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

                                            <div className="flex flex-col gap-1.5 flex-1 min-w-0 py-0.5 text-left">
                                                <h4 className={`text-sm font-bold line-clamp-2 ${item.isUser ? (simulatorTheme === "light" ? "text-rose-900" : "text-rose-300") : (simulatorTheme === "light" ? "text-slate-900" : "text-slate-100")}`}>
                                                    {item.title}
                                                </h4>
                                                <p className={`text-xs ${simulatorTheme === "light" ? "text-slate-500" : "text-slate-400"}`}>
                                                    {item.views} • {item.publishedTime}
                                                </p>
                                                <div className="flex items-center gap-2 my-0.5">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${item.isUser ? "bg-rose-600 text-white" : (simulatorTheme === "light" ? "bg-slate-200 text-slate-800" : "bg-slate-800 text-slate-300")}`}>
                                                        {item.channelName.charAt(0)}
                                                    </div>
                                                    <span className={`text-xs font-semibold ${simulatorTheme === "light" ? "text-slate-800" : "text-slate-300"}`}>{item.channelName}</span>
                                                </div>
                                                <p className={`text-xs line-clamp-2 ${simulatorTheme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                                                    Comprehensive step-by-step breakdown covering exact exercises, form corrections, and high-CTR packaging strategies.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* SECTION 3: COMPETITOR THUMBNAIL BATTLE MATRIX (REAL THUMBNAILS) */}
                    <div className="w-full p-5 sm:p-6 flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-3">
                            <div className="flex items-center gap-2">
                                <Crosshair className="w-5 h-5 text-rose-500" />
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Competitor Thumbnail Battle Matrix</h3>
                                    <p className="text-xs text-muted-foreground">Comparing your thumbnail against top real YouTube videos for: <span className="font-semibold text-foreground">&quot;{keyword}&quot;</span></p>
                                </div>
                            </div>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20">
                                Real Competitor Thumbnails
                            </span>
                        </div>

                        {result.searchShelfSimulation.visualSaturationWarning && (
                            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
                                <div>
                                    <span className="font-bold">Visual Saturation Alert: </span>
                                    {result.searchShelfSimulation.visualSaturationWarning}
                                </div>
                            </div>
                        )}

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

                    {/* SECTION 4: FACTOR COMPARISON GRAPH & STRENGTHS/WEAKNESSES */}
                    <div className="w-full p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-muted/10">
                        <div className="lg:col-span-7 flex flex-col gap-4">
                            <div className="flex items-center justify-between border-b border-border pb-2">
                                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-rose-500" /> Competitive Factor Battle Graph
                                </h3>
                                <span className="text-xs text-muted-foreground">You vs Competitors</span>
                            </div>
                            <FactorComparisonChart factors={result.battleAnalysis.factors} />
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-4">
                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4" /> Your Biggest Advantage
                                </span>
                                <p className="text-xs text-emerald-950 dark:text-emerald-200 font-medium">
                                    {result.battleAnalysis.biggestAdvantage}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <AlertTriangle className="w-4 h-4" /> Your Biggest Weakness
                                </span>
                                <p className="text-xs text-rose-950 dark:text-rose-200 font-medium">
                                    {result.battleAnalysis.biggestWeakness}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 p-4 rounded-xl bg-card border shadow-xs">
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

                    {/* SECTION 5: MOBILE READABILITY & FAST-SCROLL STRESS TEST (HIGH UTILITY CREATOR TOOL) */}
                    <div className="w-full p-5 sm:p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2">
                                <Maximize2 className="w-5 h-5 text-indigo-500" />
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Mobile Readability & Fast-Scroll Test</h3>
                                    <p className="text-xs text-muted-foreground">75%+ of YouTube viewers browse on mobile. Test how your thumbnail holds up when scaled down or scrolled past fast.</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                                75% Mobile Audience
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                            {/* Micro Scale Preview */}
                            <div className="p-4 rounded-xl bg-muted/20 border flex flex-col gap-2.5 items-center text-center">
                                <span className="text-xs font-bold text-foreground">1. Tiny Mobile Sidebar View (120px)</span>
                                <div className="w-32 aspect-video rounded-lg overflow-hidden border border-border shadow-xs bg-slate-900">
                                    {previewImage ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={previewImage} alt="Micro View" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">Micro Thumbnail</div>
                                    )}
                                </div>
                                <span className="text-[11px] text-muted-foreground">Is text legible and main subject instantly recognizable at this size?</span>
                            </div>

                            {/* Blur & Fast Scroll Simulation */}
                            <div className="p-4 rounded-xl bg-muted/20 border flex flex-col gap-2.5 items-center text-center">
                                <span className="text-xs font-bold text-foreground">2. 0.3s Fast-Scroll Pop Test</span>
                                <div className="w-36 aspect-video rounded-lg overflow-hidden border border-border shadow-xs bg-slate-900 relative">
                                    {previewImage ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={previewImage} alt="Scroll Blur" className="w-full h-full object-cover filter blur-[1.5px] contrast-125" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">Blurred Preview</div>
                                    )}
                                </div>
                                <span className="text-[11px] text-muted-foreground">Does the visual contrast pull viewer eyes while fast-scrolling down feed?</span>
                            </div>

                            {/* Mobile Checklist */}
                            <div className="p-4 rounded-xl bg-muted/20 border flex flex-col gap-2 text-left justify-between">
                                <span className="text-xs font-bold text-foreground flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Mobile Packaging Checklist
                                </span>
                                <ul className="space-y-1.5 text-[11px] text-muted-foreground">
                                    <li className="flex items-center gap-1.5 text-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Font overlay under 4 words max
                                    </li>
                                    <li className="flex items-center gap-1.5 text-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> High facial expression or distinct object
                                    </li>
                                    <li className="flex items-center gap-1.5 text-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Clear separation from background
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 6: TITLE + THUMBNAIL SYNERGY ANALYSIS */}
                    <div className="w-full p-5 sm:p-6 flex flex-col gap-4 bg-muted/10">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-500" />
                                <h3 className="text-base font-bold text-foreground">Title + Thumbnail Synergy Analysis</h3>
                            </div>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                                Synergy Score: {result.titleThumbnailSynergy.clarityScore}/100
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-card border">
                                <span className="text-xs font-bold text-rose-500">Title Role (WHAT IT IS)</span>
                                <p className="text-xs text-foreground font-medium">{result.titleThumbnailSynergy.titleRole}</p>
                            </div>

                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-card border">
                                <span className="text-xs font-bold text-emerald-500">Thumbnail Role (WHY CLICK NOW)</span>
                                <p className="text-xs text-foreground font-medium">{result.titleThumbnailSynergy.thumbnailRole}</p>
                            </div>
                        </div>

                        {result.titleThumbnailSynergy.redundancyFeedback && (
                            <div className="text-xs text-muted-foreground bg-card p-3.5 rounded-xl border border-border flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-foreground">Redundancy Check: </span>
                                    {result.titleThumbnailSynergy.redundancyFeedback}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* SECTION 7: 3 ACTIONABLE FIXES & RECOMMENDED A/B CONCEPTS */}
                    <div className="w-full p-5 sm:p-6 flex flex-col gap-6">
                        
                        {/* Fixes */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-rose-500" />
                                <h3 className="text-base font-bold text-foreground">3 Actionable Fixes to Out-Click Competitor #1</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {result.beatCompetitorFixes.map((fixItem, idx) => (
                                    <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-muted/20 border border-border">
                                        <span className="text-xs font-bold text-rose-500 flex items-center gap-1.5">
                                            <Zap className="w-4 h-4" /> Fix #{idx + 1}: {fixItem.title}
                                        </span>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{fixItem.fix}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recommended A/B Concepts */}
                        {result.aBTestVariations && result.aBTestVariations.length > 0 && (
                            <div className="flex flex-col gap-3 pt-3 border-t border-border">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-amber-500" /> Recommended A/B Thumbnail Concepts
                                    </h3>
                                    <span className="text-xs text-muted-foreground">High-CTR Packaging Alternatives</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {result.aBTestVariations.map((varItem, idx) => (
                                        <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl bg-muted/20 border border-border">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-foreground">{varItem.name}</span>
                                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                    Score: {varItem.predictedPackagingScore}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-card border text-xs font-bold text-rose-500">
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

                </div>
            )}

            {/* Support Banner */}
            <div className="w-full mt-2">
                <BuyMeCoffeeBanner />
            </div>
        </div>
    );
};
