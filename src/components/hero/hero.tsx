"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 dark:from-purple-900 dark:via-pink-900 dark:to-orange-900">
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-500 dark:text-pink-300 leading-tight tracking-tight drop-shadow-sm">
                        Fun & Spicy Games for Couples <span className="inline-block animate-bounce">💞</span>
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-neutral-700 dark:text-neutral-200 font-medium">
                        Discover, play, and share your favorite couple games. <br className="hidden md:block" />
                        Laugh, flirt, and bond together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center md:justify-start">
                        <Button className="bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold rounded-full px-10 py-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-pulse">
                            Start Game 🎮
                        </Button>
                        <Button variant="outline" className="bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/80 text-pink-500 dark:text-pink-300 border-2 border-pink-200 dark:border-pink-800 text-xl font-semibold rounded-full px-10 py-8 shadow-md hover:shadow-lg transition-all">
                            Explore Categories
                        </Button>
                    </div>
                </div>

                {/* Image / Illustration */}
                <div className="flex-1 mb-12 md:mb-0 relative w-full max-w-md md:max-w-xl">
                    <div className="relative z-10 hover:scale-105 transition-transform duration-500 ease-in-out">
                        <Image
                            src="/images/cute-cat-hero.png"
                            alt="Cute Cat Couple playing games"
                            width={800}
                            height={800}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                    {/* Decorative blobs behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 dark:bg-white/5 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>

            {/* Cute floating hearts and doodles background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="animate-bounce-slow absolute w-8 h-8 bg-pink-300/50 rounded-full top-20 left-[10%] blur-sm"></div>
                <div className="animate-bounce-slow delay-700 absolute w-12 h-12 bg-purple-300/50 rounded-full top-40 right-[15%] blur-sm"></div>
                <div className="animate-bounce-slow delay-1000 absolute w-6 h-6 bg-orange-300/50 rounded-full bottom-32 left-[20%] blur-sm"></div>
            </div>
        </section>
    );
}
