import React, { Fragment } from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { SectionLink } from 'react-scroll-section';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

type PropTypes = {
  landing: {
    title: string,
    roles: Array<string>,
    socialLinks: Array<{
      id: string,
      fontAwesomeIcon: string,
      name: string,
      url: string,
      enabled: boolean,
    }>,
  },
};

const LandingPage = ({ landing }: PropTypes) => {
  const { title, roles, socialLinks } = landing;
  return (
    <Section.Container id="home" Background={Background}>
      <Fragment>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[5, 6, 8]}
          mb={[3, 4, 5]}
        >
          {title}
        </Heading>

        <Heading
          as="h2"
          color="primary"
          fontSize={[4, 5, 6]}
          mb={[3, 5]}
          textAlign="center"
        >
          <TextLoop>
              {roles.map(text => (
                <Text width={[300, 500]} key={text}>
                  {text}
                </Text>
              ))}
            </TextLoop>
        </Heading>

        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          {socialLinks
            .filter(link => link.enabled === true)
            .map(({ id, ...rest }) => (
              <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                <SocialLink {...rest} />
              </Box>
            ))}
        </Flex>
        <SectionLink section="about">
          {({ onClick }) => <MouseIcon onClick={onClick} />}
        </SectionLink>
      </Fragment>
    </Section.Container>
  );
};

export default LandingPage;
