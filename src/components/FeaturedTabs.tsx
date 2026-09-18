"use client";

import { useState } from "react";
import Image from "next/image";
import { tmdbBackdropUrl, type TmdbMovie } from "@/lib/tmdb";

type Tab = {
  key: string;
  label: string;
  movies: TmdbMovie[];
};

export default function FeaturedTabs({ tabs }: { tabs: Tab[] }) {
  const availableTabs = tabs.filter((tab) => tab.movies.length > 0);
  const [activeKey, setActiveKey] = useState(availableTabs[0]?.key);

  if (availableTabs.length === 0) return null;

  const active = availableTabs.find((tab) => tab.key === activeKey) ?? availableTabs[0];

  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center gap-6 border-b border-white/10 text-sm font-semibold uppercase tracking-wide text-slate-400">
        {availableTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveKey(tab.key)}
            className={`relative pb-3 transition ${
              tab.key === active.key ? "text-white" : "hover:text-slate-200"
            }`}
          >
            {tab.label}
            {tab.key === active.key && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 bg-orange-500" />
            )}
          </button>
        ))}
      </div>

      <div className="-mx-6 mt-8 grid grid-flow-col grid-rows-2 gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] auto-cols-[85%] snap-x snap-mandatory sm:mx-0 sm:px-0 sm:auto-cols-[calc(50%-0.5rem)] lg:auto-cols-[calc(33.333%-0.667rem)] [&::-webkit-scrollbar]:hidden">
        {active.movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative aspect-video snap-start overflow-hidden rounded-xl ring-1 ring-white/10"
          >
            <Image
              src={tmdbBackdropUrl(movie.backdropPath)}
              alt={movie.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 75vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
