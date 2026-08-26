export type TrendingNowColumnsType = {
    query: string,
    start_timestamp: number,
    end_timestamp?: number,
    active: boolean,
    search_volume: number,
    increase_percentage: number,
    categories: {
        id: number,
        name: string
    }[],
    trend_breakdown?: string[],
    serpapi_google_trends_link: string,
}

export type InterestByRegionColumnsType = {
    geo: string,
    location: string,
    max_value_index: number,
    value: string,
    extracted_value: number
};

export type RelatedRisingQueriesColumnsType = {
    query: string,
    value: number,
}