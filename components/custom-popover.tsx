'use client';

import {
    Popover as PopoverWrapper,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils";

import { CustomPopoverProps } from "@/types/props";

export const Popover = ({
    children,
    content,
    side = "top",
    sideOffset = 10,
    className
}: CustomPopoverProps) => {
    return (
        <PopoverWrapper>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                className={cn("px-3 py-2", className)}
                side={side}
                sideOffset={sideOffset}
            >
                {content}
            </PopoverContent>
        </PopoverWrapper>
    )
}