'use client';

import Link from "next/link";
import { Coffee, ArrowRight, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BuyMeCoffeeBannerProps {
    className?: string;
}

export const BuyMeCoffeeBanner = ({ className = "" }: BuyMeCoffeeBannerProps) => {
    return (
        <div className={`w-full max-w-4xl mx-auto my-6 relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-card to-rose-500/10 p-5 sm:p-6 shadow-lg backdrop-blur-xl ${className}`}>
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Left: Text & Badge */}
                <div className="flex items-start gap-3.5 text-left flex-1">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400 animate-pulse" />
                    </div>
                    
                    <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-600 dark:text-amber-400 text-[11px] font-bold">
                                <Sparkles className="w-3 h-3" /> Community Powered
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-500">
                                <Heart className="w-3 h-3 fill-rose-500/20" /> 100% Free Forever
                            </span>
                        </div>

                        <h4 className="text-base font-bold text-foreground leading-snug">
                            Enjoying TubeTool&apos;s free AI insights? ☕
                        </h4>

                        <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                            We don&apos;t charge monthly fees like TubeBuddy or VidIQ. Help us keep server infrastructure free for every creator.
                        </p>
                    </div>
                </div>

                {/* Right: CTA Button */}
                <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                    <Link href="/our-mission" className="w-full sm:w-auto block">
                        <Button 
                            className="w-full sm:w-auto bg-gradient-to-r from-red-500 via-amber-500 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-bold text-xs h-10 px-5 rounded-xl shadow-md hover:shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Support Our Mission</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BuyMeCoffeeBanner;
