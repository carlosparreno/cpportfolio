const _path = require('path');

const supportedLanguages = {
  en: 'English',
  es: 'Español',
};

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
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
                      id
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
        let getWorks;
        let getProjects;

        // Create a index page for each supported language
        Object.keys(supportedLanguages).forEach(lang => {
          const { createPage } = actions;
          const componentPath = _path.resolve(`src/App.js`);

          edges.forEach(edge => {
            const {
              path,
              title,
              roles,
              socialLinks,
              aboutMe,
              works,
              projects,
            } = edge.node.frontmatter;

            switch (path) {
              case `/${lang}`:
                getLanding = { title, roles, socialLinks };
                break;

              case `/${lang}/about`:
                getAboutMe = aboutMe;
                break;

              case `/${lang}/career`:
                getWorks = works;
                break;

              case `/${lang}/projects`:
                getProjects = projects;
                break;
              default:
                break;
            }
          });

          createPage({
            path: lang === 'en' ? '/' : `/${lang}`,
            component: componentPath,
            context: {
              landing: { ...getLanding },
              aboutMe: getAboutMe,
              works: [...getWorks],
              projects: [...getProjects],
            },
          });
        });
      })
    );
  });
};
