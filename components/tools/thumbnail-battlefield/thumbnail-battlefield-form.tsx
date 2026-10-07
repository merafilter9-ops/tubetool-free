"use client";

import { useState, useTransition, ChangeEvent } from "react";
import { Copy, Check, Swords, Upload, Image as ImageIcon, Sparkles, RefreshCw, Smartphone, Monitor, ShieldCheck, AlertTriangle, Zap, Target, Layers, Trophy, Crosshair } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';


import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

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

export const ThumbnailBattlefieldForm = () => {
    const [keyword, setKeyword] = useState("");
    const [title, setTitle] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [activeSurface, setActiveSurface] = useState<"search" | "home" | "suggested" | "mobile">("search");
    const [previewDevice, setPreviewDevice] = useState<"mobile" | "desktop">("mobile");
    const [channelSize, setChannelSize] = useState("1K-10K");
    const [targetRegion, setTargetRegion] = useState("Global");

    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<BattlefieldResult | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

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
                        particleCount: 100,
                        spread: 70,
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

    const getScoreBadgeColor = (score: number) => {
        if (score >= 80) return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
        if (score >= 60) return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30";
    };

    const getFactorProgressColor = (score: number) => {
        if (score >= 80) return "bg-emerald-500";
        if (score >= 60) return "bg-amber-500";
        return "bg-rose-500";
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center gap-2 pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
                    <Swords className="w-3.5 h-3.5" /> Thumbnail Battlefield™
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    See Your Thumbnail Next to the Competition
                </h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                    Test your video thumbnail and title against real competing search results before spending impressions. Know if your packaging will win the click.
                </p>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAnalyze} className="w-full flex flex-col gap-5 bg-card border border-border p-5 sm:p-7 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Target Keyword */}
                    <div className="flex flex-col gap-2 text-left">
                        <Label htmlFor="keyword" className="text-xs font-bold text-foreground">
                            Target Keyword / Topic <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                            id="keyword"
                            placeholder="e.g. chest workout at home, python tutorial..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="h-11 text-xs border-border"
                        />
                    </div>

                    {/* Video Title */}
                    <div className="flex flex-col gap-2 text-left">
                        <Label htmlFor="title" className="text-xs font-bold text-foreground">
                            Planned Video Title <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                            id="title"
                            placeholder="e.g. 5 Best Chest Exercises for a Bigger Chest..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="h-11 text-xs border-border"
                        />
                    </div>
                </div>

                {/* Thumbnail Upload or Image URL */}
                <div className="flex flex-col gap-2 text-left">
                    <Label className="text-xs font-bold text-foreground">
                        Thumbnail Image (Upload File or Image URL)
                    </Label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-8 flex flex-col gap-2">
                            <div className="relative border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors bg-muted/20">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                />
                                <div className="flex flex-col items-center justify-center gap-1.5 py-2">
                                    <Upload className="w-6 h-6 text-muted-foreground" />
                                    <span className="text-xs font-semibold text-foreground">Drag & drop your thumbnail or click to browse</span>
                                    <span className="text-[10px] text-muted-foreground">PNG, JPG, WEBP up to 5MB</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-muted-foreground">OR Paste URL:</span>
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
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-xs group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={previewImage} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPreviewImage("");
                                            setThumbnailUrl("");
                                        }}
                                        className="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-full hover:bg-rose-600 transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full aspect-video rounded-xl border border-border bg-muted/40 flex flex-col items-center justify-center text-muted-foreground gap-1">
                                    <ImageIcon className="w-6 h-6" />
                                    <span className="text-[11px]">Preview Box</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Additional Settings */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-border pt-4 text-left">
                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] text-muted-foreground">Channel Size</Label>
                        <select
                            value={channelSize}
                            onChange={(e) => setChannelSize(e.target.value)}
                            className="h-9 rounded-lg border border-border bg-background px-2 text-xs"
                        >
                            <option value="New (0-1K)">New (0-1K)</option>
                            <option value="1K-10K">1K-10K</option>
                            <option value="10K-100K">10K-100K</option>
                            <option value="100K+">100K+</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] text-muted-foreground">Target Region</Label>
                        <select
                            value={targetRegion}
                            onChange={(e) => setTargetRegion(e.target.value)}
                            className="h-9 rounded-lg border border-border bg-background px-2 text-xs"
                        >
                            <option value="Global">Global</option>
                            <option value="United States">United States</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] text-muted-foreground">Surface Context</Label>
                        <select
                            value={activeSurface}
                            onChange={(e) => setActiveSurface(e.target.value as any)}
                            className="h-9 rounded-lg border border-border bg-background px-2 text-xs"
                        >
                            <option value="search">🔎 YouTube Search</option>
                            <option value="home">🏠 Home Feed</option>
                            <option value="suggested">▶️ Suggested Videos</option>
                            <option value="mobile">📱 Mobile Search</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-[11px] text-muted-foreground">Preview Format</Label>
                        <div className="flex items-center gap-1 h-9">
                            <Button
                                type="button"
                                variant={previewDevice === "mobile" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setPreviewDevice("mobile")}
                                className="h-8 text-xs flex-1 gap-1"
                            >
                                <Smartphone className="w-3.5 h-3.5" /> Mobile
                            </Button>
                            <Button
                                type="button"
                                variant={previewDevice === "desktop" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setPreviewDevice("desktop")}
                                className="h-8 text-xs flex-1 gap-1"
                            >
                                <Monitor className="w-3.5 h-3.5" /> Desktop
                            </Button>
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isPending || !keyword.trim() || !title.trim()}
                    className="h-12 text-sm font-bold gap-2 w-full shadow-md bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:opacity-95 text-white"
                >
                    {isPending ? (
                        <>
                            <RefreshCw className="w-4 h-4 animate-spin" /> Simulating Search Shelf & Battlefield...
                        </>
                    ) : (
                        <>
                            <Swords className="w-4 h-4" /> Enter Thumbnail Battlefield
                        </>
                    )}
                </Button>
            </form>

            {/* Skeleton Loading State */}
            {isPending && (
                <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
                        <Skeleton className="h-10 w-48 rounded-xl" />
                        <Skeleton className="h-6 w-32 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Skeleton className="h-40 w-full rounded-2xl" />
                        <Skeleton className="h-40 w-full rounded-2xl" />
                        <Skeleton className="h-40 w-full rounded-2xl" />
                    </div>
                </div>
            )}

            {/* Results Dashboard */}
            {result && !isPending && (
                <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300">
                    
                    {/* Launch Readiness Header Card */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm">
                        <div className="flex items-center gap-5 w-full md:w-auto text-left">
                            <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl border-2 ${getScoreBadgeColor(result.publishReadinessScore)}`}>
                                <span className="text-3xl font-black">{result.publishReadinessScore}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{result.publishVerdict}</span>
                            </div>
                            <div className="flex flex-col gap-1 max-w-xl">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Packaging Strength Score</span>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                                        {result.ctrPositionPercentile}
                                    </span>
                                </div>
                                <h2 className="text-lg font-bold text-foreground line-clamp-1">{title}</h2>
                                <p className="text-xs text-muted-foreground line-clamp-2">{result.verdictSummary}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 w-full md:w-auto text-right border-t md:border-t-0 md:border-l border-border pt-3 md:pt-0 md:pl-6">
                            <span className="text-xs text-muted-foreground uppercase font-semibold">Estimated CTR Position</span>
                            <span className="text-xl font-extrabold text-primary">{result.estimatedCtrRange}</span>
                            <span className="text-[11px] text-muted-foreground">Based onComparable Niche Packaging</span>
                        </div>
                    </div>

                    {/* 🔎 SEARCH SHELF SIMULATOR */}
                    <div className="w-full flex flex-col gap-5 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-4">
                            <div className="flex items-center gap-2">
                                <Crosshair className="w-5 h-5 text-rose-500" />
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Search Shelf Simulator</h3>
                                    <p className="text-xs text-muted-foreground">Simulated YouTube feed for keyword: <span className="font-semibold text-foreground">&quot;{keyword}&quot;</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-muted-foreground">Surface:</span>
                                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary capitalize">
                                    {activeSurface} Surface
                                </span>
                            </div>
                        </div>

                        {/* Search Shelf Warning */}
                        {result.searchShelfSimulation.visualSaturationWarning && (
                            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold">Visual Saturation Alert: </span>
                                    {result.searchShelfSimulation.visualSaturationWarning}
                                </div>
                            </div>
                        )}

                        {/* SIMULATED YOUTUBE SEARCH GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            {/* USER VIDEO CARD */}
                            <div className="flex flex-col gap-2.5 p-3 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border-2 border-rose-500/50 relative shadow-sm">
                                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider">
                                    YOUR VIDEO
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
                                    <p className="text-[10px] text-muted-foreground">Your Channel • 0 views • Just now</p>
                                    <div className="mt-1 flex items-center justify-between text-[11px] pt-1.5 border-t border-rose-500/20">
                                        <span className="font-semibold text-muted-foreground">Score:</span>
                                        <span className="font-extrabold text-rose-600 dark:text-rose-400">{result.packagingScore}/100</span>
                                    </div>
                                </div>
                            </div>

                            {/* COMPETITOR CARDS */}
                            {result.searchShelfSimulation.competitors.map((comp) => (
                                <div key={comp.rank} className="flex flex-col gap-2.5 p-3 rounded-xl bg-muted/30 border border-border/60 shadow-xs">
                                    <div className="flex items-center justify-between">
                                        <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-[10px] font-bold">
                                            #{comp.rank} COMPETITOR
                                        </span>
                                        <span className="text-[10px] font-bold text-muted-foreground">{comp.views}</span>
                                    </div>
                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-2 text-center border border-border">
                                        <span className="text-xs font-black text-amber-400 uppercase tracking-wider line-clamp-2">
                                            &quot;{comp.thumbnailText}&quot;
                                        </span>
                                        <span className="text-[9px] text-slate-400 mt-1">Competitor Visual</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-xs font-semibold line-clamp-2 text-foreground">{comp.title}</h4>
                                        <p className="text-[10px] text-muted-foreground">{comp.channelName} • {comp.age}</p>
                                        <p className="text-[10px] text-muted-foreground line-clamp-2 mt-1 bg-muted/50 p-1.5 rounded">
                                            💡 {comp.strength}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* 🥊 THUMBNAIL BATTLE FACTOR BREAKDOWN */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Factor Comparison Table */}
                        <div className="lg:col-span-7 flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-amber-500" /> Competitive Factor Battle
                                </h3>
                                <span className="text-xs text-muted-foreground">You vs Competitor Average</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                {result.battleAnalysis.factors.map((factor, idx) => (
                                    <div key={idx} className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-muted/30 border border-border/50">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-semibold text-foreground">{factor.name}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="font-bold text-primary">You: {factor.userScore}</span>
                                                <span className="text-muted-foreground text-[11px]">Comp: {factor.competitorAvg}</span>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${factor.status === "Winning" ? "bg-emerald-500/10 text-emerald-500" : factor.status === "Below Avg" ? "bg-rose-500/10 text-rose-500" : "bg-muted text-muted-foreground"}`}>
                                                    {factor.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden flex">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${getFactorProgressColor(factor.userScore)}`}
                                                style={{ width: `${factor.userScore}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Strengths & Weaknesses Callouts */}
                        <div className="lg:col-span-5 flex flex-col gap-4">
                            <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-left">
                                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4" /> Your Biggest Advantage
                                </span>
                                <p className="text-xs text-emerald-950 dark:text-emerald-200">
                                    {result.battleAnalysis.biggestAdvantage}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-left">
                                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <AlertTriangle className="w-4 h-4" /> Your Biggest Weakness
                                </span>
                                <p className="text-xs text-rose-950 dark:text-rose-200">
                                    {result.battleAnalysis.biggestWeakness}
                                </p>
                            </div>

                            {/* Surface Readiness */}
                            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border shadow-sm text-left">
                                <span className="text-xs font-bold text-foreground">Packaging Score Across YouTube Surfaces</span>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-2.5 rounded-lg bg-muted/40 text-xs flex flex-col gap-0.5">
                                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Search</span>
                                        <span className="font-bold text-primary">{result.surfaceReadiness.search.score}/100</span>
                                        <span className="text-[10px] text-muted-foreground line-clamp-1">{result.surfaceReadiness.search.verdict}</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-muted/40 text-xs flex flex-col gap-0.5">
                                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Home Feed</span>
                                        <span className="font-bold text-primary">{result.surfaceReadiness.homeFeed.score}/100</span>
                                        <span className="text-[10px] text-muted-foreground line-clamp-1">{result.surfaceReadiness.homeFeed.verdict}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 🧩 TITLE + THUMBNAIL SYNERGY */}
                    <div className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-500" />
                                <h3 className="text-base font-bold text-foreground">Title + Thumbnail Synergy Analysis</h3>
                            </div>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                                Synergy Score: {result.titleThumbnailSynergy.clarityScore}/100
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-muted/30 border border-border/50">
                                <span className="text-xs font-bold text-primary">Title Role (WHAT)</span>
                                <p className="text-xs font-medium text-foreground">{result.titleThumbnailSynergy.titleRole}</p>
                            </div>

                            <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-muted/30 border border-border/50">
                                <span className="text-xs font-bold text-emerald-500">Thumbnail Role (WHY CLICK)</span>
                                <p className="text-xs font-medium text-foreground">{result.titleThumbnailSynergy.thumbnailRole}</p>
                            </div>
                        </div>

                        {result.titleThumbnailSynergy.redundancyFeedback && (
                            <p className="text-xs text-muted-foreground bg-muted/40 p-3 rounded-xl border border-border/60">
                                💡 <span className="font-semibold text-foreground">Redundancy Check: </span>
                                {result.titleThumbnailSynergy.redundancyFeedback}
                            </p>
                        )}
                    </div>

                    {/* 🥊 3 "BEAT COMPETITOR #1" FIXES */}
                    <div className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm text-left">
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-rose-500" />
                            <h3 className="text-base font-bold text-foreground">3 Actionable Fixes to Beat Competitor #1</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {result.beatCompetitorFixes.map((fixItem, idx) => (
                                <div key={idx} className="flex flex-col gap-1.5 p-4 rounded-xl bg-muted/30 border border-border/60">
                                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                                        <Zap className="w-3.5 h-3.5" /> Fix #{idx + 1}: {fixItem.title}
                                    </span>
                                    <p className="text-xs text-secondary-foreground dark:text-gray-400">{fixItem.fix}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🧪 A/B TEST VARIATIONS */}
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
                                    <div key={idx} className="flex flex-col gap-2.5 p-4 rounded-xl bg-muted/30 border border-border/60">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-foreground">{varItem.name}</span>
                                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                                                Score: {varItem.predictedPackagingScore}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-2 rounded bg-muted/50 text-xs font-bold text-primary">
                                            <span>Overlay Text: &quot;{varItem.thumbnailText}&quot;</span>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleCopy(varItem.thumbnailText, `ab-${idx}`)}
                                                className="h-6 w-6 p-0 text-xs flex-shrink-0"
                                            >
                                                {copiedIndex === `ab-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-primary/70" />}
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
