const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const componentPath = path.resolve(`src/pages/index.js`);
    resolve(
      graphql(
        `
          {
            markdownRemark(frontmatter: { path: { eq: "/about" } }) {
              frontmatter {
                aboutMe
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        createPage({
          path: `/test`,
          component: componentPath,
          // In your blog post template's graphql query, you can use path
          // as a GraphQL variable to query for data from the markdown file.
          context: {
            aboutMe: result.data.markdownRemark.frontmatter.aboutMe,
          },
        });
      })
    );
  });
};
