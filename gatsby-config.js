const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `CXC Study Guide`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@iamrxheem`
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/logo.png`
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
    }
  ]
};
