module.exports = {
  siteMetadata: {
    title: 'Carlos Parreño: Portfolio',
    description: 'This is the project for my porftolio',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-flow',
  ],
};
