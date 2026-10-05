'use client';

import Link from "next/link";
import { Coffee, Sparkles, Heart, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUY_ME_A_COFFEE_URL } from "@/lib/constants";

interface BuyMeCoffeeCardProps {
    className?: string;
}

export const BuyMeCoffeeCard = ({
    className = ""
}: BuyMeCoffeeCardProps) => {
    return (
        <div className={`w-full max-w-5xl mx-auto my-8 relative group overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-card to-amber-950/10 p-6 sm:p-8 shadow-xl backdrop-blur-xl ${className}`}>
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                
                {/* LEFT: MISSION & VALUE PROP */}
                <div className="flex-1 space-y-3 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold">
                        <Coffee className="w-3.5 h-3.5" />
                        <span>Support Free Creator Infrastructure</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        Keep TubeTool 100% Free Forever ☕
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        Platforms like TubeBuddy & VidIQ charge creators <span className="font-bold text-foreground">$25 - $50 every month</span> for basic AI tools. We build every premium creator tool and give it to YouTubers for <span className="font-bold text-amber-500">$0 free</span>.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-foreground pt-1">
                        <span className="flex items-center gap-1 text-emerald-500">
                            <ShieldCheck className="w-4 h-4" /> No Credit Card Required
                        </span>
                        <span className="flex items-center gap-1 text-amber-500">
                            <Heart className="w-4 h-4 fill-amber-500/20" /> Community Supported
                        </span>
                    </div>
                </div>

                {/* RIGHT: COMMUNITY ACTION BOX */}
                <div className="w-full lg:w-80 bg-card/90 border border-amber-500/30 rounded-2xl p-5 shadow-lg backdrop-blur-md flex flex-col gap-3 shrink-0">
                    
                    <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-foreground mb-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            <span>Creator-Powered Infrastructure</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Your voluntary coffee contributions keep our AI servers fast, reliable, and accessible for everyone.
                        </p>
                    </div>

                    {/* DIRECT BUY ME A COFFEE BUTTON */}
                    <a 
                        href={BUY_ME_A_COFFEE_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full"
                    >
                        <Button 
                            className="w-full bg-gradient-to-r from-red-500 via-amber-500 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-bold text-xs sm:text-sm h-11 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <Coffee className="w-4 h-4" />
                            <span>Buy Me a Coffee</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </Button>
                    </a>

                    {/* READ OUR MISSION LINK */}
                    <Link 
                        href="/our-mission" 
                        className="text-center text-xs font-semibold text-muted-foreground hover:text-amber-500 transition-colors flex items-center justify-center gap-1 py-1"
                    >
                        <span>Learn About Our Mission</span>
                        <ArrowRight className="w-3 h-3" />
                    </Link>

                </div>

            </div>

        </div>
    );
};


