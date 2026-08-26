'use client';

import { Skeleton } from "@/components/ui/skeleton"

export const CompetitorReportSkeleton = () => {
    return (
        <>
            <>
                {/* Header Section */}
                <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full flex items-center justify-between gap-2">
                        <div className="w-full flex items-center gap-2">
                            <Skeleton className="w-4 h-4 rounded-full" />
                            <Skeleton className="w-48 h-6 rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="w-full flex flex-col mt-4">
                    <Skeleton className="w-full h-36 sm:h-28 md:h-36 rounded-md" />

                    {/* Avatar and Channel Info */}
                    <div className="w-full flex flex-col sm:flex-row gap-4 mt-4">
                        <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full" />
                        <div className="flex-1 flex flex-col gap-2">
                            <Skeleton className="w-1/2 h-6 rounded-md" />
                            <Skeleton className="w-1/3 h-5 rounded-md" />
                            <Skeleton className="w-3/4 h-5 rounded-md" />
                            <Skeleton className="w-full h-4 rounded-md" />
                        </div>
                    </div>

                    {/* Channel Brand Setting */}
                    <div className="w-full mt-6 flex flex-col">
                        <Skeleton className="w-1/3 h-5 rounded-md" />
                        <div className="w-full mt-2 h-fit border bg-background px-3 py-2 rounded-md shadow-sm flex flex-col gap-3">
                            <div className="w-full flex flex-col gap-1">
                                <Skeleton className="w-1/4 h-5 rounded-md" />
                                <Skeleton className="w-full h-4 rounded-md" />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <Skeleton className="w-1/4 h-5 rounded-md" />
                                <Skeleton className="w-full h-4 rounded-md" />
                            </div>
                            <div className="w-full flex items-center gap-4">
                                <Skeleton className="w-1/4 h-5 rounded-md" />
                                <Skeleton className="w-1/4 h-5 rounded-md" />
                            </div>
                        </div>
                    </div>

                    {/* Channel Analytics */}
                    <div className="w-full mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <Skeleton className="w-1/3 h-5 rounded-md" />
                    </div>
                    <div className="w-full mt-4 h-48 border bg-background px-3 py-2 rounded-md shadow-sm flex justify-center items-center">
                        <Skeleton className="w-full h-full rounded-md" />
                    </div>
                </div>
            </>
        </>
    )
}