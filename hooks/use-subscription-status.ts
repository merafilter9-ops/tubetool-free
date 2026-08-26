import { useCurrentUser } from "@/hooks/use-current-user";
import { isFreeAccount } from "@/lib/subscription-utils";

/**
 * Hook to check user subscription status for ad display logic
 */
export const useSubscriptionStatus = () => {
    const user = useCurrentUser();

    const isLoggedIn = !!user;
    const hasSubscription = user?.subscription && !isFreeAccount(user.subscription);
    const shouldShowAds = !hasSubscription; // Show ads for non-subscribers or free users

    return {
        isLoggedIn,
        hasSubscription,
        shouldShowAds,
        subscription: user?.subscription,
        planType: user?.subscription?.planType,
        planName: user?.subscription?.planName,
        subscriptionStatus: user?.subscription?.status
    };
};