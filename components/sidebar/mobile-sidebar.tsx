'use client';

import Image from "next/image";
import Link from "next/link";
import { Home, Menu, Heart, Sparkles } from "lucide-react";
import { usePathname } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils";
import { SIDEBAR_ITEMS } from "@/constants/sidebar";

const MobileSidebar = () => {

    const pathname = usePathname();

    return (
        <div className="flex items-center gap-2 lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8"
                    >
                        <Menu className="w-6 h-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pl-3 py-2 pr-0">
                    <div className="flex flex-col max-h-full overflow-y-auto pr-3">
                        <div className="flex items-center">
                            <Image
                                src="/brand/logo.png"
                                alt="Logo"
                                width={30}
                                height={30}
                                className="w-8 h-8 mr-2"
                            />
                            <h1 className="text-lg font-bold tracking-normal">
                                Tubetool
                            </h1>
                        </div>
                        <div className="w-full flex flex-col gap-2 pr-1 pt-4 pb-6">

                            <div className="w-full">
                                <Link href="/" className="w-full">
                                    <SheetClose asChild>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "justify-start w-full",
                                                pathname === "/" && "bg-primary text-primary-foreground",
                                            )}
                                        >
                                            <Home className="w-4 h-4" />
                                            <span className="ml-2">
                                                Home
                                            </span>
                                        </Button>
                                    </SheetClose>
                                </Link>
                            </div>

                            {
                                SIDEBAR_ITEMS.map((category, index) => (
                                    <div className="flex flex-col space-y-2" key={category.category + index}>
                                        <div className="w-full flex items-center gap-4 text-sm font-semibold text-gray-500 overflow-x-hidden">
                                            <h2 className="w-fit text-nowrap">{category.category}</h2>
                                            <Separator className="mt-0.5" />
                                        </div>
                                        <div className="flex flex-col space-y-0.5">
                                            {
                                                category.items.map((item, index) => (
                                                    <Link href={item.href} className="w-full" key={item.label + index}>
                                                        <SheetClose asChild>
                                                            <Button
                                                                variant="ghost"
                                                                className={cn(
                                                                    "justify-start w-full",
                                                                    pathname === item.href && "bg-primary text-primary-foreground"
                                                                )}
                                                            >
                                                                <item.icon className="w-4 h-4 shrink-0" />
                                                                <span className="ml-2 flex-1 text-left">
                                                                    {item.label}
                                                                </span>
                                                                {item.badge && (
                                                                    <span className="ml-auto px-1.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-rose-600 text-white shadow-sm">
                                                                        {item.badge}
                                                                    </span>
                                                                )}
                                                            </Button>
                                                        </SheetClose>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-br from-rose-500/10 via-red-500/5 to-amber-500/10 border border-rose-500/20 text-xs flex flex-col gap-2">
                                <div className="flex items-center gap-1.5 font-bold text-rose-600 dark:text-rose-400">
                                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
                                    <span>Support TubeTool</span>
                                </div>
                                <p className="text-muted-foreground text-[11px] leading-relaxed">
                                    100% free tools for creators. Help us keep server infrastructure free forever!
                                </p>
                                <Link href="/our-mission" className="w-full">
                                    <SheetClose asChild>
                                        <Button size="sm" className="w-full h-8 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-sm gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5" /> Our Mission
                                        </Button>
                                    </SheetClose>
                                </Link>
                            </div>

                            <div className="mt-2 w-full">
                                <div className="w-full flex items-center gap-2 justify-between text-xs font-normal">
                                    <p className="text-gray-500 dark:text-gray-600">v1.0.0</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            <div className="flex items-center">
                <Image
                    src="/brand/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 mr-2"
                />
                <h1 className="text-lg font-bold tracking-normal">
                    Tubetool
                </h1>
            </div>
        </div>

    )
}

export default MobileSidebar;