'use client';

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/custom-tooltip"

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center gap-2 pt-6">
            <div className="w-full max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-sm font-normal text-secondary-foreground dark:text-gray-400">
                    ©&nbsp;
                    {new Date().getFullYear()}&nbsp;
                    <Link href="/" className="text-primary hover:underline">TubeTool.</Link>&nbsp;
                    All rights reserved.
                </p>

                <div className="flex items-center gap-0.5">
                    <Tooltip content="YouTube">
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            <Link
                                href="https://www.youtube.com/channel/UCWqfBWBcED5Mud0LwsXqY0Q"
                                target="_blank"
                                className="text-gray-700 dark:text-gray-400"
                            >
                                <Youtube className="w-4 h-4" />
                            </Link>
                        </Button>
                    </Tooltip>
                    <Tooltip content="Twitter/x">
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            <Link
                                href="https://twitter.com/tubetool_ai"
                                target="_blank"
                                className="text-gray-700 dark:text-gray-400"
                            >
                                <Twitter className="w-4 h-4" />
                            </Link>
                        </Button>
                    </Tooltip>
                    <Tooltip content="Facebook">
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            <Link
                                href="https://www.facebook.com/profile.php?id=61554312312701"
                                target="_blank"
                                className="text-gray-700 dark:text-gray-400"
                            >
                                <Facebook className="w-4 h-4" />
                            </Link>
                        </Button>
                    </Tooltip>
                    <Tooltip content="Instagram">
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            <Link
                                href="https://instagram.com/tubetool.ai?igshid=OGQ5ZDc2ODk2ZA=="
                                target="_blank"
                                className="text-gray-700 dark:text-gray-400"
                            >
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </footer>
    )
}