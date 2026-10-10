'use client'

import Link from "next/link"
import Image from "next/image"
import {
    ChevronRight,
    Home,
    PanelLeft,
    Heart,
    Sparkles,
} from "lucide-react"
import { usePathname } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip } from "@/components/custom-tooltip"

import { cn } from "@/lib/utils"
import { SIDEBAR_ITEMS } from "@/constants/sidebar"
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux"
import { setIsSidebarOpen } from "@/store/user/preferenceSlice"

export const Sidebar = () => {

    const pathname = usePathname();
    const dispatch = useAppDispatch();

    const { isSidebarOpen } = useAppSelector(state => state.preference);

    return (
        <aside className={cn(
            "min-h-screen h-full relative bg-background hidden lg:block z-[49]",
            isSidebarOpen ? "w-[256px]" : "w-[70px]"
        )}
        >
            <div className={cn(
                "w-[256px] h-full flex flex-col overflow-y-auto overflow-x-hidden fixed inset-y-0 left-0 border-r bg-background",
                isSidebarOpen ? "w-[256px]" : "w-[70px]"
            )}
            >

                <div className={cn(
                    "w-[256px] fixed top-0 left-0 h-fit px-3 py-2 border-b flex items-center justify-center bg-background border-r",
                    isSidebarOpen ? "w-[256px]" : "w-[70px]"
                )}
                >
                    <div className={cn(
                        "w-full flex items-center space-x-2 relative bg-background",
                        isSidebarOpen ? "justify-between" : "justify-center"
                    )}>
                        <div className="flex items-center">
                            <Image
                                src="/brand/logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className={cn("w-8 h-8", isSidebarOpen ? "mr-2" : "mr-0")}
                            />
                            <h1 className={cn("text-lg font-bold tracking-normal", !isSidebarOpen && "hidden")}>
                                Tubetool
                            </h1>
                        </div>
                        <Tooltip content="Toggle sidebar" side="left">
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn("w-8 h-8 p-1", !isSidebarOpen && "hidden")}
                                onClick={() => dispatch(setIsSidebarOpen(false))}
                            >
                                <PanelLeft className="w-5 h-5" />
                                <span className="sr-only">Toggle sidebar</span>
                            </Button>
                        </Tooltip>

                        {
                            !isSidebarOpen && (
                                <Tooltip content="Toggle sidebar" side="right" sideOffset={0}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-5 h-5 bg-primary/80 p-0.5 rounded-full absolute -right-6 top-2 hover:bg-primary"
                                        onClick={() => dispatch(setIsSidebarOpen(true))}
                                    >
                                        <ChevronRight className="w-5 h-5 text-primary-foreground" />
                                        <span className="sr-only">Toggle sidebar</span>
                                    </Button>
                                </Tooltip>
                            )
                        }
                    </div>
                </div>

                <div className="w-full flex flex-col space-y-2 px-3 py-2 pt-12 pb-6">

                    <div className="mt-2 w-full">
                        <Tooltip content="Home" side="right">
                            <Link href="/" className="w-full">
                                <Button
                                    variant="ghost"
                                    size={isSidebarOpen ? "default" : "icon"}
                                    className={cn(
                                        "justify-start w-full",
                                        pathname === "/" && "bg-primary text-primary-foreground",
                                        !isSidebarOpen && "justify-center"
                                    )}
                                >
                                    <Home className="w-4 h-4" />
                                    <span className={cn("ml-2", !isSidebarOpen && "hidden")}>
                                        Home
                                    </span>
                                </Button>
                            </Link>
                        </Tooltip>
                    </div>

                    {
                        SIDEBAR_ITEMS.map((category, index) => (
                            <div className="flex flex-col space-y-2" key={category.category + index}>
                                <div className="w-full flex items-center gap-4 text-sm font-semibold text-gray-500 overflow-x-hidden">
                                    <h2 className={cn("w-fit text-nowrap", !isSidebarOpen && 'hidden')}>{category.category}</h2>
                                    <Separator className="mt-0.5" />
                                </div>
                                <div className="flex flex-col space-y-0.5">
                                    {
                                        category.items.map((item, index) => (
                                            <Tooltip content={item.tooltip} side="right" key={item.label + index}>
                                                <Link href={item.href} className="w-full">
                                                    <Button
                                                        variant="ghost"
                                                        size={isSidebarOpen ? "default" : "icon"}
                                                        className={cn(
                                                            "justify-start w-full",
                                                            pathname.includes(item.href) && "bg-primary text-primary-foreground",
                                                            !isSidebarOpen && "justify-center"
                                                        )}
                                                    >
                                                        <item.icon className="w-4 h-4 shrink-0" />
                                                        <span className={cn("ml-2 flex-1 text-left truncate", !isSidebarOpen && "hidden")}>
                                                            {item.label?.length > 23 ? item.label.slice(0, 23) + '...' : item.label}
                                                        </span>
                                                        {item.badge && isSidebarOpen && (
                                                            <span className="ml-auto px-1.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-rose-600 text-white shadow-sm">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </Button>
                                                </Link>
                                            </Tooltip>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                    {isSidebarOpen ? (
                        <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-br from-rose-500/10 via-red-500/5 to-amber-500/10 border border-rose-500/20 text-xs flex flex-col gap-2">
                            <div className="flex items-center gap-1.5 font-bold text-rose-600 dark:text-rose-400">
                                <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
                                <span>Support TubeTool</span>
                            </div>
                            <p className="text-muted-foreground text-[11px] leading-relaxed">
                                100% free tools for creators. Help us keep server infrastructure free forever!
                            </p>
                            <Link href="/our-mission" className="w-full">
                                <Button size="sm" className="w-full h-8 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-sm gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5" /> Our Mission
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Tooltip content="Support Our Mission" side="right">
                            <Link href="/our-mission" className="w-full flex justify-center mt-2">
                                <Button size="icon" variant="ghost" className="w-9 h-9 text-rose-500 hover:bg-rose-500/10">
                                    <Heart className="w-5 h-5 fill-rose-500" />
                                </Button>
                            </Link>
                        </Tooltip>
                    )}

                    <div className="mt-2 w-full">
                        <div className="w-full flex items-center gap-2 justify-between text-xs font-normal">
                            <p className="text-gray-500 dark:text-gray-600">v1.0.0</p>
                        </div>
                    </div>

                </div>

            </div>
        </aside>
    )
}