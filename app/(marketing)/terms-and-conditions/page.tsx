import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms and Conditions | TubeTool",
    description: "Boost your YouTube channel growth with TubeTool. Our innovative tools provide youtube creators everything they need to optimize videos, write catchy titles & descriptions, analyze audience engagement, and find creative content ideas - all in one place.",
}

const TermAndConditionPage = () => {
    return (
        <div className="w-full flex flex-col flex-wrap h-full gap-5">
            <h1 className="text-2xl font-bold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-white">
                Terms and Conditions
            </h1>

            <div className="w-full flex flex-col">
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Welcome to TubeTool. By accessing or using our website, located at&nbsp;<Link href="https://tubetool.ai" className="underline text-primary">https://tubetool.ai</Link>, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any of these terms, please do not use our website or services.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    1. Use of Our Service
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool provides a collection of free tools designed to support YouTube content creators in optimizing their content. By using our service, you agree to use it solely for personal and non-commercial purposes, unless otherwise authorized by TubeTool in writing.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Our platform leverages the YouTube API to retrieve and display relevant data based on specific keywords. While we aim to enhance user experience through accurate data, please note that this data remains the property of YouTube, and its use is subject to YouTube&apos;s policies. TubeTool does not collect or store user data without explicit consent.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    2. Data Collection and Privacy
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    The only data we collect includes the name and email address of users who voluntarily contact us through our contact page, located at&nbsp;<Link href="https://tubetool.ai/contact-us" className="underline text-primary">https://tubetool.ai/contact-us</Link>. We store this information solely to respond to inquiries. TubeTool uses cache solely for storing website components; no personal or identifiable user data is retained in our systems.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    For additional details regarding data use, please refer to our&nbsp;<Link href="https://tubetool.ai/privacy-policy" className="underline text-primary">Privacy Policy</Link>.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    3. Prohibited Use
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    By using our site, you agree not to:
                </p>
                <ol className="list-disc space-y-2 pl-3 md:pl-6 mt-4">
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Use our services for any unlawful or prohibited purpose.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Attempt to damage, disrupt, or otherwise interfere with the operation or security of TubeTool or its users.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Copy, distribute, or exploit any content or data without explicit permission from TubeTool.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Use automated scripts, bots, or other tools to scrape or gather data without authorization.
                    </li>
                </ol>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    4. Disclaimer of Warranties
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool and its content are provided &quot;as is&quot; and &quot;as available&quot; without any representations or warranties, express or implied. TubeTool does not warrant that:
                </p>
                <ol className="list-disc space-y-2 pl-3 md:pl-6 mt-4">
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The website will be uninterrupted, secure, or error-free.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The content provided will be current, accurate, or reliable.
                    </li>
                </ol>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400 mt-3.5">
                    TubeTool disclaims any and all liability for reliance on any content or information provided through the site.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    5. Limitations of Liability
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool, including its employees and affiliates, will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use our website or its content. This includes, without limitation, loss of data, loss of revenue, or damages resulting from interruptions, delays, or inaccuracies in content.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    6. Changes to Terms and Conditions
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool reserves the right to amend these Terms and Conditions at any time, without prior notice. Users are encouraged to review this page periodically to stay informed of any updates. Continued use of TubeTool following any modifications constitutes acceptance of the revised Terms and Conditions.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    7. Termination
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool reserves the right to suspend or terminate access to the site or any part of the service at its sole discretion, without prior notice, if we believe that a user has violated these Terms and Conditions.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    8. Applicable Law
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    These Terms and Conditions shall be governed by the laws of India. Any disputes arising from or relating to the use of this website or these Terms and Conditions shall be settled in the courts of India.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    9. Contact Us
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    If you have questions, concerns, or comments regarding these Terms and Conditions, please reach out to us through our contact page at&nbsp;<Link href="https://tubetool.ai/contact-us" className="underline text-primary">https://tubetool.ai/contact-us</Link>&nbsp;or via email at&nbsp;<Link href="mailto:contact@tubetool.ai" className="underline text-primary">contact@tubetool.ai</Link>.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <p className="text-left font-normal text-sm text-secondary-foreground dark:text-gray-400">
                    <strong>Last Updated:</strong>&nbsp;20 April 2025
                </p>
            </div>

        </div>
    )
}

export default TermAndConditionPage;