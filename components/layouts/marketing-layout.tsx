'use client';

import { Footer } from "@/components/footer/footer";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Header } from "@/components/sidebar/header";

export const MarketingLayoutComp = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Sidebar />
            <main className="h-screen flex-grow flex-1 w-full pb-4 max-h-screen">
                <div className="w-full h-fit flex flex-col">
                    <Header />
                </div>
                <div className="overflow-y-auto flex-1 w-full px-4 py-2 pb-4" style={{ maxHeight: "calc(100vh - 50px)" }}>
                    <div className="w-full flex max-w-screen-xl mx-auto h-full">
                        {children}
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
};