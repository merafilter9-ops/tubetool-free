'use client';

import { useState, useTransition } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import { Tooltip } from "@/components/custom-tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const TopicIdeasForm = () => {
    const [isPending, startTransition] = useTransition();
    const [keywords, setKeywords] = useState<string>("");
    const [result, setResult] = useState<string[]>([]);

    const resetInputs = () => {
        setKeywords("");
    }

    const handleSubmit = () => {
        if (!keywords) {
            toast.error("Please fill all the fields");
            return;
        }
        startTransition(async () => {
            const data = {
                url: keywords
            };

            try {
                const response = await API_URL_V1.post('/ai/topic-ideas', data);
                setResult(response.data?.data?.recommendations);
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
            <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
                <h1 className="text-2xl font-semibold text-center lg:w-1/2 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                    Topic Idea Generator Tool
                </h1>
                <div className="w-full flex gap-4 flex-col items-center">
                    <div className="w-full lg:w-1/2 flex gap-1 flex-col">
                        <Label htmlFor="keyword">{"Enter your niche, topic, or a seed keyword"}</Label>
                        <Input
                            id="keyword"
                            type="text"
                            placeholder="eg. Tech reviews, budget travel, cooking for beginners"
                            className="w-full"
                            autoFocus
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-end gap-2">
                        <Button
                            variant="outline"
                            disabled={!keywords}
                            onClick={resetInputs}
                        >
                            Reset
                        </Button>
                        <Button
                            disabled={!keywords || isPending}
                            onClick={handleSubmit}
                        >
                            Generate
                        </Button>
                    </div>
                </div>
            </div>

            {
                isPending && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full lg:w-1/2 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Generated Topic Ideas</h2>
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
                !isPending && result?.length > 0 && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full lg:w-1/2 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Generated Topic Ideas</h2>
                            <div className="w-full flex gap-2 flex-col items-center">
                                {
                                    result?.map((title, index) => (
                                        <div key={index} className="w-full flex gap-2">
                                            <p className="min-w-fit text-base font-semibold text-left">{index + 1}.</p>
                                            <Tooltip content="Click to copy" sideOffset={0}>
                                                <p
                                                    className="flex-1 text-base font-normal text-left cursor-pointer flex items-center gap-3"
                                                    onClick={() => copyToClipboard(title)}
                                                >
                                                    {title}
                                                    <Copy className="block w-4 h-4 min-w-4 min-h-4 md:hidden cursor-pointer" />
                                                </p>
                                            </Tooltip>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <BuyMeCoffeeBanner className="mt-8" />
                    </div>
                )
            }
        </>
    )
}