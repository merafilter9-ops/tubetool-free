import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Heart,
  ArrowRight,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import TimeSaverWidget from "@/components/home/TimeSaverWidget";
import DiagnosticWidget from "@/components/home/DiagnosticWidget";
import FutureChannelWidget from "@/components/home/FutureChannelWidget";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Tools from "@/components/home/Tools";
import Faq from "@/components/home/Faq";
import { BuyMeCoffeeCard } from "@/components/buy-me-coffee-card";

export const metadata: Metadata = {
  title: "TubeTool.ai - 100% Free AI Toolkit for YouTube Channel Growth",
  description: "Stop paying $25-$50/month for TubeBuddy & VidIQ. TubeTool provides 100% free AI tools for keyword research, title generation, script writing, and video optimization.",
  keywords: ["Tubetool.ai", "Tubetool free tools", "TubeBuddy free alternative", "VidIQ free alternative"],
}

export default function MarketingHome() {
  return (
    <div className="w-full flex flex-col flex-wrap h-full">
      <div className="w-full flex flex-col items-center space-y-2 pt-12">
        <p className="w-fit h-fit flex items-center border border-red-500/30 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs px-3 py-1 font-bold mb-1">
          <Heart className="h-3.5 w-3.5 mr-1.5 fill-current" />
          100% Free Creator Movement • No $25/mo Paywalls
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center md:w-3/4 bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark pt-4 pb-2 leading-tight">
          <span>All-in-One Free</span>
          <br />
          <span>YouTube Growth Toolkit</span>
        </h2>
        <p className="md:w-2/3 text-center font-normal text-base text-secondary-foreground dark:text-gray-300 pt-2 leading-relaxed">
          Stop paying <strong className="text-foreground">$25–$50/month</strong> for basic tools. Tubetool.ai provides powerful AI keyword research, high-CTR title generators, thumbnail auditors, and script writers — completely <strong className="text-amber-500 font-bold">100% Free for all YouTubers</strong>.
        </p>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-5">
          <Button variant="default" size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
            <Link href="/tools/title-generator" className="flex items-center gap-2">
              <span>Explore Free Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-bold text-sm px-6 py-3 rounded-xl">
            <Link href="/our-mission" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Our Mission & Goal Details →</span>
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-1">5000+</div>
            <div className="dark:text-gray-400">Creators Empowered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-500 mb-1">$0</div>
            <div className="dark:text-gray-400 font-medium">Free Forever (No Paywalls)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-1">15+</div>
            <div className="dark:text-gray-400">AI Creator Tools</div>
          </div>
        </div>
      </div>

      <TimeSaverWidget />

      <DiagnosticWidget />

      <FutureChannelWidget />

      <Features />

      <HowItWorks />

      <Tools />

      {/* COMMUNITY MISSION & COFFEE CARD */}
      <div className="w-full px-4">
        <BuyMeCoffeeCard />
      </div>

      <Faq />

      {/* <div id="tools" className="w-full flex flex-col mt-16">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold md:w-2/3 text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            Tools that you will love
          </h2>
          <p className="w-full text-center md:w-2/3 text-base text-wrap text-secondary-foreground dark:text-gray-400">
            TubeTool provides you collections of tool from Ai analytics insights to video production management. Our Ai powered tools make your channel growth journey easy and smooth.
          </p>
        </div>
      </div> */}

      {/* <div className="w-full flex flex-col mt-8 gap-3 justify-center">
        <ul className="w-full flex flex-wrap items-start justify-center [&_li]:mx-6 [&_img]:max-w-none">
          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/title-generator">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <Type className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Title Generator</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Title generator is a tool that helps you to generate the SEO optimized Title.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/description-generator">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <Text className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Description Generator</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Description generator is a tool that helps you to generate the SEO optimized Title.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/tag-generator">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <Tag className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Tag Generator</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Tag generator is a tool that helps you to generate the SEO optimized Title.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/hashtag-generator">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <Hash className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Hashtag Generator</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Hashtag generator is a tool that helps you to generate the SEO optimized Title.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/video-optimization">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <CirclePlay className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Video Optimization</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Video Optimization Tool is a tool that helps you to optimize your video for better performance.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/content-research">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <TextSearch className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Content Research</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Content Research Tool is a tool that helps you to research the best content for your next video.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/script-generator">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <FilePenLine className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Script Generator</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Script Generator Tool is a tool that helps you to generate the best content for your next video.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/thumbnail-quality-checker">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <ImageUp className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Thumbnail Quality Checker</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Thumbnail quality checker is a tool that will analyze your thumbnail Seo and tell you whether it is ready for publication or not by suggesting the needed edits.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/thumbnail-guide">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <BookImage className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Thumbnail Guide</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Thumbnail guide is a tool that will analyze your thumbnail Seo and tell you whether it is ready for publication or not by suggesting the needed edits.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/topic-ideas">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <Lightbulb className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Topic Ideas</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Topic Ideas is a tool that will analyze your thumbnail Seo and tell you whether it is ready for publication or not by suggesting the needed edits.
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={300}>
            <HoverCardTrigger asChild>
              <Link href="/tools/keyword-research">
                <li className="w-24 p-1.5 flex flex-col items-center cursor-pointer">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-5 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div className="relative flex items-center rounded-xl justify-center bg-background mb-3">
                      <div className="w-24 h-24 rounded-xl border  border-muted shadow flex justify-center items-center">
                        <FileSearch className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-ellipsis text-center text-xs text-muted-foreground">Keyword Research</p>
                </li>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm p-3 bg-background" side="top">
              Keyword Research is a tool that will help you to find the best keyword for your next video topic.
            </HoverCardContent>
          </HoverCard>

        </ul>
      </div> */}

      {/* <div className="w-full flex flex-col mt-16 gap-8">
        <div className="w-full flex flex-col gap-2">
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            Welcome to TubeTool, the best tool set designed specifically for YouTube creators. It&apos;s not easy growing a channel as you have to think of content and optimize the videos, among other things. This is why we created powerful yet simple tools to assist you throughout the entire process and thus enabling you to concentrate on creating content. With TubeTool, you will have features such as: keyword research, thumbnail designing guidelines, topic introductions, and so forth. Are you ready to unlock your potential? Go ahead and explore the difference
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            Why choose TubeTool?
          </h2>
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            The right kind of tools can drastically change the growth of your channel and here&apos;s why TubeTool is the best option for YouTubers out there:
          </p>
          <ol className="list-decimal space-y-5 pl-3 md:pl-6">
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                1. All-in-One Solution
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Stop jumping from one tool to another. TubeTool offers everything under one roof which saves your time and makes your tasks simpler.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                2. Data-Driven Recommendations
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Our tools allow data-driven algorithms that look into your history of performance, audience demand, and even competitor history. Get relevant suggestions.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                3. Ease of Use
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                It doesn&apos;t matter if you are a novice or experienced creator, TubeTool has been crafted in such a manner, that it is easy to use with simple instructions and guides.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                4. Comprehensive Insights
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Each tool has detailed insights along with useful recommendations, so you are not making random guesses as to what will work - you are using information to act.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                5. Affordable and Accessible
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Competitive businesses charge exorbitant prices for individual tools most of the times. TubeTool provides all of these tools at a lesser price making it ideal for creators of any level.
              </p>
            </li>
          </ol>
        </div>

        <div className="w-full flex flex-col gap-2">
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            Together, we can assist you with your career as a YouTuber, as we have included instructions in our tools designed in order to assist YouTubers succeed.
          </p>
        </div>

        <div className="w-full flex flex-col gap-2" id="tools-description">
          <h2 className="text-xl font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            Explore Our Powerful Tools
          </h2>
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            Together, we can assist you with your career as a YouTuber, as we have included instructions in our tools designed in order to assist YouTubers succeed. Here&apos;s quick overview of our tools:
          </p>
          <ol className="list-decimal space-y-5 pl-3 md:pl-6">
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Keyword Research Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Use data such as the target audience, views, and competition to determine the best topics or keywords for your channel to center on. This allows creators to make each video accessible to as many fans as possible.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Daily Topic Ideas Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Can&apos;t think of what videos to upload this week? Since the tool uses competitors&apos; content, potential customers&apos; requests, and your videos, we recommend a bunch of specific themes to work with.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Thumbnail Quality Checker Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Thumbnails are the first thing viewers notice. Using this thumbnail checker, just upload your design and get a quality rating calculated on readability, color choice, visual arrangement, and other factors. Follow tips offered and automatically improve CTR of your thumbnails.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Thumbnail Designing Guide Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                How do I get a good thumbnail? It looks at the content of the video and its transcript and comes up with a color scheme, arrangement, and text recommendations to enhance the thumbnail&apos;s competitiveness.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Video Optimization Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Guarantee every video is ready for maximum exposure The tool offers advice on how to enhance your titles, descriptions, tags and many other parameters which will assist in improving the content&apos;s exposure.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Content Research Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Develop a more comprehensive understanding of the present trends in the industry you are targeting. Staying ahead of your competitors is possible through our content research tool which pinpoints topics and content types that will most likely perform well.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Script Generator Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Writing scripts can take a lot of time. To streamline the scripting process, our script generator assists with structure and organization, which in turn enables you to produce engaging content, regardless of the topic.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Title Generator Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Titles are important for getting people to click. Using optimally engaging titles that are appropriate to your content will expand your reach and engagement especially when it is fully optimized.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Short Description Generator Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Make people wish they could find some more pictures, even though there are only three. The suggested description aims to entice the viewersapos; attention within the first few seconds of the presentation through its simplicity and effectiveness.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Tags Generator Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Tags that are applied will determine how visible your content is. For each video, suggest appropriate and high-ranking tags to enhance visibility in searches and recommendations.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                Hashtag Generator Tool
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Make use of appropriate hashtags that are popular. The suggested hashtags extend your reach and ensure that more viewers see your video content by using popular themes that are in trend at that time.
              </p>
            </li>
          </ol>
        </div>

        <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
          <strong>Technology Used:</strong>&nbsp;TubeTool is equipped with the most recent technologies and algorithms to prepare Artificial intelligence and machine learning to conduct accurate and detailed data analysis aimed at giving you the best possible insights.
        </p>

        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            How Does TubeTool Work?
          </h2>
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            <strong>Choose Any Tool:</strong>&nbsp;Topic ideas, keyword suggestions, script generator - whatever you need.
          </p>
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            <strong>Fill in Your Details:</strong>&nbsp;Enter your keywords, channel type or video script.
          </p>
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            <strong>Get Results:</strong>&nbsp;Get instant data driven insights, suggestions and to-do&apos;s.
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            Frequently Asked Questions
          </h2>
          <ol className="list-decimal space-y-5 pl-3 md:pl-6">
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                1. Is TubeTool free?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Yes, all our tools are free to grow your YouTube channel.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                2. Do I need to create an account to use TubeTool?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Nothing. Just start using our tools.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                3. Can I use TubeTool on any niche?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Yes, Our tools are for creators of all niches.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                4. How often should I use the tools?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                We recommend using them every time you plan new content or optimize an existing video.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                5. Who can I contact if I have questions on how to use them?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Well, we have help on each tool and a support team that’s always here for you.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                6. Can I trust TubeTool insights?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Yes, Our tools are driven by real-time data and advanced algorithms for accurate and relevant results.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                7. Am I limited in any way to use the tools?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                None, You can use our tools as many times as you want to grow as much as you can.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="text-lg font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                8. How do I give you feedback or suggestions?
              </h3>
              <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
                Thanks, Any feedback or suggestions you have can be sent through the contact page.
              </p>
            </li>
          </ol>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-medium text-left w-full bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
            START NOW
          </h2>
          <p className="text-base text-justify font-normal text-secondary-foreground dark:text-gray-400">
            Ready to grow on YouTube? Try TubeTool today and unleash all your content creation power. Use TubeTool. Thousands of YouTubers trust TubeTool with growth, now it&apos;s your turn to join them and see results in seconds.
          </p>
        </div>
      </div> */}

    </div>
  );
}
