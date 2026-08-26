import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ChatbotSliceState, ChatMessagesType } from '@/types/tools'

// Define the initial state using that type
const initialState: ChatbotSliceState = {
    chatList: [],
    activeChatId: null,
    activeChatMessages: [],
    isResponseLoading: false,
    bookmarkList: [],
}

export const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        setChatList: (state, action: PayloadAction<ChatbotSliceState['chatList']>) => {
            state.chatList = action.payload
        },
        setActiveChatId: (state, action: PayloadAction<ChatbotSliceState['activeChatId']>) => {
            state.activeChatId = action.payload
        },
        setActiveChatMessages: (state, action: PayloadAction<ChatbotSliceState['activeChatMessages']>) => {
            state.activeChatMessages = action.payload
        },
        addActiveChatMessage: (state, action: PayloadAction<any>) => {
            state.activeChatMessages.push(action.payload)
        },
        removeActiveChatMessage: (state, action: PayloadAction<string>) => {
            state.activeChatMessages = state.activeChatMessages.filter((message) => message._id !== action.payload)
        },
        clearActiveChatMessages: (state) => {
            state.activeChatMessages = []
        },
        updateBookmarkStatusFromActiveChatMessages: (state, action: PayloadAction<{ messageId: string; isBookmarked: boolean }>) => {
            const { messageId, isBookmarked } = action.payload
            const messageIndex = state.activeChatMessages.findIndex((message) => message._id === messageId)
            if (messageIndex !== -1) {
                state.activeChatMessages[messageIndex].isBookmarked = isBookmarked
            }
        },
        setIsResponseLoading: (state, action: PayloadAction<boolean>) => {
            state.isResponseLoading = action.payload
        },
        setBookmarkList: (state, action: PayloadAction<ChatbotSliceState['bookmarkList']>) => {
            state.bookmarkList = action.payload
        },
        addBookmark: (state, action: PayloadAction<ChatMessagesType>) => {
            state.bookmarkList.push(action.payload)
        },
        removeBookmark: (state, action: PayloadAction<string>) => {
            state.bookmarkList = state.bookmarkList.filter((bookmark) => bookmark.messageId !== action.payload)
        },
        clearBookmarkList: (state) => {
            state.bookmarkList = []
        }
    }
})

export const {
    setChatList,
    setActiveChatId,
    setActiveChatMessages,
    addActiveChatMessage,
    removeActiveChatMessage,
    clearActiveChatMessages,
    updateBookmarkStatusFromActiveChatMessages,
    setIsResponseLoading,
    setBookmarkList,
    addBookmark,
    removeBookmark,
    clearBookmarkList,
} = chatbotSlice.actions

export default chatbotSlice.reducer