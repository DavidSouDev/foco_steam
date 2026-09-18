import { getFeaturedMovies } from "@/lib/tmdb";
import FeaturedTabs from "./FeaturedTabs";

export default async function Featured() {
  const { upcoming, popular, topRated } = await getFeaturedMovies();

  if (upcoming.length === 0 && popular.length === 0 && topRated.length === 0) {
    return null;
  }

  return (
    <section id="filmes" className="bg-gradient-to-b from-black to-violet-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Confira alguns títulos disponíveis
        </h2>

        <FeaturedTabs
          tabs={[
            { key: "upcoming", label: "Em breve", movies: upcoming },
            { key: "popular", label: "Mais populares", movies: popular },
            { key: "top_rated", label: "Mais bem avaliados", movies: topRated },
          ]}
        />
      </div>
    </section>
  );
}
