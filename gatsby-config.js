module.exports = {
  siteMetadata: {
    title: `Gatsby Fundamentals`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/google-sitemap.xml`,
        exclude: [`/using-typescript/`],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.repubblica.it/rss/homepage/rss2.0.xml`,
        name: `Repubblica`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://swapi.dev/api/people/`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `StarWarsCharacter`,

        entityLevel: `results`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://swapi.dev/api/films/`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `StarWarsFilm`,

        entityLevel: `results`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

  mapping: {
    "StarWarsCharacter.films": "StarWarsFilm.url",
  },
}
