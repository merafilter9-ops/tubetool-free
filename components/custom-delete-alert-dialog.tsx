'use client';

import { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { CustomDeleteAlertDialogProps } from "@/types/props";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export const CustomDeleteAlertDialog = ({
    children,
    content = "Delete",
    side = "top",
    sideOffset = 10,
    alertTitle = "Are you absolutely sure?",
    alertDescription = "This action cannot be undone.",
    alertBody,
    onDelete,
    okText = "Delete",
    cancelText = "Cancel",
    isOkTextDisabled = false,
}: CustomDeleteAlertDialogProps) => {

    const [typeDelete, setTypeDelete] = useState<string>("");

    return (
        <AlertDialog>
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <AlertDialogTrigger asChild>
                            {children}
                        </AlertDialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent
                        side={side}
                        sideOffset={sideOffset}
                        style={{ zIndex: "9999 !important" }}
                    >
                        {content}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
                    <AlertDialogDescription>{alertDescription}</AlertDialogDescription>
                </AlertDialogHeader>

                <div className="w-full flex flex-col gap-3">
                    {alertBody}
                    <div className="w-full flex flex-col gap-1">
                        <Label htmlFor="delete" className="text-sm font-semibold">Type &quot;delete&quot; to confirm</Label>
                        <Input
                            id="delete"
                            type="text"
                            placeholder="delete"
                            className="w-full"
                            value={typeDelete}
                            onChange={(e) => setTypeDelete(e.target.value)}
                        />
                    </div>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancelText}</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={typeDelete.toLowerCase() !== "delete" || isOkTextDisabled}
                        onClick={onDelete}
                    >
                        {okText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}