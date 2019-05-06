import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const DefaultBackground = () => <div />;

type PropTypesContainer = {
  id: string,
  children: string,
  Background: string,
};

const Container = ({
  id,
  children,
  Background = DefaultBackground,
}: PropTypesContainer) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

type PropTypesHeader = {
  name: string,
  icon: string,
  label: string,
};

const Header = ({ name, icon = '', label = '' }: PropTypesHeader) => (
  <Slide left>
    <Heading color="secondaryDark" mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

export default {
  Container,
  Header,
};
