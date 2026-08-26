import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { KeywordSliceState } from '@/types/tools'

// Define the initial state using that type
const initialState: KeywordSliceState = {
    trendingNowKeywords: null,
    lastSearchKeyword: '',
    graphData: null,
    exactKeyword: [],
    relatedKeywords: [],
    youtubeSearch: null,
}

export const keywordSlice = createSlice({
    name: 'keywords',
    initialState,
    reducers: {
        setTrendingNowKeywords: (state, action: PayloadAction<KeywordSliceState['trendingNowKeywords']>) => {
            state.trendingNowKeywords = action.payload;
        },
        setLastSearchKeyword: (state, action: PayloadAction<KeywordSliceState['lastSearchKeyword']>) => {
            state.lastSearchKeyword = action.payload;
        },
        setGraphData: (state, action: PayloadAction<KeywordSliceState['graphData']>) => {
            state.graphData = action.payload;
        },
        setExactKeyword: (state, action: PayloadAction<KeywordSliceState['exactKeyword']>) => {
            state.exactKeyword = action.payload;
        },
        setRelatedKeywords: (state, action: PayloadAction<KeywordSliceState['relatedKeywords']>) => {
            state.relatedKeywords = action.payload;
        },
        setYoutubeSearch: (state, action: PayloadAction<KeywordSliceState['youtubeSearch']>) => {
            state.youtubeSearch = action.payload;
        },
    }
})

export const {
    setTrendingNowKeywords,
    setLastSearchKeyword,
    setGraphData,
    setExactKeyword,
    setRelatedKeywords,
    setYoutubeSearch,
} = keywordSlice.actions

export default keywordSlice.reducer