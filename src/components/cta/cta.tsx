import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Cta() {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-10">
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-12 md:p-20 text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Ready to Deepen Your Connections?
                    </h2>
                    <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                        CoopleGames is designed to break the ice, skip the small talk, and help you get to know the people who matter most.
                    </p>
                    <div className="flex justify-center pt-4">
                        <Link href="/games">
                            <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-pink-50 border-0 shadow-lg font-bold text-lg px-8 h-14">
                                Start Playing Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}