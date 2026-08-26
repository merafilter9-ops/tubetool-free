export type SelectOptionsType = {
    label: string;
    value: string;
}

export type VideoCategoryType = {
    label: string;
    value: string;
    videoStyle: string[];
}

export type CountryCodeType = {
    code: string;
    name: string;
}

export type GermanToEnglishMapType = {
    Monat: string;
    Monaten: string;
    Woche: string;
    Wochen: string;
    Tag: string;
    Tagen: string;
    Stunde: string;
    Stunden: string;
    Minute: string;
    Minuten: string;
    Jahr: string;
    Jahren: string;
}

export type SuggestedActionType = {
    title: string;
    label: string;
    action: string;
}

export type PlanFeatureType = {
    featureName?: string;
    featureDescription?: string;
    featurePoints?: string[];
}

export type PlanOptionType = {
    planCode: string;
    planName: string;
    planDescription: string;
    isItPopular: boolean;
    currentPrice: number;
    originalPrice?: number;
    currency: string;
    currencySymbol: string;
    priceDescription: string;
    buttonDescription: string;
    featureHeading: string;
    features: PlanFeatureType[];
}

export type PlanOptionsType = {
    monthly: PlanOptionType[];
    yearly: PlanOptionType[];
}