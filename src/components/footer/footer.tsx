import Link from "next/link";
import { Twitter, Instagram, Heart, Github } from "lucide-react";
import Image from "next/image";

const socialLinks = [
    {
        name: "Twitter",
        href: "https://x.com/hxrshdeepsingh",
        icon: <Twitter className="h-5 w-5" />
    },
    {
        name: "Instagram",
        href: "https://instagram.com/hxrshdeepsingh",
        icon: <Instagram className="h-5 w-5" />
    },
    {
        name: "GitHub",
        href: "https://github.com/hxrshdeepsingh",
        icon: <Github className="h-5 w-5" />
    },
];

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white to-pink-50 dark:from-slate-950 dark:to-slate-900">
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-pink-100 dark:border-slate-800 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
                    <div className="flex flex-col items-center justify-center text-center space-y-8">
                        {/* Brand */}
                        <Link href="/" className="group flex flex-col items-center gap-3">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-pink-100 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="/icon.svg"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                    className="relative transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                                CoopleGames
                            </span>
                        </Link>

                        {/* Tagline */}
                        <p className="text-base text-gray-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                            Sparking joy and deep conversations, one card at a time.
                            <br className="hidden sm:block" />
                            Grab a friend and start playing! ✨
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-6">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="p-3 rounded-full bg-white dark:bg-slate-800 border border-pink-100 dark:border-slate-700 text-gray-400 dark:text-slate-400 hover:text-pink-500 hover:border-pink-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </Link>
                            ))}
                        </div>

                        {/* Copyright & Love */}
                        <div className="w-full border-t border-pink-100/50 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 dark:text-slate-500">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <p className="flex items-center gap-1.5 bg-pink-50 dark:bg-pink-900/10 px-3 py-1 rounded-full text-pink-600/80 dark:text-pink-400/80 font-medium">
                                    &copy; {new Date().getFullYear()} CoopleGames.
                                </p>
                                <div className="flex gap-4 text-xs font-medium">
                                    <Link href="/privacy" className="hover:text-pink-500 transition-colors">Privacy</Link>
                                    <Link href="/terms" className="hover:text-pink-500 transition-colors">Terms</Link>
                                </div>
                            </div>
                            <p className="flex items-center gap-1.5 bg-pink-50 dark:bg-pink-900/10 px-3 py-1 rounded-full text-pink-600/80 dark:text-pink-400/80 font-medium">
                                Made with <Heart className="h-3.5 w-3.5 fill-current animate-pulse" /> for connection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
