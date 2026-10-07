"use client";

import { useState, useTransition, useEffect } from "react";
import { Copy, Check, ExternalLink, Sparkles, CheckCircle2, AlertTriangle, XCircle, ChevronDown, ChevronUp, RefreshCw, Wand2, Smartphone, Eye, Palette, Type, Gauge } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

interface FactorDetail {
    score: number;
    label: string;
    feedback: string;
}

interface AuditResult {
    overallScore: number;
    scoreGrade: string;
    scoreSummary: string;
    extractedVideoInfo: {
        title: string;
        authorName: string;
        thumbnailUrl: string;
    };
    titleAnalysis: {
        score: number;
        charCount: number;
        lengthStatus: string;
        ctrPsychologyGrade: string;
        ctrPsychologyFeedback: string;
        keywordsFound: string[];
        suggestions: string[];
    };
    descriptionAnalysis: {
        score: number;
        aboveTheFoldHookScore: string;
        aboveTheFoldFeedback: string;
        hasLinks: boolean;
        hasTimestamps: boolean;
        hasCTA: boolean;
        keywordDensityFeedback: string;
        suggestions: string[];
    };
    tagAnalysis: {
        score: number;
        tagCountStatus: string;
        feedback: string;
        missingKeywordOpportunities: string[];
    };
    thumbnailAssessment: {
        score: number;
        factors?: {
            colorContrast?: FactorDetail;
            mobileReadability?: FactorDetail;
            focalPoint?: FactorDetail;
            curiosityGap?: FactorDetail;
        };
        contrastFeedback: string;
        textOverlayFeedback: string;
        mobileReadability: string;
        visualSuggestions: string[];
    };
    priorityActionItems: {
        rank: number;
        title: string;
        action: string;
    }[];
    optimizedTitleAlternatives: string[];
    optimizedDescriptionSnippet: string;
}

// Speedometer Radial Gauge Component
const SpeedometerGauge = ({ score }: { score: number }) => {
    // Rotation range: -90deg (0 score) to +90deg (100 score)
    const angle = (score / 100) * 180 - 90;
    const arcLength = 157.08; // Math.PI * 50
    const dashOffset = arcLength - (arcLength * Math.min(Math.max(score, 0), 100)) / 100;

    const getScoreLabel = (s: number) => {
        if (s >= 80) return "High CTR Potential";
        if (s >= 60) return "Moderate Optimization";
        return "Needs Redesign";
    };

    const getScoreColor = (s: number) => {
        if (s >= 80) return "#10b981"; // emerald
        if (s >= 60) return "#f59e0b"; // amber
        return "#f43f5e"; // rose
    };

    const getBadgeStyle = (s: number) => {
        if (s >= 80) return "bg-emerald-500/10 text-emerald-500 border-emerald-500/30";
        if (s >= 60) return "bg-amber-500/10 text-amber-500 border-amber-500/30";
        return "bg-rose-500/10 text-rose-500 border-rose-500/30";
    };

    return (
        <div className="flex flex-col items-center justify-center relative w-full pt-2 pb-1">
            <div className="relative flex items-center justify-center w-52 h-28">
                <svg viewBox="0 0 140 80" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="speedometerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f43f5e" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                        <filter id="needleGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
                        </filter>
                    </defs>

                    {/* Muted Track Background */}
                    <path
                        d="M 20 70 A 50 50 0 0 1 120 70"
                        fill="none"
                        stroke="#334155"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className="opacity-20 dark:opacity-40"
                    />

                    {/* Active Gradient Arc */}
                    <path
                        d="M 20 70 A 50 50 0 0 1 120 70"
                        fill="none"
                        stroke="url(#speedometerGrad)"
                        strokeWidth="10"
                        strokeDasharray={arcLength}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />

                    {/* Needle & Pivot */}
                    <g transform={`rotate(${angle} 70 70)`} filter="url(#needleGlow)" className="transition-transform duration-1000 ease-out">
                        {/* Needle body */}
                        <polygon points="68,70 72,70 70,26" fill="#f8fafc" className="dark:fill-slate-100 fill-slate-800" />
                        {/* Pivot Cap */}
                        <circle cx="70" cy="70" r="6" fill="#0f172a" stroke="#f8fafc" strokeWidth="2" />
                    </g>
                </svg>
            </div>

            {/* Score & Label display underneath without collision */}
            <div className="flex flex-col items-center gap-1 mt-1">
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight" style={{ color: getScoreColor(score) }}>
                        {score}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">/ 100</span>
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border ${getBadgeStyle(score)}`}>
                    {getScoreLabel(score)}
                </span>
            </div>
        </div>
    );
};

export const VideoAuditForm = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoId, setVideoId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);
    const [showManualFields, setShowManualFields] = useState(false);

    const [isPending, startTransition] = useTransition();
    const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

    // Extract YouTube Video ID from URL
    useEffect(() => {
        if (!videoUrl.trim()) {
            setVideoId("");
            setThumbnailUrl("");
            return;
        }

        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = videoUrl.match(regExp);

        if (match && match[2].length === 11) {
            const id = match[2];
            setVideoId(id);
            const img = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
            setThumbnailUrl(img);

            // Fetch video title via oEmbed API
            setIsFetchingInfo(true);
            fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.title && !title) setTitle(data.title);
                    if (data.author_name && !authorName) setAuthorName(data.author_name);
                })
                .catch(() => {
                    // Silent catch if CORS or oEmbed fails
                })
                .finally(() => setIsFetchingInfo(false));
        } else {
            setVideoId("");
        }
    }, [videoUrl]);

    const handleCopy = (text: string, indexId: string) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(indexId);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const handleAudit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!videoUrl.trim() && !title.trim()) {
            toast.error("Please enter a YouTube Video URL or video title to perform the audit.");
            return;
        }

        startTransition(async () => {
            try {
                const response = await fetch("/api/ai/video-audit-tool", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        videoUrl,
                        videoId,
                        title,
                        description,
                        tags,
                        authorName,
                        thumbnailUrl
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to generate video audit");
                }

                const resData = await response.json();
                if (resData.data) {
                    setAuditResult(resData.data);
                    confetti({
                        particleCount: 80,
                        spread: 60,
                        origin: { y: 0.6 }
                    });
                    toast.success("YouTube Video Audit completed!");
                } else {
                    toast.error("Something went wrong while auditing.");
                }
            } catch (err) {
                console.error(err);
                toast.error("Failed to run video audit. Please try again.");
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
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            {/* UNIFORM HEADING */}
            <h1 className="text-2xl font-semibold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                YouTube Video Audit Tool
            </h1>

            {/* UNIFORM FORM CONTAINER */}
            <form onSubmit={handleAudit} className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="videoUrl" className="text-sm font-semibold flex items-center justify-between">
                        <span>YouTube Video URL <span className="text-rose-500">*</span></span>
                        {videoId && (
                            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Valid Video ID Detected ({videoId})
                            </span>
                        )}
                    </Label>
                    <div className="relative flex items-center w-full">
                        <Input
                            id="videoUrl"
                            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ or https://youtu.be/..."
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            className="h-12 pl-4 pr-10 text-sm border-border focus-visible:ring-primary w-full"
                        />
                        {isFetchingInfo && (
                            <RefreshCw className="w-4 h-4 text-muted-foreground animate-spin absolute right-3" />
                        )}
                    </div>
                </div>

                {/* Live YouTube Metadata Preview Card */}
                {videoId && (
                    <div className="w-full flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border/60">
                        {thumbnailUrl && (
                            <div className="relative w-full sm:w-44 aspect-video rounded-lg overflow-hidden border border-border flex-shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={thumbnailUrl} alt="YouTube Thumbnail" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="flex flex-col gap-1 w-full text-left">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Detected Video Details</span>
                            <h3 className="text-sm font-bold line-clamp-2 text-foreground">{title || `YouTube Video (${videoId})`}</h3>
                            {authorName && <p className="text-xs text-muted-foreground">Channel: {authorName}</p>}
                            <a
                                href={`https://www.youtube.com/watch?v=${videoId}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                            >
                                Open on YouTube <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                )}

                {/* Collapsible Manual Fine-Tuning */}
                <div className="w-full border-t border-border pt-3">
                    <button
                        type="button"
                        onClick={() => setShowManualFields(!showManualFields)}
                        className="flex items-center justify-between w-full text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                        <span>Manual Details & Description Audit (Optional)</span>
                        {showManualFields ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {showManualFields && (
                        <div className="flex flex-col gap-4 mt-4 animate-in fade-in duration-200">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="title" className="text-xs font-medium">Video Title Override</Label>
                                <Input
                                    id="title"
                                    placeholder="Enter title if auto-fetch is empty..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="h-10 text-xs"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="description" className="text-xs font-medium">Video Description Text</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Paste description text to analyze keyword density, CTAs, and timestamps..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="text-xs resize-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="tags" className="text-xs font-medium">Video Tags (Comma Separated)</Label>
                                <Input
                                    id="tags"
                                    placeholder="e.g. youtube seo, channel growth, video audit..."
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    className="h-10 text-xs"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={isPending || (!videoUrl.trim() && !title.trim())}
                    className="h-12 text-sm font-semibold gap-2 w-full shadow-md transition-all hover:opacity-95"
                >
                    {isPending ? (
                        <>
                            <RefreshCw className="w-4 h-4 animate-spin" /> Running Comprehensive Video Audit...
                        </>
                    ) : (
                        <>
                            <Wand2 className="w-4 h-4" /> Analyze & Audit Video SEO
                        </>
                    )}
                </Button>
            </form>

            {/* Skeleton Loading State */}
            {isPending && (
                <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
                        <div className="flex items-center gap-4 w-full">
                            <Skeleton className="w-24 h-24 rounded-2xl flex-shrink-0" />
                            <div className="flex flex-col gap-2 w-full">
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Skeleton className="h-32 w-full rounded-xl" />
                        <Skeleton className="h-32 w-full rounded-xl" />
                        <Skeleton className="h-32 w-full rounded-xl" />
                        <Skeleton className="h-32 w-full rounded-xl" />
                    </div>
                </div>
            )}

            {/* Audit Results Dashboard */}
            {auditResult && !isPending && (
                <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300">
                    
                    {/* Overall Score Header Banner */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm">
                        <div className="flex items-center gap-5 w-full md:w-auto">
                            <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl border-2 ${getScoreBadgeColor(auditResult.overallScore)}`}>
                                <span className="text-3xl font-black">{auditResult.overallScore}</span>
                                <span className="text-xs font-bold uppercase tracking-wider">{auditResult.scoreGrade} Grade</span>
                            </div>
                            <div className="flex flex-col gap-1 text-left">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">SEO Audit Score</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">1-100 Scale</span>
                                </div>
                                <h2 className="text-lg font-bold text-foreground">
                                    {auditResult.extractedVideoInfo?.title || title || "YouTube Video Audit"}
                                </h2>
                                <p className="text-xs text-muted-foreground line-clamp-2 max-w-xl">
                                    {auditResult.scoreSummary}
                                </p>
                            </div>
                        </div>

                        {auditResult.extractedVideoInfo?.thumbnailUrl && (
                            <div className="relative w-full md:w-48 aspect-video rounded-xl overflow-hidden border border-border flex-shrink-0 shadow-xs">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={auditResult.extractedVideoInfo.thumbnailUrl} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>

                    {/* Enhanced Thumbnail Speedometer & Factor Audit Card */}
                    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm">
                        <div className="flex items-center justify-between border-b border-border pb-4">
                            <div className="flex items-center gap-2">
                                <Gauge className="w-5 h-5 text-primary" />
                                <h3 className="text-base font-bold text-foreground">Thumbnail Visual & CTR Audit</h3>
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getScoreBadgeColor(auditResult.thumbnailAssessment.score)}`}>
                                Thumbnail Score: {auditResult.thumbnailAssessment.score}/100
                            </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            {/* Speedometer Gauge Column */}
                            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 rounded-xl bg-muted/30 border border-border/50 text-center">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">CTR Speedometer</span>
                                <SpeedometerGauge score={auditResult.thumbnailAssessment.score} />
                                <p className="text-xs text-muted-foreground mt-3 px-2">
                                    {auditResult.thumbnailAssessment.contrastFeedback}
                                </p>
                            </div>

                            {/* Factor-Wise Scores Column */}
                            <div className="lg:col-span-8 flex flex-col gap-4">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-left">Factor-Wise Visual Ratings</h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                                    {/* Color & Contrast */}
                                    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/30 border border-border/50">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-semibold text-foreground flex items-center gap-1.5">
                                                <Palette className="w-3.5 h-3.5 text-indigo-500" /> Color & Contrast
                                            </span>
                                            <span className="font-bold">{auditResult.thumbnailAssessment.factors?.colorContrast?.score || 85}/100</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${getFactorProgressColor(auditResult.thumbnailAssessment.factors?.colorContrast?.score || 85)}`}
                                                style={{ width: `${auditResult.thumbnailAssessment.factors?.colorContrast?.score || 85}%` }}
                                            />
                                        </div>
                                        <p className="text-[11px] text-muted-foreground line-clamp-2">
                                            {auditResult.thumbnailAssessment.factors?.colorContrast?.feedback || auditResult.thumbnailAssessment.contrastFeedback}
                                        </p>
                                    </div>

                                    {/* Mobile Readability */}
                                    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/30 border border-border/50">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-semibold text-foreground flex items-center gap-1.5">
                                                <Type className="w-3.5 h-3.5 text-amber-500" /> Mobile Readability
                                            </span>
                                            <span className="font-bold">{auditResult.thumbnailAssessment.factors?.mobileReadability?.score || 88}/100</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${getFactorProgressColor(auditResult.thumbnailAssessment.factors?.mobileReadability?.score || 88)}`}
                                                style={{ width: `${auditResult.thumbnailAssessment.factors?.mobileReadability?.score || 88}%` }}
                                            />
                                        </div>
                                        <p className="text-[11px] text-muted-foreground line-clamp-2">
                                            {auditResult.thumbnailAssessment.factors?.mobileReadability?.feedback || auditResult.thumbnailAssessment.textOverlayFeedback}
                                        </p>
                                    </div>

                                    {/* Focal Point & Subject */}
                                    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/30 border border-border/50">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-semibold text-foreground flex items-center gap-1.5">
                                                <Eye className="w-3.5 h-3.5 text-blue-500" /> Focal Point & Subject
                                            </span>
                                            <span className="font-bold">{auditResult.thumbnailAssessment.factors?.focalPoint?.score || 78}/100</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${getFactorProgressColor(auditResult.thumbnailAssessment.factors?.focalPoint?.score || 78)}`}
                                                style={{ width: `${auditResult.thumbnailAssessment.factors?.focalPoint?.score || 78}%` }}
                                            />
                                        </div>
                                        <p className="text-[11px] text-muted-foreground line-clamp-2">
                                            {auditResult.thumbnailAssessment.factors?.focalPoint?.feedback || "Main subject visibility and facial emotion focus score."}
                                        </p>
                                    </div>

                                    {/* Curiosity & Visual Pop */}
                                    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/30 border border-border/50">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-semibold text-foreground flex items-center gap-1.5">
                                                <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Curiosity & Visual Pop
                                            </span>
                                            <span className="font-bold">{auditResult.thumbnailAssessment.factors?.curiosityGap?.score || 82}/100</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${getFactorProgressColor(auditResult.thumbnailAssessment.factors?.curiosityGap?.score || 82)}`}
                                                style={{ width: `${auditResult.thumbnailAssessment.factors?.curiosityGap?.score || 82}%` }}
                                            />
                                        </div>
                                        <p className="text-[11px] text-muted-foreground line-clamp-2">
                                            {auditResult.thumbnailAssessment.factors?.curiosityGap?.feedback || "Creates a curiosity gap that encourages clicks."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile YouTube Feed Preview Simulation */}
                        {auditResult.extractedVideoInfo?.thumbnailUrl && (
                            <div className="flex flex-col gap-3 border-t border-border pt-5 text-left">
                                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                    <Smartphone className="w-4 h-4 text-primary" /> Simulated Mobile YouTube App Feed Card
                                </span>
                                <div className="max-w-md w-full mx-auto p-3 rounded-2xl bg-black text-white shadow-lg border border-slate-800">
                                    <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={auditResult.extractedVideoInfo.thumbnailUrl} alt="Mobile Feed Preview" className="w-full h-full object-cover" />
                                        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                            12:45
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3 px-1">
                                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary flex-shrink-0">
                                            {auditResult.extractedVideoInfo.authorName?.charAt(0) || "Y"}
                                        </div>
                                        <div className="flex flex-col gap-0.5 w-full">
                                            <h5 className="text-xs font-semibold text-slate-100 line-clamp-2 leading-tight">
                                                {auditResult.extractedVideoInfo.title || title}
                                            </h5>
                                            <p className="text-[10px] text-slate-400">
                                                {auditResult.extractedVideoInfo.authorName || "YouTube Channel"} • 145K views • 2 days ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Visual Enhancement Suggestions */}
                        {auditResult.thumbnailAssessment.visualSuggestions && auditResult.thumbnailAssessment.visualSuggestions.length > 0 && (
                            <div className="flex flex-col gap-2 border-t border-border pt-4 text-left">
                                <span className="text-xs font-bold text-foreground">Actionable Thumbnail Fixes:</span>
                                <ul className="list-disc pl-4 space-y-1 text-xs text-secondary-foreground dark:text-gray-400">
                                    {auditResult.thumbnailAssessment.visualSuggestions.map((sug, idx) => (
                                        <li key={idx}>{sug}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* 5 Priority Action Items Card */}
                    <div className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-amber-500" />
                            <h3 className="text-base font-bold text-foreground">5 Priority Action Items to Boost Video Performance</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {auditResult.priorityActionItems.map((item) => (
                                <div key={item.rank} className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/60">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex-shrink-0">
                                        #{item.rank}
                                    </span>
                                    <div className="flex flex-col text-left gap-0.5">
                                        <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                                        <p className="text-xs text-secondary-foreground dark:text-gray-400">{item.action}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Grid of Audit Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Title Audit Card */}
                        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                    Title Analysis
                                </h3>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${getScoreBadgeColor(auditResult.titleAnalysis.score)}`}>
                                    Score: {auditResult.titleAnalysis.score}/100
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 text-left">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">Character Length:</span>
                                    <span className="font-semibold">{auditResult.titleAnalysis.charCount} chars ({auditResult.titleAnalysis.lengthStatus})</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">CTR Psychology Grade:</span>
                                    <span className="font-bold text-primary">{auditResult.titleAnalysis.ctrPsychologyGrade}</span>
                                </div>
                                <p className="text-xs text-muted-foreground bg-muted/30 p-2.5 rounded-lg border border-border/50">
                                    {auditResult.titleAnalysis.ctrPsychologyFeedback}
                                </p>

                                {auditResult.titleAnalysis.suggestions && auditResult.titleAnalysis.suggestions.length > 0 && (
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <span className="text-xs font-semibold text-foreground">Optimization Suggestions:</span>
                                        <ul className="list-disc pl-4 space-y-1 text-xs text-secondary-foreground dark:text-gray-400">
                                            {auditResult.titleAnalysis.suggestions.map((sug, idx) => (
                                                <li key={idx}>{sug}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Copyable Optimized Title Alternatives */}
                            {auditResult.optimizedTitleAlternatives && auditResult.optimizedTitleAlternatives.length > 0 && (
                                <div className="flex flex-col gap-2 pt-3 border-t border-border text-left">
                                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                                        <Wand2 className="w-3.5 h-3.5" /> High-CTR Title Alternatives
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        {auditResult.optimizedTitleAlternatives.map((altTitle, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-muted/40 text-xs gap-2">
                                                <span className="font-medium line-clamp-1">{altTitle}</span>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleCopy(altTitle, `title-${idx}`)}
                                                    className="h-7 px-2 text-xs flex-shrink-0"
                                                >
                                                    {copiedIndex === `title-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Description Audit Card */}
                        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-sm font-bold text-foreground">
                                    Description Audit
                                </h3>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${getScoreBadgeColor(auditResult.descriptionAnalysis.score)}`}>
                                    Score: {auditResult.descriptionAnalysis.score}/100
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 text-left">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="flex flex-col items-center p-2 rounded-lg bg-muted/30 border border-border/50 text-center">
                                        <span className="text-[10px] text-muted-foreground uppercase">Timestamps</span>
                                        {auditResult.descriptionAnalysis.hasTimestamps ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                                        ) : (
                                            <XCircle className="w-4 h-4 text-rose-500 mt-1" />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center p-2 rounded-lg bg-muted/30 border border-border/50 text-center">
                                        <span className="text-[10px] text-muted-foreground uppercase">Links</span>
                                        {auditResult.descriptionAnalysis.hasLinks ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-1" />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center p-2 rounded-lg bg-muted/30 border border-border/50 text-center">
                                        <span className="text-[10px] text-muted-foreground uppercase">CTA Callouts</span>
                                        {auditResult.descriptionAnalysis.hasCTA ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-1" />
                                        )}
                                    </div>
                                </div>

                                <p className="text-xs text-muted-foreground bg-muted/30 p-2.5 rounded-lg border border-border/50">
                                    {auditResult.descriptionAnalysis.aboveTheFoldFeedback}
                                </p>

                                {auditResult.descriptionAnalysis.suggestions && auditResult.descriptionAnalysis.suggestions.length > 0 && (
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <span className="text-xs font-semibold text-foreground">Key Improvements:</span>
                                        <ul className="list-disc pl-4 space-y-1 text-xs text-secondary-foreground dark:text-gray-400">
                                            {auditResult.descriptionAnalysis.suggestions.map((sug, idx) => (
                                                <li key={idx}>{sug}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Copyable Optimized Description Snippet */}
                            {auditResult.optimizedDescriptionSnippet && (
                                <div className="flex flex-col gap-2 pt-3 border-t border-border text-left">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-primary flex items-center gap-1">
                                            <Wand2 className="w-3.5 h-3.5" /> First 3 Lines Rewrite
                                        </span>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleCopy(auditResult.optimizedDescriptionSnippet, "desc-snippet")}
                                            className="h-7 px-2 text-xs"
                                        >
                                            {copiedIndex === "desc-snippet" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                        </Button>
                                    </div>
                                    <p className="text-xs bg-muted/50 p-2.5 rounded-lg font-mono text-muted-foreground whitespace-pre-wrap border border-border/60">
                                        {auditResult.optimizedDescriptionSnippet}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Tag Analysis Card */}
                        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
                            <div className="flex items-center justify-between border-b border-border pb-3">
                                <h3 className="text-sm font-bold text-foreground">
                                    Tag & Keyword Audit
                                </h3>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${getScoreBadgeColor(auditResult.tagAnalysis.score)}`}>
                                    Score: {auditResult.tagAnalysis.score}/100
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 text-left">
                                <p className="text-xs text-muted-foreground bg-muted/30 p-2.5 rounded-lg border border-border/50">
                                    {auditResult.tagAnalysis.feedback}
                                </p>

                                {auditResult.tagAnalysis.missingKeywordOpportunities && auditResult.tagAnalysis.missingKeywordOpportunities.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-1">
                                        <span className="text-xs font-bold text-foreground">Missing Keyword Opportunities:</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {auditResult.tagAnalysis.missingKeywordOpportunities.map((kw, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => handleCopy(kw, `kw-${idx}`)}
                                                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                                                >
                                                    {kw}
                                                    {copiedIndex === `kw-${idx}` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-primary/70" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            )}

            {/* Support Banner */}
            <div className="w-full mt-4">
                <BuyMeCoffeeBanner />
            </div>
        </div>
    );
};
