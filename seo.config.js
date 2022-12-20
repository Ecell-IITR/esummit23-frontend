import { DefaultSeoProps } from 'next-seo';

export const SITE_DESCRIPTION = `E-Summit 23 is organised by E-Cell IIT Roorkee is Asia's one of the Largest Entrepreneurship Promoting college body.E-Summit has hosted some of the most prominent stalwarts of the industry over the years including but not limited to Startup expo, speaker events and much more `;

const defaultSEOConfig = {
  defaultTitle: 'E-Summit 23 | IIT Roorkee ',
  description: SITE_DESCRIPTION,
  authorName: 'Tech Team 2022-23 | E-Cell IIT Roorkee',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    site_name: 'E-summit 23',
    title: 'E-summit 23',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: 'https://www.esummit.in/fete-of-fortitude.webp',
      },
    ],
  },
  twitter: {
    handle: '@ECell_IITR',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'startup india ,e summit,e summit 23,e summit 2023, esummit, esummit 23 ,esummit 2023, e-summit, e-summit 23,e-summit 2023, ecell, entrepreneurship global summit, esummit iit, esummit iitr, esummit iit roorkee, e summit 2023 ,iitr startup ,iit roorkee ,entrepreneur fest ,conference ,conclave ,speaker events',
    },
    {
      name: 'google-site-verification',
      content: 'FQHsZrx4X62phcVvSuVBGSFfqsuv-iXAvShh7fh681A',
    },

    {
      name: 'hashtags',
      content:
        '#FeteOfFortitude #esummit23 #ecelliitr #entrepreneur #entrepreneurship #entrepreneurial #HailingTheHustlers #ThinkersToDoers #InspiringInnovators #startup #iit #iitroorkee #iit_roorkee #iitr #indianinstituteoftechnology #entrepreneurindia #entrepreneurminds #entrepreneurialspirit',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://www.esummit.in/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://www.esummit.in/favicon.ico',
      sizes: '76x76',
    },
  ],
};

export default defaultSEOConfig;
