export const getUserStats = async () => {
  const query = `
        query($id: Int) {
          User(id: $id) {
            statistics {
              anime {
                count
                minutesWatched
                episodesWatched
              }
              manga {
                count
                chaptersRead
                volumesRead
              }
            }
          } 
        }
      `;

  
  const vars = {
    id: 728915,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: vars,
    }),
  };

  return fetch(url, options);
};

const anilist = async (_: any, res: any) => {
  const response = await getUserStats();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ anime_watched: null });
  }

  const stats = await response.json();
  const anilistUserStats = stats.data.User.statistics;

  return res.status(200).json({
    anilistUserStats,
  });
};

export default anilist;
