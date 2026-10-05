"use client";

import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';
import { Copy, Trash } from "lucide-react";
import { GeistSans } from 'geist/font/sans';

import InputFormDescription from "@/components/tools/input-form-description";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { UpgradeButtonWrapper } from "@/components/upgrade-button-wrapper";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import API_URL_V1 from "@/lib/axios-config";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
import { setChannelVideosList } from "@/store/channel/channelSlice";
import { ChannelVideo } from "@/types/channel";
import { useCurrentUser } from "@/hooks/use-current-user";

export const DescriptionGeneratorForm = () => {
    const dispatch = useAppDispatch();
    const user = useCurrentUser();

    const { channelVideosList, currentChannel } = useAppSelector((state) => state.channel);
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<string>('');
    const [platform, setPlatform] = useState<string>('');
    const [socialLink, setSocialLink] = useState<string>('');
    const [socialLinks, setSocialLinks] = useState<string[]>([]);
    const [affiliateLink, setAffiliateLink] = useState("");
    const [includeTimestamps, setIncludeTimestamps] = useState(false);
    const [timestamps, setTimestamps] = useState([{ time: "", description: "" }]);
    const [businessInfo, setBusinessInfo] = useState<string>("");
    const [sectionSeparator, setSectionSeparator] = useState<string>("_____");
    const [videoLinks, setVideoLinks] = useState<ChannelVideo[]>([]);
    const [selectedVideos, setSelectedVideos] = useState<ChannelVideo[]>([]);
    const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>("");

    const handleTimestampChange = (index: number, field: "time" | "description", value: string) => {
        const newTimestamps = [...timestamps]
        newTimestamps[index][field] = value
        setTimestamps(newTimestamps)
    }

    const addVideoLink = () => {
        const selectedVideo = videoLinks.find((video) => video.title === selectedVideoTitle)
        if (selectedVideo) {
            setSelectedVideos([...selectedVideos, selectedVideo])
            setVideoLinks(videoLinks.filter((video) => video.title !== selectedVideoTitle))
        }
        setSelectedVideoTitle("tubetool_none_value");
    }

    const addSocialLinks = () => {
        if (!platform || !socialLink) {
            toast.error("Please fill all the fields");
            return;
        }

        setSocialLinks([...socialLinks, `${platform}: ${socialLink}`])
        setPlatform("")
        setSocialLink("")
    }

    const addTimestamp = () => {
        setTimestamps([...timestamps, { time: "", description: "" }])
    }

    const removeTimestamp = (index: number) => {
        const newTimestamps = timestamps.filter((_, i) => i !== index)
        setTimestamps(newTimestamps)
    }

    const handleGenerate = (keywords: string, script: string, category: string, language: string) => {
        startTransition(async () => {
            const data = {
                script,
                tags: keywords.split(",").map((tag) => tag.trim()),
                language,
                genre: category,
                alphabet: language === "Hinglish" ? "ltn" : ""
            };
            const toastId = toast.loading("Generating description...");

            try {
                const response = await API_URL_V1.post('/ai/generate-description', { data });
                setResult(response.data.data.description);
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                toast.success("Description generated successfully.", { id: toastId });
            } catch (error) {
                toast.error("Something went wrong. Please try again later.", { id: toastId });
                console.error('Error generating title:', error);
            }
        });
    }

    const copyDescription = () => {
        navigator.clipboard.writeText(generateDescription()).then(() => {
            toast.success("Description copied to clipboard.");
        })
    }

    const generateDescription = () => {
        const separator = sectionSeparator === "none" ? "" : `\n\n${sectionSeparator}\n\n`
        let fullDescription = `${result}${separator}`

        if (includeTimestamps && timestamps.length > 0) {
            fullDescription += separator ? "Timestamps:\n" : "\n\n" + "Timestamps:\n"
            timestamps.forEach(({ time, description }) => {
                if (time && description) {
                    fullDescription += `${time} - ${description}\n`
                }
            })
            fullDescription += separator || `\n\n`
        }

        if (socialLinks.length > 0) {
            fullDescription += separator ? "Follow me on:\n" : "\n\n" + "Follow me on:\n"
            socialLinks.forEach((link) => {
                fullDescription += `${link}\n`
            })
            fullDescription += separator || `\n\n`
        }

        if (selectedVideos.length > 0) {
            fullDescription += separator ? "Watch my latest video:\n" : "\n\n" + "Watch my latest video:\n"
            selectedVideos.forEach((video) => {
                fullDescription += `\n${video.title} - ${video.link}\n`
            })
            fullDescription += separator || `\n\n`
        }

        if (affiliateLink) {
            fullDescription += `Check out our sponsor: ${affiliateLink}` + (separator || `\n\n`)
        }

        if (businessInfo) {
            fullDescription += `${businessInfo}${separator}`
        }

        if (fullDescription.trim() === sectionSeparator || fullDescription.trim() === "") {
            return "Generate or add additional information to see the preview here."
        }

        return fullDescription.trim()
    }

    const getVideosList = async () => {
        try {
            const { data } = await API_URL_V1.get(`/channel/details?filterKey=videos`);
            dispatch(setChannelVideosList(data.channelDetails));
            setVideoLinks(data.channelDetails);
        } catch (error) {
            console.error('Error getting videos list:', error);
            setVideoLinks([]);
        }
    };

    useEffect(() => {
        if (user && currentChannel && channelVideosList.length === 0) {
            getVideosList();
        } else {
            setVideoLinks(channelVideosList);
        }
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-2.5">
                    <InputFormDescription
                        onGenerate={handleGenerate}
                        title="Description Generator Tool"
                        isPending={isPending}
                    />
                    <div className="space-y-2.5">
                        <UpgradeButtonWrapper wrapperClass="justify-start border-0 border-transparent">
                            <h2 className="text-base font-semibold">
                                Add Additional Information
                            </h2>
                        </UpgradeButtonWrapper>
                        <div className="w-full flex items-end space-x-2">
                            <div className="w-1/2">
                                <Label htmlFor="platform">Platform</Label>
                                <Input
                                    id="platform"
                                    value={platform}
                                    onChange={(e) => setPlatform(e.target.value)}
                                    placeholder="eg Twitter, Instagram, etc."
                                    list="platforms"

                                />
                                <datalist id="platforms">
                                    <option value="Twitter" />
                                    <option value="Instagram" />
                                    <option value="Facebook" />
                                    <option value="LinkedIn" />
                                    <option value="YouTube" />
                                    <option value="TikTok" />
                                    <option value="Twitch" />
                                    <option value="Patreon" />
                                    <option value="Buy Me a Coffee" />
                                </datalist>
                            </div>
                            <div className="w-1/2">
                                <Label htmlFor="link">Link</Label>
                                <Input
                                    id="link"
                                    value={socialLink}
                                    onChange={(e) => setSocialLink(e.target.value)}
                                    placeholder="Enter your link"

                                />
                            </div>
                            <div className="w-fit">
                                <Button onClick={addSocialLinks}>Add</Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {
                                socialLinks.map((link, index) => (
                                    <div key={index} className="flex items-center justify-between gap-2">
                                        <p>{link}</p>
                                        <Button
                                            onClick={() => setSocialLinks(socialLinks.filter((_, i) => i !== index))}
                                            size="icon"
                                            variant="ghost"
                                            className="p-1 h-6 w-6"
        
                                        >
                                            <Trash className="w-1.5 h-1.5 text-primary" />
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                        <Separator className="mt-4" />
                        <div>
                            <Label htmlFor="affiliate-link">Affiliate Link</Label>
                            <Input
                                id="affiliate-link"
                                value={affiliateLink}
                                onChange={(e) => setAffiliateLink(e.target.value)}
                                placeholder="Enter your affiliate link"
                            />
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2">
                            <div className="col-span-10">
                                <Label htmlFor="video-link">Video Link</Label>
                                <Select
                                    value={selectedVideoTitle}
                                    onValueChange={(value) => setSelectedVideoTitle(value)}

                                >
                                    <SelectTrigger id="video-link">
                                        <SelectValue placeholder="Select a video link" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tubetool_none_value" className="italic">None</SelectItem>
                                        {
                                            videoLinks.map((video, index) => (
                                                <SelectItem key={index} value={video.title}>{video.title}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full flex items-end justify-end col-span-2">
                                <Button
                                    onClick={addVideoLink}
                                    disabled={selectedVideoTitle === "tubetool_none_value" || selectedVideoTitle === ""}
                                >
                                    Add
                                </Button>
                            </div>
                        </div>
                        {
                            selectedVideos.length > 0 && (
                                <div className="space-y-2">
                                    {
                                        selectedVideos.map((video, index) => (
                                            <div key={index} className="flex items-center justify-between gap-2">
                                                <p>{video.title}</p>
                                                <Button
                                                    onClick={() => {
                                                        setVideoLinks([...videoLinks, video])
                                                        setSelectedVideos(selectedVideos.filter((_, i) => i !== index))
                                                    }}
                                                    size="icon"
                                                    variant="ghost"
                                                    className="p-1 h-6 w-6"
                
                                                >
                                                    <Trash className="w-1.5 h-1.5 text-primary" />
                                                </Button>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        <Separator className="mt-3.5" />
                        <div>
                            <Label htmlFor="business-info">Business Information</Label>
                            <Textarea
                                id="business-info"
                                value={businessInfo}
                                onChange={(e) => setBusinessInfo(e.target.value)}
                                placeholder="Enter your business information"
                                rows={4}
                            />
                        </div>
                        <Separator className="mt-3.5" />
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="include-timestamps"
                                checked={includeTimestamps}
                                onCheckedChange={setIncludeTimestamps}
                            />
                            <Label htmlFor="include-timestamps">Include Timestamps</Label>
                        </div>
                        {includeTimestamps && (
                            <div className="space-y-2">
                                {timestamps.map((timestamp, index) => (
                                    <div key={index} className="flex space-x-2">
                                        <Input
                                            value={timestamp.time}
                                            onChange={(e) => handleTimestampChange(index, "time", e.target.value)}
                                            placeholder="Time (e.g., 0:30)"
                                        />
                                        <Input
                                            value={timestamp.description}
                                            onChange={(e) => handleTimestampChange(index, "description", e.target.value)}
                                            placeholder="Description"
                                        />
                                        <Button
                                            onClick={() => removeTimestamp(index)}
                                            size="icon"
                                            variant="ghost"
                                            className="w-fit px-2.5"
                                        >
                                            <Trash className="w-4 h-4 text-primary" />
                                        </Button>
                                    </div>
                                ))}
                                <Button onClick={addTimestamp}>Add Timestamp</Button>
                            </div>
                        )}
                        <Separator className="mt-3.5" />
                        <div>
                            <Label htmlFor="section-separator">Section Separator</Label>
                            <Select value={sectionSeparator} onValueChange={setSectionSeparator}>
                                <SelectTrigger id="section-separator">
                                    <SelectValue placeholder="Select a separator" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none" className="italic">None</SelectItem>
                                    <SelectItem value="-----">Dashes (---)</SelectItem>
                                    <SelectItem value="*****">Asterisks (***)</SelectItem>
                                    <SelectItem value="_____">Underscores (___)</SelectItem>
                                    <SelectItem value="#####">Hash marks (###)</SelectItem>
                                    <SelectItem value="=====">Equal signs (===)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-md border px-4 py-2 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-semibold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2">Preview</h2>
                        <Button
                            onClick={copyDescription}
                            variant="ghost"
                            size="icon"
                            className="p-1 h-8 w-8"
                        >
                            <Copy />
                        </Button>
                    </div>

                    <pre className={cn(
                        "whitespace-pre-wrap text-sm font-normal bg-gray-50 dark:bg-background p-4 rounded",
                        GeistSans.className
                    )}>
                        {generateDescription()}
                    </pre>

                    {result && (
                        <BuyMeCoffeeBanner className="mt-6" />
                    )}
                </div>
            </div >

        </>
    )
}