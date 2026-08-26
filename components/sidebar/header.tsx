'use client'

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import ThemeToggle from "@/components/theme-toggle";

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
            <div className="w-fit items-center justify-between flex gap-2">
                <ThemeToggle />
            </div>
        </div>
    )
}