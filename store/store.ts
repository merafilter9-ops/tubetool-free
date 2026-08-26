import { configureStore } from '@reduxjs/toolkit';

import userSlice from '@/store/user/userSlice';
import preferenceSlice from '@/store/user/preferenceSlice';
import channelSlice from '@/store/channel/channelSlice';
import projectTaskSlice from '@/store/project/projectTaskSlice';
import keywordSlice from '@/store/tools/keywordSlice';
import chatbotSlice from '@/store/tools/chatbotSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userSlice,
            preference: preferenceSlice,
            channel: channelSlice,
            projectTask: projectTaskSlice,
            keywords: keywordSlice,
            chatbot: chatbotSlice,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']