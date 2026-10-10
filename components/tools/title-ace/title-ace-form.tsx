"use client";

import { useState, useTransition } from "react";
import { 
  Sparkles, 
  Search, 
  Tv, 
  Users, 
  Globe, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  Target, 
  FileText, 
  Lightbulb, 
  RefreshCw, 
  Smartphone, 
  Monitor,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  Award,
  RotateCcw,
  Zap,
  TrendingUp
} from "lucide-react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import API_URL_V1 from "@/lib/axios-config";
import { copyToClipboard } from "@/lib/utils";

export interface CompetitorVideo {
  rank: number;
  thumbnailUrl: string;
  title: string;
  channelName: string;
  subscribers: string;
  views: string;
  publishedTime: string;
  duration?: string;
  channelAvatar?: string;
}

export interface TitleSuggestion {
  id: number;
  title: string;
  score: number;
  tag: string;
  filterCategory: "SEO Optimized" | "Curiosity" | "Beginner" | "Short" | "Long" | "Question";
  whyItWorks: string;
}

export interface TitleAceInsights {
  commonKeywords: string[];
  popularFormats: string[];
  contentAngles: string[];
  gapsAndOpportunities: string[];
}

export interface TitleAceScores {
  overallScore: number;
  keywordRelevance: number;
  searchIntentMatch: number;
  curiosityFactor: number;
  clarity: number;
  uniqueness: number;
  competitorGap: number;
}

const DEFAULT_COMPETITORS: CompetitorVideo[] = [
  {
    rank: 1,
    thumbnailUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60",
    title: "5 Best Chest Exercises (At Home) No Equipment",
    channelName: "FitBody",
    subscribers: "2.1M subscribers",
    views: "8.2M",
    publishedTime: "3 months ago",
    duration: "10:21",
    channelAvatar: "FB"
  },
  {
    rank: 2,
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60",
    title: "Chest Workout at Home (Muscle Building)",
    channelName: "Muscle Max",
    subscribers: "1.4M subscribers",
    views: "4.6M",
    publishedTime: "1 month ago",
    duration: "15:08",
    channelAvatar: "MM"
  },
  {
    rank: 3,
    thumbnailUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60",
    title: "Chest Workout at Home for Beginners",
    channelName: "BodyBoost",
    subscribers: "980K subscribers",
    views: "2.8M",
    publishedTime: "2 weeks ago",
    duration: "12:34",
    channelAvatar: "BB"
  },
  {
    rank: 4,
    thumbnailUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60",
    title: "10 Min Chest Workout (No Equipment)",
    channelName: "HomeFit",
    subscribers: "520K subscribers",
    views: "1.9M",
    publishedTime: "3 weeks ago",
    duration: "9:12",
    channelAvatar: "HF"
  },
  {
    rank: 5,
    thumbnailUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60",
    title: "Build a Bigger Chest at Home | 6 Exercises",
    channelName: "AthleanX",
    subscribers: "6.3M subscribers",
    views: "3.5M",
    publishedTime: "2 months ago",
    duration: "11:06",
    channelAvatar: "AX"
  }
];

const DEFAULT_INSIGHTS: TitleAceInsights = {
  commonKeywords: ["chest", "workout", "home", "exercises", "no equipment", "beginners"],
  popularFormats: [
    "1. X Best Exercises...",
    "2. ...at Home",
    "3. No Equipment",
    "4. For Beginners",
    "5. X Min Workout"
  ],
  contentAngles: [
    "Beginner friendly positioning",
    "Zero equipment requirement",
    "Quick time-based workout (5-15 min)",
    "Hypertrophy / Muscle building focus",
    "Specific exercise count in title"
  ],
  gapsAndOpportunities: [
    "Advanced at-home chest variations",
    "Chest workout using dumbbells or resistance bands",
    "Upper & lower chest targeted split",
    "Complete 4-week at-home chest routine",
    "Top 3 chest workout mistakes to avoid at home"
  ]
};

const DEFAULT_SCORES: TitleAceScores = {
  overallScore: 94,
  keywordRelevance: 92,
  searchIntentMatch: 88,
  curiosityFactor: 94,
  clarity: 90,
  uniqueness: 86,
  competitorGap: 91
};

const DEFAULT_SUGGESTIONS: TitleSuggestion[] = [
  {
    id: 1,
    title: "Build Your Chest at Home — No Gym Needed (Complete Beginner Guide)",
    score: 94,
    tag: "SEO + Benefit",
    filterCategory: "SEO Optimized",
    whyItWorks: "Combines the desired outcome with a clear constraint. Clear outcome, strong keyword, addresses no-gym constraint."
  },
  {
    id: 2,
    title: "5 Chest Exercises You Can Do at Home (Actually Work!)",
    score: 91,
    tag: "Curiosity",
    filterCategory: "Curiosity",
    whyItWorks: "Direct, specific, and aligned with likely search intent. Specific number, relatable, creates high curiosity."
  },
  {
    id: 3,
    title: "No Bench, No Gym: Build a Bigger Chest at Home (Step by Step)",
    score: 88,
    tag: "Differentiated",
    filterCategory: "Beginner",
    whyItWorks: "Highlights the equipment-free approach. Unique angle, clear promise, step by step approach."
  },
  {
    id: 4,
    title: "10 Min Chest Workout at Home (For Real Results)",
    score: 86,
    tag: "Short + SEO",
    filterCategory: "Short",
    whyItWorks: "Time-based, high search intent, specific and actionable for busy viewers."
  },
  {
    id: 5,
    title: "Chest Workout at Home for Beginners (No Equipment, No Excuses)",
    score: 84,
    tag: "Beginner Focus",
    filterCategory: "Beginner",
    whyItWorks: "Targets beginners, solution-oriented, keyword rich with high search relevance."
  },
  {
    id: 6,
    title: "Can You Really Build a Chest at Home Without Weights?",
    score: 82,
    tag: "Question Hook",
    filterCategory: "Question",
    whyItWorks: "Challenges common doubt, drives curiosity gap and encourages high CTR from search shelf."
  }
];

export const TitleAceForm = () => {
  const [isPending, startTransition] = useTransition();
  const [topic, setTopic] = useState("chest workout at home");
  const [videoType, setVideoType] = useState("Long-form (8+ min)");
  const [audience, setAudience] = useState("Beginner");
  const [targetCountry, setTargetCountry] = useState("India");

  const [competitors, setCompetitors] = useState<CompetitorVideo[]>(DEFAULT_COMPETITORS);
  const [insights, setInsights] = useState<TitleAceInsights>(DEFAULT_INSIGHTS);
  const [scores, setScores] = useState<TitleAceScores>(DEFAULT_SCORES);
  const [suggestions, setSuggestions] = useState<TitleSuggestion[]>(DEFAULT_SUGGESTIONS);

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [showAllCompetitors, setShowAllCompetitors] = useState<boolean>(false);
  const [previewDevice, setPreviewDevice] = useState<"Mobile" | "Desktop">("Desktop");

  const resetInputs = () => {
    setTopic("");
    setVideoType("Long-form (8+ min)");
    setAudience("Beginner");
    setTargetCountry("India");
    setCompetitors(DEFAULT_COMPETITORS);
    setInsights(DEFAULT_INSIGHTS);
    setScores(DEFAULT_SCORES);
    setSuggestions(DEFAULT_SUGGESTIONS);
    setSelectedTitleIndex(0);
    toast.info("Title Ace inputs reset");
  };

  const handleAnalyze = () => {
    if (!topic.trim()) {
      toast.error("Please enter a target topic or keyword!");
      return;
    }

    startTransition(async () => {
      try {
        toast.info(`Analyzing YouTube competitors for "${topic.trim()}"...`);

        let scrapedCompData: any[] = [];
        try {
          const ytRes = await fetch("/api/youtube/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ keyword: topic.trim() })
          });
          const ytJson = await ytRes.json();
          if (ytJson.videos && Array.isArray(ytJson.videos) && ytJson.videos.length > 0) {
            scrapedCompData = ytJson.videos;
          }
        } catch (e) {
          console.error("YouTube search fetch failed, falling back to AI generation", e);
        }

        const response = await API_URL_V1.post("/ai/title-ace", {
          data: {
            topic: topic.trim(),
            videoType,
            audience,
            targetCountry,
            scrapedCompetitors: scrapedCompData
          }
        });

        // Unpack payload from response.data.data OR response.data
        const aiPayload = response.data?.data || response.data;

        if (aiPayload) {
          if (aiPayload.insights) {
            setInsights(aiPayload.insights);
          }
          if (aiPayload.scores) {
            setScores(aiPayload.scores);
          }
          if (aiPayload.suggestions && Array.isArray(aiPayload.suggestions) && aiPayload.suggestions.length > 0) {
            setSuggestions(aiPayload.suggestions);
            setSelectedTitleIndex(0);
          }

          if (scrapedCompData.length > 0) {
            const formattedComps: CompetitorVideo[] = scrapedCompData.map((item, idx) => ({
              rank: idx + 1,
              thumbnailUrl: item.thumbnailUrl || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`,
              title: item.title,
              channelName: item.channelName,
              subscribers: "Verified Creator",
              views: item.views || "150K views",
              publishedTime: item.publishedTime || "Recently",
              duration: "10:15",
              channelAvatar: item.channelName ? item.channelName.substring(0, 2).toUpperCase() : "YT"
            }));
            setCompetitors(formattedComps);
          } else if (aiPayload.topCompetitors && Array.isArray(aiPayload.topCompetitors)) {
            const formattedComps: CompetitorVideo[] = aiPayload.topCompetitors.map((item: any, idx: number) => ({
              rank: item.rank || idx + 1,
              thumbnailUrl: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60`,
              title: item.title || `Top ${topic.trim()} Guide`,
              channelName: item.channelName || "YouTube Pro",
              subscribers: item.subscribers || "500K subscribers",
              views: item.views || "1.2M",
              publishedTime: item.publishedTime || "1 month ago",
              duration: item.duration || "12:00",
              channelAvatar: (item.channelName || "YT").substring(0, 2).toUpperCase()
            }));
            setCompetitors(formattedComps);
          }
        }

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        toast.success(`Title Ace analysis complete for "${topic.trim()}"!`);
      } catch (err: any) {
        console.error("Title Ace generation error:", err);
        toast.error("Failed to fetch fresh AI analysis. Please try again.");
      }
    });
  };

  const handleCopy = (id: number, titleText: string) => {
    copyToClipboard(titleText);
    setCopiedId(id);
    toast.success("Title copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleSave = (id: number) => {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter(i => i !== id));
      toast.info("Removed from saved titles");
    } else {
      setSavedIds([...savedIds, id]);
      toast.success("Saved to your Title Ace project!");
    }
  };

  const filteredSuggestions = suggestions.filter(item => {
    if (activeFilter === "All") return true;
    if (activeFilter === "SEO Optimized") return item.filterCategory === "SEO Optimized" || item.tag.includes("SEO");
    if (activeFilter === "Curiosity") return item.filterCategory === "Curiosity" || item.tag.includes("Curiosity");
    if (activeFilter === "Beginner") return item.filterCategory === "Beginner" || item.tag.includes("Beginner");
    if (activeFilter === "Short") return item.filterCategory === "Short" || item.title.length < 55;
    if (activeFilter === "Long") return item.filterCategory === "Long" || item.title.length >= 55;
    if (activeFilter === "Question") return item.filterCategory === "Question" || item.title.includes("?");
    return true;
  });

  const selectedTitleObj = suggestions[selectedTitleIndex] || suggestions[0] || { title: "Build Your Video Title — Win the Click Before You Publish" };
  const displayedCompetitors = showAllCompetitors ? competitors : competitors.slice(0, 5);

  return (
    <div className="w-full flex flex-col gap-6 items-center pt-4 md:pt-10">
      
      {/* STANDARD TOOL PAGE HEADER */}
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-1 flex items-center justify-center gap-2">
          Title Ace™ Tool <Badge className="bg-purple-600 text-white font-semibold text-xs">Beta</Badge>
        </h1>
        <p className="text-sm text-center text-muted-foreground max-w-2xl leading-relaxed">
          Analyze top-ranking competitor videos, uncover title patterns, find missing audience gaps, and generate higher-converting YouTube titles before you publish.
        </p>
      </div>

      {/* UNIFORM FORM INPUT CONTAINER */}
      <div className="w-full flex gap-4 flex-col items-center">
        
        {/* PROMO FEATURE CALLOUT BANNER */}
        <div className="w-full bg-gradient-to-r from-rose-500/10 via-red-500/5 to-amber-500/10 border border-rose-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-foreground">Beat the competition with data-driven titles</span>
              <span className="text-xs text-muted-foreground">We retrieve real YouTube competitor search shelf data and analyze patterns before generating titles.</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetInputs}
            className="text-xs text-muted-foreground hover:text-foreground shrink-0 gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Form
          </Button>
        </div>

        {/* INPUT FIELDS ROW */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
          
          {/* Target Topic / Keyword */}
          <div className="lg:col-span-4 flex flex-col gap-1.5">
            <Label htmlFor="target-topic">Target Topic or Keyword *</Label>
            <Input
              id="target-topic"
              type="text"
              placeholder="e.g. chest workout at home, python tutorial, iphone 16 review"
              className="w-full"
              autoFocus
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
            />
          </div>

          {/* Video Type */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <Label htmlFor="video-type-select">Video Format</Label>
            <Select value={videoType} onValueChange={setVideoType}>
              <SelectTrigger id="video-type-select" className="w-full">
                <SelectValue placeholder="Select Video Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Long-form (8+ min)">Long-form (8+ min)</SelectItem>
                <SelectItem value="Standard (3-8 min)">Standard (3-8 min)</SelectItem>
                <SelectItem value="Shorts (< 60s)">Shorts (&lt; 60s)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Audience */}
          <div className="lg:col-span-2 flex flex-col gap-1.5">
            <Label htmlFor="audience-select">Target Audience</Label>
            <Select value={audience} onValueChange={setAudience}>
              <SelectTrigger id="audience-select" className="w-full">
                <SelectValue placeholder="Select Audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
                <SelectItem value="General / All">General / All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Target Country */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <Label htmlFor="country-select">Target Country</Label>
            <Select value={targetCountry} onValueChange={setTargetCountry}>
              <SelectTrigger id="country-select" className="w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="Worldwide">Worldwide</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ANALYZE BUTTON */}
        <div className="w-full flex justify-center mt-2">
          <Button
            onClick={handleAnalyze}
            disabled={isPending}
            className="w-full sm:w-auto h-11 px-8 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold shadow-md gap-2"
          >
            {isPending ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Analyzing YouTube Competitors & Generating Titles...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Analyze & Generate Titles →
              </>
            )}
          </Button>
        </div>
      </div>

      {/* SKELETON LOADING STATE */}
      {isPending && (
        <div className="w-full mt-4 p-6 bg-card border rounded-3xl shadow-sm flex flex-col gap-6">
          <Skeleton className="w-full h-12 rounded-xl" />
          <Skeleton className="w-full h-64 rounded-xl" />
          <Skeleton className="w-full h-48 rounded-xl" />
        </div>
      )}

      {/* SINGLE UNIFIED OUTPUT REPORT CONTAINER (NO FRAGMENTED BOXES) */}
      {!isPending && (
        <div className="w-full mt-4 bg-card border border-rose-500/20 rounded-3xl p-5 sm:p-8 shadow-sm flex flex-col gap-8">
          
          {/* REPORT HEADER BAR */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
                T
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-foreground">Title Ace™ Intelligence Report</h2>
                  <Badge variant="outline" className="text-xs font-semibold text-rose-600 dark:text-rose-400 border-rose-500/30">
                    &quot;{topic}&quot;
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Competitive breakdown & AI-optimized title options for {targetCountry} ({audience} level).
                </p>
              </div>
            </div>

            {/* Score Pill & Refresh Action */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-xl text-xs font-bold">
                <Award className="w-4 h-4" />
                <span>Title Ace Score: {scores.overallScore}/100</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAnalyze}
                disabled={isPending}
                className="h-9 text-xs gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isPending ? 'animate-spin' : ''}`} /> Regenerate
              </Button>
            </div>
          </div>

          {/* SECTION 1: AI TITLE SUGGESTIONS (PRIMARY FOCUS & HIGHLIGHT) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <h3 className="text-lg font-bold text-foreground">Optimized Title Recommendations</h3>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {["All", "SEO Optimized", "Curiosity", "Beginner", "Short", "Long", "Question"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                      activeFilter === cat
                        ? "bg-rose-600 text-white shadow-sm font-semibold"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Suggestions Table */}
            <div className="w-full overflow-x-auto rounded-2xl border bg-background/50">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/60 text-muted-foreground uppercase text-[10px] font-bold tracking-wider border-b">
                  <tr>
                    <th className="py-3 px-3 w-8">#</th>
                    <th className="py-3 px-3">Title Suggestion</th>
                    <th className="py-3 px-3 text-center whitespace-nowrap">Title Ace Score</th>
                    <th className="py-3 px-3 min-w-[220px]">Why It Works</th>
                    <th className="py-3 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredSuggestions.map((item, idx) => {
                    const isSelected = selectedTitleIndex === idx;
                    const isSaved = savedIds.includes(item.id);
                    const isCopied = copiedId === item.id;

                    return (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedTitleIndex(idx)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? "bg-rose-500/10 dark:bg-rose-500/15" : "hover:bg-muted/40"
                        }`}
                      >
                        <td className="py-3.5 px-3 font-bold text-muted-foreground">{idx + 1}</td>
                        <td className="py-3.5 px-3 font-bold text-foreground leading-snug text-sm">
                          {item.title}
                        </td>
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs flex items-center justify-center border border-emerald-500/20">
                              {item.score}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                              {item.tag}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-muted-foreground text-xs leading-relaxed">
                          {item.whyItWorks}
                        </td>
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <div className="inline-flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(item.id, item.title);
                              }}
                              className="h-8 px-2.5 text-xs gap-1 text-muted-foreground hover:text-foreground"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" /> Copy
                                </>
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSave(item.id);
                              }}
                              className={`h-8 w-8 ${isSaved ? "text-rose-500" : "text-muted-foreground"}`}
                            >
                              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-rose-500" /> : <Bookmark className="w-4 h-4" />}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          {/* SECTION 2: SCORE BREAKDOWN & COMPETITOR INSIGHTS (SEAMLESS 2-COLUMN GRID) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Score Gauge & Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-500" />
                <h3 className="text-base font-bold text-foreground">Title Viability Score Breakdown</h3>
              </div>

              <div className="flex items-center gap-6 flex-col sm:flex-row bg-background/50 p-4 rounded-2xl border">
                {/* Circular Gauge */}
                <div className="flex flex-col items-center justify-center shrink-0">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-muted stroke-current"
                        strokeWidth="3.5"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-500 stroke-current"
                        strokeDasharray={`${scores.overallScore}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-foreground">{scores.overallScore}</span>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">/ 100</span>
                    </div>
                  </div>
                </div>

                {/* Progress Metric Bars */}
                <div className="flex-1 w-full flex flex-col gap-2 text-xs">
                  {[
                    { label: "Keyword Relevance", val: scores.keywordRelevance, color: "bg-emerald-500" },
                    { label: "Search Intent Match", val: scores.searchIntentMatch, color: "bg-teal-500" },
                    { label: "Curiosity Factor", val: scores.curiosityFactor, color: "bg-purple-500" },
                    { label: "Clarity", val: scores.clarity, color: "bg-amber-500" },
                    { label: "Uniqueness", val: scores.uniqueness, color: "bg-blue-500" },
                    { label: "Competitor Gap", val: scores.competitorGap, color: "bg-rose-500" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[11px] font-medium">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-bold text-foreground">{item.val}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Competitor Title Insights */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <h3 className="text-base font-bold text-foreground">Competitor Title Patterns & Insights</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Common Keywords */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1">
                    <Search className="w-3.5 h-3.5 text-blue-500" /> Common Keywords
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {insights.commonKeywords.map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-background border text-xs font-medium text-muted-foreground">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular Formats */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-emerald-500" /> Popular Formats
                  </span>
                  <ol className="flex flex-col gap-1 text-xs text-muted-foreground">
                    {insights.popularFormats.map((fmt, i) => (
                      <li key={i} className="truncate font-medium">{fmt}</li>
                    ))}
                  </ol>
                </div>

                {/* Content Angles */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Content Positioning Angles
                  </span>
                  <ul className="flex flex-col gap-1 text-xs text-muted-foreground">
                    {insights.contentAngles.map((ang, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{ang}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gaps & Opportunities */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-rose-500" /> Untapped Gaps & Opportunities
                  </span>
                  <ul className="flex flex-col gap-1 text-xs text-muted-foreground">
                    {insights.gapsAndOpportunities.map((gap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                        <span className="leading-snug">{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <Separator />

          {/* SECTION 3: TOP YOUTUBE COMPETITORS & LIVE PREVIEW (2-COLUMN GRID) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Top Competitors Table */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-red-500" />
                  <h3 className="text-base font-bold text-foreground">Top Ranking Competitor Shelf</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllCompetitors(!showAllCompetitors)}
                  className="h-8 text-xs gap-1 text-muted-foreground hover:text-foreground"
                >
                  {showAllCompetitors ? (
                    <>Show Top 5 <ChevronUp className="w-3.5 h-3.5" /></>
                  ) : (
                    <>View All ({competitors.length}) <ChevronDown className="w-3.5 h-3.5" /></>
                  )}
                </Button>
              </div>

              {/* Table */}
              <div className="w-full overflow-x-auto rounded-2xl border bg-background/50">
                <table className="w-full text-left text-xs">
                  <thead className="bg-muted/60 text-muted-foreground uppercase text-[10px] font-bold tracking-wider border-b">
                    <tr>
                      <th className="py-2.5 px-3 w-8">#</th>
                      <th className="py-2.5 px-3">Thumbnail</th>
                      <th className="py-2.5 px-3 min-w-[160px]">Title</th>
                      <th className="py-2.5 px-3">Channel</th>
                      <th className="py-2.5 px-3 text-right">Views</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {displayedCompetitors.map((item) => (
                      <tr key={item.rank} className="hover:bg-muted/30 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-muted-foreground">{item.rank}</td>
                        <td className="py-2.5 px-3">
                          <div className="relative w-16 h-9 rounded-md overflow-hidden border bg-muted shrink-0 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.thumbnailUrl}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                            {item.duration && (
                              <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-white font-mono text-[8px] px-1 py-0.2 rounded">
                                {item.duration}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-2.5 px-3 font-semibold text-foreground leading-snug">
                          {item.title}
                        </td>
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-600 font-bold text-[9px] flex items-center justify-center shrink-0">
                              {item.channelAvatar || item.channelName.substring(0, 2)}
                            </div>
                            <span className="font-medium text-foreground text-xs truncate max-w-[100px]">{item.channelName}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold text-foreground">{item.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Live YouTube Shelf Preview */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-500" />
                  <h3 className="text-base font-bold text-foreground">Live YouTube Shelf Preview</h3>
                </div>

                {/* Device Switcher */}
                <div className="flex items-center bg-muted rounded-lg p-0.5">
                  <button
                    onClick={() => setPreviewDevice("Mobile")}
                    className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold transition-all ${
                      previewDevice === "Mobile" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile
                  </button>
                  <button
                    onClick={() => setPreviewDevice("Desktop")}
                    className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold transition-all ${
                      previewDevice === "Desktop" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> Desktop
                  </button>
                </div>
              </div>

              {/* Live YouTube Mockup Card */}
              <div className={`mx-auto w-full transition-all ${previewDevice === "Mobile" ? "max-w-[300px]" : "w-full"}`}>
                <div className="bg-black rounded-2xl overflow-hidden shadow-lg border border-neutral-800 text-white">
                  {/* Mock Thumbnail */}
                  <div className="relative aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
                      alt="YouTube Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                    
                    {/* Visual Title Overlay */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white font-black text-xs uppercase px-2 py-0.5 rounded shadow-md tracking-wider">
                      {topic.substring(0, 15) || "NEW VIDEO"}
                    </div>

                    <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] font-bold px-1.5 py-0.5 rounded">
                      10:15
                    </span>
                  </div>

                  {/* Video Info */}
                  <div className="p-3.5 flex items-start gap-3 bg-neutral-950">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 border border-neutral-800">
                      YC
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="font-bold text-xs leading-snug line-clamp-2 text-white">
                        {selectedTitleObj.title}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                        <span>Your Channel</span>
                        <span>•</span>
                        <span>42K views</span>
                        <span>•</span>
                        <span>2 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* SUPPORT BANNER */}
      <div className="w-full mt-6">
        <BuyMeCoffeeBanner />
      </div>

    </div>
  );
};
