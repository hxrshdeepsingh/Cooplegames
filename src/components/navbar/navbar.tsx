"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../others/theme-toggle";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  {
    name: "Games",
    link: "/games",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Terms",
    link: "/terms",
  },
  {
    name: "Privacy",
    link: "/privacy",
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 mx-auto max-w-2xl z-50 px-4",
        className
      )}
    >
      <div className="relative flex items-center justify-between px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg shadow-pink-500/5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-slate-50 hover:opacity-80 transition-opacity">
          <Image src="/icon.svg" alt="Logo" width={40} height={40} />
          <span className="hidden sm:inline-block">CoopleGames</span>
        </Link>

        {/* Desktop Navigation Links */}
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

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full rounded-b-[2rem] pt-10">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center gap-2">
                  <Image src="/icon.svg" alt="Logo" width={32} height={32} />
                  CoopleGames
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-center gap-6 pb-10">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={idx}
                    href={navItem.link}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
