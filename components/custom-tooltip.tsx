'use client';

import React from "react";

import {
    Tooltip as TooltipWrapper,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet";

import { CustomTooltipProps, CustomTooltipWithSheetProps } from "@/types/props";
import { cn } from "@/lib/utils";

export const Tooltip = ({
    children,
    content,
    side = "top",
    sideOffset = 10,
    className = "",
}: CustomTooltipProps) => {
    return (
        <>
            <TooltipProvider delayDuration={100}>
                <TooltipWrapper>
                    <TooltipTrigger asChild>
                        {children}
                    </TooltipTrigger>
                    <TooltipContent
                        side={side}
                        sideOffset={sideOffset}
                        style={{ zIndex: "9999 !important" }}
                        className={cn(className)}
                    >
                        {content}
                    </TooltipContent>
                </TooltipWrapper>
            </TooltipProvider>
        </>
    )
}

export const TooltipWithSheet = ({
    children,
    content,
    side = "top",
    sideOffset = 10,
    className = "",
    sheetContent
}: CustomTooltipWithSheetProps) => {
    return (
        <>
            <TooltipProvider delayDuration={100}>
                <TooltipWrapper>
                    <Sheet>
                        <SheetTrigger asChild>
                            <TooltipTrigger asChild>
                                {children}
                            </TooltipTrigger>
                        </SheetTrigger>
                        {sheetContent}
                        <TooltipContent
                            side={side}
                            sideOffset={sideOffset}
                            style={{ zIndex: "9999 !important" }}
                            className={cn(className)}
                        >
                            {content}
                        </TooltipContent>
                    </Sheet>
                </TooltipWrapper>
            </TooltipProvider>
        </>
    )
}