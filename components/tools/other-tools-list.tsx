'use client';

import { TOOLS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const OtherToolsList = () => {

    const pathname = usePathname();

    return (
        <div className="w-full flex flex-col space-y-1.5">
            <p className="text-base font-semibold">Other Tools</p>
            <div className="w-full flex flex-col space-y-1">
                {
                    TOOLS.filter(tool => tool.value !== pathname.split("/")[2]).map(tool => (
                        <Link
                            href={tool.value}
                            key={tool.value}
                            className="w-full h-fit flex flex-col space-y-0.5 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                        >
                            <p className="text-sm text-primary flex items-center gap-2">
                                <tool.icon className="w-4 h-4" />
                                <span className="truncate">{tool.label}</span>
                            </p>
                            <span className="text-xs dark:text-gray-400 text-gray-600 line-clamp-1 pl-6">{tool.description}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default OtherToolsList;