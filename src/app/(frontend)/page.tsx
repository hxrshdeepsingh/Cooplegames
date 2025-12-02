import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Heart, Sparkles, Star, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default async function Page() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 lg:pt-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20" />
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-400 border-0">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Welcome to CoopleGames
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-7xl">
            Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Cute</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Fun</span> Games Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover a world of adorable adventures, challenging puzzles, and friendly competition. Join our community of happy gamers today!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 border-0 shadow-lg shadow-pink-500/25">
              Start Playing
              <Gamepad2 className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-2 hover:bg-slate-100 dark:hover:bg-slate-800">
              Browse Games
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 sm:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="border-0 shadow-xl shadow-pink-100 dark:shadow-none bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-500">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Made with Love</h3>
                <p className="text-slate-600 dark:text-slate-400">Hand-picked selection of the most wholesome and heartwarming games.</p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-xl shadow-violet-100 dark:shadow-none bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-500">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Community First</h3>
                <p className="text-slate-600 dark:text-slate-400">Connect with friends and make new ones in our friendly gaming community.</p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-xl shadow-blue-100 dark:shadow-none bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Fun Challenges</h3>
                <p className="text-slate-600 dark:text-slate-400">Earn achievements and climb the leaderboards in your favorite games.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl mb-4">
              Popular Games
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Check out what everyone is playing right now!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[3/4] hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-white font-bold text-xl mb-1">Cute Game {i}</h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                    4.9 (2.5k)
                  </div>
                  <Button size="sm" className="w-full mt-4 rounded-full bg-white text-slate-900 hover:bg-slate-100">
                    Play Now
                  </Button>
                </div>
                {/* Placeholder Image */}
                <div className={`w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400`}>
                  <Gamepad2 className="h-12 w-12 opacity-20" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="ghost" size="lg" className="text-slate-600 dark:text-slate-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20">
              View All Games
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
