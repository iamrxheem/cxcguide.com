const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cxcguide.com`,
    title: `CXC Study Guide`,
    description: `The perfect free online study guide for Caribbean CSEC and CAPE students including past papers, study notes quizzes and exercises.`,
    author: `@iamrxheem`
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-zeit-now`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CXC Study Guide`,
        short_name: `CXC Study Guide`,
        start_url: `/study`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: "101253680"
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : [])
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "5eb4ff8681d25c0e5849efe4"
        // get this from the tawk script widget
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.cxcguide.com`,
        stripQueryString: true
      }
    }
  ]
};
