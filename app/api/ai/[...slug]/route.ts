import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY || 'dummy_key_for_build',
});

export async function POST(req: Request, { params }: { params: { slug: string[] } }) {
    try {
        const slug = params.slug.join('/');
        const body = await req.json();
        const data = body.data || body;

        let systemPrompt = "You are a helpful YouTube expert AI.";
        const userPrompt = JSON.stringify(data);
        let jsonStructure = '';

        switch (slug) {
            case 'generate-titles':
                systemPrompt = "You are an expert YouTube title generator. Generate 5 catchy, SEO-friendly titles based on the user's input.";
                jsonStructure = '{ "titles": ["title1", "title2", "title3", "title4", "title5"] }';
                break;
            case 'generate-description':
                systemPrompt = "You are an expert YouTube description generator. Generate a compelling, SEO-friendly description based on the user's input.";
                jsonStructure = '{ "description": "generated description text here" }';
                break;
            case 'generate-tags':
                systemPrompt = "You are an expert YouTube tag generator. Do not just generate random keywords. Use the following 9-category framework based on search intent coverage:\n1. Core/Exact Match Tags\n2. Long-Tail Tags\n3. Trending/Emotional Tags\n4. Category Tags\n5. Audience-Based Tags\n6. Competitor/Similar Video Tags\n7. Platform-Specific Tags\n8. Misspelling & Variations (Only if requested)\n9. Entity-Based Tags.\nOutput a JSON object containing an array called 'categories'. Each category should have 'name', 'description', and 'tags' (array of strings).";
                jsonStructure = '{ "categories": [{ "name": "Core / Exact Match Tags", "description": "...", "tags": ["tag1", "tag2"] }] }';
                break;
            case 'generate-hashtags':
                systemPrompt = "You are an expert YouTube hashtag generator. Generate 15 highly relevant hashtags based on the user's input.";
                jsonStructure = '{ "tags": ["#hashtag1", "#hashtag2", "..."] }';
                break;
            case 'topic-ideas':
                systemPrompt = "You are an expert YouTube content strategist. Generate 10 engaging video topic ideas based on the user's input.";
                jsonStructure = '{ "recommendations": ["idea1", "idea2", "..."] }';
                break;
            case 'keyword-research':
                systemPrompt = "You are an expert YouTube SEO specialist. Generate extremely detailed keyword research data based on the user's input. The data must strictly follow the JSON structure provided, generating realistic, well-thought-out stats, variations, demographic data, and strategy recommendations for the specific keyword.";
                jsonStructure = '{ "overview": { "keyword": "...", "subTags": ["...", "..."], "description": "...", "localSearchVolume": { "value": "165K", "level": "High" }, "globalSearchVolume": { "value": "450K", "level": "High" }, "trendDirection": "+38%", "competition": { "level": "High", "score": 72 }, "cpc": "₹12.5", "cpcLevel": "Medium", "opportunityScore": { "score": 68, "label": "Good Opportunity" }, "trendPrediction": { "label": "Rising", "timeframe": "Next 3 months" }, "contentSaturation": { "level": "High", "description": "Many similar videos" }, "recommendation": { "status": "GO", "reason": "with a unique angle" } }, "viability": { "barrierToEntry": { "averageTop10Subs": "850K", "smallChannelBreakthrough": 2, "viewsToSubsRatio": "High (Search-driven)" }, "monetization": { "estimatedRPM": "$4.50 - $8.00", "topSponsors": ["Supplements", "Gym Apps"], "affiliatePotential": "High" }, "benchmarks": { "idealLength": "8-12 mins", "formatDominance": "Tutorials", "engagementRequired": "6%+ Like-to-View" }, "seasonality": { "peakMonths": "January, May", "crossPlatform": "High (TikTok/Reels)" } }, "trendAnalysis": [25, 30, 35, 38, 45, 55, 65, 80, 78, 79, 82, 85], "searchIntent": { "informational": { "percentage": 58, "description": "..." }, "transformational": { "percentage": 22, "description": "..." }, "problemSolving": { "percentage": 12, "description": "..." }, "comparison": { "percentage": 8, "description": "..." } }, "audienceInterest": [ { "segment": "Beginners", "percentage": 32 }, { "segment": "Enthusiasts", "percentage": 28 }, { "segment": "Experts", "percentage": 20 } ], "audiencePsychology": { "painPoints": ["..."], "desires": ["..."], "fears": ["..."], "triggers": ["..."] }, "audienceDemographics": { "locations": [{ "country": "India", "percentage": 58 }, { "country": "United States", "percentage": 12 }], "age": "18-34", "gender": "Male 85%", "targetingTip": "..." }, "keywordVariations": [ { "keyword": "...", "searchVolume": "90K", "competition": "Medium", "trend": "up", "opportunity": 74 } ], "contentGap": { "missing": ["...", "..."], "gapOpportunity": { "title": "Gap Opportunity", "description": "...", "nicheLabel": "High Potential Niche" } }, "videoStrategy": { "titleIdeas": ["...", "..."], "thumbnailSuggestion": { "bulletPoints": ["...", "..."] }, "hookIdeas": ["...", "..."] }, "topRankingVideos": [ { "title": "...", "channel": "...", "views": "12.4M", "likes": "320K", "comments": "8.2K", "seoScore": 78 } ] }';
                break;
            case 'thumbnail-quality':
                systemPrompt = "You are an expert YouTube thumbnail analyzer. Evaluate the thumbnail concept or details provided and give a score (0-100), feedback, and specific suggestions.";
                jsonStructure = '{ "score": 85, "feedback": "...", "suggestions": ["..."], "factors": { "aspect_ratio_core": 1, "brand_identity_score": 1, "color_palette": 1, "font_size_score": 1, "nsfw_score": 1, "sentiment_score": 1, "similarity_score": 1, "white_space_score": 1 } }';
                break;
            case 'thumbnail-generator':
                systemPrompt = "You are an expert YouTube Thumbnail Strategist and Art Director. Based on the user's video topic, generate 3 distinctly different, high-converting thumbnail concepts (e.g., The Curiosity Gap, The Extreme Result, The Minimalist Authority). For each concept, provide the visual layout, text, and an exact Midjourney prompt so the user can generate the base image. Optimize for high CTR.";
                jsonStructure = '{ "concepts": [ { "name": "...", "reasoning": "...", "backgroundSetup": "...", "mainSubject": "...", "facialExpression": "...", "overlayText": "...", "colorPalette": "...", "midjourneyPrompt": "..." } ] }';
                break;
            case 'go-no-go-predictor':
                systemPrompt = "You are a master YouTube Strategist acting as a decision engine. Based on the user's Keyword, Target Region, Language, Content Type, and Channel Size, you will analyze the market and provide a decisive GO or NO-GO prediction along with extremely deep strategic analysis. Provide the output in the strict JSON structure. Use realistic metrics and scores.";
                jsonStructure = '{ "prediction": { "score": 82, "decision": "GO", "decisionText": "...", "whyGo": ["...", "..."] }, "metrics": { "searchVolume": { "value": "165K", "level": "High" }, "globalSearchVolume": { "value": "450K", "level": "High" }, "competition": "Medium", "trend": "+38%", "opportunityScore": { "value": 82, "level": "High" }, "estimatedViews": "20K - 120K" }, "trendAnalysis": [ { "month": "Oct", "interest": 20 } ], "audienceByRegion": [ { "country": "India", "percentage": 58 } ], "audienceAnalysis": { "types": [ { "name": "...", "description": "...", "percentage": 32, "targetStrategy": "..." } ] }, "searchIntent": { "informational": 58, "transformational": 22, "problemSolving": 12, "comparison": 8 }, "competitorAnalysis": [ { "title": "...", "channel": "...", "views": "12.4M", "age": "6 months ago", "seoScore": 78 } ], "contentGap": { "missing": ["...", "..."], "untappedAngles": ["...", "..."] }, "videoStrategy": { "contentType": "...", "videoFormat": "...", "optimalLength": "...", "targetAudience": "...", "suggestedTitle": "...", "thumbnailIdea": "..." }, "dosAndDonts": { "dos": ["...", "..."], "donts": ["...", "..."] } }';
                break;
            case 'script-hook-generator':
                systemPrompt = "You are an expert YouTube Content Strategist and Script Writer specializing in high-retention video intros. Based on the user's video topic, target audience, hook vibe/tone, and video format, generate 5 distinct, high-impact opening script hooks (first 15-30 seconds). For each hook, provide the hook style name, exact first 3 seconds hook sentence, full spoken script lines, visual/b-roll cues, retention score (1-100), and psychological reasoning for why it stops viewers from clicking away.";
                jsonStructure = '{ "hooks": [ { "id": 1, "style": "The Pattern Interrupt", "first3Seconds": "...", "script": "...", "visualCues": "...", "retentionScore": 95, "psychologicalReasoning": "..." } ] }';
                break;
            case 'title-ab-tester':
                systemPrompt = "You are a world-class YouTube Algorithm Specialist and CTR Strategist. Analyze the provided title variations for a video in a specific niche and channel size. Rank the titles from highest to lowest predicted Click-Through Rate (CTR). Evaluate curiosity, clarity, keyword strength, and emotional pull for each title on a 1-100 scale. Identify the winning title, explain why it wins, and synthesize an improved hybrid title that combines the best psychological hooks and SEO keywords.";
                jsonStructure = '{ "winningTitle": "...", "winningReason": "...", "hybridTitle": "...", "hybridExplanation": "...", "titlesRanked": [ { "rank": 1, "title": "...", "predictedCtrScore": 92, "curiosityScore": 90, "clarityScore": 88, "keywordStrength": 94, "emotionalPull": 86, "strengths": ["...", "..."], "weaknesses": ["..."], "verdict": "..." } ] }';
                break;
            case 'video-outline-builder':
                systemPrompt = "You are a master YouTube Producer and Script Architect. Based on the user's video topic, target length, video style/format, and target audience, generate a comprehensive, timestamped video outline structured for maximum viewer retention. Provide chapter titles formatted for YouTube descriptions, talking points (3-5 bullets per section), B-roll/visual suggestions, on-screen text graphics, transition cues, and pro creator tips.";
                jsonStructure = '{ "videoTitle": "...", "estimatedDuration": "...", "formattedChapters": "00:00 Introduction & Hook\\n01:30 Section 1...", "sections": [ { "id": 1, "timestamp": "00:00 - 01:30", "chapterTitle": "00:00 Introduction & Hook", "sectionName": "Introduction & Hook", "talkingPoints": ["...", "..."], "brollSuggestions": "...", "onScreenText": "...", "transitionTip": "..." } ], "proCreatorTips": ["...", "..."] }';
                break;
            case 'video-audit-tool':
                systemPrompt = "You are a master YouTube SEO Auditor and Growth Strategist. Based on the video metadata provided (YouTube URL, Title, Description, Tags, Channel/Author name), perform an exhaustive, expert YouTube Video Audit. Evaluate Title, Description, Tags, and Thumbnail visual potential. Calculate an Overall Optimization Score (1-100), assign a score grade ('A+', 'A', 'B', 'C', 'Needs Work'), deliver detailed section audits with actionable feedback, provide factor-wise thumbnail visual ratings (colorContrast, mobileReadability, focalPoint, curiosityGap), provide 5 ranked priority action items, suggest 3 optimized title alternatives, and write a high-converting first 3 lines for the video description.";
                jsonStructure = '{ "overallScore": 84, "scoreGrade": "A-", "scoreSummary": "...", "extractedVideoInfo": { "title": "...", "authorName": "...", "thumbnailUrl": "..." }, "titleAnalysis": { "score": 88, "charCount": 54, "lengthStatus": "Optimal (45-70 chars)", "ctrPsychologyGrade": "A", "ctrPsychologyFeedback": "...", "keywordsFound": ["...", "..."], "suggestions": ["...", "..."] }, "descriptionAnalysis": { "score": 65, "aboveTheFoldHookScore": "Good", "aboveTheFoldFeedback": "...", "hasLinks": true, "hasTimestamps": false, "hasCTA": true, "keywordDensityFeedback": "...", "suggestions": ["...", "..."] }, "tagAnalysis": { "score": 72, "tagCountStatus": "Good", "feedback": "...", "missingKeywordOpportunities": ["...", "...", "..."] }, "thumbnailAssessment": { "score": 82, "factors": { "colorContrast": { "score": 85, "label": "Color & Contrast", "feedback": "Strong contrast against YouTube dark mode." }, "mobileReadability": { "score": 90, "label": "Mobile Text Readability", "feedback": "Large, legible font on mobile screens." }, "focalPoint": { "score": 75, "label": "Focal Point & Subject Clarity", "feedback": "Main subject is clear but could be slightly larger." }, "curiosityGap": { "score": 80, "label": "Curiosity & Visual Pop", "feedback": "Good visual intrigue." } }, "contrastFeedback": "...", "textOverlayFeedback": "...", "mobileReadability": "High", "visualSuggestions": ["...", "..."] }, "priorityActionItems": [ { "rank": 1, "title": "...", "action": "..." }, { "rank": 2, "title": "...", "action": "..." }, { "rank": 3, "title": "...", "action": "..." }, { "rank": 4, "title": "...", "action": "..." }, { "rank": 5, "title": "...", "action": "..." } ], "optimizedTitleAlternatives": ["...", "...", "..."], "optimizedDescriptionSnippet": "..." }';
                break;
            case 'thumbnail-battlefield':
                systemPrompt = "You are a world-class YouTube Packaging Specialist, CTR Strategist, and Visual Design Auditor. Analyze the user's thumbnail image (or visual description), video title, target keyword, and market niche. Simulate a YouTube search shelf & recommendation feed comparing the user's thumbnail packaging against top ranking competitors. Provide a comprehensive Thumbnail Battlefield analysis including overall Packaging Score (1-100), estimated CTR position percentile, factor-wise battle scores (You vs Competitor Avg), Title-Thumbnail Synergy (Clarity, Curiosity, Redundancy, Promise Consistency), Visual Differentiation Score, Search Shelf Competitors mockup data, surface readiness ratings (Search, Home, Suggested, Mobile), 3 actionable 'Beat Competitor #1' visual fixes, 3 high-converting A/B title-thumbnail variations, and a final Publish Readiness Score (1-100) with decision verdict.";
                jsonStructure = '{ "packagingScore": 84, "scoreGrade": "Strong Package", "ctrPositionPercentile": "Top 25% of Comparable Thumbnails", "estimatedCtrRange": "5.4% – 7.8%", "publishReadinessScore": 86, "publishVerdict": "READY TO PUBLISH", "verdictSummary": "...", "battleAnalysis": { "userScore": 84, "competitorAverage": 74, "topCompetitorScore": 89, "biggestWeakness": "...", "biggestAdvantage": "...", "factors": [ { "name": "Visual Clarity", "userScore": 88, "competitorAvg": 76, "status": "Strong" }, { "name": "Mobile Readability", "userScore": 92, "competitorAvg": 72, "status": "Winning" }, { "name": "Emotional Trigger", "userScore": 75, "competitorAvg": 81, "status": "Below Avg" }, { "name": "Contrast & Saturation", "userScore": 84, "competitorAvg": 78, "status": "Strong" }, { "name": "Curiosity Gap", "userScore": 78, "competitorAvg": 85, "status": "Below Avg" }, { "name": "Topic Clarity", "userScore": 94, "competitorAvg": 86, "status": "Winning" }, { "name": "Differentiation", "userScore": 62, "competitorAvg": 75, "status": "Needs Work" } ] }, "titleThumbnailSynergy": { "clarityScore": 92, "curiosityScore": 74, "redundancyLevel": "Moderate", "redundancyFeedback": "...", "titleRole": "...", "thumbnailRole": "...", "suggestedThumbnailText": "...", "suggestedTitleRefinement": "..." }, "searchShelfSimulation": { "keyword": "...", "visualSaturationWarning": "...", "differentiationOpportunity": "...", "competitors": [ { "rank": 1, "title": "...", "channelName": "...", "views": "4.2M views", "age": "8 months ago", "thumbnailText": "...", "strength": "..." }, { "rank": 2, "title": "...", "channelName": "...", "views": "1.8M views", "age": "1 year ago", "thumbnailText": "...", "strength": "..." }, { "rank": 3, "title": "...", "channelName": "...", "views": "950K views", "age": "4 months ago", "thumbnailText": "...", "strength": "..." } ] }, "surfaceReadiness": { "search": { "score": 88, "verdict": "High Intent Match" }, "homeFeed": { "score": 72, "verdict": "Needs Stronger Hook" }, "suggested": { "score": 79, "verdict": "Good Follow-Up Appeal" }, "mobileSearch": { "score": 90, "verdict": "Excellent Phone Readability" } }, "beatCompetitorFixes": [ { "title": "...", "fix": "..." }, { "title": "...", "fix": "..." }, { "title": "...", "fix": "..." } ], "aBTestVariations": [ { "name": "...", "thumbnailText": "...", "visualConcept": "...", "predictedPackagingScore": 91, "ctrPotential": "Very High" }, { "name": "...", "thumbnailText": "...", "visualConcept": "...", "predictedPackagingScore": 86, "ctrPotential": "High" }, { "name": "...", "thumbnailText": "...", "visualConcept": "...", "predictedPackagingScore": 82, "ctrPotential": "Good" } ] }';
                break;
            default:
                return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
        }

        const completion = await openai.chat.completions.create({
            model: 'deepseek-chat',
            messages: [
                { role: 'system', content: `${systemPrompt}\n\nYou must return your response as a JSON object matching this structure exactly:\n${jsonStructure}` },
                { role: 'user', content: userPrompt }
            ],
            response_format: { type: 'json_object' }
        });

        const resultContent = completion.choices[0].message.content;
        if (!resultContent) {
            throw new Error("No content generated");
        }

        const parsedResult = JSON.parse(resultContent);

        return NextResponse.json({ data: parsedResult });

    } catch (error) {
        console.error('DeepSeek API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
