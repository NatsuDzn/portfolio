export const getFavorites = async () => {
  const query = `
{
  User(name: "natsudzn") {
    favourites {
      manga {
        ...mediaListEntry
      }
      anime {
        ...mediaListEntry
      }
    }
  }
}

fragment mediaListEntry on MediaConnection {
  nodes {
    id
    title {
      userPreferred
    }
    startDate {
      year
    }
    type
    coverImage {
      large
    }
    staff(sort: RELEVANCE, perPage: 1) {
      nodes {
        name {
          full
        }
      }
    }
  }
}
      `;

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };

  return fetch(url, options);
};

const favorites = async (_: any, res: any) => {
  const response = await getFavorites();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ favorites: null });
  }

  const stats = await response.json();
  const results = [
    ...stats.data.User.favourites.manga.nodes,
    ...stats.data.User.favourites.anime.nodes,
  ];
  const total = {
    manga: stats.data.User.favourites.manga.nodes.length,
    anime: stats.data.User.favourites.anime.nodes.length,
    all: results.length,
  };

  return res.status(200).json({
    results,
    total,
  });
};

export default favorites;
