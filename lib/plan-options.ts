import type { PlanOptionsType, CountryPricing } from "@/types/plan"

// Country-based pricing configuration
export const COUNTRY_PRICING: CountryPricing = {
    USD: {
        symbol: "$",
        free: 0,
        standard: 5,
        standardOriginal: 7,
    },
    INR: {
        symbol: "₹",
        free: 0,
        standard: 199,
        standardOriginal: 299,
    },
}

// Base plan features (same for all countries)
const FREE_PLAN_FEATURES = [
    {
        featureName: "Title Generator Tool:",
        featureDescription: "Basic input fields"
    },
    {
        featureName: "Description Generator Tool:",
        featureDescription: "Basic input fields"
    },
    {
        featureName: "Tag Generator Tool:",
        featureDescription: "Basic input fields"
    },
    {
        featureName: "Hashtag Generator Tool:",
        featureDescription: "Basic input fields"
    },
    {
        featureName: "Script Generator Tool:",
        featureDescription: "Basic input fields with a standard response"
    },
    {
        featureName: "Thumbnail Guide Tool:",
        featureDescription: "Full access"
    },
    {
        featureName: "Topic Ideas Tool:",
        featureDescription: "Based on your YouTube video link"
    },
    {
        featureName: "Keyword Research Tool:",
        featureDescription: "Basic keyword research with similar keyword score"
    },
    {
        featureName: "YouTube Channel Integration:",
        featureDescription: "Add one channel"
    },
    {
        featureName: "Dashboard Access:",
        featureDescription: "View basic channel stats"
    },
    {
        featureName: "Channel Auditor Report:",
        featureDescription: "Churn, retention, sharing, view %, like/dislike, and subscriber growth"
    },
    {
        featureName: "Channel Performance:",
        featureDescription: "View last 30 days' performance graph"
    },
    {
        featureName: "Channel Analytics:",
        featureDescription: "Analytics graphs access"
    },
    {
        featureName: "Video Auditor Tool:",
        featureDescription: "Basic video stats"
    }
]

const STANDARD_PLAN_FEATURES = [
    {
        featureName: "Advanced Title Generator:",
        featureDescription: "More input fields for better titles"
    },
    {
        featureName: "Advanced Description Generator:",
        featureDescription: "All-in-one, smarter descriptions"
    },
    {
        featureName: "Video Optimization Tool:",
        featureDescription: "Boost video reach and engagement"
    },
    {
        featureName: "Advanced Keyword Research Tool:",
        featurePoints: [
            "Trending keywords",
            "Detailed single keyword research",
            "Advanced score based on your channel",
            "Competitor keyword score"
        ]
    },
    {
        featureName: "Thumbnail Quality Checker:",
        featureDescription: "Personalized improvement tips"
    },
    {
        featureName: "Content Research Tool:",
        featureDescription: "Discover content ideas and trends"
    },
    {
        featureName: "Channel Auditor Feedback Tool:",
        featureDescription: "Get improvement suggestions"
    },
    {
        featureName: "Analytics Forecasting Tool:",
        featureDescription: "1-month performance forecasting"
    },
    {
        featureName: "ChurnShield Tool:",
        featureDescription: "Subscriber churn prediction"
    },
    {
        featureName: "Competitor Analytics:",
        featureDescription: "Insights into competitor performance"
    },
    {
        featureName: "Video Production Tool:",
        featureDescription: "Tools to enhance your video creation"
    },
    {
        featureName: "Video Auditor Tool:",
        featureDescription: "Full audit, optimization score & suggestions"
    },
]

// Function to generate plan options based on country
export function generatePlanOptions(currency: string): PlanOptionsType {
    const pricing = COUNTRY_PRICING[currency as keyof CountryPricing] || COUNTRY_PRICING.USD;

    return {
        monthly: [
            {
                planCode: "free",
                planName: "free",
                planDescription: "Free trial. Limited access.",
                isItPopular: false,
                currentPrice: pricing.free,
                currency: currency,
                currencySymbol: pricing.symbol,
                priceDescription: "Perfect for beginners or small creators",
                buttonDescription: "Lifetime free. No charges.",
                featureHeading: "Includes:",
                features: FREE_PLAN_FEATURES,
            },
            {
                planCode: "standard_monthly",
                planName: "standard",
                planDescription: "For creators ready to grow",
                isItPopular: true,
                currentPrice: pricing.standard,
                originalPrice: pricing.standardOriginal,
                currency: currency,
                currencySymbol: pricing.symbol,
                priceDescription: "For creators ready to grow",
                buttonDescription: "Billed monthly. Cancel anytime.",
                featureHeading: "Everything in Free Plan, plus:",
                features: STANDARD_PLAN_FEATURES,
            },
        ],
        yearly: [
            {
                planCode: "free",
                planName: "free",
                planDescription: "Free trial. Limited access.",
                isItPopular: false,
                currentPrice: pricing.free,
                currency: currency,
                currencySymbol: pricing.symbol,
                priceDescription: "Perfect for beginners or small creators",
                buttonDescription: "Lifetime free. No charges.",
                featureHeading: "Includes:",
                features: FREE_PLAN_FEATURES,
            },
            {
                planCode: "standard_yearly",
                planName: "standard",
                planDescription: "For creators ready to grow",
                isItPopular: true,
                currentPrice: pricing.standard,
                originalPrice: pricing.standardOriginal,
                currency: currency,
                currencySymbol: pricing.symbol,
                priceDescription: "For creators ready to grow",
                buttonDescription: "Billed yearly. Cancel anytime.",
                featureHeading: "Everything in Basic Plan, plus:",
                features: STANDARD_PLAN_FEATURES,
            },
        ],
    }
}
