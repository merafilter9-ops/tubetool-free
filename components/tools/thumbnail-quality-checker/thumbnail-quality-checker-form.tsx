'use client';

import { useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

import InputFormThumb from "@/components/tools/input-form-thumb";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

import API_URL_V1 from "@/lib/axios-config";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";

interface ThumbnailsQualityAPIResponse {
    factors: {
        aspect_ratio_core: number;
        brand_identity_score: number;
        color_palette: number;
        font_size_score: number;
        nsfw_score: number;
        sentiment_score: number;
        similarity_score: number;
        white_space_score: number;
    };
    feedback: string;
    score: number;
    suggestions: string[];
}

export const ThumbnailQualityCheckerForm = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<ThumbnailsQualityAPIResponse>();

    const handleGenerate = (inputTitle: string, brandName: string, thumbnail: string) => {
        if (inputTitle.trim() === "" || brandName.trim() === "" || thumbnail.trim() === "") {
            toast.error("Please fill in all fields.");
            return;
        }
        startTransition(async () => {
            const data = {
                videoTitle: inputTitle,
                brandName,
                thumbnail,
                brandLogo: '',
                userProfile: '',
            };

            try {
                const response = await API_URL_V1.post('/ai/thumbnail-quality', { data });
                setResult(response.data.data);
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
            <InputFormThumb
                onGenerate={handleGenerate}
                title="Thumbnail Quality Checker Tool"
                isPending={isPending}
            />

            {
                isPending && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full md:w-1/2 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Thumbnail Quality Feedback</h2>
                            <div className="w-full flex gap-2 flex-col items-center">
                                <Skeleton className="w-full h-24" />
                            </div>
                        </div>
                    </div>
                )
            }

            {
                !isPending && result && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full md:w-1/2 flex gap-1 flex-col">
                            <div className="w-full flex gap-2 justify-between items-center border-b">
                                <h2 className="text-lg text-left font-semibold">Thumbnail Quality Feedback</h2>
                            </div>
                            <div className="w-full flex flex-col space-y-4 pt-4">
                                <div className="w-full flex flex-col sm:flex-row gap-2 items-center justify-between">
                                    <div className="w-full sm:w-1/2 flex flex-col gap-0.5">
                                        <Label className="font-semibold">Quality Score</Label>
                                        <span className="font-normal">{result?.score}%</span>
                                    </div>
                                    <div className="w-full sm:w-1/2 flex flex-col gap-0.5">
                                        <Label className="font-semibold">Quality Feedback</Label>
                                        <span className="font-normal">{result?.feedback}</span>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <Label className="font-semibold">Suggestions</Label>
                                    <ul className="list-disc pl-5">
                                        {
                                            result?.suggestions.map((suggestion, index) => (
                                                <li key={index} className="font-normal text-secondary-foreground">{suggestion}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <Label className="font-semibold">Factors Check</Label>
                                    <div className="w-full flex flex-col gap-0.5">
                                        {
                                            Object.entries(result?.factors).map(([key, value], index) => (
                                                <div key={index} className="w-full flex gap-0.5 items-center justify-between">
                                                    <span className="font-normal">
                                                        {
                                                            key
                                                                .split('_')
                                                                .map(it => it.charAt(0).toUpperCase() + it.slice(1, it.length))
                                                                .join(" ")
                                                        }
                                                    </span>
                                                    <p className="font-normal flex items-center mb-0">
                                                        {value === 1 ? <span className="text-emerald-700 dark:text-emerald-600">Pass</span> : <span className="text-primary">Fail</span>}
                                                        {
                                                            value === 1 ?
                                                                <CheckCircle className="w-4 h-4 ml-2 text-emerald-700 dark:text-emerald-600" />
                                                                : <XCircle className="w-4 h-4 ml-2 text-primary" />
                                                        }
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BuyMeCoffeeBanner className="mt-8" />
                    </div>
                )
            }
        </>
    )
}