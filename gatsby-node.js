const _path = require('path');

const supportedLanguages = {
  en: 'English',
  es: 'Español',
};

exports.createPages = ({ graphql, actions }) => {
  // Create a index page for each supported language
  return new Promise((resolve, reject) => {
    Object.keys(supportedLanguages).forEach(lang => {
      const { createPage } = actions;
      const componentPath = _path.resolve(`src/App.js`);
      resolve(
        graphql(
          `
            {
              allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                      roles
                      socialLinks {
                        id
                        fontAwesomeIcon
                        name
                        url
                        enabled
                      }
                      aboutMe
                      works {
                        id
                        name
                        description
                        period
                        type
                        company
                        logo {
                          title
                          src
                        }
                      }
                      projects {
                        name
                        description
                        projectUrl
                        repositoryUrl
                        publishedDate
                        type
                        logo {
                          title
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors);
          }

          const { edges } = result.data.allMarkdownRemark;

          let getLanding;
          let getAboutMe;
          const work = 'work';
          const projects = 'projects';

          edges.forEach(edge => {
            const {
              path,
              title,
              roles,
              socialLinks,
              aboutMe,
            } = edge.node.frontmatter;

            switch (path) {
              case `/${lang}`:
                getLanding = { title, roles, socialLinks };
                break;

              case `/${lang}/about`:
                getAboutMe = aboutMe;
                break;

              default:
                break;
            }
          });

          createPage({
            path: lang === 'en' ? '/' : `/${lang}`,
            component: componentPath,
            context: {
              edges,
              landing: { ...getLanding },
              aboutMe: getAboutMe,
              work,
              projects,
            },
          });
        })
      );
    });
  });
};
