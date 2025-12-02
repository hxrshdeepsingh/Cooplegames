import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Trophy } from 'lucide-react'

export function Features() {
    return (
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
    )
}