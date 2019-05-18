// @flow
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import FontAwesome from 'react-fontawesome';
import Timeline from '../components/Timeline/Timeline';
import TimelineEvent from '../components/Timeline/TimelineEvent';
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
              works {
                id
                name
                description
                period
                company
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
        const { works } = data.markdownRemark.frontmatter;
        return (
          <Timeline>
            {works.map((work, index) => (
              <TimelineEvent
                date={work.period}
                iconStyle={{ background: '#0D65AA', color: '#FFFFFF' }}
                icon={<FontAwesome className="icon" name="suitcase" />}
              >
                <CardContainer minWidth="450px">
                  <Fade key={work.id} bottom delay={index * 200}>
                    <RoleCard {...work} />
                  </Fade>
                </CardContainer>
              </TimelineEvent>
            ))}
          </Timeline>
        );
      }}
    />
  </Section.Container>
);

export default Career;
