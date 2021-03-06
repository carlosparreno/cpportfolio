// @flow
import React from 'react';
import { Box, Image, Flex } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ReactMarkdown from 'react-markdown';
import markdownRenderer from '../components/MarkdownRenderer';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Logo from '../media/ProfilePic.png';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['30vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="secondary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

type PropTypes = {
  about: {
    title: string,
    aboutMe: string,
  },
};

const About = ({ about }: PropTypes) => (
  <Section.Container id={about.title} Background={Background}>
    <Section.Header name={about.title} icon="🙋‍♂️" label={about.title} />

    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <ReactMarkdown source={about.aboutMe} renderers={markdownRenderer} />
        </Fade>
      </Box>

      <Box width={[1, 1, 2 / 6]} style={{ maxWidth: '300px', margin: 'auto' }}>
        <Fade right>
          <ProfilePicture src={Logo} alt="Logo" mt={[4, 4, 0]} ml={[0, 0, 1]} />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default About;
