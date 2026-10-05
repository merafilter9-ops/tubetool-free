import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import ProgressBarProvider from '@/components/progress-bar-provider';
import StoreProvider from './StoreProvider';


export const metadata: Metadata = {
  metadataBase: new URL('https://www.tubetool.ai'),
  title: {
    default: "TubeTool - All-in-One Toolkit for YouTube Channel Growth",
    template: "%s | TubeTool.ai"
  },
  description: "Want to grow on YouTube? TubeTool provides free tools that simplify keyword research, video optimization, and more. Start growing for free",
  keywords: ["Tubetool.ai", "Tubetool", "Free YouTube Growth Tools", "YouTube SEO tools"],
  alternates: {
    canonical: 'https://www.tubetool.ai',
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        href: "/brand/logo.png",
        url: "/brand/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        href: "/brand/logo.png",
        url: "/brand/logo.png",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836038769698904"
          crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${GeistSans.className} antialiased`}
        suppressHydrationWarning
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="tubetool-theme"
          >
            <ProgressBarProvider>
              {children}
            </ProgressBarProvider>
          </ThemeProvider>
          <ShadcnToaster />
          <Toaster
            // expand
            closeButton
            visibleToasts={3}
            position="top-right"
            offset={16}
            richColors
            toastOptions={{
              style: {
                padding: '12px 16px'
              }
            }}
          />
        </StoreProvider>
      </body>
      <GoogleAnalytics gaId="G-NDLK7LQVYF" />
    </html>
  );
}