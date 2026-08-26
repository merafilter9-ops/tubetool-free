import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PreferenceState } from '@/types/user'

// Define the initial state using that type
const initialState: PreferenceState = {
    isSidebarOpen: true,
    isChatbotSidebarOpen: false,
}

export const preferenceSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload
        },
        setIsChatbotSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.isChatbotSidebarOpen = action.payload
        },
    }
})

export const {
    setIsSidebarOpen,
    setIsChatbotSidebarOpen,
} = preferenceSlice.actions

export default preferenceSlice.reducer