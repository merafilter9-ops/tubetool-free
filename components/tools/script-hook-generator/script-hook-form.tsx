"use client";

import { useState, useTransition } from "react";
import { Copy, Check, Sparkles, Eye, Tv, Lightbulb, HelpCircle } from "lucide-react";
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
import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";

interface HookItem {
    id: number;
    style: string;
    first3Seconds: string;
    script: string;
    visualCues: string;
    retentionScore: number;
    psychologicalReasoning: string;
}

export const ScriptHookForm = () => {
    const [isPending, startTransition] = useTransition();
    const [topic, setTopic] = useState("");
    const [audience, setAudience] = useState("");
    const [hookVibe, setHookVibe] = useState("Balanced & Engaging");
    const [videoFormat, setVideoFormat] = useState("YouTube Long-form (16:9)");
    
    const [result, setResult] = useState<HookItem[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const resetInputs = () => {
        setTopic("");
        setAudience("");
        setHookVibe("Balanced & Engaging");
        setVideoFormat("YouTube Long-form (16:9)");
    };

    const handleGenerate = () => {
        if (!topic.trim()) {
            toast.error("Please enter a video topic or title!");
            return;
        }

        startTransition(async () => {
            try {
                const response = await API_URL_V1.post('/ai/script-hook-generator', {
                    data: {
                        Video_Topic: topic,
                        Target_Audience: audience || "General Viewers",
                        Hook_Vibe: hookVibe,
                        Video_Format: videoFormat
                    }
                });

                const hooks = response.data?.data?.hooks || [];
                setResult(hooks);

                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (error) {
                toast.error("Failed to generate hooks. Please try again!");
                console.error("Script Hook Generator error:", error);
            }
        });
    };

    const copySingleHook = (hook: HookItem, index: number) => {
        const textToCopy = `[${hook.style.toUpperCase()}] - Retention Score: ${hook.retentionScore}/100\n\nFIRST 3 SECONDS:\n"${hook.first3Seconds}"\n\nFULL INTRO SCRIPT:\n${hook.script}\n\nVISUAL CUES & ON-SCREEN TEXT:\n${hook.visualCues}\n\nWHY IT WORKS:\n${hook.psychologicalReasoning}`;
        copyToClipboard(textToCopy);
        setCopiedIndex(index);
        toast.success(`Hook #${index + 1} script copied to clipboard!`);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const copyAllHooks = () => {
        if (!result || result.length === 0) return;
        const allText = result.map((h, i) => (
            `=== HOOK ${i + 1}: ${h.style} (Score: ${h.retentionScore}/100) ===\nFIRST 3 SECONDS: "${h.first3Seconds}"\n\nSCRIPT:\n${h.script}\n\nVISUAL CUES: ${h.visualCues}\n\nWHY IT WORKS: ${h.psychologicalReasoning}\n`
        )).join('\n\n----------------------------------------\n\n');

        copyToClipboard(allText);
        toast.success("All 5 Script Hooks copied to clipboard!");
    };

    const getScoreBadgeColor = (score: number) => {
        if (score >= 90) return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
        if (score >= 80) return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    };

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            {/* MATCHING TITLE GENERATOR HEADER */}
            <h1 className="text-2xl font-semibold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                Script Hook Generator Tool
            </h1>

            {/* UNIFORM INPUT FORM (NO GREY CARD WRAPPER) */}
            <div className="w-full flex gap-4 flex-col items-center">
                
                {/* ROW 1: TOPIC & AUDIENCE */}
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="topic">Enter Video Topic or Title *</Label>
                        <Input
                            id="topic"
                            type="text"
                            placeholder="Enter video topic, title, or concept"
                            className="w-full"
                            autoFocus
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="audience">Target Audience</Label>
                        <Input
                            id="audience"
                            type="text"
                            placeholder="Enter about your target audience (optional)"
                            className="w-full"
                            value={audience}
                            onChange={(e) => setAudience(e.target.value)}
                        />
                    </div>
                </div>

                {/* ROW 2: HOOK STYLE & VIDEO FORMAT */}
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="hook-style">Select Hook Style & Tone</Label>
                        <Select
                            value={hookVibe}
                            onValueChange={(value) => setHookVibe(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="hook-style" placeholder="Select Hook Style" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Balanced & Engaging">Balanced & Engaging (Recommended)</SelectItem>
                                <SelectItem value="Pattern Interrupt & Shock">Pattern Interrupt & Shock Value</SelectItem>
                                <SelectItem value="Curiosity Gap & Mystery">Curiosity Gap & Mystery</SelectItem>
                                <SelectItem value="High Stakes & Bold Claim">High Stakes & Bold Claim</SelectItem>
                                <SelectItem value="Problem First & Instant Solution">Problem First & Instant Solution</SelectItem>
                                <SelectItem value="Storytelling & Emotional Hook">Storytelling & Emotional Hook</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="video-format">Select Video Format</Label>
                        <Select
                            value={videoFormat}
                            onValueChange={(value) => setVideoFormat(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="video-format" placeholder="Select Video Format" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="YouTube Long-form (16:9)">YouTube Long-form Video (16:9)</SelectItem>
                                <SelectItem value="YouTube Shorts / Vertical">YouTube Shorts / TikTok / Reels (9:16)</SelectItem>
                                <SelectItem value="Tutorial / Step-by-Step How-To">Educational Tutorial & How-To</SelectItem>
                                <SelectItem value="Vlog / Personal Experiment">Personal Vlog / 30-Day Challenge</SelectItem>
                                <SelectItem value="Product Review / Comparison">Product Review & Tech Breakdown</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="w-full flex items-center justify-end gap-2 mt-1">
                    <Button
                        variant="outline"
                        disabled={!topic && !audience}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!topic.trim() || isPending}
                        onClick={handleGenerate}
                    >
                        {isPending ? "Generating..." : "Generate"}
                    </Button>
                </div>
            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex gap-2 flex-col items-center mt-8">
                    <div className="w-full flex gap-2 flex-col items-center">
                        <Skeleton className="w-full h-8" />
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Skeleton key={index} className="w-full h-28" />
                        ))}
                    </div>
                </div>
            )}

            {/* GENERATED RESULTS DASHBOARD */}
            {!isPending && result.length > 0 && (
                <div className="w-full flex flex-col gap-6 mt-8">
                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b">
                        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-primary" />
                            Generated Script Hooks ({result.length})
                        </h2>
                        <Button
                            onClick={copyAllHooks}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                        >
                            <Copy className="w-4 h-4" />
                            Copy All Hooks
                        </Button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {result.map((hook, index) => (
                            <div
                                key={index}
                                className="w-full border rounded-lg p-5 flex flex-col gap-4 shadow-sm transition-all"
                            >
                                {/* CARD HEADER */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b">
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-base font-semibold text-foreground">
                                            {hook.style}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${getScoreBadgeColor(hook.retentionScore)}`}>
                                            {hook.retentionScore}/100 Retention Score
                                        </span>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => copySingleHook(hook, index)}
                                            className="gap-1.5 text-xs"
                                        >
                                            {copiedIndex === index ? (
                                                <>
                                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3.5 h-3.5" />
                                                    Copy
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {/* FIRST 3 SECONDS HIGHLIGHT */}
                                <div className="p-3 bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 rounded-md flex flex-col gap-1">
                                    <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider">
                                        <Eye className="w-3.5 h-3.5" />
                                        First 3 Seconds (Scroll Stopper)
                                    </span>
                                    <p className="text-sm font-medium text-foreground italic">
                                        &ldquo;{hook.first3Seconds}&rdquo;
                                    </p>
                                </div>

                                {/* FULL SPOKEN SCRIPT */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                        <Tv className="w-3.5 h-3.5" />
                                        Full Spoken Script Intro (15-30s)
                                    </span>
                                    <div className="p-3 bg-muted/40 rounded-md border text-sm leading-relaxed text-foreground whitespace-pre-line">
                                        {hook.script}
                                    </div>
                                </div>

                                {/* VISUAL CUES */}
                                <div className="p-3 bg-primary/5 dark:bg-primary/10 border border-primary/15 rounded-md flex flex-col gap-1">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                                        <Lightbulb className="w-3.5 h-3.5" />
                                        Visual Cues & On-Screen Text
                                    </span>
                                    <p className="text-xs sm:text-sm text-foreground/90">
                                        {hook.visualCues}
                                    </p>
                                </div>

                                {/* PSYCHOLOGICAL REASONING */}
                                <div className="flex items-start gap-1.5 text-xs text-muted-foreground pt-1">
                                    <HelpCircle className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-foreground">Why this works:</strong> {hook.psychologicalReasoning}
                                    </span>
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
