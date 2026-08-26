import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | TubeTool",
    description: "Boost your YouTube channel growth with TubeTool. Our innovative tools provide youtube creators everything they need to optimize videos, write catchy titles & descriptions, analyze audience engagement, and find creative content ideas - all in one place.",
}

const PrivacyPolicyPage = () => {
    return (
        <div className="w-full flex flex-col flex-wrap h-full gap-5">
            <h1 className="text-2xl w-full font-bold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-white">
                Privacy Policy
            </h1>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Privacy Policy for TubeTool.ai
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Thank you for choosing&nbsp;<Link href="https://tubetool.ai" className="underline text-primary">TubeTool.ai</Link>&nbsp;. We are committed to protecting your privacy and providing you with a positive experience while using our tools for your YouTube channel. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Consent
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Information we collect
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    How we use your information
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    We use the information we collect in various ways, including to:
                </p>
                <ol className="list-disc space-y-2 pl-3 md:pl-6 mt-4">
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Provide, operate, and maintain our website
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Improve, personalize, and expand our website
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Understand and analyze how you use our website
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Develop new products, services, features, and functionality
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Send you emails
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Find and prevent fraud
                    </li>
                </ol>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Log Files
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Tubetool follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Google DoubleClick DART Cookie
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Google is one of our third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL -&nbsp;<Link href="https://policies.google.com/technologies/ads" className="underline text-primary" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</Link>
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Our Advertising Partners
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Ads appearing on our website to users are delivered by our advertising partner who may use cookies.We use Google AdSense to display advertisements on our Website. Google, as a third-party vendor, uses cookies to serve ads on our Website. You can visit&nbsp;<Link href="https://support.google.com/adsense/answer/142293?hl=en" className="underline text-primary" target="_blank" rel="noopener noreferrer">Google Support AdSense</Link>&nbsp;to learn more about how Google uses cookies and the choices available to you to control those cookies.You can opt out of personalized advertising by visiting&nbsp;<Link href="https://adssettings.google.com/" className="underline text-primary" target="_blank" rel="noopener noreferrer">Ads Settings</Link>.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Third Party Privacy Policies
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Tubetool&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Under the CCPA, among other rights, California consumers have the right to:
                </p>
                <ol className="list-disc space-y-2 pl-3 md:pl-6 mt-4">
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Request that a business delete any personal data about the consumer that a business has collected.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </li>
                </ol>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    GDPR Data Protection Rights
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                </p>
                <ol className="list-disc space-y-2 pl-3 md:pl-6 mt-4">
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to access - You have the right to request copies of your personal data. We may charge you a small fee for this service.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to rectification - You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to erasure - You have the right to request that we erase your personal data, under certain conditions.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to restrict processing - You have the right to request that we restrict the processing of your personal data, under certain conditions.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to object to processing - You have the right to object to our processing of your personal data, under certain conditions.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                    </li>
                    <li className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                        The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                    </li>
                </ol>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Children&apos;s Information
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Tubetool does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Privacy Policy Updates
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    We may update this Privacy Policy periodically to reflect changes in our practices or relevant laws. We encourage you to review this page occasionally to stay informed about any updates. Your continued use of our website following any changes signifies your acceptance of the revised policy.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Contact Information
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    If you have any questions or concerns regarding this Privacy Policy, please don&apos;t hesitate to reach out. Visit our contact page at&nbsp;<Link href="https://tubetool.ai/contact-us" className="underline text-primary">https://tubetool.ai/contact-us</Link>&nbsp;or mail us at contact@tubetool.ai and we&apos;ll be happy to assist.
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

export default PrivacyPolicyPage;