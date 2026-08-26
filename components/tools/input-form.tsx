'use client'

import { useState } from "react";
import { toast } from "sonner"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { UpgradeButtonWrapper } from "@/components/upgrade-button-wrapper";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ALL_LANGUAGES_LIST, VIDEO_CATEGORIES } from "@/constants";
import { usePlanType } from "@/hooks/use-current-user";

interface InputFormProps {
    onGenerate: (keywords: string, category: string, language: string, isRealtime?: boolean) => void;
    title: string;
    inputLabel: string;
    inputPlaceholder: string;
    realtime?: boolean;
    isPending?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onGenerate, title, inputLabel, inputPlaceholder, realtime, isPending }) => {
    const planType = usePlanType();

    const [keywords, setKeywords] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [isRealtime, setIsRealtime] = useState<boolean>(false);

    const resetInputs = () => {
        setKeywords("");
        setCategory("");
        setLanguage("");
        setIsRealtime(false);
    }

    const handleSubmit = () => {
        if (!keywords || !category || !language) {
            toast.error("Please fill all the fields");
            return;
        }
        onGenerate(keywords, category, language, isRealtime);
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            <h1 className="text-2xl font-semibold text-center lg:w-2/3 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                {title}
            </h1>
            <div className="w-full flex gap-4 flex-col items-center">
                <div className="w-full lg:w-2/3 flex gap-1 flex-col">
                    <Label htmlFor="keyword">{inputLabel || "Enter Keywords or Title"}</Label>
                    <Input
                        id="keyword"
                        type="text"
                        placeholder={inputPlaceholder || "Enter keywords or title"}
                        className="w-full"
                        autoFocus
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </div>
                <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="video-category">Select Video Category</Label>
                        <Select
                            value={category}
                            onValueChange={(value) => setCategory(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="video-category" placeholder="Video category" />
                            </SelectTrigger>
                            <SelectContent>
                                {VIDEO_CATEGORIES.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                        {category.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="output-language">Select Output Language</Label>
                        <Select
                            value={language}
                            onValueChange={(value) => setLanguage(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue id="output-language" placeholder="Output language" />
                            </SelectTrigger>
                            <SelectContent>
                                {ALL_LANGUAGES_LIST.map((language) => (
                                    <SelectItem key={language.value} value={language.value}>
                                        {language.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {
                    realtime && (
                        <div className="w-full lg:w-2/3 flex items-center justify-start space-x-2">
                            <Checkbox
                                id="realtime"
                                checked={isRealtime}
                                onCheckedChange={(checked: boolean) => setIsRealtime(checked)}
                            />
                            <label
                                htmlFor="realtime"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Does this search need real-time data?
                            </label>
                        </div>
                    )
                }
                <div className="w-full lg:w-2/3 flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!keywords && !category && !language}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    {
                        (!planType || planType === "free") && title === "Content Research Tool" ? (
                            <UpgradeButtonWrapper
                                wrapperClass="w-fit border-none border-trasparent p-0"
                                buttonSize="default"
                            />
                        ) : (
                            <Button
                                disabled={!keywords || !category || !language || isPending}
                                onClick={handleSubmit}
                            >
                                Generate
                            </Button>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default InputForm;
