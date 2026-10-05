'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";

export default function Faq() {
    return (
        <section className="mt-16 flex justify-center">
            <div className="w-full max-w-6xl mb-2">
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                        <Sparkles className="w-3.5 h-3.5" /> 100% Free Creator Suite
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2 w-full text-center">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                        Everything you need to know about TubeTool, our free tools, and our mission to keep creator software accessible to everyone.
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-3"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            1. Is TubeTool really 100% free forever?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                <strong>Yes, absolutely!</strong> Every tool on TubeTool — from Title Generators and Tag Optimizers to our upcoming Video Workspace, Channel Auditor, and Advanced Analytics — is 100% free forever. There are no hidden paywalls, no monthly subscription fees, and no trial limits.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            2. How does TubeTool stay free without subscriptions or ads?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                TubeTool is built by creators, for creators, and is 100% community-funded. If our tools help your YouTube channel grow, you can optionally support our server and AI compute costs by buying us a coffee on our{' '}
                                <Link href="/our-mission" className="text-rose-500 hover:underline font-medium inline-flex items-center gap-1">
                                    <Heart className="w-3.5 h-3.5 fill-rose-500" /> Our Mission
                                </Link>{' '}
                                page.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            3. Do I need an account or credit card to use TubeTool?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                <strong>No account needed!</strong> You can start using all features immediately without logging in, signing up, or entering any credit card information.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            4. What tools are included in the TubeTool Creator Suite?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                TubeTool includes Video Title Generators, Tag & Hashtag Generators, Description Generators, GO/NO-GO Topic Predictors, Thumbnail Quality Checkers, as well as upcoming suites like Video Production Workspace (Calendar & Project Tracker), Channel Auditor & Feedback Tool, Advanced Analytics, and Credibility Trackers.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            5. Can I use TubeTool for any YouTube niche?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                Yes! TubeTool works seamlessly across all niches — gaming, tech, finance, education, vlogs, comedy, shorts, and enterprise channels.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            6. Are there any usage limits or daily caps?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                None! You can use our tools as many times as you like to optimize your content, generate fresh ideas, and scale your YouTube channel.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            7. How can I support the TubeTool mission?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                You can support us by sharing TubeTool with fellow YouTube creators, giving us feedback, or contributing directly to our infrastructure server fund on our{' '}
                                <Link href="/our-mission" className="text-red-500 font-semibold hover:underline">
                                    Support & Mission page
                                </Link>.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8" className="border border-border/60 rounded-xl px-4 bg-card/50">
                        <AccordionTrigger className="text-base font-semibold text-left">
                            8. How do I request a new feature or report a bug?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            <p>
                                We build features based on creator feedback! You can submit suggestions or report bugs anytime through our{' '}
                                <Link href="/contact-us" className="text-primary font-semibold hover:underline">
                                    Contact Us
                                </Link>{' '}
                                page.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}