const { TRAKT_API_KEY: trakt_key, TMDB_API_KEY: tmdb_key } = process.env;

const NOW_WATCHING_ENDPOINT = `https://api.trakt.tv/users/natsudzn/watching`;

export const getNowWatching = async () => {
  return fetch(NOW_WATCHING_ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": "2",
      "trakt-api-key": trakt_key,
    },
  });
};

export const getPoster = async (type, id) => {
  const TMDB_ENDPOINT = `https://api.themoviedb.org/3/`;

  const endpoint =
    type === "episode"
      ? `${TMDB_ENDPOINT}tv/${id}?api_key=${tmdb_key}`
      : `${TMDB_ENDPOINT}movie/${id}?api_key=${tmdb_key}`;

  return fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": "2",
      "trakt-api-key": trakt_key,
    },
  });
};

const trakt = async (_: any, res: any) => {
  const response = await getNowWatching();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isWatching: false });
  }

  const watching = await response.json();

  const title = watching.show?.title || watching.movie?.title;
  const type = watching.type;
  const info = type === "episode" ? watching.episode : watching.movie;
  const tmdb =
    type === "episode" ? watching.show.ids.tmdb : watching.movie.ids.tmdb;
  const url =
    type === "episode"
      ? `https://trakt.tv/shows/${watching.show.ids.slug}/seasons/${info.season}/episodes/${info.number}`
      : `https://trakt.tv/movies/${watching.movie.ids.slug}`;
  const isWatching = true;

  const tmdbRes = await getPoster(type, tmdb);

  const poster = await tmdbRes.json();
  const seasons = poster.seasons;

  let poster_path;

  if (seasons) {
    seasons.forEach((season) => {
      if (watching.episode?.season === season.season_number)
        poster_path = `https://image.tmdb.org/t/p/w92${season.poster_path}`;
    });
  } else {
    poster_path = `https://image.tmdb.org/t/p/w92${poster.poster_path}`;
  }

  return res.status(200).json({
    title,
    type,
    info,
    tmdb,
    isWatching,
    url,
    poster_path,
  });
};

export default trakt;
