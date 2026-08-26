import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TubeTool - All-in-One Toolkit for YouTube Channel Growth",
    description: "Want to grow on YouTube? TubeTool provides free tools that simplify keyword research, video optimization, and more. Start growing for free",
    keywords: ["Tubetool.ai", "Tubetool"],
}

import BeforeAfterWidget from "@/components/home/BeforeAfterWidget"
import CreatorJourneyWidget from "@/components/home/CreatorJourneyWidget";
import DiagnosticWidget from "@/components/home/DiagnosticWidget";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import FutureChannelWidget from "@/components/home/FutureChannelWidget";
import GrowthWidget from "@/components/home/GrowthWidget";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PlanComparisonWidget from "@/components/home/PlanComparisonWidget";
import Testimonials from "@/components/home/Testimonials";
import TimeSaverWidget from "@/components/home/TimeSaverWidget";
import Tools from "@/components/home/Tools";
import TopicIntelWidget from "@/components/home/TopicIntelWidget";

export default function Home() {
    return (
        <main className="min-h-screen bg-dark-900/95">
            <Header />
            <Hero />
            <TimeSaverWidget />
            <DiagnosticWidget />
            <FutureChannelWidget />
            {/* <GlobalUserMapWidget /> */}
            <GrowthWidget />
            <TopicIntelWidget />
            <PlanComparisonWidget />
            <Features />
            <BeforeAfterWidget />
            <CreatorJourneyWidget />
            <Tools />
            <HowItWorks />
            <Testimonials />
            {/* <Comparison /> */}
            <Footer />
        </main>
    )
} 