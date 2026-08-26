import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const OtherToolsList = dynamic(
    () => import("@/components/tools/other-tools-list"),
    { loading: () => <Skeleton className="w-full h-20 min-h-20 mb-2" /> }
);

const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full flex flex-col md:flex-row justify-start items-start">
            <div className="w-full h-full flex flex-col md:grid md:grid-cols-[1fr_320px] relative">
                {children}

                <div className="w-full md:w-80 md:border-l md:border-l-gray-200 md:p-2 pr-0 h-full">
                    <aside className="w-full h-fit md:sticky md:top-0">
                        <div className="w-full space-y-3 no-scrollbar max-md:flex max-md:flex-col h-fit overflow-auto pb-10">
                            <OtherToolsList />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default ToolsLayout;