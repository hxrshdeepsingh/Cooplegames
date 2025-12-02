import Link from "next/link";
import { Twitter, Linkedin, Instagram, Gamepad2, Heart } from "lucide-react";

const footerLinks = {
    product: [
        { title: "Features", href: "/features" },
        { title: "Games", href: "/games" },
        { title: "Pricing", href: "/pricing" },
        { title: "Changelog", href: "/changelog" },
    ],
    company: [
        { title: "About", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/contact" },
    ],
    legal: [
        { title: "Privacy", href: "/privacy" },
        { title: "Terms", href: "/terms" },
        { title: "Cookie Policy", href: "/cookies" },
    ]
};

const socialLinks = [
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: <Twitter className="h-5 w-5" />
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: <Linkedin className="h-5 w-5" />
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: <Instagram className="h-5 w-5" />
    },
];

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-white">
                                <Gamepad2 className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-slate-50">CoopleGames</span>
                        </Link>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400 max-w-xs">
                            Making the world a happier place, one game at a time. Join our community of friendly gamers today!
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-50">Product</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerLinks.product.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-50">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerLinks.company.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-50">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerLinks.legal.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} CoopleGames, Inc. All rights reserved.
                    </p>
                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        Made with <Heart className="h-3 w-3 text-pink-500 fill-pink-500" /> by CoopleGames Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
