'use client';

import { useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from 'canvas-confetti';
import { 
    Sparkles, 
    Search, 
    Globe, 
    Languages, 
    Video, 
    Users, 
    Target, 
    Award, 
    Link2, 
    ChevronDown, 
    ChevronUp, 
    ArrowRight, 
    Flame, 
    X,
    Loader2
} from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import API_URL_V1 from "@/lib/axios-config";
import { COUNTRY_CODES, ALL_LANGUAGES_LIST } from "@/constants/index";
import { GoNoGoDashboard } from "./go-no-go-dashboard";
import { BuyMeCoffeeCard } from "@/components/buy-me-coffee-card";
import { BuyMeCoffeeBanner } from "@/components/buy-me-coffee-banner";

const SUGGESTED_TOPICS = [
    { label: "Chest Workout Routine", icon: "🔥" },
    { label: "Build AI SaaS with Next.js", icon: "🤖" },
    { label: "iPhone 16 Pro Review", icon: "📱" },
    { label: "YouTube Shorts Monetization", icon: "💰" }
];

export const GoNoGoForm = () => {

    const [isPending, startTransition] = useTransition();
    const [keyword, setKeyword] = useState<string>("");
    
    // Optional Settings
    const [targetRegion, setTargetRegion] = useState<string>("India");
    const [language, setLanguage] = useState<string>("English");
    const [contentType, setContentType] = useState<string>("All Types");
    const [channelSize, setChannelSize] = useState<string>("0 - 10K (New)");
    
    const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
    
    // Advanced Settings
    const [goal, setGoal] = useState<string>("Views");
    const [skillLevel, setSkillLevel] = useState<string>("Intermediate");
    const [competitorLink, setCompetitorLink] = useState<string>("");

    const [dashboardData, setDashboardData] = useState<any>(null);

    const resetInputs = () => {
        setKeyword("");
        setTargetRegion("India");
        setLanguage("English");
        setContentType("All Types");
        setChannelSize("0 - 10K (New)");
        setGoal("Views");
        setSkillLevel("Intermediate");
        setCompetitorLink("");
    };

    const handleSubmit = (topicOverride?: string) => {
        const queryKeyword = topicOverride || keyword;
        if (!queryKeyword) {
            toast.error("Please enter a Keyword or Topic");
            return;
        }
        if (topicOverride) {
            setKeyword(topicOverride);
        }
        startTransition(async () => {
            try {
                const payload = {
                    keyword: queryKeyword,
                    targetRegion,
                    language,
                    contentType,
                    channelSize,
                    goal,
                    skillLevel,
                    competitorLink
                };
                
                const response = await API_URL_V1.post('/ai/go-no-go-predictor', { data: payload });
                setDashboardData(response?.data?.data);
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (error) {
                toast.error("Something went wrong. Please try again later.");
                console.error('Error predicting Go/No-Go:', error);
            }
        });
    };

    return (
        <div className="w-full flex flex-col gap-6 pt-2 pb-12">
            
            {/* COMPACT TOOL HEADER */}
            <div className="w-full flex flex-col gap-2 items-center text-center pt-2 md:pt-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Algorithm Predictor</span>
                    <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.2 rounded font-semibold ml-1">Beta</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    GO / NO-GO Predictor
                </h1>
                <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Get data-backed predictions on whether your YouTube video idea will succeed. Analyze search demand, competition intensity, and view potential before creating content.
                </p>
            </div>

            {/* FORM CARD */}
            <div className="w-full bg-card border rounded-2xl p-5 md:p-6 shadow-sm flex flex-col gap-5">
                
                {/* STEP 1: TOPIC INPUT */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="keyword" className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
                            1. Enter Your Video Topic or Idea *
                        </Label>
                        <span className="text-[11px] text-muted-foreground hidden sm:inline-block">Enter keywords, questions, or video title</span>
                    </div>

                    <Tabs defaultValue="keyword" className="w-full">
                        <TabsList className="mb-3 bg-muted/60 p-0.5 rounded-lg h-9">
                            <TabsTrigger value="keyword" className="rounded-md text-xs font-medium px-3 py-1">Keyword / Topic</TabsTrigger>
                            <TabsTrigger value="title" disabled className="rounded-md text-xs font-medium px-3 py-1 opacity-50">Video Title (Soon)</TabsTrigger>
                            <TabsTrigger value="description" disabled className="rounded-md text-xs font-medium px-3 py-1 opacity-50">Script (Soon)</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="keyword" className="mt-0 space-y-2.5">
                            <div className="relative group w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                                    <Search className="w-4 h-4" />
                                </div>
                                <Input
                                    id="keyword"
                                    type="text"
                                    placeholder="e.g. chest exercise routine, Nextjs 15 tutorial, MrBeast editing secrets..."
                                    className="w-full pl-9 pr-8 text-sm h-10 rounded-xl"
                                    autoFocus
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && keyword && !isPending) {
                                            handleSubmit();
                                        }
                                    }}
                                />
                                {keyword && (
                                    <button 
                                        onClick={() => setKeyword("")}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* POPULAR SUGGESTION CHIPS */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1 mr-1">
                                    <Flame className="w-3 h-3 text-rose-500" /> Try Popular:
                                </span>
                                {SUGGESTED_TOPICS.map((topic, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSubmit(topic.label)}
                                        className="text-[11px] bg-muted/50 hover:bg-primary/10 hover:text-primary border text-muted-foreground px-2.5 py-1 rounded-md transition-all flex items-center gap-1"
                                    >
                                        <span>{topic.icon}</span>
                                        <span>{topic.label}</span>
                                    </button>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* STEP 2: TARGET PARAMETERS */}
                <div className="pt-4 border-t border-border/60 flex flex-col gap-3">
                    <Label className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
                        2. Select Target Settings <span className="text-muted-foreground text-xs font-normal">(Optional)</span>
                    </Label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        
                        {/* REGION */}
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Globe className="w-3 h-3 text-primary" /> Target Region
                            </Label>
                            <Select value={targetRegion} onValueChange={setTargetRegion}>
                                <SelectTrigger className="h-9 text-xs sm:text-sm">
                                    <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Global">🌐 Global</SelectItem>
                                    {COUNTRY_CODES.map((country) => (
                                        <SelectItem key={country.code} value={country.name}>{country.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* LANGUAGE */}
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Languages className="w-3 h-3 text-primary" /> Language
                            </Label>
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="h-9 text-xs sm:text-sm">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {ALL_LANGUAGES_LIST.map((lang) => (
                                        <SelectItem key={lang.value} value={lang.label}>{lang.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* CONTENT TYPE */}
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Video className="w-3 h-3 text-primary" /> Content Format
                            </Label>
                            <Select value={contentType} onValueChange={setContentType}>
                                <SelectTrigger className="h-9 text-xs sm:text-sm">
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All Types">All Types</SelectItem>
                                    <SelectItem value="Long video">Long Video</SelectItem>
                                    <SelectItem value="Shorts">Shorts</SelectItem>
                                    <SelectItem value="Tutorial">Tutorial</SelectItem>
                                    <SelectItem value="Vlog">Vlog</SelectItem>
                                    <SelectItem value="Educational">Educational</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* CHANNEL SIZE */}
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Users className="w-3 h-3 text-primary" /> Channel Size
                            </Label>
                            <Select value={channelSize} onValueChange={setChannelSize}>
                                <SelectTrigger className="h-9 text-xs sm:text-sm">
                                    <SelectValue placeholder="Select Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0 - 1K (New)">0 - 1K (New)</SelectItem>
                                    <SelectItem value="1K - 10K">1K - 10K</SelectItem>
                                    <SelectItem value="10K - 100K">10K - 100K</SelectItem>
                                    <SelectItem value="100K+">100K+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>
                </div>

                {/* ADVANCED OPTIONS COLLAPSIBLE */}
                {showAdvanced && (
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50 gap-3 grid grid-cols-1 md:grid-cols-3 animate-in fade-in duration-200">
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Target className="w-3 h-3 text-primary" /> Primary Goal
                            </Label>
                            <Select value={goal} onValueChange={setGoal}>
                                <SelectTrigger className="h-9 text-xs sm:text-sm">
                                    <SelectValue placeholder="Select Goal" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Views">Views</SelectItem>
                                    <SelectItem value="Subscribers">Subscribers</SelectItem>
                                    <SelectItem value="Monetization">Monetization</SelectItem>
                                    <SelectItem value="Authority building">Authority building</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Award className="w-3 h-3 text-primary" /> Creator Skill Level
                            </Label>
                            <Select value={skillLevel} onValueChange={setSkillLevel}>
                                <SelectTrigger className="h-9 text-xs sm:text-sm">
                                    <SelectValue placeholder="Select Skill Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Beginner creator">Beginner creator</SelectItem>
                                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                                    <SelectItem value="Expert">Expert</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1">
                                <Link2 className="w-3 h-3 text-primary" /> Competitor Link (Optional)
                            </Label>
                            <Input 
                                placeholder="https://youtube.com/watch?v=..." 
                                className="h-9 text-xs sm:text-sm"
                                value={competitorLink}
                                onChange={(e) => setCompetitorLink(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {/* BOTTOM ACTION BAR */}
                <div className="flex justify-between items-center pt-3 border-t border-border/60">
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="text-xs text-primary gap-1 px-2"
                    >
                        <span>Advanced Options</span>
                        {showAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </Button>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={resetInputs}
                            className="text-xs"
                        >
                            Reset
                        </Button>
                        <Button
                            disabled={!keyword || isPending}
                            onClick={() => handleSubmit()}
                            size="sm"
                            className="bg-primary/90 hover:bg-primary text-primary-foreground text-xs font-semibold px-4 min-w-[140px]"
                        >
                            {isPending ? (
                                <span className="flex items-center gap-1.5">
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    Analyzing...
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5">
                                    <span>Analyze & Predict</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            )}
                        </Button>
                    </div>
                </div>

            </div>

            {/* SKELETON LOADING STATE */}
            {isPending && (
                <div className="w-full flex gap-4 flex-col items-center mt-6">
                    <Skeleton className="w-full h-[380px] rounded-2xl" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <Skeleton className="w-full h-[280px] rounded-2xl" />
                        <Skeleton className="w-full h-[280px] rounded-2xl" />
                    </div>
                </div>
            )}

            {/* DASHBOARD DISPLAY */}
            {!isPending && dashboardData && (
                <div className="mt-4 flex flex-col gap-8">
                    <GoNoGoDashboard data={dashboardData} />
                    <BuyMeCoffeeBanner className="mt-8" />
                </div>
            )}

            {/* SHOW BUY ME A COFFEE BANNER BEFORE ANALYSIS AS WELL */}
            {!isPending && !dashboardData && (
                <div className="mt-2">
                    <BuyMeCoffeeCard />
                </div>
            )}

        </div>
    );
};
