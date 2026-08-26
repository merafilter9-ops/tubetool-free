'use client';

import { Skeleton } from "@/components/ui/skeleton"
import TableSkeleton from "@/components/skeleton/table-skeleton"

export const ProjectViewSkeleton = () => {
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
                    <Skeleton className="w-full h-8 rounded-md" />

                    <TableSkeleton
                        headers={[
                            { title: "Title" },
                            { title: "Description" },
                            { title: "Status", className: "text-right" },
                            { title: "Budget", className: "text-right" },
                            { title: "Deadline", className: "text-right" },
                            { title: "Last Updated", className: "text-right" },
                            { title: "Actions", className: "text-right" },
                        ]}
                    />
                </div>
            </>
        </>
    )
}