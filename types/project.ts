export type OverviewType = {
    totalProjects: Number,
    ongoingProjects: Number,
    completedProjects: Number,
    draftProjects: Number,
}

export type TaskType = {
    budget: string,
    createdAt: string,
    currency: string,
    deadline: string,
    description?: string,
    isDeleted: boolean,
    status: string,
    submissions: [],
    title: string,
    updatedAt: string,
    projectId: string,
    _id: string,
}

export type ProjectType = {
    budget: string,
    createdAt: string,
    currency: string,
    deadline: string,
    description: string,
    isDeleted: boolean,
    status: string,
    tasks: TaskType[],
    title: string,
    updatedAt: string,
    userId: string,
    _id: string,
}

export type ProjectTaskState = {
    toBeUpdateTask: TaskType | null,
}