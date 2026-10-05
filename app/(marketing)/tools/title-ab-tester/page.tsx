import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { TitleAbTesterForm } from "@/components/tools/title-ab-tester/title-ab-tester-form";
import InArticleAds from "@/components/adsense/in-article-ads";
import { generateToolMetadata, generateToolJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata({
    title: "Free YouTube A/B Title Tester AI — Predict CTR Before Uploading | TubeTool.ai",
    description: "Test 2–5 YouTube title variations before publishing. Get AI-powered CTR predictions, curiosity & clarity scores, winner recommendations, and hybrid titles for free.",
    keywords: [
        "YouTube title tester",
        "A/B test YouTube titles",
        "best YouTube title checker",
        "predict YouTube CTR",
        "YouTube title ranker",
        "free title A/B test",
        "YouTube title optimizer"
    ],
    slug: "title-ab-tester"
});

const TitleAbTesterPage = () => {
    const jsonLd = generateToolJsonLd({
        name: "YouTube A/B Title Tester AI",
        description: "Test 2–5 YouTube title variations before publishing. Get AI-powered CTR predictions, curiosity & clarity scores, winner recommendations, and hybrid titles for free.",
        slug: "title-ab-tester"
    });

    return (
        <div className="w-full flex-1 flex flex-col flex-wrap h-full pr-0 md:pr-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <TitleAbTesterForm />

            <div className="w-full flex flex-col mt-16 gap-8 pb-8 md:pb-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Free YouTube A/B Title Tester AI Tool
                    </h1>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Your YouTube video title is responsible for over 60% of a viewer&apos;s decision to click. Even if your video production is Hollywood-grade, a boring or confusing title guarantees low Click-Through Rate (CTR). YouTube Studio offers built-in A/B testing, but it requires you to wait days or weeks <em>after</em> publishing to see results—wasting your initial release velocity.
                    </p>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Our free <strong>YouTube A/B Title Tester AI Tool</strong> lets you test up to 5 title variations <strong>before you press upload</strong>. By evaluating psychological curiosity triggers, search intent clarity, high-converting keywords, and emotional pull, our AI ranks your options from highest to lowest predicted CTR and synthesizes a winning hybrid title.
                    </p>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="3461727738" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        The 4 Core Title Pillars Evaluated by Our CTR Algorithm
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Top YouTube strategists evaluate titles across 4 vital psychological metrics. Our AI scores every title variation on a 1–100 scale:
                    </p>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                1. Curiosity & Mystery Score:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Measures whether the title creates an unresolved mental gap that compels the brain to click to satisfy curiosity.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                2. Topic Clarity & Value Proposition:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Ensures the viewer immediately understands what the video is about within 1 second of glancing at the YouTube feed.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                3. Keyword & Search Intent Strength:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Analyzes whether high-volume search phrases and entity keywords are placed near the front of the title for maximum algorithmic indexing.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                4. Emotional Pull & Stakes:
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                Evaluates emotional triggers such as surprise, urgency, FOMO (Fear Of Missing Out), transformation, or high stakes.
                            </p>
                        </li>
                    </ol>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        How to Run a YouTube Title A/B Test Step-by-Step
                    </h2>
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Running a pre-publish A/B title test takes less than 60 seconds with TubeTool.ai:
                    </p>
                    <ol className="list-decimal space-y-4 pl-3 md:pl-6 text-secondary-foreground dark:text-gray-400">
                        <li><strong>Step 1 — Input 2 to 5 Title Variations:</strong> Type or paste your candidate titles into the input fields above. Click &ldquo;+ Add Variation&rdquo; if you have more than 2 ideas.</li>
                        <li><strong>Step 2 — Select Niche & Channel Size:</strong> Choose your video category and channel subscriber bracket so the AI adjusts recommendations for search vs. homepage recommendation intent.</li>
                        <li><strong>Step 3 — Click Analyze & Rank:</strong> Get an instant breakdown ranking your titles from highest to lowest predicted CTR score.</li>
                        <li><strong>Step 4 — Copy the Winner or Hybrid Title:</strong> Use the single winning title or copy our AI-generated hybrid title that combines the strongest hooks into one power title!</li>
                    </ol>
                </div>

                <div className="w-full my-2 overflow-x-clip">
                    <InArticleAds dataAdSlot="6193770654" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                        Frequently Asked Questions About YouTube Title A/B Testing
                    </h2>
                    <ol className="list-decimal space-y-5 pl-3 md:pl-6">
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Why should I test titles before uploading instead of after?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: YouTube gives your video its biggest initial recommendation push during the first 24–48 hours after upload. Testing beforehand guarantees you publish with your strongest possible title on day 1.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: What is a good Click-Through Rate (CTR) on YouTube?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: A healthy YouTube CTR typically ranges between 4% and 10%. Viral videos often achieve CTRs of 10% to 15%+ on broad homepage impressions.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: How long should a YouTube title be for optimal CTR?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: We recommend keeping your core hook within the first 50–60 characters so it doesn&apos;t get truncated on mobile screens or YouTube homepage feeds.
                            </p>
                        </li>
                        <li className="flex flex-col">
                            <h3 className="text-lg font-semibold text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                                Q: Is the YouTube A/B Title Tester 100% free?
                            </h3>
                            <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                                A: Yes! TubeTool.ai creator tools are completely free to use without limits, subscriptions, or credit card requirements.
                            </p>
                        </li>
                    </ol>
                </div>

                <Separator />

                <div className="w-full flex flex-col gap-2">
                    <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                        Stop launching videos with unverified titles. Use our <strong>Free YouTube A/B Title Tester AI Tool</strong> right now to rank your title options, discover your highest CTR title, and maximize your video&apos;s release velocity!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TitleAbTesterPage;
