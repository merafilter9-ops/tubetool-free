"use client";

import { useState, useTransition } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import InputFormTitle from "@/components/tools/input-form-title";
import { Tooltip } from "@/components/custom-tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";
import { onGenerateTitle } from "@/types/props";
import { TitleGeneratePayload } from "@/types/tools";

export const TitleGeneratorForm = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<string[]>([]);


    const handleGenerate = (values: onGenerateTitle) => {
        startTransition(async () => {
            // add only values that are not empty
            const data: TitleGeneratePayload = {
                Primary_Keywords: values.primaryKeywords.split(",").map((tag) => tag.trim()),
                Video_Description: values.videoDescription.trim(),
                Target_Audience: values.targetAudience,
                Video_Genre: values.category,
                language: values.language,
            };

            data.Video_Style = values.videoStyle;
            data.Channel_Branding = values.channelBranding;
            data.Call_to_Action = values.callToAction;
            data.Clickbait_Level = values.clickbaitLevel;
            data.Preferred_Length = values.preferredLength;

            try {
                const response = await API_URL_V1.post('/ai/generate-titles', {
                    // remove empty values
                    data: Object.fromEntries(Object.entries(data).filter(([, v]) => v !== ""))
                });
                setResult(response.data.data.titles);
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
    };
    return (
        <>
            <InputFormTitle
                onGenerate={handleGenerate}
                title="Title Generator Tool"
                isPending={isPending}
            />

            {
                isPending && (
                    <div className="w-full flex gap-2 flex-col items-center mt-6">
                        <div className="w-full lg:w-1/2 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Generated Titles</h2>
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
                        <div className="w-full lg:w-1/2 flex gap-1 flex-col">
                            <h2 className="text-lg text-left font-semibold">Generated Titles</h2>
                            <div className="w-full flex gap-2 flex-col items-center">
                                {
                                    result.map((title, index) => (
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