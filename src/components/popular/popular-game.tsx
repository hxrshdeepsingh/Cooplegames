import { Gamepad2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PopularGame() {
    return (
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
    )
}