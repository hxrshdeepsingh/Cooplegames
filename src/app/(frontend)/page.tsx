import { Hero } from "@/components/hero/hero"
import { About } from "@/components/about/about"
import { Features } from "@/components/features/features"
import { PopularGame } from "@/components/popular/popular-game"

export default async function Page() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Grid */}
      <Features />

      {/* Popular Games */}
      <PopularGame />
    </div>
  )
}