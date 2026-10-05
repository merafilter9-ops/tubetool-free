'use client';

import { useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import API_URL_V1 from "@/lib/axios-config";
import { KeywordResearchDashboard } from "./keyword-research-dashboard";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

export const KeywordResearchForm = () => {

    const [isPending, startTransition] = useTransition();
    const [keywords, setKeywords] = useState<string>("");
    const [dashboardData, setDashboardData] = useState<any>(null);

    const resetInputs = () => {
        setKeywords("");
    }

    const handleSubmit = () => {
        if (!keywords) {
            toast.error("Please fill all the fields");
            return;
        }
        startTransition(async () => {
            try {
                const response = await API_URL_V1.post('/ai/keyword-research', { data: keywords });
                setDashboardData(response?.data?.data);
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
                    Keyword Research Tool
                </h1>
                <div className="w-full flex gap-4 flex-col items-center">
                    <div className="w-full lg:w-1/2 flex gap-1 flex-col">
                        <Label htmlFor="keyword">Enter Keyword</Label>
                        <Input
                            id="keyword"
                            type="text"
                            placeholder="Enter Keyword"
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
                            Research
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
                !isPending && dashboardData && (
                    <div className="w-full flex flex-col gap-6">
                        <KeywordResearchDashboard data={dashboardData} />
                        <BuyMeCoffeeBanner className="mt-8" />
                    </div>
                )
            }

        </>
    )
}