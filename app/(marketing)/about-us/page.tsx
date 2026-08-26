import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About us | TubeTool",
    description: "Boost your YouTube channel growth with TubeTool. Our innovative tools provide youtube creators everything they need to optimize videos, write catchy titles & descriptions, analyze audience engagement, and find creative content ideas - all in one place.",
}

const AboutUsPage = () => {
    return (
        <div className="w-full flex flex-col flex-wrap h-full gap-5">
            <h1 className="text-2xl w-full font-bold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                About Us
            </h1>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Who We Are
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool.ai is a passionate team of creators and new age tech-developers aimed at helping YouTubers of all levels to achieve their channel goals. Tubetool understands the challenges faced by every YouTubers, from creating engaging content to attracting new viewers and making a loyal subscriber base.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Our Mission
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Tubetool believes YouTube has the potential to entertain, educate, and inspire the audience in the right way. Our mission is to become a growth partner for every content creator on youtube by providing them new generation innovative tools and resources that can help them to create better content , reach wider audiences and build a loyal audience base.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    What We Offer
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    TubeTool.ai offers various innovative tools that helps content creators to boosts their channel performances. Some of are :-
                </p>

                <ol className="list-decimal space-y-5 pl-3 md:pl-6 mt-4">
                    <li className="flex flex-col">
                        <h3 className="text-base font-medium text-left w-full">
                            Keyword Research
                        </h3>
                        <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                            This tool helps content creators to discover high-performing keywords and suggests some video ideas according to their channel performance and audience interests.
                        </p>
                    </li>
                    <li className="flex flex-col">
                        <h3 className="text-base font-medium text-left w-full">
                            Content Ideation
                        </h3>
                        <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                            This tool that helps to create and research the best content for their next video.
                        </p>
                    </li>
                    <li className="flex flex-col">
                        <h3 className="text-base font-medium text-left w-full">
                            Title & Description guide tool
                        </h3>
                        <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                            This tool is developed in a way to provide you with well seo optimized titles , short description , tags and hashtags to increase your video performances.
                        </p>
                    </li>
                    <li className="flex flex-col">
                        <h3 className="text-base font-medium text-left w-full">
                            Video Audit & Analysis
                        </h3>
                        <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                            This tool provides valuable insights of their video performance, helps in video optimization and identifies areas for improvement.
                        </p>
                    </li>
                    <li className="flex flex-col">
                        <h3 className="text-base font-medium text-left w-full">
                            Comment Analysis:
                        </h3>
                        <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                            This tool let creators to understand their audience by analyzing their comments and provides a valuable short report on their viewer interests.
                        </p>
                    </li>
                </ol>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400 pt-6">
                    Along with these tools , Tubetool provides many other tools that are mentioned on our tools pages.
                </p>
            </div>

            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Why Choose TubeTool.ai?
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    Tools offered by us are developed by our team having extensive experience in the content creation field and we understand the every needs of YouTubers. We follow a data driven approach to develop our tools. We offer a user-friendly and easy to use interface which is suitable for every stage of content creators.We are constantly innovating and adding new features to improve our services to meet your needs.
                </p>
            </div>
            <div className="w-full flex flex-col">
                <h2 className="text-lg font-semibold text-left bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text dark:from-primary-foreground dark:via-primary-foreground dark:to-dark">
                    Join Our Community
                </h2>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400">
                    We believe in a supportive community where creators can learn from each other and share their experiences. Stay connected with us on social media for valuable tips, industry news, and exclusive content.
                </p>
                <p className="text-left font-normal text-base text-secondary-foreground dark:text-gray-400 pt-6">
                    You can reach us at :-&nbsp;
                    <Link href="mailto:contact@tubetool.ai" className="underline text-primary">contact@tubetool.ai</Link>&nbsp;
                    for more details and information.
                </p>
            </div>
        </div>
    )
}

export default AboutUsPage;