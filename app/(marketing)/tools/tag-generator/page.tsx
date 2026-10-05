import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { TagGeneratorForm } from "@/components/tools/tag-generator/tag-generator-form";
import InArticleAds from "@/components/adsense/in-article-ads";
import { generateToolMetadata, generateToolJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata({
    title: "Free YouTube Tags Generator AI Tool — Maximize Video Reach | TubeTool.ai",
    description: "Discover high-ranking, SEO-optimized tags for your YouTube videos for free. Boost video search visibility, recommendation signals, and channel growth.",
    keywords: [
        "YouTube tags generator",
        "free YouTube tag generator",
        "video tags finder",
        "YouTube SEO tags",
        "best tags for YouTube"
    ],
    slug: "tag-generator"
});

const TagGeneratorPage = () => {
    const jsonLd = generateToolJsonLd({
        name: "YouTube Tag Generator",
        description: "Discover high-ranking, SEO-optimized tags for your YouTube videos for free. Boost video search visibility, recommendation signals, and channel growth.",
        slug: "tag-generator"
    });

    return (
        <div className="w-full flex-1 flex flex-col flex-wrap h-full pr-0 md:pr-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <TagGeneratorForm />

            <div className="w-full flex flex-col mt-16 gap-8 pb-8 md:pb-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Free YouTube Video Tags Generator AI Tool
                    </h1>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        In the world of YouTube, reaching a wider audience depends heavily on properly optimized video tags. Many creators miss out on search impressions because they omit or misuse keyword tags. Our&nbsp;<strong>YouTube Tag Generator Tool</strong> helps you instantly generate high-ranking, relevant tags categorized by topic, competitor signals, and search volume.
                    </p>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="4006591016" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Why Do YouTube Tags Matter?
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Tags are context indicators that help YouTube&apos;s recommendation engine understand your content niche, sub-topic variations, and search intent.
                    </p>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                1. Improved Search Rankings:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Tags improve video SEO and help your content rank higher in YouTube search engine result pages (SERPs).
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                2. Suggested Video Recommendations:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                When your tags match trending competitor content, YouTube recommends your video in the sidebar next to popular videos.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="6509433608" />
                </div>

                <Separator />

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Try Our Free YouTube Tag Generator Tool Today
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Don&apos;t leave your video search ranking to guesswork. Generate high-volume, low-competition tags in seconds and give your videos the reach they deserve for 100% free.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default TagGeneratorPage;