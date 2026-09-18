const TMDB_API_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export type TmdbMovie = {
  id: number;
  title: string;
  backdropPath: string;
};

export type FeaturedCategory = "upcoming" | "popular" | "top_rated";

type TmdbApiMovie = {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string | null;
};

async function fetchMovies(category: FeaturedCategory): Promise<TmdbMovie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) return [];

  const url = `${TMDB_API_BASE}/movie/${category}?api_key=${apiKey}&language=pt-BR&region=BR&page=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 21600 } });
    if (!res.ok) return [];

    const data: { results?: TmdbApiMovie[] } = await res.json();

    return (data.results ?? [])
      .filter((movie): movie is TmdbApiMovie & { backdrop_path: string } => Boolean(movie.backdrop_path))
      .slice(0, 18)
      .map((movie) => ({
        id: movie.id,
        title: movie.title ?? movie.name ?? "",
        backdropPath: movie.backdrop_path,
      }));
  } catch {
    return [];
  }
}

export function tmdbBackdropUrl(path: string) {
  return `${TMDB_IMAGE_BASE}/w780${path}`;
}

export async function getFeaturedMovies() {
  const [upcoming, popular, topRated] = await Promise.all([
    fetchMovies("upcoming"),
    fetchMovies("popular"),
    fetchMovies("top_rated"),
  ]);

  return { upcoming, popular, topRated };
}
