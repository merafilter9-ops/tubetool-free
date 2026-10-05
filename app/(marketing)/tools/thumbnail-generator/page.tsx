import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { ThumbnailGeneratorForm } from "@/components/tools/thumbnail-generator/thumbnail-generator-form";
import InArticleAds from "@/components/adsense/in-article-ads";
import { generateToolMetadata, generateToolJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata({
    title: "Free AI YouTube Thumbnail Generator — Visual Concepts & AI Prompts | TubeTool.ai",
    description: "Generate high-CTR YouTube thumbnail concepts, visual layouts, and Midjourney prompts instantly for free with our AI thumbnail strategist.",
    keywords: [
        "YouTube thumbnail generator",
        "free AI thumbnail generator",
        "YouTube thumbnail maker AI",
        "Midjourney thumbnail prompts",
        "high CTR thumbnail ideas",
        "YouTube thumbnail strategy"
    ],
    slug: "thumbnail-generator"
});

const ThumbnailGeneratorPage = () => {
    const jsonLd = generateToolJsonLd({
        name: "AI YouTube Thumbnail Concept & Prompt Generator",
        description: "Generate high-CTR YouTube thumbnail concepts, visual layouts, and Midjourney prompts instantly for free with our AI thumbnail strategist.",
        slug: "thumbnail-generator"
    });

    return (
        <div className="w-full flex-1 flex flex-col flex-wrap h-full pr-0 md:pr-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <ThumbnailGeneratorForm />

            <div className="w-full flex flex-col mt-16 gap-8 pb-8 md:pb-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Free AI YouTube Thumbnail Generator & Visual Concept Creator
                    </h1>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Your YouTube thumbnail is the single most critical factor determining whether a viewer clicks on your video or scrolls past it. Even if your video edit is flawless and your content is top-tier, a low-CTR thumbnail means your video will be ignored by YouTube&apos;s recommendation algorithm.
                    </p>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Our free <strong>AI YouTube Thumbnail Concept & Prompt Generator</strong> acts as your virtual YouTube Art Director. Instead of giving generic design tips, our AI delivers 3 psychologically proven thumbnail frameworks tailored to your specific video topic—complete with precise visual subjects, high-contrast color schemes, bold text overlays, and copy-pasteable prompts for Midjourney and DALL-E 3.
                    </p>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="3461727738" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Why Visual Strategy Beats Generic Thumbnail Templates
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Most creators rely on repetitive Canva templates or copy whatever top creators in their niche did 6 months ago. However, the YouTube feed is flooded with identical-looking graphics. To get high Click-Through Rates (CTR), your thumbnail needs to evoke emotion and create visual contrast.
                    </p>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Curiosity Gaps & Mystery:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A great thumbnail presents an incomplete story or surprising visual element that forces the brain to click to find the answer.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Complementary Text vs. Title Repetition:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Never repeat your video title word-for-word in the thumbnail image. The thumbnail text should offer a complementary hook or dramatic 2–4 word teaser.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Mobile Readability First:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Over 70% of YouTube watch time happens on mobile devices. If your thumbnail text or subject is tiny or cluttered, mobile viewers will scroll straight past.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        How to Generate AI Thumbnail Artwork with Midjourney & DALL-E
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        You don&apos;t need Photoshop mastery or expensive design agencies to create viral graphics. Our tool outputs custom image generation prompts optimized for AI art engines:
                    </p>
                    <ol className="list-decimal space-y-4 pl-3 md:pl-6 text-secondary-foreground dark:text-gray-400">
                        <li><strong>Step 1 — Input Your Topic:</strong> Type your video title, niche, or core idea into the form above and click generate.</li>
                        <li><strong>Step 2 — Copy the AI Prompt:</strong> Select one of the 3 generated concepts and click the copy icon on the AI Image Prompt card.</li>
                        <li><strong>Step 3 — Render the Image:</strong> Paste the prompt into Midjourney (`/imagine`), ChatGPT Plus (DALL-E 3), or Leonardo.ai to generate cinematic background graphics.</li>
                        <li><strong>Step 4 — Add Bold Typography:</strong> Open Canva or Photoshop, place your generated background image, and add the recommended text overlay in a clean, high-contrast font.</li>
                    </ol>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="6193770654" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Frequently Asked Questions About YouTube Thumbnails
                    </h2>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: What is the ideal YouTube thumbnail size and format?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: YouTube recommends a resolution of 1280 x 720 pixels (minimum width of 640 pixels), an aspect ratio of 16:9, and file formats such as JPG, PNG, or WEBP under 2MB.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Should thumbnail text be identical to the video title?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: No! Repeating the title wastes valuable real estate. Use 2–4 short, punchy words in the thumbnail that complement the title and arouse curiosity.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: How does Click-Through Rate (CTR) affect video rankings?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: YouTube&apos;s algorithm tracks how many people click your video when shown on homepage impressions. High CTR tells YouTube your video is relevant, prompting it to push your video to thousands of additional viewers.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Is this AI YouTube Thumbnail Generator completely free?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: Yes! TubeTool.ai provides 100% free creator tools with no subscription fees, credit limits, or hidden paywalls.
                            </p>
                        </li>
                    </ol>
                </div>

                <Separator />

                <div className="w-full flex flex-col gap-2">
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Stop guessing what makes a thumbnail work. Use our <strong>Free AI YouTube Thumbnail Generator</strong> today to plan high-performing visual concepts, copy tailored Midjourney prompts, and start driving massive CTR growth across your YouTube channel!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ThumbnailGeneratorPage;

