'use client';

import Link from "next/link";
import { Coffee, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhySignUpCard = () => {
    return (
        <div className="relative group overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-card to-amber-950/10 p-4 shadow-sm">
            <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Coffee className="w-3 h-3 text-red-500" /> Community Supported
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> 100% Free
                    </span>
                </div>

                <h4 className="text-sm font-bold text-foreground leading-tight">
                    Keep TubeTool 100% Free Forever ☕
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                    Instead of charging $25-$50/mo like TubeBuddy & VidIQ, we build free tools for creators funded by voluntary community contributions.
                </p>

                <Link 
                    href="/our-mission" 
                    className="w-full pt-1"
                >
                    <Button size="sm" className="w-full bg-gradient-to-r from-red-500 via-amber-500 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-bold text-xs h-8 gap-1.5 shadow group">
                        <span>Support Our Mission</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default WhySignUpCard;