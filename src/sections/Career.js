// @flow
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import RoleCard from '../components/RoleCard';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['10vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Career = () => (
  <Section.Container id="career" Background={Background}>
    <Section.Header name="Profesional Career" icon="👨🏻‍💻" Box="notebook" />
    <StaticQuery
      query={graphql`
        query CareerQuery {
          markdownRemark(frontmatter: { path: { eq: "/career" } }) {
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
                <RoleCard {...p} />
              </Fade>
            ))}
          </CardContainer>
        );
      }}
    />
  </Section.Container>
);

export default Career;
