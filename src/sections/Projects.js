// @flow
import React from 'react';
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

type PropTypes = {
  projects: Array<{
    id: string,
    name: string,
    description: string,
    projectUrl: string,
    repositoryUrl: string,
    publishedDate: string,
    type: string,
    logo: {
      title: string,
      src: string,
    },
  }>,
};

const Projects = ({ projects }: PropTypes) => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Projects" icon="💻" label="Projects" Box="notebook" />
    <CardContainer minWidth="350px">
      {projects.map((project, index) => (
        <Fade key={project.id} bottom delay={index * 200}>
          <ProjectCard {...project} />
        </Fade>
      ))}
    </CardContainer>
  </Section.Container>
);

export default Projects;
