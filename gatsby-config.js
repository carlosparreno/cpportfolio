module.exports = {
  siteMetadata: {
    title: "Carlos Parreño's portfolio",
    description: 'This is the project for my porftolio',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-plugin-flow',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
