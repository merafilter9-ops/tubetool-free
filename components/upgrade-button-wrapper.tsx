'use client';

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import { usePlanType } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { UpgradeButtonWrapperProps } from "@/types/props";

export const UpgradeButtonWrapper = ({
    children,
    wrapperClass = "flex gap-2 items-center justify-center w-full",
    buttonClass,
    buttonSize = "sm",
}: UpgradeButtonWrapperProps) => {
    return null;
}