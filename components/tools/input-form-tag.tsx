'use client'

import { useState } from "react";
import { toast } from "sonner"
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip } from "@/components/custom-tooltip";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ALL_LANGUAGES_LIST, VIDEO_CATEGORIES } from "@/constants";
import { onGenerateTag } from "@/types/props";

interface InputFormTagProps {
    onGenerate: (data: onGenerateTag) => void;
    title: string;
    isPending?: boolean;
}

const InputFormTag: React.FC<InputFormTagProps> = ({ onGenerate, title, isPending }) => {
    const [primaryKeywords, setPrimaryKeywords] = useState<string>("");
    const [targetAudience, setTargetAudience] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [focusType, setFocusType] = useState<string>("");
    const [competitorChannels, setCompetitorChannels] = useState<string>("");
    const [includeMisspellings, setIncludeMisspellings] = useState<boolean>(false);
    const [includeAdvancedOptions, setIncludeAdvancedOptions] = useState<boolean>(false);

    const resetInputs = () => {
        setPrimaryKeywords("");
        setTargetAudience("");
        setCategory("");
        setLanguage("");
        setFocusType("");
        setCompetitorChannels("");
        setIncludeMisspellings(false);
    }

    const handleSubmit = () => {
        if (!primaryKeywords || !category || !language) {
            toast.error("Please fill all the required fields");
            return;
        }
        onGenerate({
            primaryKeywords,
            targetAudience,
            category,
            language,
            focusType,
            competitorChannels,
            includeMisspellings
        });
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            <h1 className="text-2xl font-semibold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                {title}
            </h1>
            <div className="w-full flex gap-4 flex-col items-center">
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="primary-keywords">Enter Primary Keywords or Title *</Label>
                        <Input
                            id="primary-keywords"
                            type="text"
                            placeholder="Enter keywords or topic"
                            className="w-full"
                            autoFocus
                            value={primaryKeywords}
                            onChange={(e) => setPrimaryKeywords(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="video-category">Select Video Category *</Label>
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
                        <Label htmlFor="output-language">Select Output Language *</Label>
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
                <div className="w-full flex items-center justify-start space-x-2">
                    <Switch
                        id="include-advanced-options"
                        checked={includeAdvancedOptions}
                        onCheckedChange={setIncludeAdvancedOptions}
                    />
                    <Label htmlFor="include-advanced-options">Advanced Options</Label>
                </div>
                {
                    includeAdvancedOptions && (
                        <>
                            <div className="w-full flex flex-col md:flex-row items-center gap-4">
                                <div className="w-full flex gap-1 flex-col">
                                    <Label htmlFor="target-audience">Target Audience</Label>
                                    <Input
                                        id="target-audience"
                                        type="text"
                                        placeholder="e.g. Gamers, Tech Enthusiasts, Beginners"
                                        className="w-full"
                                        value={targetAudience}
                                        onChange={(e) => setTargetAudience(e.target.value)}
                                    />
                                </div>
                                <div className="w-full flex gap-1 flex-col">
                                    <Label htmlFor="focus-type">Tag Focus</Label>
                                    <Select
                                        value={focusType}
                                        onValueChange={(value) => setFocusType(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue id="focus-type" placeholder="Select Focus" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="broad">Broad (High Volume)</SelectItem>
                                            <SelectItem value="niche">Niche (Low Competition)</SelectItem>
                                            <SelectItem value="long-tail">Long-Tail Phrases</SelectItem>
                                            <SelectItem value="mixed">Balanced Mix</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row items-center gap-4">
                                <div className="w-full flex gap-1 flex-col">
                                    <div className="w-full flex items-center justify-between space-x-2">
                                        <Label htmlFor="competitor-channels">Competitor Channels</Label>
                                        <Tooltip
                                            content="We'll generate tags targeting similar audiences to these creators."
                                            className="max-w-sm z-50"
                                        >
                                            <Info className="w-4 h-4" />
                                        </Tooltip>
                                    </div>
                                    <Input
                                        id="competitor-channels"
                                        type="text"
                                        placeholder="e.g. MrBeast, MKBHD"
                                        className="w-full"
                                        value={competitorChannels}
                                        onChange={(e) => setCompetitorChannels(e.target.value)}
                                    />
                                </div>
                                <div className="w-full flex gap-1 flex-col">
                                    <div className="w-full flex items-center justify-between space-x-2 mt-2">
                                        <Label htmlFor="include-misspellings">Include Common Misspellings?</Label>
                                        <Switch
                                            id="include-misspellings"
                                            checked={includeMisspellings}
                                            onCheckedChange={setIncludeMisspellings}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Generates 2-3 tags with common typos for search traffic.
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                }

                <div className="w-full flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!primaryKeywords && !category && !language}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!primaryKeywords || !category || !language || isPending}
                        onClick={handleSubmit}
                    >
                        Generate
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputFormTag;
