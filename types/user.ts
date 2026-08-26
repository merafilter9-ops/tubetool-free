
export type AccountUser = {
    provider: string;
    accountType: string;
    providerAccountId: string;
    userId: string;
}

export type Subscription = {
    _id: string;
    isRecurring: boolean;
    planType: string;
    planName: string;
    paidCount: number;
    totalCount: number;
    planId?: string;
    endedAt?: string;
    startDate: string;
    nextChargeAt?: string;
    remainingCount?: number;
    razorpaySubscriptionId?: string;
    status: string;
    notes: {
        userId: string
        userEmail: string
        userName: string
        planType: string
        planName: string
        currency: string
        amount: string
    }
    paymentId?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type ExtendedUser = {
    _id: string;
    accessToken: string;
    firstName: string;
    lastName?: string;
    email: string;
    image?: string;
    imageId?: string;
    lastPasswordReset?: string;
    country?: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    account: AccountUser;
    subscription: Subscription;
};

export interface UserState {
    currentUser: ExtendedUser;
}

export interface PreferenceState {
    isSidebarOpen: boolean;
    isChatbotSidebarOpen: boolean;
}