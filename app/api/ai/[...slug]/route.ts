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
                systemPrompt = "You are an expert YouTube tag generator. Generate 20 highly relevant SEO tags based on the user's input.";
                jsonStructure = '{ "tags": ["tag1", "tag2", "..."] }';
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
                systemPrompt = "You are an expert YouTube SEO specialist. Generate keyword research data based on the user's input. Provide the exact keyword stats and a list of related keywords. Use realistic numbers for monthlysearch (e.g. 50000), competition_score (0-100), difficulty (Low/Medium/High), and overallscore (0-100).";
                jsonStructure = '{ "exact_keyword": [{ "keyword": "...", "monthlysearch": 50000, "competition_score": 45, "difficulty": "Medium", "overallscore": 75 }], "related_keywords": [{ "keyword": "...", "monthlysearch": 10000, "competition_score": 20, "difficulty": "Low", "overallscore": 85 }] }';
                break;
            case 'thumbnail-quality':
                systemPrompt = "You are an expert YouTube thumbnail analyzer. Evaluate the thumbnail concept or details provided and give a score (0-100), feedback, and specific suggestions.";
                jsonStructure = '{ "score": 85, "feedback": "...", "suggestions": ["..."], "factors": { "aspect_ratio_core": 1, "brand_identity_score": 1, "color_palette": 1, "font_size_score": 1, "nsfw_score": 1, "sentiment_score": 1, "similarity_score": 1, "white_space_score": 1 } }';
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
