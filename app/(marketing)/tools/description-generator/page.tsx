import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { DescriptionGeneratorForm } from "@/components/tools/description-generator/description-generator-form";
import InArticleAds from "@/components/adsense/in-article-ads";
import { generateToolMetadata, generateToolJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata({
    title: "Free YouTube Description Generator AI Tool — Fast SEO Descriptions | TubeTool.ai",
    description: "Create fully optimized, high-ranking YouTube video descriptions effortlessly with AI. Boost search discoverability, add timestamps, and drive viewer engagement.",
    keywords: [
        "YouTube description generator",
        "free YouTube description maker",
        "AI video description writer",
        "YouTube description SEO",
        "YouTube video description template"
    ],
    slug: "description-generator"
});

const DescriptionGeneratorPage = () => {
    const jsonLd = generateToolJsonLd({
        name: "YouTube Description Generator",
        description: "Create fully optimized, high-ranking YouTube video descriptions effortlessly with AI. Boost search discoverability, add timestamps, and drive viewer engagement.",
        slug: "description-generator"
    });

    return (
        <div className="w-full flex-1 flex flex-col flex-wrap h-full pr-0 md:pr-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <DescriptionGeneratorForm />

            <div className="w-full flex flex-col mt-16 gap-8 pb-8 md:pb-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Free YouTube Video Description Generator AI Tool
                    </h1>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Many YouTubers believe that video content is the main thing to get views, but your video descriptions are equally important. A video description is a quick overview or summary of your content. A well-written, SEO-optimized video description improves discoverability, attracts target viewers, and boosts engagement.
                    </p>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Writing the perfect video description is a tough task for many YouTubers. Finding the right keywords, structuring chapters, and balancing uniqueness with search optimization takes time. That&apos;s why we created the&nbsp;<strong>YouTube Video Description Generator Tool</strong>.
                    </p>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="7945836023" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Why Video Descriptions Matter on YouTube
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Your video description is not only a summary. It serves two crucial purposes:
                    </p>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                1. Search Engine Optimization:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                YouTube is the second largest search engine in the world, and your description directly influences where your video ranks in search results and recommended feeds.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                2. Viewer Engagement and Conversion:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Your description provides valuable context, timestamps, social links, and affiliate links to convert passive viewers into loyal subscribers.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Common Challenges YouTubers Face
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Finding high-ranking keywords, balancing SEO readability, and maintaining brand consistency across dozens of uploads can be overwhelming. TubeTool automates description writing in seconds.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        The Ideal Format for a YouTube Video Description
                    </h2>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                1. Strong Hook in First 2-3 Lines:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Summarize your video with primary target keywords right before the &quot;Show More&quot; fold.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                2. Timestamps & Chapters:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Break down key segments (e.g. 0:00 Intro, 1:45 Main Tip) so Google can index video chapters directly in search results.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                3. Call to Action & Social Links:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Add subscription links, playlist recommendations, and social media handles to build your audience cross-platform.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="1448678611" />
                </div>

                <Separator />

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Try the SEO-Optimized Description Generator Tool Today
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Say goodbye to writing video descriptions from scratch. Create high-quality, search-friendly descriptions in seconds and accelerate your YouTube channel growth for 100% free.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default DescriptionGeneratorPage;