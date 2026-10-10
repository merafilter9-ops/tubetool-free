import {
    Type,
    Text,
    Tag,
    Hash,
    BookImage,
    Lightbulb,
    FileSearch,
    Info,
    Phone,
    ShieldCheck,
    Handshake,
    ImageUp,
    Heart,
    Sparkles,
    Split,
    ListTree,
    SearchCheck,
    Swords,
    Target,
} from 'lucide-react';

import { SidebarItems } from '@/types/constants';

export const SIDEBAR_ITEMS: SidebarItems[] = [
    {
        category: 'Video Tools',
        items: [
            {
                label: 'Title Ace',
                href: '/tools/title-ace',
                icon: Target,
                tooltip: 'Title Ace — Competitor Title Intelligence',
                badge: 'New'
            },
            {
                label: 'Title Generator',
                href: '/tools/title-generator',
                icon: Type,
                tooltip: 'Title Generator'
            },
            {
                label: 'A/B Title Tester',
                href: '/tools/title-ab-tester',
                icon: Split,
                tooltip: 'A/B Title Tester'
            },
            {
                label: 'Description Generator',
                href: '/tools/description-generator',
                icon: Text,
                tooltip: 'Description Generator'
            },
            {
                label: 'Script Hook Generator',
                href: '/tools/script-hook-generator',
                icon: Sparkles,
                tooltip: 'Script Hook Generator'
            },
            {
                label: 'Video Outline Builder',
                href: '/tools/video-outline-builder',
                icon: ListTree,
                tooltip: 'Video Outline Builder'
            },
            {
                label: 'Video Audit Tool',
                href: '/tools/video-audit-tool',
                icon: SearchCheck,
                tooltip: 'Video Audit Tool'
            },
            {
                label: 'Tag Generator',
                href: '/tools/tag-generator',
                icon: Tag,
                tooltip: 'Tag Generator'
            },
            {
                label: 'Hashtag Generator',
                href: '/tools/hashtag-generator',
                icon: Hash,
                tooltip: 'Hashtag Generator'
            }
        ]
    },
    {
        category: 'Thumbnail Tools',
        items: [
            {
                label: 'Thumbnail Battlefield',
                href: '/tools/thumbnail-battlefield',
                icon: Swords,
                tooltip: 'Thumbnail Battlefield'
            },
            {
                label: 'Thumbnail Generator',
                href: '/tools/thumbnail-generator',
                icon: BookImage,
                tooltip: 'Thumbnail Generator'
            },
            {
                label: 'Thumbnail Quality Checker',
                href: '/tools/thumbnail-quality-checker',
                icon: ImageUp,
                tooltip: 'Thumbnail Quality Checker'
            }
        ]
    },
    {
        category: 'Keyword Tools',
        items: [
            {
                label: 'GO / NO-GO Predictor',
                href: '/tools/go-no-go-predictor',
                icon: FileSearch,
                tooltip: 'GO / NO-GO Predictor'
            },
            {
                label: 'Topic Ideas',
                href: '/tools/topic-ideas',
                icon: Lightbulb,
                tooltip: 'Topic Ideas'
            },
            {
                label: 'Keyword Research',
                href: '/tools/keyword-research',
                icon: FileSearch,
                tooltip: 'Keyword Research'
            }
        ]
    },
    {
        category: 'About Tubetool',
        items: [
            {
                label: 'Our Mission',
                href: '/our-mission',
                icon: Heart,
                tooltip: 'Our Mission & Support'
            },
            {
                label: 'About Us',
                href: '/about-us',
                icon: Info,
                tooltip: 'About Us'
            },
            {
                label: 'Contact Us',
                href: '/contact-us',
                icon: Phone,
                tooltip: 'Contact Us'
            },
            {
                label: 'Privacy Policy',
                href: '/privacy-policy',
                icon: ShieldCheck,
                tooltip: 'Privacy Policy'
            },
            {
                label: 'Terms & Conditions',
                href: '/terms-and-conditions',
                icon: Handshake,
                tooltip: 'Terms & Conditions'
            }
        ]
    }
];