'use client';

import { useState, useTransition } from "react";
import { Copy, X } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import InputForm from "@/components/tools/input-form";
import { Tooltip } from "@/components/custom-tooltip";
import { Skeleton } from "@/components/ui/skeleton";

import API_URL_V1 from "@/lib/axios-config";
import { copyByCommaSeparated, copyToClipboard } from "@/lib/utils";

export const HashtagGeneratorForm = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<string[]>([]);

    const handleGenerate = (keywords: string, category: string, language: string) => {
        startTransition(async () => {
            const data = {
                title: keywords,
                language,
                genre: category
            };

            try {
                const response = await API_URL_V1.post('/ai/generate-hashtags', { data });
                setResult(response.data.data.tags);
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
                title="Hashtag Generator Tool"
                inputLabel="Enter Video Title"
                inputPlaceholder="Enter video title to generate hashtags"
                isPending={isPending}
            />

            {
                isPending && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full md:w-1/2 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Generated Hashtags</h2>
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
                !isPending && result.length > 0 && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full md:w-1/2 flex gap-1 flex-col">
                            <div className="w-full flex gap-2 justify-between items-center">
                                <h2 className="text-lg text-left font-semibold">Generated Hashtags</h2>
                                <Tooltip content="Copy all">
                                    <Copy
                                        className="w-4 h-4 cursor-pointer"
                                        onClick={() => copyByCommaSeparated(result)}
                                    />
                                </Tooltip>
                            </div>
                            <div className="w-full flex gap-2 flex-wrap">
                                {
                                    result.map((title, index) => (
                                        <div key={index} className="flex gap-2 items-center rounded-md border px-2 py-1">
                                            <Tooltip content="Click to copy" sideOffset={0}>
                                                <p
                                                    className="text-base font-normal text-left cursor-pointer flex items-center gap-2 mt-0"
                                                    onClick={() => copyToClipboard("#" + title)}
                                                >
                                                    #{title}
                                                    <Copy className="block w-4 h-4 min-w-4 min-h-4 md:hidden cursor-pointer" />
                                                </p>
                                            </Tooltip>
                                            <X
                                                className="w-3.5 h-3.5 cursor-pointer border rounded-full bg-accent p-0.5"
                                                onClick={() => {
                                                    setResult(result.filter((_, i) => i !== index))
                                                }}
                                            />
                                        </div>
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