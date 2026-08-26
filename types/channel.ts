import { Dispatch, SetStateAction } from "react";

export type ChannelListItem = {
    userId: string;
    name: string;
    logo: string;
    country: string;
    url: string;
    id: string;
    tokenRevoked: boolean;
};

export type MetricValue = {
    metric: string; // Name of the metric
    label: string;  // Human-readable label for the metric
    value: number;  // Value of the metric
};

export type StatsData = {
    views: MetricValue[];
    watchTime: MetricValue[];
    engagement: MetricValue[];
    annotations: MetricValue[];
    cards: MetricValue[];
    estimatedRevenue: MetricValue[];
    adPerformance: MetricValue[];
};

export type ChannelStatsData = {
    stats7days?: StatsData;
    stats28days?: StatsData;
    stats90days?: StatsData;
    stats365days?: StatsData;
    statsLifetime?: StatsData;
    _id: string;
    createdAt: string;
    updatedAt: string;
};

export type ChannelVideo = {
    videoId: string;
    title: string;
    link: string;
    publishedAt: string;
    channelId: string;
    description: string;
    thumbnails: thumbnailType;
    channelTitle: string;
    playlistId: string;
    position: number;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
    privacyStatus: string;
}

export interface ChannelState {
    channelList: ChannelListItem[];
    channelStats: ChannelStatsData | null;
    currentChannel: ChannelListItem | null;
    channelVideosList: ChannelVideo[];
}

export type VideoStatus = {
    embeddable: boolean;
    failureReason: string;
    license: string;
    privacyStatus: string;
    publicStatsViewable: boolean;
    uploadStatus: string;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
}

export type VideoStatistics = {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
}

export type thumbnailType = {
    default: {
        url: string;
        width: number;
        height: number;
    };
    high: {
        url: string;
        width: number;
        height: number;
    };
    maxres: {
        url: string;
        width: number;
        height: number;
    };
    medium: {
        url: string;
        width: number;
        height: number;
    };
    standard: {
        url: string;
        width: number;
        height: number;
    };
}

export type VideoSnippet = {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
        description: string;
        title: string;
    };
    publishedAt: string;
    thumbnails: thumbnailType;
    title: string;
    tags: string[];
    defaultAudioLanguage: string;
    defaultLanguage: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
}

export type EmbededPlayer = {
    embedHtml: string;
}

export type VideoContentDetails = {
    caption: string;
    contentRating: any;
    definition: string;
    dimension: string;
    duration: string;
    hasCustomThumbnail: boolean;
    licensedContent: boolean;
    projection: string;
}

export type VideosItem = {
    contentDetails: VideoContentDetails;
    etag: string;
    id: string;
    kind: string;
    player: EmbededPlayer;
    snippet: VideoSnippet;
    statistics: VideoStatistics;
    status: VideoStatus;
}

export interface ChannelVideos {
    videos: VideosItem[];
}

export type MetricsFilter = {
    metrics1: string;
    metrics2: string;
}

export type TopFiltersProps = {
    metricsFilter: MetricsFilter;
    setMetricsFilter: Dispatch<SetStateAction<MetricsFilter>>;
    dateFilter: string;
    setDateFilter: Dispatch<SetStateAction<string>>;
}

export type ForcastingFiltersProps = {
    metricsFilter: string;
    setMetricsFilter: Dispatch<SetStateAction<string>>;
}

export type videoItem = {
    videoId: string;
    title: string;
    views: number;
    thumbnail: string;
    subscribersLost: number;
}

export type CompetitorDetailsAndStats = {
    _id: string;
    channelId: string;
    details: {
        _id: string;
        competitorId: string;
        channelSnippet: {
            title: string;
            description: string;
            customUrl: string;
            publishedAt: string;
            thumbnails: thumbnailType;
            localized: {
                title: string;
                description: string;
            };
            country: string;
        };
        lifetimeStatistics: {
            viewCount: string;
            subscriberCount: string;
            hiddenSubscriberCount: boolean;
            videoCount: string;
        };
        brandSettings: {
            channel: {
                title: string;
                description: string;
                keywords: string;
                unsubscribedTrailer: string;
                country: string;
            };
            image: {
                bannerExternalUrl: string;
            };
        };
        createdAt: string;
        updatedAt: string;
        contentDetails: {
            relatedPlaylists: {
                likes: string;
                uploads: string;
            };
        };
        contentOwnerDetails: object;
        status: {
            privacyStatus: string;
            isLinked: boolean;
            longUploadsStatus: string;
        };
        topicDetails: {
            topicIds: string[];
            topicCategories: string[];
        };
    };
    dailyStats: {
        date: string;
        views: number;
        subscribers: number;
        videosPublished: number;
    }[];
}