const HOST_URL = 'https://www.esummit.in';

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
