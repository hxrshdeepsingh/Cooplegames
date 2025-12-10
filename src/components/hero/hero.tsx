import { Badge } from "@/components/ui/badge";
import { Gamepad2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-32 lg:pt-32">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20" />
            <div className="container mx-auto px-4 text-center">
                <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-400 border-0">
                    <Sparkles className="mr-2 h-3.5 w-3.5" />
                    Welcome to CoopleGames
                </Badge>
                <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                    Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Cute</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Fun</span> Games Together
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                    Discover a world of adorable adventures, challenging puzzles, and friendly competition. Join our community of happy gamers today!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/games">
                        <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 border-0 shadow-lg shadow-pink-500/25">
                            Start Playing
                            <Gamepad2 className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/games">
                        <Button variant="outline" size="lg" className="rounded-full border-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                            Browse Games
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
