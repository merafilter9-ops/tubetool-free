'use client';

import { useState, useTransition } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import InputForm from "@/components/tools/input-form";
import { Tooltip } from "@/components/custom-tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";
import { GeneratedTags } from "@/types/tools";

export const TagGeneratorForm = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<string[]>([]);

    const handleGenerate = (keywords: string, category: string, language: string) => {
        startTransition(async () => {
            const data = {
                topics: keywords,
                language,
                genre: category,
                alphabet: language === "Hinglish" ? "ltn" : "",
            };

            try {
                const response = await API_URL_V1.post('/ai/generate-tags', { data });
                setResult(response.data?.data?.tags);
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
            <InputForm
                onGenerate={handleGenerate}
                title="Tag Generator Tool"
                inputLabel="Enter Video Title or Topic"
                inputPlaceholder="Enter video title or topic to generate tags"
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
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full lg:w-2/3 flex gap-1 flex-col">
                            <div className="w-full flex justify-between items-center">
                                <h2 className="text-lg text-left font-semibold">Generated Tags</h2>
                                <Tooltip
                                    content="Copy all tags"
                                    side="top"
                                >
                                    <Copy
                                        className="w-4 h-4 cursor-pointer"
                                        onClick={() => copyToClipboard(result.join(', '))}
                                    />
                                </Tooltip>
                            </div>
                            <div className="w-full flex flex-wrap gap-2 mt-2">
                                {
                                    result.map((tag: string, tagIndex: number) => (
                                        <p
                                            key={tagIndex}
                                            className="text-sm font-normal flex items-center gap-3 mt-0 px-2 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800"
                                        >
                                            <span>{tag}</span>
                                            <Copy
                                                className="w-3.5 h-3.5 min-w-3.5 min-h-3.5 cursor-pointer"
                                                onClick={() => copyToClipboard(tag)}
                                            />
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}