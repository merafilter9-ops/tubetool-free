import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { VideoOutlineBuilderForm } from "@/components/tools/video-outline-builder/video-outline-builder-form";
import InArticleAds from "@/components/adsense/in-article-ads";
import { generateToolMetadata, generateToolJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata({
    title: "Free AI YouTube Video Outline Builder — Long-Form Script Structure | TubeTool.ai",
    description: "Generate structured long-form YouTube video outlines with exact timestamps, talking points, B-roll suggestions, transition tips, and copyable chapter titles in seconds.",
    keywords: [
        "YouTube video outline generator",
        "video script structure template",
        "free YouTube outline builder",
        "YouTube video script outline",
        "YouTube chapter title generator",
        "long-form video structure",
        "YouTube retention script template"
    ],
    slug: "video-outline-builder"
});

const VideoOutlineBuilderPage = () => {
    const jsonLd = generateToolJsonLd({
        name: "AI YouTube Video Outline Builder & Script Structure Generator",
        description: "Generate structured long-form YouTube video outlines with exact timestamps, talking points, B-roll suggestions, transition tips, and copyable chapter titles in seconds.",
        slug: "video-outline-builder"
    });

    return (
        <div className="w-full flex-1 flex flex-col flex-wrap h-full pr-0 md:pr-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <VideoOutlineBuilderForm />

            <div className="w-full flex flex-col mt-16 gap-8 pb-8 md:pb-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Free AI YouTube Video Outline Builder & Script Structure Generator
                    </h1>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Pacing is the single most critical factor in keeping viewers hooked on long-form YouTube videos. Without a clear structure, videos suffer from narrative sag, repetitive points, and sudden drop-offs in audience retention graphs.
                    </p>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Our free <strong>AI YouTube Video Outline Builder</strong> acts as your virtual head writer and production planner. By analyzing proven video structure frameworks—from tutorials and listicles to story-driven video essays—our tool generates a complete blueprint with exact section timestamps, bulleted talking points, visual B-roll directions, on-screen graphic callouts, and YouTube chapters ready for your description box.
                    </p>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="3461727738" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Why Every Successful YouTube Creator Outlines Before Scripting
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Top YouTube creators don&apos;t hit record without a bulletproof structure. Outlining your video before filming provides massive strategic advantages:
                    </p>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                1. Eliminates Mid-Video Viewer Drop-Off:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Planning distinct narrative acts prevents tangents and keeps your pacing relentless so viewers watch through to the end.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                2. Streamlines Editing & Shot Selection:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Knowing exact B-roll callouts and graphic cues in advance saves hours of searching stock footage during video editing.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                3. Automatic YouTube Search SEO & Timestamps:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Output format includes YouTube-formatted chapter timestamps that boost your video rank in Google search results and key moments preview.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                4. Seamless End-Screen Call-To-Action (CTA):
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Directs viewers to your next video without awkward wrap-up signals, maximizing viewer session duration.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        How to Use the YouTube Video Outline Builder
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Generating a publication-ready video structure takes under 10 seconds:
                    </p>
                    <ol className="list-decimal space-y-4 pl-3 md:pl-6 text-secondary-foreground dark:text-gray-400">
                        <li><strong>Step 1 — Enter Video Topic or Title:</strong> Type in your planned video concept, working title, or main focus.</li>
                        <li><strong>Step 2 — Select Length & Format:</strong> Choose your target length (5–8 min, 10–15 min, or 20–30 min) and video format (Tutorial, Listicle, Story, Review, or Essay).</li>
                        <li><strong>Step 3 — Pick Target Audience:</strong> Select your target audience demographic or let AI auto-detect it based on your topic.</li>
                        <li><strong>Step 4 — Review & Export Outline:</strong> Copy section talking points into your teleprompter or export YouTube chapters directly into your video description!</li>
                    </ol>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="6193770654" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Frequently Asked Questions About Video Script Outlining
                    </h2>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: What is the best video structure for YouTube growth?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: The 3-act structure (Hook & Premise, Core Escalation/Value Delivery, Climax & Immediate Transition CTA) consistently yields the highest Average Percentage Viewed (APV).
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: How do YouTube Chapter Timestamps help video SEO?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: YouTube and Google index video chapters as &quot;Key Moments&quot;. Adding structured timestamps into your description box increases rich organic search visibility.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Is this Video Outline Builder free to use?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: Yes! TubeTool.ai offers 100% free AI creator tools with no sign-in required, no subscriptions, and unlimited generations.
                            </p>
                        </li>
                    </ol>
                </div>

                <Separator />

                <div className="w-full flex flex-col gap-2">
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Turn raw video ideas into engaging, high-retention video scripts. Try our <strong>Free AI YouTube Video Outline Builder</strong> today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoOutlineBuilderPage;
