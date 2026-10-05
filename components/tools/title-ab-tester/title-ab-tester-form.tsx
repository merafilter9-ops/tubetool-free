"use client";

import { useState, useTransition } from "react";
import { Copy, Check, Trophy, Sparkles, Plus, Trash2, CheckCircle2, AlertCircle, BarChart3 } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { VIDEO_CATEGORIES } from "@/constants";
import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";

interface RankedTitle {
    rank: number;
    title: string;
    predictedCtrScore: number;
    curiosityScore: number;
    clarityScore: number;
    keywordStrength: number;
    emotionalPull: number;
    strengths: string[];
    weaknesses: string[];
    verdict: string;
}

interface TestResult {
    winningTitle: string;
    winningReason: string;
    hybridTitle: string;
    hybridExplanation: string;
    titlesRanked: RankedTitle[];
}

export const TitleAbTesterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [titles, setTitles] = useState<string[]>(["", ""]);
    const [category, setCategory] = useState<string>("");
    const [channelSize, setChannelSize] = useState<string>("Small (<10K Subscribers)");

    const [result, setResult] = useState<TestResult | null>(null);
    const [copiedHybrid, setCopiedHybrid] = useState(false);
    const [copiedWinning, setCopiedWinning] = useState(false);

    const handleAddTitle = () => {
        if (titles.length >= 5) {
            toast.error("You can test up to 5 title variations at a time.");
            return;
        }
        setTitles([...titles, ""]);
    };

    const handleRemoveTitle = (index: number) => {
        if (titles.length <= 2) {
            toast.error("Please provide at least 2 title variations to run an A/B test.");
            return;
        }
        const updated = titles.filter((_, i) => i !== index);
        setTitles(updated);
    };

    const handleTitleChange = (index: number, value: string) => {
        const updated = [...titles];
        updated[index] = value;
        setTitles(updated);
    };

    const resetInputs = () => {
        setTitles(["", ""]);
        setCategory("");
        setChannelSize("Small (<10K Subscribers)");
        setResult(null);
    };

    const handleAnalyze = () => {
        const validTitles = titles.map(t => t.trim()).filter(Boolean);
        if (validTitles.length < 2) {
            toast.error("Please enter at least 2 title variations!");
            return;
        }
        if (!category) {
            toast.error("Please select a video category!");
            return;
        }

        startTransition(async () => {
            try {
                const response = await API_URL_V1.post('/ai/title-ab-tester', {
                    data: {
                        Title_Variations: validTitles,
                        Video_Category: category,
                        Channel_Size: channelSize
                    }
                });

                const data = response.data?.data;
                setResult(data);

                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (error) {
                toast.error("Failed to analyze titles. Please try again!");
                console.error("Title A/B Tester error:", error);
            }
        });
    };

    const copyText = (text: string, setCopiedState: (v: boolean) => void) => {
        copyToClipboard(text);
        setCopiedState(true);
        toast.success("Title copied to clipboard!");
        setTimeout(() => setCopiedState(false), 2000);
    };

    const getScoreBadge = (score: number) => {
        if (score >= 88) return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
        if (score >= 75) return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    };

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            {/* UNIFORM TITLE GENERATOR HEADER */}
            <h1 className="text-2xl font-semibold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                YouTube A/B Title Tester Tool
            </h1>

            {/* FORM CONTAINER */}
            <div className="w-full flex gap-4 flex-col items-center">
                
                {/* DYNAMIC TITLE VARIATIONS */}
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <Label className="font-semibold text-sm">
                            Title Variations (2 to 5) *
                        </Label>
                        {titles.length < 5 && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={handleAddTitle}
                                className="h-8 text-xs text-primary flex items-center gap-1"
                            >
                                <Plus className="w-3.5 h-3.5" /> Add Variation
                            </Button>
                        )}
                    </div>

                    {titles.map((title, index) => (
                        <div key={index} className="w-full flex items-center gap-2">
                            <span className="text-xs font-bold text-muted-foreground w-6 text-center shrink-0">
                                #{index + 1}
                            </span>
                            <Input
                                type="text"
                                placeholder={`Enter Title Variation #${index + 1} (e.g. How I Built an AI App in 7 Days)`}
                                value={title}
                                onChange={(e) => handleTitleChange(index, e.target.value)}
                                className="w-full"
                            />
                            {titles.length > 2 && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemoveTitle(index)}
                                    className="h-9 w-9 text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 shrink-0"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    ))}
                </div>

                {/* ROW 2: CATEGORY & CHANNEL SIZE */}
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="video-category">Select Video Category *</Label>
                        <Select
                            value={category}
                            onValueChange={(value) => setCategory(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="video-category" placeholder="Select Video Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {VIDEO_CATEGORIES.map((cat) => (
                                    <SelectItem key={cat.value} value={cat.value}>
                                        {cat.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="channel-size">Select Channel Size</Label>
                        <Select
                            value={channelSize}
                            onValueChange={(value) => setChannelSize(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="channel-size" placeholder="Select Channel Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Small (<10K Subscribers)">Small Channel (&lt;10K Subscribers)</SelectItem>
                                <SelectItem value="Mid (10K - 100K Subscribers)">Mid-sized Channel (10K - 100K Subscribers)</SelectItem>
                                <SelectItem value="Large (100K+ Subscribers)">Large Authority Channel (100K+ Subscribers)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="w-full flex items-center justify-end gap-2 mt-1">
                    <Button
                        variant="outline"
                        disabled={titles.every(t => !t) && !category}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={titles.filter(t => t.trim()).length < 2 || !category || isPending}
                        onClick={handleAnalyze}
                    >
                        {isPending ? "Analyzing Titles..." : "Analyze & Rank Titles"}
                    </Button>
                </div>
            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex gap-3 flex-col items-center mt-8">
                    <Skeleton className="w-full h-24" />
                    <Skeleton className="w-full h-20" />
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="w-full h-36" />
                    ))}
                </div>
            )}

            {/* RESULTS DASHBOARD */}
            {!isPending && result && (
                <div className="w-full flex flex-col gap-6 mt-8">

                    {/* WINNING TITLE CARD */}
                    <div className="w-full border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 rounded-xl p-5 sm:p-6 flex flex-col gap-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                                <Trophy className="w-5 h-5 text-amber-500" />
                                Winning Title Recommendation
                            </div>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => copyText(result.winningTitle, setCopiedWinning)}
                                className="gap-1.5 text-xs border-amber-500/30 hover:bg-amber-500/20"
                            >
                                {copiedWinning ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                Copy Winner
                            </Button>
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-foreground">
                            &ldquo;{result.winningTitle}&rdquo;
                        </h2>
                        <p className="text-xs sm:text-sm text-foreground/90">
                            <strong>Why it wins:</strong> {result.winningReason}
                        </p>
                    </div>

                    {/* HYBRID TITLE CARD */}
                    {result.hybridTitle && (
                        <div className="w-full border border-primary/20 bg-primary/5 dark:bg-primary/10 rounded-xl p-5 flex flex-col gap-3">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                    <Sparkles className="w-4 h-4" />
                                    AI-Optimized Hybrid Title (Combines Best Elements)
                                </div>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => copyText(result.hybridTitle, setCopiedHybrid)}
                                    className="gap-1.5 text-xs"
                                >
                                    {copiedHybrid ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                    Copy Hybrid
                                </Button>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-foreground">
                                &ldquo;{result.hybridTitle}&rdquo;
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {result.hybridExplanation}
                            </p>
                        </div>
                    )}

                    {/* COMPARATIVE RANKED LIST */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 pt-2 border-t">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            Full Title Variations Ranking & Breakdown
                        </h3>

                        {result.titlesRanked.map((item, index) => (
                            <div
                                key={index}
                                className="w-full border rounded-lg p-5 flex flex-col gap-4 shadow-sm"
                            >
                                {/* RANK & TITLE HEADER */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b">
                                    <div className="flex items-center gap-2">
                                        <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${index === 0 ? 'bg-amber-500 text-white' : 'bg-primary/10 text-primary'}`}>
                                            #{item.rank || index + 1}
                                        </span>
                                        <h4 className="text-base font-semibold text-foreground">
                                            &ldquo;{item.title}&rdquo;
                                        </h4>
                                    </div>
                                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${getScoreBadge(item.predictedCtrScore)}`}>
                                        ⚡ {item.predictedCtrScore}/100 Predicted CTR
                                    </span>
                                </div>

                                {/* 4 SCORE PILLARS */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    <div className="p-3 bg-muted/40 rounded-md border flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Curiosity Score</span>
                                        <span className="text-sm font-bold text-foreground">{item.curiosityScore}/100</span>
                                    </div>
                                    <div className="p-3 bg-muted/40 rounded-md border flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Clarity Score</span>
                                        <span className="text-sm font-bold text-foreground">{item.clarityScore}/100</span>
                                    </div>
                                    <div className="p-3 bg-muted/40 rounded-md border flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Keyword Strength</span>
                                        <span className="text-sm font-bold text-foreground">{item.keywordStrength}/100</span>
                                    </div>
                                    <div className="p-3 bg-muted/40 rounded-md border flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Emotional Pull</span>
                                        <span className="text-sm font-bold text-foreground">{item.emotionalPull}/100</span>
                                    </div>
                                </div>

                                {/* STRENGTHS & WEAKNESSES */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {item.strengths && item.strengths.length > 0 && (
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                                                <CheckCircle2 className="w-3.5 h-3.5" /> Strengths
                                            </span>
                                            <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                                                {item.strengths.map((str, i) => (
                                                    <li key={i}>{str}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {item.weaknesses && item.weaknesses.length > 0 && (
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 uppercase tracking-wider">
                                                <AlertCircle className="w-3.5 h-3.5" /> Areas for Improvement
                                            </span>
                                            <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                                                {item.weaknesses.map((weak, i) => (
                                                    <li key={i}>{weak}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* VERDICT */}
                                <div className="pt-2 border-t text-xs text-muted-foreground">
                                    <strong className="text-foreground">Verdict:</strong> {item.verdict}
                                </div>
                            </div>
                        ))}
                    </div>

                    <BuyMeCoffeeBanner />
                </div>
            )}
        </div>
    );
};
