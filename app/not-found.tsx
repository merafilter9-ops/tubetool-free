import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='w-screen h-full min-h-screen flex flex-col items-center dark:bg-[#fff] dark:text-primary-foreground px-4'>
            <div className="grid gap-2 text-left pt-6 sm:pt-12">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/brand/logo.png"
                        alt="tubetool logo"
                        width={48}
                        height={48}
                        className="w-auto h-8"
                    />
                    <span className="text-xl font-extrabold text-black/90">Tubetool</span>
                </Link>
            </div>
            <Image
                src="/not-found.gif"
                alt="404 photo"
                width={480}
                height={480}
                className=""
            />
            <h1 className="w-full lg:w-[70%] text-4xl sm:text-5xl lg:text-6xl leading-[1.325] sm:!leading-[1.325] font-extrabold text-wrap text-center bg-gradient-to-tr from-black/90 via-black/90 to-primary-foreground text-transparent bg-clip-text">
                We&apos;ve lost this page
            </h1>
            <p className="w-full text-center text-wrap text-base mt-2 dark:text-background">
                Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Button
                variant="default"
                size="default"
                className='mt-6'
            >
                <Link href="/" className="text-sm mt-0.5">
                    Back to Home
                </Link>
            </Button>
        </div>
    )
}