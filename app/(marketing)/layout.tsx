import { MarketingLayoutComp } from "@/components/layouts/marketing-layout";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full flex justify-start items-start">
            <MarketingLayoutComp>
                {children}
            </MarketingLayoutComp>
        </div>
    )
}

export default MarketingLayout;