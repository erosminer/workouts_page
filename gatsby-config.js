module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    siteTitle: 'Workouts Map',
    siteUrl: 'https://workouts-page-alpha.vercel.app/',
    logo: 'https://images.cnblogs.com/cnblogs_com/erosmin-er/1826355/o_200812022758zhuzhu%E5%A4%B4%E5%83%8F.png',
    description: 'Personal Workouts Page',
    keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
    navLinks: [
      {
        name: 'Blog',
        url: 'https://www.cnblogs.com/erosmin-er/',
      },
      {
        name: 'About',
        url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: "gatsby-plugin-vercel",
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\/icons\/.*\.png/,
            handler: `CacheFirst`,
          },
          {
            urlPattern:
              /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/api\.mapbox\.com\//,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
};
