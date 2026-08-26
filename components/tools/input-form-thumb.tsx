'use client'

import { ChangeEvent, useState, useTransition } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { UpgradeButtonWrapper } from "@/components/upgrade-button-wrapper";

import API_URL_V1 from "@/lib/axios-config";
import { usePlanType } from "@/hooks/use-current-user";

interface InputFormThumbProps {
    onGenerate: (inputTitle: string, brandName: string, thumbnail: string) => void;
    title: string;
    isPending?: boolean;
}

const InputFormThumb: React.FC<InputFormThumbProps> = ({ onGenerate, title, isPending }) => {
    const planType = usePlanType();
    const [isImageUploadPending, startImageUploadTransition] = useTransition();

    const [inputTitle, setInputTitle] = useState<string>("");
    const [brandName, setBrandName] = useState<string>("");
    const [thumbnailInput, setThumbnailInput] = useState<string>("");
    const [thumbnailPublicUrl, setThumbnailPublicUrl] = useState<string>("");
    const [preview, setPreview] = useState<string>("");

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        setThumbnailInput(e.target.value);

        if (file) {
            startImageUploadTransition(async () => {
                const formData = new FormData();
                formData.append("file", file);

                try {
                    const response = await API_URL_V1.post('/user/to-bucket/thumbnail', formData);
                    setThumbnailPublicUrl(response.data.publicUrl);
                } catch (error) {
                    console.error('Error generating title:', error);
                }
            });
        }
    };

    const resetInputs = () => {
        setInputTitle("");
        setBrandName("");
    }

    const handleSubmit = () => {
        onGenerate(inputTitle, brandName, thumbnailPublicUrl);
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center pt-10">
            <h1 className="text-2xl font-semibold text-center md:w-1/2 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">
                {title}
            </h1>
            <div className="w-full flex gap-4 flex-col items-center">
                <div className="w-full md:w-1/2 flex gap-1 flex-col">
                    <Label htmlFor="video-title">Enter Video Title</Label>
                    <Input
                        id="video-title"
                        type="text"
                        placeholder="eg. How to make a thumbnail"
                        className="w-full"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/2 flex gap-1 flex-col">
                    <Label htmlFor="brand-name">Enter Brand or Channel Name</Label>
                    <Input
                        id="brand-name"
                        type="text"
                        placeholder="eg. Netflix"
                        className="w-full"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/2 flex gap-1 flex-col">
                    <Label htmlFor="thumbnail">Upload Thumbnail</Label>
                    <Input
                        id="thumbnail"
                        type="file"
                        placeholder="Enter brand or channel name"
                        className="w-full"
                        value={thumbnailInput}
                        onChange={handleImageChange}
                    />
                </div>
                {
                    isImageUploadPending && (
                        <div className="w-full md:w-1/2 flex gap-1 flex-col">
                            <Skeleton className="w-full h-48" />
                        </div>
                    )
                }
                {
                    !isImageUploadPending && preview && (
                        <div className="w-full md:w-1/2 flex gap-1 flex-col">
                            <Label htmlFor="thumbnail-preview">Thumbnail Preview</Label>
                            <Image
                                src={preview}
                                alt="Thumbnail Preview"
                                width={300}
                                height={200}
                                className="w-full h-auto rounded border p-2"
                            />
                        </div>
                    )
                }
                <div className="w-full md:w-1/2 flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!inputTitle}
                        onClick={resetInputs}
                    >
                        Reset
                    </Button>
                    {
                        !planType || planType === "free" ? (
                            <UpgradeButtonWrapper
                                wrapperClass="w-fit border-none border-trasparent p-0"
                                buttonSize="default"
                            />
                        ) : (
                            <Button
                                disabled={!inputTitle || isPending}
                                onClick={handleSubmit}
                            >
                                Check Quality
                            </Button>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default InputFormThumb;
