import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ExtendedUser, UserState } from '@/types/user'

// Define the initial state using that type
const initialState: UserState = {
    currentUser: {} as ExtendedUser,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<ExtendedUser>) => {
            state.currentUser = action.payload
        },
        clearUser: (state) => {
            state.currentUser = {} as ExtendedUser
        },
        updateProfileImage: (state, action: PayloadAction<{ image: string, imageId: string }>) => {
            state.currentUser.image = action.payload.image,
                state.currentUser.imageId = action.payload.imageId
        }
    }
})

export const {
    updateUser,
    clearUser,
    updateProfileImage
} = userSlice.actions

export default userSlice.reducer