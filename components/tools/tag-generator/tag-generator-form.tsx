'use client';

import { useState, useTransition } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import InputFormTag from "@/components/tools/input-form-tag";
import { Tooltip } from "@/components/custom-tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";

export const TagGeneratorForm = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<{ name: string; description: string; tags: string[] }[]>([]);

    const handleGenerate = (values: any) => {
        startTransition(async () => {
            const data = {
                topics: values.primaryKeywords,
                language: values.language,
                genre: values.category,
                alphabet: values.language === "Hinglish" ? "ltn" : "",
                targetAudience: values.targetAudience,
                focusType: values.focusType,
                competitorChannels: values.competitorChannels,
                includeMisspellings: values.includeMisspellings
            };

            try {
                const response = await API_URL_V1.post('/ai/generate-tags', { data });
                setResult(response.data?.data?.categories || []);
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (error) {
                toast.error("Something went wrong. Please try again later.");
                console.error('Error generating title:', error);
            }
        });
    }

    return (
        <>
            <InputFormTag
                onGenerate={handleGenerate}
                title="Advanced Tag Generator"
                isPending={isPending}
            />

            {
                isPending && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full lg:w-2/3 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Generated Tags</h2>
                            <div className="w-full flex gap-2 flex-col items-center">
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <Skeleton key={index} className="w-full h-8" />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }

            {
                !isPending && result && result.length > 0 && (
                    <div className="w-full flex gap-4 flex-col items-center mt-6 mb-10">
                        <div className="w-full lg:w-2/3 flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border">
                            <h2 className="text-xl font-bold">All Generated Tags</h2>
                            <Button 
                                variant="default" 
                                size="sm" 
                                className="flex items-center gap-2"
                                onClick={() => {
                                    const allTags = result.flatMap(cat => cat.tags).join(', ');
                                    copyToClipboard(allTags);
                                }}
                            >
                                <Copy className="w-4 h-4" /> Copy All Tags
                            </Button>
                        </div>
                        {result.map((category, index) => (
                            <div key={index} className="w-full lg:w-2/3 flex gap-2 flex-col p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
                                <div className="w-full flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-semibold gradient-text">{category.name}</h3>
                                        <p className="text-sm text-muted-foreground">{category.description}</p>
                                    </div>
                                    <Tooltip content="Copy category tags" side="top">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => copyToClipboard(category.tags.join(', '))}
                                        >
                                            <Copy className="w-4 h-4" />
                                        </Button>
                                    </Tooltip>
                                </div>
                                <div className="w-full flex flex-wrap gap-2 mt-2">
                                    {category.tags.map((tag: string, tagIndex: number) => (
                                        <p
                                            key={tagIndex}
                                            className="text-sm font-medium flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <span>{tag}</span>
                                            <Copy
                                                className="w-3.5 h-3.5 min-w-3.5 min-h-3.5 cursor-pointer text-muted-foreground hover:text-foreground"
                                                onClick={() => copyToClipboard(tag)}
                                            />
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <BuyMeCoffeeBanner className="mt-8" />
                    </div>
                )
            }
        </>
    )
}