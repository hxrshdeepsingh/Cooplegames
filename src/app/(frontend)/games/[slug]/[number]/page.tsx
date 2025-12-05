import { getPayloadClient } from "@/lib/payload";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Star, Sparkles, Zap, Lightbulb, MessageCircle } from "lucide-react";
import { GameControls } from "@/components/game/game-controls";

async function fetchQuestions(slug: string, number: string) {
    const payload = await getPayloadClient();

    const data = await payload.find({
        collection: "questions",
        where: { category: { equals: slug } },
        sort: "order",
        limit: 1,
        page: Number(number),
        depth: 0,
        select: {
            id: true,
            question: true,
        },
    });

    return {
        question: data.docs[0],
        total: data.totalDocs,
    };
}

export default async function Page({ params }: any) {
    const { slug, number } = await params;
    const pageNumber = Number(number);

    const { question, total } = await fetchQuestions(slug, number);
    const progress = (pageNumber / total) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Doodles / Background Elements */}
            <div className="absolute top-10 left-10 text-pink-200 animate-pulse delay-700">
                <Star size={48} />
            </div>
            <div className="absolute top-20 right-20 text-purple-200 animate-bounce delay-1000 duration-3000">
                <Heart size={32} />
            </div>
            <div className="absolute bottom-20 left-20 text-indigo-100 rotate-12">
                <Zap size={64} />
            </div>
            <div className="absolute top-1/3 right-10 text-yellow-100 animate-pulse">
                <Sparkles size={56} />
            </div>

            <div className="w-full max-w-2xl space-y-8 relative z-10">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold capitalize text-gray-800 tracking-tight">
                        {slug.replace("-", " ")}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <span className="text-sm font-medium">Question {pageNumber} of {total}</span>
                    </div>
                    <Progress value={progress} className="h-2 w-full max-w-xs mx-auto bg-pink-100 [&>div]:bg-pink-400" />
                </div>

                {/* Question Card */}
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm rounded-[2rem] overflow-hidden relative group hover:scale-[1.01] transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300" />
                    <CardContent className="p-10 md:p-16 text-center min-h-[300px] flex flex-col items-center justify-center">
                        <div className="mb-6 p-4 bg-pink-50 rounded-full group-hover:bg-pink-100 transition-colors">
                            <MessageCircle className="w-10 h-10 text-pink-400" />
                        </div>
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800 font-serif">
                            {question?.question}
                        </p>
                    </CardContent>
                </Card>

                {/* Conversation Tip Section */}
                <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                    <div className="p-2 bg-yellow-100 rounded-xl text-yellow-600 shrink-0">
                        <Lightbulb size={24} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Conversation Tip</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Don't just answer "yes" or "no"! Ask follow-up questions like "Why?" or "How did that make you feel?" to keep the conversation flowing. 🌊
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <GameControls slug={slug} pageNumber={pageNumber} total={total} />
            </div>
        </div>
    );
}
