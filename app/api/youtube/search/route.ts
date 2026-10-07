import { NextResponse } from 'next/server';

export interface YouTubeCompetitorVideo {
    videoId: string;
    title: string;
    channelName: string;
    views: string;
    publishedTime: string;
    thumbnailUrl: string;
}

export async function POST(req: Request) {
    try {
        const { keyword } = await req.json();
        if (!keyword || typeof keyword !== 'string') {
            return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
        }

        const videos = await fetchYouTubeCompetitors(keyword);
        return NextResponse.json({ videos });
    } catch (error: any) {
        console.error('YouTube search error:', error);
        return NextResponse.json({ error: error.message || 'Failed to fetch YouTube search results', videos: [] }, { status: 500 });
    }
}

async function fetchYouTubeCompetitors(keyword: string): Promise<YouTubeCompetitorVideo[]> {
    try {
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`;
        const res = await fetch(searchUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
            },
            next: { revalidate: 3600 } // cache for 1 hour
        });

        if (!res.ok) {
            throw new Error(`YouTube responded with status ${res.status}`);
        }

        const html = await res.text();
        const match = html.match(/var ytInitialData = (\{.*?\});<\/script>/);

        if (!match) {
            return [];
        }

        const data = JSON.parse(match[1]);
        const contents = data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer?.contents || [];

        const videos: YouTubeCompetitorVideo[] = [];

        for (const item of contents) {
            if (item.videoRenderer) {
                const v = item.videoRenderer;
                const videoId = v.videoId;
                if (!videoId) continue;

                const title = v.title?.runs?.[0]?.text || v.title?.simpleText || 'YouTube Video';
                const channelName = v.ownerText?.runs?.[0]?.text || v.shortBylineText?.runs?.[0]?.text || 'YouTube Creator';
                const views = v.shortViewCountText?.simpleText || v.viewCountText?.simpleText || '100K views';
                const publishedTime = v.publishedTimeText?.simpleText || 'Recently';

                videos.push({
                    videoId,
                    title,
                    channelName,
                    views,
                    publishedTime,
                    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                });

                if (videos.length >= 6) break;
            }
        }

        return videos;
    } catch (err) {
        console.error('Scraping YouTube failed:', err);
        return [];
    }
}
