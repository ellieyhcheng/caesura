module.exports = {
  pathPrefix: "/caesura",
  siteMetadata: {
    title: `Caesura - Ellie Cheng`,
    description: `Poetry blog by Ellie Cheng`,
    author: `Ellie Cheng`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- end -->`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8X6YMYWB9S", // Google Analytics / GA
        ],
      },
    },
  ],
}
