export const dynamic = "force-static";

import { Cta } from "@/components/cta/cta"
import { Hero } from "@/components/hero/hero"
import { About } from "@/components/about/about"
import { Features } from "@/components/features/features"

import { Sparkles, Star, Heart, Zap } from "lucide-react";

export default async function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
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
      <Hero />
      <About />
      <Features />
      <Cta />
    </div>
  )
}

export const metadata = {
  description: 'Play fun, romantic, and spicy games for couples. Explore truth, dare, tricky, and lusty questions to bond, laugh, and connect deeper with your partner.',
  title: 'CoopleGames – Fun & Romantic Games for Couples',
}