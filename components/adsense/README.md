# Ad Management System

This directory contains components for managing Google AdSense ads based on user subscription status.

## Components

### AdWrapper
A wrapper component that conditionally renders ads based on user subscription status.

**Features:**
- Shows ads for free plan users and non-subscribers
- Hides ads for users with active subscriptions
- Optional premium message display
- Customizable fallback content

**Usage:**
```tsx
import AdWrapper from "@/components/adsense/ad-wrapper";
import InArticleAds from "@/components/adsense/in-article-ads";

// Basic usage - hides ads for subscribed users
<AdWrapper>
    <InArticleAds dataAdSlot="1234567890" />
</AdWrapper>

// With premium message
<AdWrapper showPremiumMessage>
    <InArticleAds dataAdSlot="1234567890" />
</AdWrapper>

// With custom fallback
<AdWrapper fallback={<div>Custom premium content</div>}>
    <InArticleAds dataAdSlot="1234567890" />
</AdWrapper>
```

### Ad Components
All ad components are automatically wrapped with AdWrapper:
- `InArticleAds` - For in-article ad placements
- `HorizontalAds` - For horizontal banner ads
- `FixSizeAds` - For fixed-size ad placements

## Subscription Logic

The system uses the following logic to determine ad visibility:

1. **Not logged in**: Show ads (treat as free user)
2. **Free plan or no subscription**: Show ads
3. **Active subscription**: Hide ads

### Subscription Status Check
The system checks the user's subscription using:
- `subscription.status` - Must not be "none" or "free"
- `subscription.planType` - Must not be "free"

### Supported Plan Types
- `free` - Shows ads
- `standard_monthly` - Hides ads
- `standard_yearly` - Hides ads
- Any other paid plan - Hides ads

## Implementation Details

### useSubscriptionStatus Hook
A custom hook that provides subscription status information:

```tsx
const {
    isLoggedIn,
    hasSubscription,
    shouldShowAds,
    subscription,
    planType,
    planName,
    subscriptionStatus
} = useSubscriptionStatus();
```

### Integration
All existing ad components have been updated to use the AdWrapper automatically. No changes needed to existing ad placements.

## Testing

To test the ad hiding functionality:

1. **Free User**: Log out or use a free account - ads should be visible
2. **Subscribed User**: Log in with an active subscription - ads should be hidden
3. **Premium Message**: Use `showPremiumMessage={true}` to see the premium experience message

## Notes

- The Google AdSense script continues to load for all users to avoid layout shifts
- Ad containers are completely hidden for subscribed users
- The system is designed to be performant and not affect page load times
- All ad components maintain their original props and functionality