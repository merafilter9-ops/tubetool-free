'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section className="mt-16 flex justify-center">
            <div className="w-full max-w-6xl mb-2">
                <h3 className="text-2xl font-bold bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark mb-2 w-full text-center">
                    Frequently Asked Questions
                </h3>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. Is TubeTool free?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                Yes, all our tools are free to grow your YouTube channel. We also offer premium features for advanced users.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. Do I need to create an account to use TubeTool?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                Nothing. Just start using our tools.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. Can I use TubeTool on any niche?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                Yes, Our tools are for creators of all niches.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. How often should I use the tools?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                We recommend using them every time you plan new content or optimize an existing video.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. Who can I contact if I have questions on how to use them?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                Well, we have help on each tool and a support team that’s always here for you.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. Can I trust TubeTool insights?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                Yes, Our tools are driven by real-time data and advanced algorithms for accurate and relevant results.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>7. Am I limited in any way to use the tools?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                None, You can use our tools as many times as you want to grow as much as you can.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>8. How do I give you feedback or suggestions?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 text-balance">
                            <p>
                                Thanks, Any feedback or suggestions you have can be sent through the contact page.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}