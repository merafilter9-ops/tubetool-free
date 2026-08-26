'use client'

import { useState } from "react";
import { toast } from "sonner"
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/custom-tooltip";
import { Switch } from "@/components/ui/switch";
import { UpgradeButtonWrapper } from "@/components/upgrade-button-wrapper";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ALL_LANGUAGES_LIST, VIDEO_CATEGORIES } from "@/constants";
import { onGenerateTitle } from "@/types/props";
import { usePlanType } from "@/hooks/use-current-user";

interface InputFormProps {
    onGenerate: (data: onGenerateTitle) => void;
    title: string;
    realtime?: boolean;
    isPending?: boolean;
}

const InputFormTitle: React.FC<InputFormProps> = ({ onGenerate, title, realtime, isPending }) => {
    const [primaryKeywords, setPrimaryKeywords] = useState<string>("");
    const [targetAudience, setTargetAudience] = useState<string>("");
    const [videoDescription, setVideoDesciption] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [videoStyle, setVideoStyle] = useState<string>("");
    const [clickbaitLevel, setClickbaitLevel] = useState<string>("");
    const [channelBranding, setChannelBranding] = useState<string>("");
    const [callToAction, setCallToAction] = useState<string>("");
    const [preferredLength, setPreferredLength] = useState<string>("");
    const [isRealtime, setIsRealtime] = useState<boolean>(false);
    const [includeAdvancedOptions, setIncludeAdvancedOptions] = useState<boolean>(false);

    const planType = usePlanType();

    const resetInputs = () => {
        setPrimaryKeywords("");
        setTargetAudience("");
        setVideoDesciption("");
        setCategory("");
        setLanguage("");
        setVideoStyle("");
        setClickbaitLevel("");
        setChannelBranding("");
        setCallToAction("");
        setPreferredLength("");
        setIsRealtime(false);
    }

    const handleSubmit = () => {
        if (!primaryKeywords || !category || !language || !videoDescription || !targetAudience) {
            toast.error("Please fill all the required fields");
            return;
        }
        onGenerate({
            primaryKeywords,
            targetAudience,
            videoDescription,
            category,
            language,
            videoStyle,
            clickbaitLevel,
            channelBranding,
            callToAction,
            preferredLength,
            isRealtime
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
                        <Label htmlFor="primary-keywords">Enter Primary Keywords *</Label>
                        <Input
                            id="primary-keywords"
                            type="text"
                            placeholder="Enter keywords (comma separated)"
                            className="w-full"
                            autoFocus
                            value={primaryKeywords}
                            onChange={(e) => setPrimaryKeywords(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex gap-1 flex-col">
                        <div className="w-full flex items-center justify-between space-x-2">
                            <Label htmlFor="target-audience">Target Audience *</Label>
                            <Tooltip
                                content="Enter about your target audience like their age group, interests, geography, profession, etc."
                                className="max-w-sm z-50"
                            >
                                <Info className="w-4 h-4" />
                            </Tooltip>
                        </div>
                        <Input
                            id="target-audience"
                            type="text"
                            placeholder="Enter about your target audience"
                            className="w-full"
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="video-description">Video Description *</Label>
                        <Textarea
                            id="video-description"
                            placeholder="Enter video description"
                            className="w-full"
                            value={videoDescription}
                            rows={5}
                            onChange={(e) => setVideoDesciption(e.target.value)}
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
                <UpgradeButtonWrapper wrapperClass="justify-start">
                    <div className="w-full flex items-center justify-start space-x-2">
                        <Switch
                            id="include-advanced-options"
                            checked={includeAdvancedOptions}
                            onCheckedChange={setIncludeAdvancedOptions}
                            disabled={!planType || planType === "free"}
                        />
                        <Label htmlFor="include-advanced-options">Advanced Options</Label>
                    </div>
                </UpgradeButtonWrapper>
                {
                    includeAdvancedOptions && (
                        <>
                            <div className="w-full flex flex-col md:flex-row items-center gap-4">
                                <div className="w-full flex gap-1 flex-col">
                                    <Label htmlFor="video-style">Select Video Style</Label>
                                    <Select
                                        value={videoStyle}
                                        onValueChange={(value) => setVideoStyle(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue id="video-style" placeholder="Video style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                !category && (
                                                    <SelectItem value="Select a category first" disabled>
                                                        Select a video category first
                                                    </SelectItem>
                                                )
                                            }
                                            {category && VIDEO_CATEGORIES.filter(item => item.value === category)[0]?.videoStyle.map((style) => (
                                                <SelectItem key={style} value={style}>
                                                    {style}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full flex gap-1 flex-col">
                                    <Label htmlFor="clickbait-level">Select Clickbait level</Label>
                                    <Select
                                        value={clickbaitLevel}
                                        onValueChange={(value) => setClickbaitLevel(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue id="clickbait-level" placeholder="Clickbait Level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row items-center gap-4">
                                <div className="w-full flex gap-1 flex-col">
                                    <div className="w-full flex items-center justify-between space-x-2">
                                        <Label htmlFor="channel-branding">Enter Channel Branding</Label>
                                        <Tooltip
                                            content="Enter your channel branding like channel name, creator name etc."
                                            className="max-w-sm z-50"
                                        >
                                            <Info className="w-4 h-4" />
                                        </Tooltip>
                                    </div>
                                    <Input
                                        id="channel-branding"
                                        type="text"
                                        placeholder="Enter channel branding"
                                        className="w-full"
                                        value={channelBranding}
                                        onChange={(e) => setChannelBranding(e.target.value)}
                                    />
                                </div>
                                <div className="w-full flex gap-1 flex-col">
                                    <div className="w-full flex items-center justify-between space-x-2">
                                        <Label htmlFor="call-to-action">Call to Action</Label>
                                        <Tooltip
                                            content="Enter your call to action text like watch now, subscribe now etc."
                                            className="max-w-sm z-50"
                                        >
                                            <Info className="w-4 h-4" />
                                        </Tooltip>
                                    </div>
                                    <Input
                                        id="call-to-action"
                                        type="text"
                                        placeholder="Enter call to action text"
                                        className="w-full"
                                        value={callToAction}
                                        onChange={(e) => setCallToAction(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row items-center gap-4">
                                <div className="w-full flex gap-1 flex-col">
                                    <div className="w-full flex items-center justify-between space-x-2">
                                        <Label htmlFor="preferred-length">Preferred Length</Label>
                                        <Tooltip
                                            content="Select the preferred length of the title"
                                            className="max-w-sm z-50"
                                        >
                                            <Info className="w-4 h-4" />
                                        </Tooltip>
                                    </div>
                                    <Select
                                        value={preferredLength}
                                        onValueChange={(value) => setPreferredLength(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue id="preferred-length" placeholder="Select length" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="60-70">60-70 Char</SelectItem>
                                            <SelectItem value="70-80">70-80 Char</SelectItem>
                                            <SelectItem value="80-100">80-100 Char</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    realtime && (
                        <div className="w-full flex items-center justify-start space-x-2">
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
                <div className="w-full flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!primaryKeywords && !category && !language && !videoDescription && !targetAudience}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!primaryKeywords || !category || !language || isPending || !videoDescription || !targetAudience}
                        onClick={handleSubmit}
                    >
                        Generate
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputFormTitle;
