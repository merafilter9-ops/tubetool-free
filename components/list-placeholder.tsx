'use client';

import { User } from "lucide-react"

export const ListPlaceholder = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%] sm:w-56 h-16 rounded-xl border-4 border-background bg-gradient-to-t from-gray-50 to-gray-200 flex items-center justify-start p-2 space-x-3 z-20 dark:shadow-primary/10 dark:from-primary/5 dark:to-primary/20 dark:border-primary/35">
                <div className="w-10 h-full rounded-full bg-background dark:bg-primary/10 border-2 border-gray-300 dark:border-primary/35 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400 dark:text-primary" />
                </div>
                <div className="flex-1 flex flex-col h-full gap-2 justify-center">
                    <div className="w-[95%] h-2.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-primary/5 dark:to-primary/35"></div>
                    <div className="w-[60%] h-2.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-primary/5 dark:to-primary/35"></div>
                </div>
            </div>
            <div className="w-full sm:w-64 h-16 rounded-xl border-4 border-background bg-gradient-to-t from-gray-50 to-gray-200 shadow-xl flex items-center justify-start p-2 space-x-3 z-30 -mt-6 dark:shadow-primary/10 dark:from-primary/5 dark:to-primary/20 dark:border-primary/35">
                <div className="w-10 h-full rounded-full bg-background dark:bg-primary/10 border-2 border-gray-300 dark:border-primary/35 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400 dark:text-primary" />
                </div>
                <div className="flex-1 flex flex-col h-full gap-2 justify-center">
                    <div className="w-[95%] h-2.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-primary/5 dark:to-primary/35"></div>
                    <div className="w-[60%] h-2.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-primary/5 dark:to-primary/35"></div>
                </div>
            </div>
            <div className="w-[90%] sm:w-56 h-16 rounded-xl border-4 border-background bg-gradient-to-t from-gray-50 to-gray-200 flex items-center justify-start p-2 space-x-3 z-20 -mt-6 dark:shadow-primary/10 dark:from-primary/5 dark:to-primary/20 dark:border-primary/35">
                <div className="w-10 h-full rounded-full bg-background dark:bg-primary/10 border-2 border-gray-300 dark:border-primary/35 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400 dark:text-primary" />
                </div>
                <div className="flex-1 flex flex-col h-full gap-2 justify-center">
                    <div className="w-[95%] h-2.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-primary/5 dark:to-primary/35"></div>
                    <div className="w-[60%] h-2.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-primary/5 dark:to-primary/35"></div>
                </div>
            </div>
        </div>
    )
}