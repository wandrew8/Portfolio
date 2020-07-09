module.exports = {
  pathPrefix: "/Portfolio",
  siteMetadata: {
    title: `Portfolio`,
    description: `Portfolio built using Gatsby`,
    author: `Andrew Weiss`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Julius Sans One`,
            variants: [`300`, `400`, `600`, `700`]
          },
          {
            family: 'Roboto Slab',
            variants: [`300`, `400`, `600`, `700`],
          },
          {
            family: `Salsa`,
            variants: [`400`]
          },
          {
            family: `Patua One`,
            variants: [`400`]
          },
          {
            family: 'Montserrat',
            variants: [`200`, `300`, `400`, `500`]
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`]
          },
          {
            family: `Raleway`,
            variants: [`200`, `300`, `400`, `600`, `700`]
          },
          {
            family: `Playfair Display`,
            variants: [`300`, `400`, `600`, `700`]
          },
          {
            family: "Source Sans Pro",
            variants: [`200`, `300`, `400`, `600`, `700`]
          }
        ],
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
        icon: `src/images/512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            maxWidth: 800,
            path: `${__dirname}/src/projects`,
          },
        }
      ]
    }
  }
  ]
}
