import { TrendingNowColumnsType } from "@/types/column-def";
import { string } from "zod";

export type GeneratedTags = {
    Audience_Specific_Tags: string[];
    Branded_Tags: string[];
    Broad_and_High_Level_Tags: string[];
    Competitor_Tags: string[];
    Long_Tail_Keyword_Tags: string[];
    Primary_Keyword_Tags: string[];
    Related_Topics_Tags: string[];
    Trending_Tags: string[];
    Variations_of_Keywords: string[];
    YouTube_Search_Suggestions: string[];
}

export type KeywordResearchResult = {
    keyword: string;
    monthlysearch: number;
    competition_score: number;
    difficulty: string;
    overallscore: number;
    last_update?: string;
}

export type KeywordGraphDataType = {
    datasets: {
        label: string;
        data: number[] | string[];
    }[];
    labels: string[] | number[];
}

export type YoutubeSearchDataType = {
    videos: {
        title: string;
        description: string;
        id: string;
        link: string;
        thumbnail: string;
        uploaded: string;
        views: number;
        duration: number;
        durationString: string;
        channel: {
            handle: string;
            id: string;
            link: string;
            name: string;
            thumbnail: string;
            verified: boolean;
        }
    }[]
}

export type KeywordSliceState = {
    trendingNowKeywords: TrendingNowColumnsType[] | null;
    lastSearchKeyword: string;
    graphData: KeywordGraphDataType | null;
    exactKeyword: KeywordResearchResult[];
    relatedKeywords: KeywordResearchResult[];
    youtubeSearch: YoutubeSearchDataType | null;
}

export type SelectedFilterType = {
    date: string;
    location: string;
    category: string;
    source: string;
}

export type keywordScoreDataType = {
    keywordScore: number;
    interest_over_time_percentage: number;
    region_similarities_percentage: number;
    relevancy_score_percentage: number;
}

export type ScoreFactorsAverageType = {
    hashtags_score: number;
    tags_score: number;
    description_score: number;
    title_score: number;
}

export type CompetitorScoreType = {
    competition_score_percentage: number;
    score_factors_average: ScoreFactorsAverageType;
}

export type ChatMessagesType = {
    _id: string;
    chatId: string;
    userId: string;
    role: string;
    content: string;
    isBookmarked: boolean;
    createdAt: string;
    updatedAt: string;
    messageId?: string;
}

export type ChatType = {
    createdAt: string;
    isDeleted: boolean;
    title: string;
    updatedAt: string;
    userId: string;
    _id: string;
}

export type ChatbotSliceState = {
    chatList: ChatType[];
    activeChatId: string | null | undefined;
    activeChatMessages: ChatMessagesType[];
    isResponseLoading: boolean;
    bookmarkList: ChatMessagesType[];
}

export type PreviewMessageProps = {
    message: ChatMessagesType;
    length: number;
    index: number;
}

export type handleChatbotResponseReturnType = {
    aiResponse: string;
    chatId: string;
    assistantMessage: ChatMessagesType;
    success: boolean;
}

export type TitleGeneratePayload = {
    Primary_Keywords: string[];
    Video_Description: string;
    Target_Audience: string;
    Video_Genre: string;
    language: string;
    Video_Style?: string;
    Channel_Branding?: string;
    Call_to_Action?: string;
    Clickbait_Level?: string;
    Preferred_Length?: string;
}