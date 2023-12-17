/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Living Evidence IHD",
    author: "Juan C. Vázquez",
    owner: "María Ximena",
    description: `Is a knowledge transfer program that seeks to support the 
                building of capacities among the groups, organizations, and
                institutions that carry out evidence synthesis to inform
                clinical or health policy decisions, for the incorporation of
                the “living evidence model” in their usual process, in order to
                efficiently integrate the most current evidence in guidelines,
                health technology assessment and evidence summaries that they
                regularly generate. Our mission is to ensure
                health decisions are informed by the most reliable and actual
                evidence bringing the most current methodological developments
                and the most innovative technologies to the health sector
                organizations.`,
    image:
      "https://drive.google.com/drive/folders/1kdOZ5P9vGnmu-kddsVYRopn-ycPz5Qwi?usp=sharing",
    siteUrl: "https://livingevidenceihd.com/",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "React go",
        short_name: "Reactgo",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/assets/images/favicon.png",
      },
    },
  ],
};
