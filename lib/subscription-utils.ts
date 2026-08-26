import { addMonths, differenceInDays } from "date-fns"

import { Subscription } from "@/types/user"

// Subscription status utilities
export const getSubscriptionStatusInfo = (status: string) => {
    const statusMap = {
        none: {
            label: "No Subscription",
            description: "You haven't subscribed to any plan yet. Upgrade to unlock premium features.",
            color: "gray",
            icon: "info",
        },
        free: {
            label: "Free Plan",
            description: "You're currently on the free plan with limited features.",
            color: "blue",
            icon: "gift",
        },
        created: {
            label: "Created",
            description: "Subscription has been created and is awaiting activation.",
            color: "blue",
            icon: "clock",
        },
        authenticated: {
            label: "Authenticated",
            description: "Customer has completed authentication, awaiting activation.",
            color: "yellow",
            icon: "shield",
        },
        active: {
            label: "Active",
            description: "Your subscription is active and billing cycle has started.",
            color: "green",
            icon: "check",
        },
        pending: {
            label: "Pending",
            description: "Payment is being retried. Please update your payment method.",
            color: "orange",
            icon: "clock",
        },
        halted: {
            label: "Halted",
            description: "Payment failed after all retries. Please update payment method.",
            color: "red",
            icon: "pause",
        },
        cancelled: {
            label: "Cancelled",
            description: "Subscription has been cancelled and cannot be restarted.",
            color: "gray",
            icon: "x",
        },
        paused: {
            label: "Paused",
            description: "Subscription is temporarily paused.",
            color: "yellow",
            icon: "pause",
        },
        expired: {
            label: "Expired",
            description: "Subscription has expired due to timeout.",
            color: "red",
            icon: "x",
        },
        completed: {
            label: "Completed",
            description: "Subscription has reached the end of its lifecycle.",
            color: "gray",
            icon: "check",
        },
    }

    return (
        statusMap[status as keyof typeof statusMap] || {
            label: "Unknown",
            description: "Unknown subscription status.",
            color: "gray",
            icon: "help",
        }
    )
}

// Format currency
export const formatCurrency = (amount: string, currency = "INR") => {
    const numAmount = Number.parseInt(amount) / 100 // Assuming amount is in paise
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
    }).format(numAmount)
}

// Format plan type
export const formatPlanType = (planType: string) => {
    return planType
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

// Calculate days until next charge
export const getDaysUntilNextCharge = (nextChargeAt: string | undefined) => {
    if (!nextChargeAt) return null
    const nextCharge = new Date(nextChargeAt)
    const today = new Date()
    return differenceInDays(nextCharge, today)
}

// Check if subscription needs attention
export const needsAttention = (subscription: Subscription) => {
    const criticalStatuses = ["pending", "halted", "expired"]
    return criticalStatuses.includes(subscription.status)
}

// Calculate subscription progress (for recurring subscriptions)
export const getSubscriptionProgress = (subscription: Subscription) => {
    if (!subscription.isRecurring) return null

    const progress = (subscription.paidCount / subscription.totalCount) * 100
    return Math.min(progress, 100)
}

// Get subscription end date estimate
export const getEstimatedEndDate = (subscription: Subscription) => {
    if (!subscription.isRecurring || !subscription.startDate) return null

    const startDate = new Date(subscription.startDate)
    const endDate = addMonths(startDate, subscription.totalCount)
    return endDate
}


// Add function to check if user is on free plan
export const isFreeAccount = (subscription: Subscription) => {
    return subscription.status === "none" || subscription.planType === "free"
}

// Add function to get plan features
export const getPlanFeatures = (planType: string) => {
    const features = {
        free: {
            name: "Free Plan",
            features: ["Basic features", "Limited usage", "Community support"],
            limitations: ["No premium features", "Usage limits apply", "No 24/7 support"],
        },
        standard_monthly: {
            name: "Standard Monthly",
            features: ["All premium features", "Priority support", "Advanced analytics", "Unlimited usage"],
            limitations: [],
        },
        standard_yearly: {
            name: "Standard Yearly",
            features: ["All premium features", "Priority support", "Advanced analytics", "Unlimited usage", "20% discount"],
            limitations: [],
        },
    }

    return features[planType as keyof typeof features] || features.free
}