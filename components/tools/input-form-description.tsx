'use client'

import { useState } from "react";
import { toast } from "sonner"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ALL_LANGUAGES_LIST, VIDEO_CATEGORIES } from "@/constants";
import { Textarea } from "../ui/textarea";

interface InputFormProps {
    onGenerate: (keywords: string, script: string, category: string, language: string) => void;
    title: string;
    isPending?: boolean;
}

const InputFormDescription: React.FC<InputFormProps> = ({ onGenerate, title, isPending }) => {
    const [keywords, setKeywords] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [script, setScript] = useState<string>("");

    const resetInputs = () => {
        setKeywords("");
        setCategory("");
        setLanguage("");
        setScript("");
    }

    const handleSubmit = () => {
        if (!keywords || !category || !language || !script) {
            toast.error("Please fill all the fields");
            return;
        }
        onGenerate(keywords, script, category, language);
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            <h1 className="text-2xl font-semibold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                {title}
            </h1>
            <div className="w-full flex gap-4 flex-col items-center">
                <div className="w-full flex gap-1 flex-col">
                    <Label htmlFor="keyword">Enter Keywords</Label>
                    <Input
                        id="keyword"
                        type="text"
                        placeholder="Enter keywords (comma separated)"
                        className="w-full"
                        autoFocus
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </div>
                <div className="w-full flex gap-1 flex-col">
                    <Label htmlFor="script">Enter Script</Label>
                    <Textarea
                        id="script"
                        placeholder="Enter video script"
                        className="w-full"
                        value={script}
                        rows={5}
                        onChange={(e) => setScript(e.target.value)}
                    />
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
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
                <div className="w-full flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!keywords && !category && !language && !script}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!keywords || !category || !language || !script || isPending}
                        onClick={handleSubmit}
                    >
                        Generate
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputFormDescription;
