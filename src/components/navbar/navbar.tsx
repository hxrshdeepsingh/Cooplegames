"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Gamepad2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../others/theme-toggle";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Games",
    link: "/games",
  },
  {
    name: "Community",
    link: "/community",
  },
  {
    name: "About",
    link: "/about",
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 mx-auto max-w-2xl z-50",
        className
      )}
    >
      <div className="relative flex items-center justify-between px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg shadow-pink-500/5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-slate-50 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-white">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline-block">CoopleGames</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            className="rounded-full bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-medium px-5"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
