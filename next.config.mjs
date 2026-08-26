/** @type {import('next').NextConfig} */
const nextConfig = {
    // Uncomment below lines to use static site generation (SSG) while running `next build`
    // and comment these below lines while running `npm run dev`
    // output: 'export',
    env: {
        NEXT_PUBLIC_API_BASE_URL_V1: process.env.NEXT_PUBLIC_API_BASE_URL_V1,
        NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
        RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
        PLAN_ID_STANDARD_MONTHLY_INR: process.env.PLAN_ID_STANDARD_MONTHLY_INR,
        PLAN_ID_STANDARD_MONTHLY_USD: process.env.PLAN_ID_STANDARD_MONTHLY_USD,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'yt3.googleusercontent.com',
                port: '',
                pathname: '**',
            }
        ],
    }
};

export default nextConfig;
