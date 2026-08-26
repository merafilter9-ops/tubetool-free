'use client';

import { useSubscriptionStatus } from "@/hooks/use-subscription-status";

interface AdWrapperProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    showPremiumMessage?: boolean;
}

/**
 * AdWrapper component that conditionally renders ads based on user subscription status
 * Only shows ads for free plan users, hides them for subscribed users
 */
const AdWrapper = ({ children, fallback = null, showPremiumMessage = false }: AdWrapperProps) => {
    const { shouldShowAds } = useSubscriptionStatus();

    // Show ads for free users or non-subscribers
    if (shouldShowAds) {
        return <>{children}</>;
    }

    // User has an active subscription, hide ads and show fallback if provided
    if (showPremiumMessage && !fallback) {
        return (
            <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-center">
                    <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        🎉 Premium Experience
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Ads are hidden for subscribed users
                    </div>
                </div>
            </div>
        );
    }

    return <>{fallback}</>;
};

export default AdWrapper;