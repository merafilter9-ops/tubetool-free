"use client";

import { useState, useTransition, useEffect } from "react";
import { Copy, Check, Clock, ListTree, Video, Lightbulb, Wand2, CheckCircle2, Film, MessageSquareCode } from "lucide-react";
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

interface OutlineSection {
    id: number;
    timestamp: string;
    chapterTitle: string;
    sectionName: string;
    talkingPoints: string[];
    brollSuggestions: string;
    onScreenText: string;
    transitionTip: string;
}

interface OutlineResult {
    videoTitle: string;
    estimatedDuration: string;
    formattedChapters: string;
    sections: OutlineSection[];
    proCreatorTips: string[];
}

const AUDIENCE_OPTIONS = [
    { label: "Auto-Detect from Topic (Recommended)", value: "Auto-Detect" },
    { label: "General Viewers & Broad Audience", value: "General Viewers & Broad Audience" },
    { label: "Beginners & Novices (101 Level)", value: "Beginners & Novices" },
    { label: "Intermediate Enthusiasts & Hobbyists", value: "Intermediate Enthusiasts" },
    { label: "Advanced Professionals & Industry Experts", value: "Advanced Professionals & Experts" },
    { label: "Entrepreneurs, Business Owners & Creators", value: "Entrepreneurs & Creators" },
    { label: "Tech, Software Developers & AI Builders", value: "Tech Developers & AI Enthusiasts" },
    { label: "Gamers & Esports Community", value: "Gamers & Esports Fans" },
    { label: "Students & Lifelong Learners", value: "Students & Academic Learners" },
    { label: "Fitness, Health & Wellness Viewers", value: "Fitness & Health Enthusiasts" },
    { label: "Buyers & Shoppers Looking for Product Reviews", value: "Shoppers & Product Review Seekers" }
];

export const VideoOutlineBuilderForm = () => {
    const [isPending, startTransition] = useTransition();
    const [topic, setTopic] = useState("");
    const [videoLength, setVideoLength] = useState("Medium (10-15 min)");
    const [videoStyle, setVideoStyle] = useState("Tutorial / Step-by-Step How-To");
    const [audienceOption, setAudienceOption] = useState("Auto-Detect");
    const [detectedAudienceHint, setDetectedAudienceHint] = useState("");

    const [result, setResult] = useState<OutlineResult | null>(null);
    const [copiedChapters, setCopiedChapters] = useState(false);
    const [copiedAll, setCopiedAll] = useState(false);

    // Auto-infer audience segment hint
    useEffect(() => {
        if (!topic.trim()) {
            setDetectedAudienceHint("");
            return;
        }

        const lower = topic.toLowerCase();
        if (lower.includes("beginner") || lower.includes("how to") || lower.includes("guide") || lower.includes("101")) {
            setDetectedAudienceHint("Auto-detected: Beginners & Novices");
        } else if (lower.includes("game") || lower.includes("gaming") || lower.includes("ps5") || lower.includes("minecraft")) {
            setDetectedAudienceHint("Auto-detected: Gamers & Esports Fans");
        } else if (lower.includes("code") || lower.includes("ai") || lower.includes("python") || lower.includes("tech")) {
            setDetectedAudienceHint("Auto-detected: Tech Developers & AI Enthusiasts");
        } else if (lower.includes("money") || lower.includes("business") || lower.includes("saas") || lower.includes("startup")) {
            setDetectedAudienceHint("Auto-detected: Entrepreneurs & Creators");
        } else if (lower.includes("review") || lower.includes("vs") || lower.includes("unboxing") || lower.includes("best")) {
            setDetectedAudienceHint("Auto-detected: Shoppers & Product Review Seekers");
        } else {
            setDetectedAudienceHint("Auto-detected: General Viewers");
        }
    }, [topic]);

    const resetInputs = () => {
        setTopic("");
        setVideoLength("Medium (10-15 min)");
        setVideoStyle("Tutorial / Step-by-Step How-To");
        setAudienceOption("Auto-Detect");
        setDetectedAudienceHint("");
        setResult(null);
    };

    const handleGenerate = () => {
        if (!topic.trim()) {
            toast.error("Please enter a video topic or title!");
            return;
        }

        const effectiveAudience = audienceOption === "Auto-Detect"
            ? (detectedAudienceHint.replace("Auto-detected: ", "") || "General Viewers")
            : audienceOption;

        startTransition(async () => {
            try {
                const response = await API_URL_V1.post('/ai/video-outline-builder', {
                    data: {
                        videoTopic: topic,
                        videoLength,
                        videoStyle,
                        targetAudience: effectiveAudience
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
                toast.error("Failed to generate outline. Please try again!");
                console.error("Video Outline Builder error:", error);
            }
        });
    };

    const copyText = (text: string, setCopiedState: (v: boolean) => void, msg: string) => {
        copyToClipboard(text);
        setCopiedState(true);
        toast.success(msg);
        setTimeout(() => setCopiedState(false), 2000);
    };

    const getFullOutlineText = () => {
        if (!result) return "";
        let text = `=== VIDEO OUTLINE: ${result.videoTitle} ===\nEstimated Duration: ${result.estimatedDuration}\n\n`;
        text += `--- YOUTUBE CHAPTERS (COPY TO DESCRIPTION) ---\n${result.formattedChapters}\n\n`;
        text += `--- DETAILED OUTLINE SECTIONS ---\n`;
        result.sections.forEach(sec => {
            text += `\n[${sec.timestamp}] ${sec.sectionName}\nTalking Points:\n${sec.talkingPoints.map(tp => `  • ${tp}`).join('\n')}\nB-Roll Suggestions: ${sec.brollSuggestions}\nOn-Screen Text: ${sec.onScreenText}\nTransition Tip: ${sec.transitionTip}\n`;
        });
        if (result.proCreatorTips && result.proCreatorTips.length > 0) {
            text += `\n--- PRO CREATOR TIPS ---\n${result.proCreatorTips.map(t => `• ${t}`).join('\n')}`;
        }
        return text;
    };

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            {/* UNIFORM HEADING */}
            <h1 className="text-2xl font-semibold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                YouTube Video Outline Builder Tool
            </h1>

            {/* FORM CONTAINER */}
            <div className="w-full flex gap-4 flex-col items-center">
                
                {/* ROW 1: TOPIC & LENGTH */}
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
                        <Label htmlFor="video-length">Target Video Length</Label>
                        <Select
                            value={videoLength}
                            onValueChange={(value) => setVideoLength(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="video-length" placeholder="Select Target Video Length" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Short (5-8 min)">Short Video (5–8 mins)</SelectItem>
                                <SelectItem value="Medium (10-15 min)">Medium Video (10–15 mins)</SelectItem>
                                <SelectItem value="Long (20-30 min)">Long Video / Deep Dive (20–30 mins)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* ROW 2: FORMAT/STYLE & AUDIENCE */}
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="video-style">Video Format & Style</Label>
                        <Select
                            value={videoStyle}
                            onValueChange={(value) => setVideoStyle(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="video-style" placeholder="Select Video Format & Style" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Tutorial / Step-by-Step How-To">Educational Tutorial & How-To</SelectItem>
                                <SelectItem value="Listicle / Top X Countdowns">Listicle / Top X Countdown</SelectItem>
                                <SelectItem value="Storytelling & Personal Experiment">Storytelling & Personal Experiment</SelectItem>
                                <SelectItem value="Product Review & Comparison">Product Review & Comparison</SelectItem>
                                <SelectItem value="Video Essay & Deep Dive">Video Essay & Deep Dive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full flex gap-1 flex-col">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="audience-select">Target Audience</Label>
                            {audienceOption === "Auto-Detect" && detectedAudienceHint && (
                                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    <Wand2 className="w-3 h-3" />
                                    {detectedAudienceHint}
                                </span>
                            )}
                        </div>
                        <Select
                            value={audienceOption}
                            onValueChange={(value) => setAudienceOption(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="audience-select" placeholder="Select Target Audience" />
                            </SelectTrigger>
                            <SelectContent>
                                {AUDIENCE_OPTIONS.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="w-full flex items-center justify-end gap-2 mt-1">
                    <Button
                        variant="outline"
                        disabled={!topic}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!topic.trim() || isPending}
                        onClick={handleGenerate}
                    >
                        {isPending ? "Structuring Outline..." : "Build Video Outline"}
                    </Button>
                </div>
            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex gap-3 flex-col items-center mt-8">
                    <Skeleton className="w-full h-24" />
                    <Skeleton className="w-full h-32" />
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="w-full h-40" />
                    ))}
                </div>
            )}

            {/* RESULTS DASHBOARD */}
            {!isPending && result && (
                <div className="w-full flex flex-col gap-6 mt-8">

                    {/* TOP ACTION BAR */}
                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b">
                        <div>
                            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                <ListTree className="w-5 h-5 text-primary" />
                                {result.videoTitle}
                            </h2>
                            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                <Clock className="w-3.5 h-3.5" /> Estimated Length: {result.estimatedDuration}
                            </p>
                        </div>
                        <Button
                            onClick={() => copyText(getFullOutlineText(), setCopiedAll, "Complete Outline copied to clipboard!")}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                        >
                            {copiedAll ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                            Copy Complete Outline
                        </Button>
                    </div>

                    {/* FORMATTED YOUTUBE CHAPTERS CARD */}
                    <div className="w-full border border-primary/20 bg-primary/5 dark:bg-primary/10 rounded-xl p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                <MessageSquareCode className="w-4 h-4" />
                                Formatted YouTube Chapters (Copy to Description)
                            </div>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => copyText(result.formattedChapters, setCopiedChapters, "YouTube Chapters copied!")}
                                className="gap-1.5 text-xs"
                            >
                                {copiedChapters ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                Copy Chapters
                            </Button>
                        </div>
                        <div className="p-3 bg-card border rounded-md font-mono text-xs text-foreground whitespace-pre-line leading-relaxed">
                            {result.formattedChapters}
                        </div>
                    </div>

                    {/* DETAILED OUTLINE SECTIONS */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 pt-2 border-t">
                            <Film className="w-5 h-5 text-primary" />
                            Timestamped Section Breakdown ({result.sections.length} Sections)
                        </h3>

                        {result.sections.map((section, index) => (
                            <div
                                key={index}
                                className="w-full border rounded-lg p-5 flex flex-col gap-4 shadow-sm"
                            >
                                {/* SECTION HEADER */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b">
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center justify-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                            Section #{index + 1}
                                        </span>
                                        <h4 className="text-base font-semibold text-foreground">
                                            {section.sectionName}
                                        </h4>
                                    </div>
                                    <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-muted border text-muted-foreground">
                                        ⏱️ {section.timestamp}
                                    </span>
                                </div>

                                {/* TALKING POINTS */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Key Talking Points
                                    </span>
                                    <ul className="text-xs sm:text-sm text-foreground space-y-1.5 pl-5 list-disc">
                                        {section.talkingPoints.map((tp, i) => (
                                            <li key={i} className="leading-relaxed">{tp}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* B-ROLL & VISUALS */}
                                <div className="p-3 bg-primary/5 dark:bg-primary/10 border border-primary/15 rounded-md flex flex-col gap-1">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                                        <Video className="w-3.5 h-3.5" /> B-Roll & On-Screen Visual Suggestions
                                    </span>
                                    <p className="text-xs sm:text-sm text-foreground/90">
                                        {section.brollSuggestions}
                                    </p>
                                </div>

                                {/* ON-SCREEN TEXT & TRANSITION TIP */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground pt-1 border-t">
                                    <div>
                                        <strong className="text-foreground">On-Screen Text:</strong> {section.onScreenText}
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Transition Tip:</strong> {section.transitionTip}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PRO CREATOR TIPS */}
                    {result.proCreatorTips && result.proCreatorTips.length > 0 && (
                        <div className="w-full border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 rounded-xl p-5 flex flex-col gap-2">
                            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Lightbulb className="w-4 h-4 text-amber-500" /> Pro Retention Strategy Tips
                            </span>
                            <ul className="text-xs sm:text-sm text-foreground space-y-1.5 pl-5 list-disc">
                                {result.proCreatorTips.map((tip, i) => (
                                    <li key={i}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <BuyMeCoffeeBanner />
                </div>
            )}
        </div>
    );
};
