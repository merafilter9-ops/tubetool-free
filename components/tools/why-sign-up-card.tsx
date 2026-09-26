'use client';

import Link from "next/link";
import { ArrowRight, WandSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCurrentUser } from "@/hooks/use-current-user";

const WhySignUpCard = () => {

    const user = useCurrentUser();

    if (user) return null;

    return (
        <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-xl blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200">
            </div>
            <div className="relative flex items-center rounded-xl justify-center bg-background">
                <div className="w-full flex flex-col space-y-1.5 shadow dark:shadow-xl bg-background rounded-md p-3 border">
                    <WandSparkles className="w-4 h-4 text-gray-700 dark:text-gray-500" />

                    <div className="w-full text-lg font-semibold">
                        More features? Sign up for free!
                    </div>

                    <p className="w-full text-sm font-normal mt-0 text-gray-500 dark:text-gray-400">
                        Want to access more free features and tools on TubeTool? Sign up for free and get access your own AI powered dashboard.
                    </p>

                    <Link href="/tools/title-generator">
                        <Button className="w-full">
                            <span>Sign up</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

    )
};

export default WhySignUpCard;