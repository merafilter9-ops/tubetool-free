import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { ContactUsForm } from "@/components/contact-us-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact us | TubeTool",
    description: "Boost your YouTube channel growth with TubeTool. Our innovative tools provide youtube creators everything they need to optimize videos, write catchy titles & descriptions, analyze audience engagement, and find creative content ideas - all in one place.",
}

const ContactUsPage = () => {
    return (
        <div className="w-full flex flex-col flex-wrap h-full gap-5">
            <h1 className="text-2xl w-full font-bold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-white">
                Contact Us
            </h1>

            <div className="w-full flex flex-col gap-3">
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Have a question about Tubetool.ai? We&apos;re at your service! If you stumble upon any errors or glitches while exploring our site, please let us know, so we can promptly address them and enhance your experience along with that of our other valued users.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    We deeply appreciate your feedback and ideas. If you have any suggestions to improve our website structure or wish to request a new feature, share your thoughts with us. Our team is dedicated to reviewing your messages and will respond as soon as possible.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    For business inquiries or paid promotions, please reach out to us at:&nbsp;<Link href="mailto:contact@tubetool.ai" className="underline text-primary">contact@tubetool.ai</Link>. We&apos;re eager to hear from you!
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Your input is invaluable in helping us make Tubetool.ai the best it can be. Thank you for your support! 🚀
                </p>
            </div>

            <h1 className="text-2xl w-full font-bold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-white">
                Send us a message
            </h1>

            <ContactUsForm />


            <div className="w-full flex justify-center items-center relative">
                <div className="w-full md:w-2/3 flex items-center">
                    <Separator className="w-full" />
                </div>
                <p className="absolute top-1/2 left-1/2 mt-0 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs font-normal">
                    OR
                </p>
            </div>

            <div className="w-full flex items-center flex-col gap-3">
                <div className="w-full md:w-2/3 flex flex-col gap-3">
                    <p className="text-left font-medium text-base text-secondary-foreground dark:text-gray-400">
                        Scan The QR Code:
                    </p>
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src="/QR.png"
                            alt="QR Code"
                            width={160}
                            height={160}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center relative">
                <div className="w-full md:w-2/3 flex items-center">
                    <Separator className="w-full" />
                </div>
                <p className="absolute top-1/2 left-1/2 mt-0 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs font-normal">
                    OR
                </p>
            </div>

            <div className="w-full flex items-center flex-col gap-3">
                <div className="w-full md:w-2/3 flex flex-col gap-3">
                    <p className="text-left font-medium text-base text-secondary-foreground dark:text-gray-400">
                        Reach out to us on our physical address:
                    </p>
                    <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        T-14/0201, kundli, Sonepat, Haryana, 131028, India
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ContactUsPage;