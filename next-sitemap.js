const HOST_URL =
  process.env.ENV === 'prod'
    ? 'https://www.esummit.in'
    : 'http://localhost:3000';

module.exports = {
  siteUrl: HOST_URL,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${HOST_URL}/server-sitemap.xml`],
  },
};
