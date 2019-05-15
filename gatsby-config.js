module.exports = {
  siteMetadata: {
    title: "Carlos Parreño's portfolio",
    description: 'This is the project for my porftolio',
    profile: {
      favicon16: {
        src:
          '//images.ctfassets.net/ntiequ7mc6q6/6nf3rNaaVaUqYcoAcciSeC/31c775ba08e2edf3ad52438d17625b67/Mate_Logo.png?w=16&fl=progressive&q=50',
      },
      favicon32: {
        src:
          '//images.ctfassets.net/ntiequ7mc6q6/6nf3rNaaVaUqYcoAcciSeC/31c775ba08e2edf3ad52438d17625b67/Mate_Logo.png?w=32&fl=progressive&q=50',
      },
      bigIcon: {
        src:
          '//images.ctfassets.net/ntiequ7mc6q6/6nf3rNaaVaUqYcoAcciSeC/31c775ba08e2edf3ad52438d17625b67/Mate_Logo.png?w=192&fl=progressive&q=50',
      },
      appleIcon: {
        src:
          '//images.ctfassets.net/ntiequ7mc6q6/6nf3rNaaVaUqYcoAcciSeC/4433ecac61b8aa767edd9e11739bb30a/Mate_Logo.png',
      },
      image: {
        src:
          '//images.ctfassets.net/ntiequ7mc6q6/6nf3rNaaVaUqYcoAcciSeC/31c775ba08e2edf3ad52438d17625b67/Mate_Logo.png?w=450&fl=progressive&q=100',
        title: 'Carlos Parreno Logo',
      },
    },
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
