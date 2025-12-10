export const dynamic = "force-static";

import Link from "next/link";
import { Cta } from "@/components/cta/cta";
import { Badge } from "@/components/ui/badge";
import { getPayloadClient } from "@/lib/payload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Sparkles, MessageCircleHeart, Users, Star, Heart, Zap } from "lucide-react";

export const metadata = {
    description: 'Discover exciting couple game categories including truths, dares, tricky questions, and lusty games made to strengthen your relationship.',
    title: 'Games Categories – Truth, Dare & Romantic Questions',
}

export default async function Page() {
    const payload = await getPayloadClient();
    const categories = await payload.find({
        collection: "categories",
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
            {/* Doodles / Background Elements */}
            <div className="absolute top-20 left-10 text-pink-200 dark:text-pink-900/20 animate-pulse delay-700">
                <Star size={48} />
            </div>
            <div className="absolute top-40 right-20 text-purple-200 dark:text-purple-900/20 animate-bounce delay-1000 duration-3000">
                <Heart size={32} />
            </div>
            <div className="absolute bottom-40 left-20 text-indigo-100 dark:text-indigo-900/20 rotate-12">
                <Zap size={64} />
            </div>
            <div className="absolute top-1/3 right-10 text-yellow-100 dark:text-yellow-900/20 animate-pulse">
                <Sparkles size={56} />
            </div>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-12 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16 space-y-6">
                    <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-400 border-0">
                        <Sparkles className="mr-2 h-3.5 w-3.5" />
                        The Ultimate Icebreaker App
                    </Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 dark:text-slate-50 tracking-tight leading-tight">
                        Let's Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Talking!</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Discover new things about your friends, family, or partner. Pick a category and let the fun begin! 🚀
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {categories.docs.map((category) => (
                        <Link href={`/games/${category.id}/1`} key={category.id} className="block group">
                            <Card className="h-full border-2 border-transparent hover:border-pink-200 dark:hover:border-pink-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] overflow-hidden">
                                <CardHeader className="bg-primary p-8 dark:bg-slate-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Gamepad2 className="w-8 h-8 text-pink-500" />
                                        </div>
                                        <span className="text-xs font-bold text-pink-400 uppercase tracking-wider bg-white dark:bg-slate-800 px-2 py-1 rounded-lg">
                                            Play Now
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-slate-50 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <p className="text-base text-gray-500 dark:text-slate-400 font-medium leading-relaxed">
                                        Dive into {category.title} questions designed to spark joy and conversation.
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* How to Play Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-50 mb-4">How It Works 🎲</h2>
                        <p className="text-lg text-gray-500 dark:text-slate-400">Simple steps to start the fun</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Gather Around", desc: "Grab your friends, family, or date." },
                            { icon: Gamepad2, title: "Pick a Deck", desc: "Choose a category that fits the vibe." },
                            { icon: MessageCircleHeart, title: "Start Talking", desc: "Take turns answering and connecting." },
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-white dark:border-slate-800 shadow-sm hover:bg-white dark:hover:bg-slate-900 transition-colors">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-pink-500 dark:text-pink-400">
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-slate-50 mb-2">{step.title}</h3>
                                <p className="text-base text-gray-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Play Section (Banner) */}
                <Cta />
            </main>
        </div>
    );
}