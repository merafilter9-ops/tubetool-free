import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ChannelState } from '@/types/channel'

// Define the initial state using that type
const initialState: ChannelState = {
    channelList: [],
    channelStats: {} as ChannelState['channelStats'],
    currentChannel: null,
    channelVideosList: []
}

export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        setChannelList: (state, action: PayloadAction<ChannelState['channelList']>) => {
            state.channelList = action.payload
        },
        setChannelStats: (state, action: PayloadAction<ChannelState['channelStats']>) => {
            state.channelStats = action.payload
        },
        setCurrentChannel: (state, action: PayloadAction<ChannelState['currentChannel']>) => {
            state.currentChannel = action.payload
        },
        setChannelVideosList: (state, action: PayloadAction<ChannelState['channelVideosList']>) => {
            state.channelVideosList = action.payload
        }
    }
})

export const {
    setChannelList,
    setChannelStats,
    setCurrentChannel,
    setChannelVideosList
} = channelSlice.actions;

export default channelSlice.reducer;