'use client';

import dynamic from "next/dynamic";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import ThemeToggle from "@/components/theme-toggle";
import { Coffee, ArrowRight } from "lucide-react";

const MobileSidebar = dynamic(
    () => import("@/components/sidebar/mobile-sidebar"),
    { loading: () => <Skeleton className="w-12 h-full min-h-4" /> }
);
const CustomBreadcrumb = dynamic(
    () => import("@/components/custom-breadcrumb"),
    { loading: () => <Skeleton className="w-12 h-full min-h-4" /> }
);

export const Header = () => {
    return (
        <div className="w-full flex justify-between items-center gap-2 py-2 px-4 border-b">
            <MobileSidebar />
            <CustomBreadcrumb />
            <div className="w-fit items-center justify-between flex gap-2 sm:gap-3">
                
                {/* OUR MISSION & GOAL TOP NAVBAR BADGE */}
                <Link 
                    href="/our-mission" 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/10 to-amber-500/10 hover:from-red-500/20 hover:to-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold transition-all shadow-sm group"
                    title="View Tubetool's Mission"
                >
                    <Coffee className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
                    <span className="font-extrabold text-amber-500">Mission Goal</span>
                    <span className="bg-gradient-to-r from-red-500 to-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded ml-0.5 flex items-center gap-0.5">
                        View Details <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                </Link>

                <ThemeToggle />
            </div>
        </div>
    );
};