import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { VideoAuditForm } from "@/components/tools/video-audit-tool/video-audit-form";
import InArticleAds from "@/components/adsense/in-article-ads";
import { generateToolMetadata, generateToolJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata({
    title: "Free AI YouTube Video Audit Tool — Complete Video SEO & Thumbnail Checker | TubeTool.ai",
    description: "Audit any YouTube video URL for free. Get an instant score on title CTR psychology, description CTAs, tag relevance, thumbnail readability, and 5 priority performance fixes.",
    keywords: [
        "YouTube video audit tool",
        "YouTube SEO checker",
        "analyze my YouTube video",
        "free YouTube video audit",
        "YouTube metadata audit",
        "YouTube video SEO score",
        "YouTube channel video audit"
    ],
    slug: "video-audit-tool"
});

const VideoAuditToolPage = () => {
    const jsonLd = generateToolJsonLd({
        name: "AI YouTube Video Audit Tool & SEO Checker",
        description: "Audit any YouTube video URL for free. Get an instant score on title CTR psychology, description CTAs, tag relevance, thumbnail readability, and 5 priority performance fixes.",
        slug: "video-audit-tool"
    });

    return (
        <div className="w-full flex-1 flex flex-col flex-wrap h-full pr-0 md:pr-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <VideoAuditForm />

            <div className="w-full flex flex-col mt-16 gap-8 pb-8 md:pb-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Free AI YouTube Video Audit Tool & SEO Checker
                    </h1>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Struggling with low view counts or flatlining Click-Through Rates (CTR) on your YouTube uploads? Often, the issue isn&apos;t your content quality—it&apos;s hidden SEO mistakes in your title formatting, missing description chapters, or unoptimized metadata tags.
                    </p>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Our free <strong>AI YouTube Video Audit Tool</strong> performs a comprehensive 360-degree audit of any YouTube video in seconds. Simply paste your video link to unlock an instant 1–100 SEO health score, CTR psychology breakdown, description CTA audit, tag relevance score, thumbnail visual check, and 5 prioritized step-by-step action items to fix underperforming videos immediately.
                    </p>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="3461727738" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        What Gets Audited by Our AI Video Checker?
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Our algorithm evaluates every critical metadata element YouTube&apos;s search and recommendation engines rely on:
                    </p>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                1. Title CTR & Length Optimization:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Evaluates title character counts for mobile truncations (45–70 chars optimal), checks emotional hook strength, and suggests 3 high-converting title alternatives.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                2. Description Above-The-Fold & Timestamps:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Audits the first 150 characters for immediate viewer hook, checks for formatted `00:00` chapter timestamps (essential for Google Key Moments search indexing), and ensures CTA links are present.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                3. Tag Relevance & Missing Keyword Gaps:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Scans video tags for search intent coverage and reveals untapped, high-volume long-tail keywords your competitors are ranking for.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                4. Thumbnail Visual Readability:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Evaluates color contrast, text font sizing for small smartphone screens, and subject placement to maximize click-through rate.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        How to Audit Your YouTube Videos in 3 Simple Steps
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Auditing any YouTube video takes under 10 seconds:
                    </p>
                    <ol className="list-decimal space-y-4 pl-3 md:pl-6 text-secondary-foreground dark:text-gray-400">
                        <li><strong>Step 1 — Paste YouTube URL:</strong> Copy and paste your video link (`youtube.com/watch?v=...` or `youtu.be/...`) into the input box above.</li>
                        <li><strong>Step 2 — Auto-Fetch Metadata:</strong> Our system automatically detects your video thumbnail, title, and channel info. Optionally paste your description text for a deeper audit.</li>
                        <li><strong>Step 3 — Review Score & Priority Fixes:</strong> Check your 1–100 SEO score and execute the 5 priority action items to immediately boost your video algorithm recommendations!</li>
                    </ol>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="6193770654" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Frequently Asked Questions About YouTube Video Audits
                    </h2>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Can I audit old YouTube videos to revive their view counts?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: Yes! Updating titles, adding chapter timestamps, and refreshing thumbnails on older videos often triggers YouTube&apos;s algorithm to re-test the video on home feeds and search recommendations.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: What is a good YouTube Video SEO score?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: A score of 80+ indicates strong metadata optimization. Scores below 60 signal urgent fixes needed in title hooks, description links, or chapter timestamps.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Is this YouTube Video Audit Tool completely free?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: Yes! TubeTool.ai offers 100% free creator tools with no sign-in required, no subscription fees, and no usage limits.
                            </p>
                        </li>
                    </ol>
                </div>

                <Separator />

                <div className="w-full flex flex-col gap-2">
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Stop guessing why your videos aren&apos;t getting views. Use our <strong>Free AI YouTube Video Audit Tool</strong> now to optimize your metadata and rank higher on YouTube!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoAuditToolPage;
