'use client'

import { useState } from "react";
import { toast } from "sonner"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface InputFormProps {
    onGenerate: (keywords: string, script: string) => void;
    title: string;
    inputLabel: string;
    inputPlaceholder: string;
    isPending?: boolean;
}

const InputFormThumbGuide: React.FC<InputFormProps> = ({ onGenerate, title, inputLabel, inputPlaceholder, isPending }) => {
    const [keywords, setKeywords] = useState<string>("");
    const [script, setScript] = useState<string>("");

    const resetInputs = () => {
        setKeywords("");
        setScript("");
    }

    const handleSubmit = () => {
        if (!keywords || !script) {
            toast.error("Please fill all the fields");
            return;
        }
        onGenerate(keywords, script);
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-4 md:pt-10">
            <h1 className="text-2xl font-semibold text-center md:w-1/2 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                {title}
            </h1>
            <div className="w-full flex gap-4 flex-col items-center">
                <div className="w-full md:w-1/2 flex gap-1 flex-col">
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
                <div className="w-full md:w-1/2 flex gap-1 flex-col">
                    <Label htmlFor="video-script">Enter Video Script</Label>
                    <Textarea
                        id="video-script"
                        placeholder="Enter video script here"
                        className="w-full"
                        rows={8}
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!keywords && !script}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!keywords || !script || isPending}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputFormThumbGuide;
