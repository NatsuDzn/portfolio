const siteUrl = "https://nathanael-louzoun.vercel.app/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policiels: [{ userAgent: "*", allow: "/" }],
  },
};
