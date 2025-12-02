import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Star } from "lucide-react"
import Image from "next/image"

export function About() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium bg-violet-100 text-violet-600 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-400 border-0">
                            <Star className="mr-2 h-3.5 w-3.5 fill-violet-600 dark:fill-violet-400" />
                            About Us
                        </Badge>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6">
                            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Happiness</span> Through Games
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            At CoopleGames, we believe that gaming is more than just entertainment it's a way to connect relax and find joy. Our mission is to create adorable inclusive and fun experiences that bring smiles to players of all ages.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start gap-4 text-left">
                                <div className="p-3 rounded-2xl bg-pink-100 dark:bg-pink-900/30 text-pink-500">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">Passionate Team</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Dedicated to crafting quality experiences with attention to every cute detail.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-left">
                                <div className="p-3 rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-500">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">Creative Innovation</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Always exploring new ways to make gaming more delightful and accessible.</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                            Learn More About Us
                        </Button>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-violet-500 rounded-[2rem] rotate-6 opacity-20 blur-lg transform scale-95" />
                            <Card className="relative border-0 overflow-hidden rounded-[2rem] shadow-2xl">
                                <CardContent className="p-0 aspect-square sm:aspect-[4/3] bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative group">
                                    {/* Abstract representation of "About" visual since we don't have a real image yet */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

                                    <div className="relative z-10 text-center p-8">
                                        <div className="inline-flex mb-6 relative">
                                            <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-20 animate-pulse" />
                                            <Heart className="h-32 w-32 text-pink-500 fill-pink-500 animate-bounce duration-[3000ms]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">CoopleGames</h3>
                                        <p className="text-slate-500 dark:text-slate-400 mt-2">Est. 2024</p>
                                    </div>

                                    {/* Floating elements */}
                                    <Star className="absolute top-10 right-10 h-8 w-8 text-yellow-400 fill-yellow-400 animate-pulse delay-75" />
                                    <Sparkles className="absolute bottom-10 left-10 h-8 w-8 text-violet-500 animate-pulse delay-150" />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
