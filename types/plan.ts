export interface PlanFeature {
    featureName?: string
    featureDescription?: string
    featurePoints?: string[]
}

export interface PlanOption {
    planCode: string
    planName: string
    planDescription: string
    isItPopular: boolean
    currentPrice: number
    originalPrice?: number
    currency: string
    currencySymbol: string
    priceDescription: string
    buttonDescription: string
    featureHeading: string
    features: PlanFeature[]
}

export interface CountryPricing {
    USD: {
        symbol: string
        free: number
        standard: number
        standardOriginal?: number
    }
    INR: {
        symbol: string
        free: number
        standard: number
        standardOriginal?: number
    }
}

export interface PlanOptionsType {
    monthly: PlanOption[]
    yearly: PlanOption[]
}

export interface UserSelectedPlanType {
    paymentType: string,
    totalCount: number | string,
    planName: string,
    planCode: string,
    currency: string,
    amount: number,
    period: string,
}