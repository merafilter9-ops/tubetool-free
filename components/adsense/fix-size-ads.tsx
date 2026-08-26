'use client';

import { useEffect } from "react";

import { AdsCardProps } from "@/types/props";
import AdWrapper from "@/components/adsense/ad-wrapper";

const FixSizeAds = ({
    dataAdSlot = '8764093673',
    width = "728px",
    height = "90px",
}: AdsCardProps) => {

    useEffect(() => {
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
        } catch (err: any) {
            console.error(err.message)
        }
    }, [])

    return (
        <AdWrapper>
            <ins className="adsbygoogle"
                style={{ display: 'inline-block', width, height }}
                data-ad-client="ca-pub-6836038769698904"
                data-ad-slot={dataAdSlot}
            >
            </ins>
        </AdWrapper>
    )
}

export default FixSizeAds