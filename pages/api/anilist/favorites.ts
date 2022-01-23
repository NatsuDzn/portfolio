export const getFavorites = async () => {
  const query = `
{
  User(name: "natsudzn") {
    favourites {
      anime {
        ...mediaListEntry
      }
      manga {
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

const anilist = async (_: any, res: any) => {
  const response = await getFavorites();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ favorites: null });
  }

  const stats = await response.json();
  const results = [
    ...stats.data.User.favourites.anime.nodes,
    ...stats.data.User.favourites.manga.nodes,
  ];
  const total = {
    anime: stats.data.User.favourites.anime.nodes.length,
    manga: stats.data.User.favourites.manga.nodes.length,
    all: results.length
  };

  return res.status(200).json({
    results,
    total,
  });
};

export default anilist;
