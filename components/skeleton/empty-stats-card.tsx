'use client';

import { Skeleton } from "@/components/ui/skeleton"

export const EmptyStatsCardSkeleton = () => {
    return (
        <>
            <div className="w-full mt-4 flex items-center text-sm font-normal">
                <Skeleton className="h-4 w-32" />
            </div>
            <div className="w-full mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                <div className="bg-background border px-3 py-2 rounded-md">
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-4" />
                    </div>
                    <Skeleton className="h-6 w-16 mt-2" />
                </div>
                <div className="bg-background border px-3 py-2 rounded-md">
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-4" />
                    </div>
                    <Skeleton className="h-6 w-16 mt-2" />
                </div>
                <div className="bg-background border px-3 py-2 rounded-md">
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-4 w-4" />
                    </div>
                    <Skeleton className="h-6 w-16 mt-2" />
                </div>
            </div>
        </>
    )
}