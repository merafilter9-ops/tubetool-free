'use client';

import { useEffect, useState, useTransition } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { Ellipsis } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { UpgradeButtonWrapper } from "@/components/upgrade-button-wrapper";
const TableSkeleton = dynamic(
    () => import("@/components/skeleton/table-skeleton"),
    { loading: () => <Skeleton className="w-full h-20 min-h-20 mb-2" /> }
);

// import { Tooltip } from "@/components/custom-tooltip";

import API_URL_V1 from "@/lib/axios-config";
import { VideosItem } from "@/types/channel";
import { cn, formatLargeNumber } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
import { setChannelVideosList } from "@/store/channel/channelSlice";
import { VideoTableProps } from "@/types/props";
import { usePlanType } from "@/hooks/use-current-user";

const VideoTable = ({
    showSelectDropdown,
    toolName
}: VideoTableProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const planType = usePlanType();

    const { channelVideosList } = useAppSelector((state) => state.channel);
    const [isGettingVideosLoading, startGettingVideos] = useTransition();
    const [videosList, setVideosList] = useState<VideosItem[]>([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [prevPageToken, setPrevPageToken] = useState(null);
    const [selectedVideoId, setSelectedVideoId] = useState<string>("");

    const handleAnalysis = ({
        videoId,
        clickFrom,
    }: {
        videoId?: string
        clickFrom?: "video-list" | "select"
    }) => {
        if (clickFrom === "select" && (selectedVideoId === "tubetool_none_value" || !selectedVideoId)) {
            return toast.error("Please select a video to analyze");
        }
        if (clickFrom === "video-list" && !videoId) {
            return toast.error("No video found to analyze");
        }

        if (toolName === "Comment Analysis" && planType !== "free") {
            router.push(`/comment-analysis/analysis/${videoId || selectedVideoId}`);
            return;
        }

        if (toolName === "Video Auditor") {
            router.push(`/video-auditor/analysis/${videoId || selectedVideoId}`);
            return;
        }
    }

    const getVideosList = async (pageToken: string | null) => {
        startGettingVideos(async () => {
            try {
                const { data } = await API_URL_V1.get(`/channel/videos/list?pageToken=${pageToken}`);
                setVideosList(data.videos);
                setNextPageToken(data.nextPageToken);
                setPrevPageToken(data.prevPageToken);
            } catch (error) {
                console.error(error);
            }
        })
    }

    const getSavedVideosList = async () => {
        try {
            const { data } = await API_URL_V1.get(`/channel/details?filterKey=videos`);
            dispatch(setChannelVideosList(data.channelDetails));
        } catch (error) {
            console.error('Error getting videos list:', error);
        }
    };

    useEffect(() => {
        getVideosList("");
    }, []);

    useEffect(() => {
        if (channelVideosList.length === 0 && showSelectDropdown) {
            getSavedVideosList();
        }
    }, []);

    if (isGettingVideosLoading) {
        return <TableSkeleton
            headers={[
                { title: "Thumbnail", className: "w-[90px]" },
                { title: "Title" },
                { title: "Views", className: "text-right" },
                { title: "Comments", className: "text-right" },
                { title: "Likes", className: "text-right" },
                { title: "Dislikes", className: "text-right" },
                { title: "Visibility", className: "text-right" },
            ]}
        />
    }

    return (
        <>
            {
                showSelectDropdown && (
                    <div className="w-full flex flex-col space-y-1.5 mt-3">
                        <Label htmlFor="video-link">Select Video</Label>
                        <div className="w-full flex flex-col sm:flex-row gap-2 sm:items-center">
                            <Select
                                value={selectedVideoId}
                                onValueChange={(value) => setSelectedVideoId(value)}
                            >
                                <SelectTrigger id="video-link" className="flex-1">
                                    <SelectValue placeholder="Select a video to analysis" />
                                </SelectTrigger>
                                <SelectContent className="max-sm:max-w-[326px]">
                                    <SelectItem value="tubetool_none_value" className="italic">None</SelectItem>
                                    {
                                        channelVideosList.map((video, index) => (
                                            <SelectItem key={index} value={video.videoId}>{video.title}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            {
                                toolName === "Comment Analysis" && planType === "free" ? (
                                    <UpgradeButtonWrapper
                                        wrapperClass="w-fit border-none p-0"
                                        buttonSize="default"
                                    />
                                ) : (
                                    <Button
                                        onClick={() => handleAnalysis({
                                            videoId: selectedVideoId,
                                            clickFrom: "select"
                                        })}
                                        className="w-fit"
                                    >
                                        Analyze
                                    </Button>
                                )
                            }

                        </div>
                    </div>
                )
            }
            <div className='w-full mt-4 h-fit border rounded'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[90px]">Thumbnail</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="text-right">Views</TableHead>
                            <TableHead className="text-right">Comments</TableHead>
                            <TableHead className="text-right">Likes</TableHead>
                            <TableHead className="text-right">Dislikes</TableHead>
                            <TableHead className="text-right">Visibility</TableHead>
                            {/* <TableHead className="text-center">Actions</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            videosList.map((video, index) => (
                                <TableRow
                                    key={index}
                                    onClick={() => {
                                        if (!showSelectDropdown) return;
                                        handleAnalysis({
                                            videoId: video.id,
                                            clickFrom: "video-list"
                                        })
                                    }}
                                >
                                    <TableCell className="font-medium align-top">
                                        <Image
                                            width={90}
                                            height={50}
                                            alt="Thumbnail"
                                            className="w-full h-auto rounded-md z-10"
                                            src={video?.snippet?.thumbnails?.default?.url}
                                        />
                                    </TableCell>
                                    <TableCell className="">
                                        {video?.snippet?.title}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatLargeNumber(video?.statistics?.viewCount)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatLargeNumber(video?.statistics?.commentCount)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatLargeNumber(video?.statistics?.likeCount)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatLargeNumber(video?.statistics?.dislikeCount)}
                                    </TableCell>
                                    <TableCell className="text-right capitalize">
                                        {video?.status?.privacyStatus}
                                    </TableCell>
                                    {/* <TableCell className="text-center">
                                    <Tooltip content="Coming soon" side="top">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <Ellipsis className="w-4 h-4 cursor-pointer" />
                                        </Button>
                                    </Tooltip>
                                </TableCell> */}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <div className="flex items-center justify-between mt-2 mb-4">
                    <Pagination>
                        <PaginationContent className={cn("w-full flex items-center px-4", nextPageToken && prevPageToken ? "justify-between" : "justify-end")}>
                            {
                                prevPageToken && (
                                    <PaginationItem>
                                        <PaginationPrevious href="#" onClick={() => getVideosList(prevPageToken)} />
                                    </PaginationItem>
                                )
                            }
                            {
                                nextPageToken && (
                                    <PaginationItem>
                                        <PaginationNext href="#" onClick={() => getVideosList(nextPageToken)} />
                                    </PaginationItem>
                                )
                            }
                        </PaginationContent>
                    </Pagination>

                </div>

            </div>
        </>
    )
}

export default VideoTable;
