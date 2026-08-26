'use client';

import { useEffect } from "react";

import { AdsCardProps } from "@/types/props";
import AdWrapper from "@/components/adsense/ad-wrapper";

const HorizontalAds = ({
    dataAdSlot = '6386138501',
    dataAdFormat = 'auto',
    dataFullWidthResponsive = true,
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
                style={{ display: 'block', height: "80px" }}
                data-ad-client="ca-pub-6836038769698904"
                data-ad-slot={dataAdSlot}
                data-ad-format={dataAdFormat}
                data-full-width-responsive={dataFullWidthResponsive.toString()}
            >
            </ins>
        </AdWrapper>
    )
}

export default HorizontalAds