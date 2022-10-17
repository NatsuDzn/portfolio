const { GITHUB_BEARER: github_bearer } = process.env;

export const getUserContribution = async () => {
  const query = `{
      user(login: "NatsuDzn") {
        contributionsCollection {
          contributionCalendar {
            total: totalContributions
          }
        }
      }
    }`;
  const url = "https://api.github.com/graphql";
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${github_bearer}`,
    },
    body: JSON.stringify({
      query,
    }),
  };

  return fetch(url, options);
};

const github = async (_: any, res: any) => {
  const response = await getUserContribution();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ github_stats: null });
  }

  const githubStats = await response.json();
  const formattedStats = githubStats.data.user;

  return res.status(200).json({
    formattedStats,
  });
};

export default github;
