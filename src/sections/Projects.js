// @flow
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import ProjectCard from '../components/ProjectCard';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['10vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />
  </div>
);

const Projects = () => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Projects" icon="💻" Box="notebook" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          markdownRemark(frontmatter: { path: { eq: "/projects" } }) {
            frontmatter {
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
      `}
      render={data => {
        const { projects } = data.markdownRemark.frontmatter;
        return (
          <CardContainer minWidth="350px">
            {projects.map((p, i) => (
              <Fade key={p.id} bottom delay={i * 200}>
                <ProjectCard {...p} />
              </Fade>
            ))}
          </CardContainer>
        );
      }}
    />
  </Section.Container>
);

export default Projects;
