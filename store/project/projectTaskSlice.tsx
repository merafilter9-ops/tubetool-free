import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProjectTaskState } from '@/types/project'

// Define the initial state using that type
const initialState: ProjectTaskState = {
    toBeUpdateTask: null,
}

export const projectTaskSlice = createSlice({
    name: 'projectTask',
    initialState,
    reducers: {
        setToBeUpdateTask: (state, action: PayloadAction<ProjectTaskState['toBeUpdateTask']>) => {
            state.toBeUpdateTask = action.payload
        },
    }
})

export const {
    setToBeUpdateTask,
} = projectTaskSlice.actions

export default projectTaskSlice.reducer