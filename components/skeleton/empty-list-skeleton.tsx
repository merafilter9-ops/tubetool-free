'use client';

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export const EmptyListSkeleton = ({
    className
}: { className?: string }) => {
    return (
        <div className={cn("w-full flex flex-col justify-center space-y-6 items-center min-h-80", className)}>
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <Skeleton className="w-full h-16 rounded-xl flex items-center justify-start p-2 space-x-3">
                    <div className="w-10 h-full rounded-full flex items-center justify-center">
                        <Skeleton className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex flex-col h-full gap-2 justify-center">
                        <Skeleton className="w-[95%] h-2.5 rounded-full" />
                        <Skeleton className="w-[60%] h-2.5 rounded-full" />
                    </div>
                </Skeleton>
                <Skeleton className="w-full h-16 rounded-xl flex items-center justify-start p-2 space-x-3">
                    <div className="w-10 h-full rounded-full flex items-center justify-center">
                        <Skeleton className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex flex-col h-full gap-2 justify-center">
                        <Skeleton className="w-[95%] h-2.5 rounded-full" />
                        <Skeleton className="w-[60%] h-2.5 rounded-full" />
                    </div>
                </Skeleton>
                <Skeleton className="w-full h-16 rounded-xl flex items-center justify-start p-2 space-x-3">
                    <div className="w-10 h-full rounded-full flex items-center justify-center">
                        <Skeleton className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex flex-col h-full gap-2 justify-center">
                        <Skeleton className="w-[95%] h-2.5 rounded-full" />
                        <Skeleton className="w-[60%] h-2.5 rounded-full" />
                    </div>
                </Skeleton>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <Skeleton className="w-full md:w-44 h-5 rounded-md" />
                <Skeleton className="w-full md:w-96 h-3 rounded-md mt-1" />
                <div className="mt-4 flex items-center justify-center">
                    <Skeleton className="w-full md:w-36 h-8 rounded-md" />
                </div>
            </div>
        </div>
    )
}