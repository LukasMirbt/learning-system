module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learning system`,
        short_name: `LS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#006400`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
