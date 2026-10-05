"use client";

import { useState, useTransition } from "react";
import { 
    Copy, 
    ImageIcon, 
    Type, 
    Sparkles, 
    UserCircle2, 
    Paintbrush, 
    CheckCircle2, 
    Check, 
    Wand2
} from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import InputForm from "@/components/tools/input-form";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";
import { BuyMeCoffeeCard } from "@/components/buy-me-coffee-card";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

export const ThumbnailGeneratorForm = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<any[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleGenerate = (keywords: string, category: string, language: string) => {
        startTransition(async () => {
            try {
                const response = await API_URL_V1.post('/ai/thumbnail-generator', {
                    data: {
                        Video_Topic: keywords,
                        Category: category,
                        Language: language
                    }
                });
                
                setResult(response.data.data.concepts || []);
                
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (error) {
                toast.error("Something went wrong. Please try again later.");
                console.error('Error generating thumbnail concepts:', error);
            }
        });
    };

    const getFullPrompt = (concept: any) => {
        if (concept.midjourneyPrompt && concept.midjourneyPrompt.trim().length > 30) {
            return concept.midjourneyPrompt.trim();
        }
        // Construct comprehensive, ultra-descriptive prompt if string is brief
        const parts = [
            `YouTube thumbnail design featuring ${concept.mainSubject || 'main subject'}`,
            concept.facialExpression ? `with ${concept.facialExpression} facial expression` : '',
            concept.backgroundSetup ? `set in ${concept.backgroundSetup}` : '',
            concept.colorPalette ? `color palette: ${concept.colorPalette}` : '',
            `high contrast visual hierarchy, bold composition, cinematic lighting, 8k resolution, 16:9 aspect ratio`
        ].filter(Boolean);
        return parts.join(', ');
    };

    const copySinglePrompt = (concept: any, index: number) => {
        const fullPrompt = getFullPrompt(concept);
        copyToClipboard(fullPrompt);
        setCopiedIndex(index);
        toast.success(`AI Prompt #${index + 1} copied to clipboard!`);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const copyAllPrompts = () => {
        if (!result || result.length === 0) return;
        const allPromptsText = result.map((c, i) => {
            const prompt = getFullPrompt(c);
            return `--- CONCEPT ${i + 1}: ${c.name} ---\nOverlay Text: "${c.overlayText}"\nAI Prompt: ${prompt}\n`;
        }).join('\n');
        copyToClipboard(allPromptsText);
        toast.success("All AI Image Generator prompts copied to clipboard!");
    };

    const getConceptBadge = (index: number) => {
        if (index === 0) return { label: "🔥 High CTR Focus", bg: "bg-rose-500/10 text-rose-500 border-rose-500/20" };
        if (index === 1) return { label: "🎯 Minimalist Contrast", bg: "bg-blue-500/10 text-blue-500 border-blue-500/20" };
        return { label: "⚡ Curiosity Hook", bg: "bg-amber-500/10 text-amber-500 border-amber-500/20" };
    };

    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
            
            {/* INPUT FORM CONTAINER */}
            <div className="w-full">
                <InputForm
                    onGenerate={handleGenerate}
                    title="Thumbnail Idea & Prompt Generator"
                    inputLabel="Enter your Video Idea or Title"
                    inputPlaceholder="e.g. How to grow a small YouTube channel fast, Next.js 15 crash course"
                    isPending={isPending}
                />
            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex flex-col items-center mt-10 gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <Wand2 className="w-4 h-4 text-primary animate-spin" />
                        <span>Generating visual thumbnail concepts & AI prompts...</span>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col gap-4 border p-5 rounded-2xl bg-card shadow-sm">
                                <Skeleton className="h-28 w-full rounded-xl" />
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <hr className="border-border/60" />
                                <Skeleton className="h-24 w-full rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* GENERATED CONCEPTS OUTPUT */}
            {!isPending && result.length > 0 && (
                <div className="w-full flex flex-col items-center mt-10 gap-6 mb-16 animate-in fade-in duration-500">
                    
                    {/* RESULT HEADER ACTION BAR */}
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card border rounded-2xl p-4 sm:p-5 shadow-sm">
                        <div>
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Generated Output</span>
                                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">3 Concepts</span>
                            </div>
                            <h2 className="text-xl font-bold text-foreground">
                                Winning Thumbnail Concepts & AI Prompts
                            </h2>
                        </div>

                        <Button 
                            variant="outline" 
                            size="sm"
                            onClick={copyAllPrompts}
                            className="flex items-center gap-1.5 text-xs font-semibold border-primary/30 text-primary hover:bg-primary/10"
                        >
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy All AI Prompts</span>
                        </Button>
                    </div>

                    {/* CONCEPTS GRID (100% RESPONSIVE) */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {result.map((concept, index) => {
                            const badge = getConceptBadge(index);
                            const fullPromptText = getFullPrompt(concept);

                            return (
                                <div 
                                    key={index} 
                                    className="flex flex-col border border-border/80 bg-card rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group"
                                >
                                    {/* 16:9 VISUAL MOCKUP PREVIEW HEADER */}
                                    <div className="relative aspect-video bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 p-4 flex flex-col justify-between overflow-hidden border-b border-border/60">
                                        
                                        {/* Glow background accent */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

                                        <div className="flex justify-between items-center z-10">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-md ${badge.bg}`}>
                                                {badge.label}
                                            </span>
                                            <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                                                16:9 HD
                                            </span>
                                        </div>

                                        {/* Mockup Overlay Text */}
                                        <div className="z-10 text-center my-auto px-2">
                                            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider block mb-1 drop-shadow">
                                                Text Overlay
                                            </span>
                                            <h4 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight leading-none drop-shadow-md bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-white/10 inline-block max-w-full truncate">
                                                &quot;{concept.overlayText || 'CLICK HERE'}&quot;
                                            </h4>
                                        </div>

                                        <div className="z-10 flex justify-between items-center text-[10px] text-slate-300">
                                            <span className="truncate max-w-[180px]">Concept #{index + 1}: {concept.name}</span>
                                            <span className="text-primary font-medium">YouTube Ready</span>
                                        </div>
                                    </div>

                                    {/* CONCEPT STRATEGY & REASONING */}
                                    <div className="p-4 bg-muted/20 border-b border-border/50">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-extrabold shrink-0">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-sm font-bold text-foreground leading-tight truncate">{concept.name}</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-normal flex items-start gap-1 pt-0.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{concept.reasoning}</span>
                                        </p>
                                    </div>

                                    {/* VISUAL BREAKDOWN DETAILS */}
                                    <div className="p-4 sm:p-5 flex flex-col gap-3.5 flex-1 text-xs">
                                        
                                        {/* Background Setup */}
                                        <div className="flex items-start gap-2.5">
                                            <ImageIcon className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                            <div>
                                                <span className="font-bold text-foreground block text-[11px]">Background & Setting:</span>
                                                <span className="text-muted-foreground leading-snug">{concept.backgroundSetup}</span>
                                            </div>
                                        </div>

                                        {/* Main Subject */}
                                        <div className="flex items-start gap-2.5">
                                            <UserCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                            <div>
                                                <span className="font-bold text-foreground block text-[11px]">Main Subject & Expression:</span>
                                                <span className="text-muted-foreground leading-snug">{concept.mainSubject}</span>
                                                {concept.facialExpression && (
                                                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block mt-0.5">
                                                        Expression: {concept.facialExpression}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Overlay Text Details */}
                                        <div className="flex items-start gap-2.5">
                                            <Type className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                            <div>
                                                <span className="font-bold text-foreground block text-[11px]">Overlay Text (High Impact):</span>
                                                <span className="font-extrabold text-foreground bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-xs inline-block mt-0.5">
                                                    &quot;{concept.overlayText}&quot;
                                                </span>
                                            </div>
                                        </div>

                                        {/* Color Scheme */}
                                        <div className="flex items-start gap-2.5">
                                            <Paintbrush className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                                            <div>
                                                <span className="font-bold text-foreground block text-[11px]">Color Scheme & Contrast:</span>
                                                <span className="text-muted-foreground leading-snug">{concept.colorPalette}</span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* AI IMAGE GENERATOR PROMPT CONTAINER */}
                                    <div className="p-4 bg-muted/40 border-t border-border/60">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-primary flex items-center gap-1">
                                                <Sparkles className="w-3.5 h-3.5" /> AI Image Generator Prompt
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => copySinglePrompt(concept, index)}
                                                className="h-7 px-2 text-[11px] text-primary hover:bg-primary/10 gap-1"
                                            >
                                                {copiedIndex === index ? (
                                                    <>
                                                        <Check className="w-3 h-3 text-emerald-500" />
                                                        <span className="text-emerald-500 font-bold">Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-3 h-3" />
                                                        <span>Copy Prompt</span>
                                                    </>
                                                )}
                                            </Button>
                                        </div>

                                        {/* UNTRUNCATED FULL PROMPT BOX */}
                                        <div className="p-3 bg-background rounded-xl border text-[11px] font-mono text-foreground leading-relaxed shadow-inner max-h-48 overflow-y-auto select-all">
                                            {fullPromptText}
                                        </div>

                                        <div className="mt-2.5 flex items-center justify-between text-[10px] text-muted-foreground">
                                            <span>Optimized for:</span>
                                            <span className="font-semibold text-foreground">AI Image Generators</span>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    <BuyMeCoffeeBanner className="mt-8" />

                </div>
            )}

            {!isPending && result.length === 0 && (
                <div className="w-full mt-6">
                    <BuyMeCoffeeCard />
                </div>
            )}
        </div>
    );
};
