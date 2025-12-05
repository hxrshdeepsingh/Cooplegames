"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart, Shuffle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSound } from "@/hooks/use-sound";

interface GameControlsProps {
  slug: string;
  pageNumber: number;
  total: number;
}

export function GameControls({ slug, pageNumber, total }: GameControlsProps) {
  const router = useRouter();
  const { playPop } = useSound();

  const handleRandom = () => {
    playPop();
    let randomPage = Math.floor(Math.random() * total) + 1;
    // Avoid picking the same page if possible (unless total is 1)
    if (total > 1 && randomPage === pageNumber) {
      randomPage = randomPage === total ? 1 : randomPage + 1;
    }
    router.push(`/games/${slug}/${randomPage}`);
  };

  return (
    <div className="flex items-center justify-between gap-3 pt-4">
      {/* Previous Button */}
      {pageNumber > 1 ? (
        <Link href={`/games/${slug}/${pageNumber - 1}`} className="flex-1" onClick={playPop}>
          <Button variant="outline" size="lg" className="w-full gap-2 rounded-xl border-2 hover:bg-white hover:text-pink-600 hover:border-pink-200 transition-all h-12">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Previous</span>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {/* Random Button (Center) */}
      <Button
        variant="ghost"
        size="icon"
        className="flex-none rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 hover:text-pink-600 w-12 h-12 shadow-sm border border-pink-100"
        onClick={handleRandom}
        title="Random Question"
      >
        <Shuffle size={20} />
      </Button>

      {/* Next / Finish Button */}
      {pageNumber < total ? (
        <Link href={`/games/${slug}/${pageNumber + 1}`} className="flex-1" onClick={playPop}>
          <Button size="lg" className="w-full gap-2 rounded-xl bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all h-12">
            <span className="hidden sm:inline">Next</span>
            <ArrowRight size={20} />
          </Button>
        </Link>
      ) : (
        <Link href="/games" className="flex-1" onClick={playPop}>
          <Button size="lg" className="w-full gap-2 rounded-xl bg-pink-500 hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all h-12">
            Finish
            <Heart size={20} className="fill-current" />
          </Button>
        </Link>
      )}
    </div>
  );
}
