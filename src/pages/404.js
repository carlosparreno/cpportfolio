// @flow
import React from 'react';
import { injectIntl, intlShape } from 'gatsby-plugin-intl';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

type PropTypes = {
  intl: intlShape,
};

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const Page404 = ({ intl }: PropTypes) => {
  return (
    <Layout>
      <Section.Container id="404" Background={Background}>
        <Box width={[320, 400, 600]} m="auto">
          <Heading color="primaryDark" fontSize={['9rem', '13rem', '16rem']}>
            {intl.formatMessage({ id: '404title' })}
          </Heading>
          <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']}>
            {intl.formatMessage({ id: '404message' })}
          </Heading>
        </Box>
      </Section.Container>
    </Layout>
  );
};

export default injectIntl(Page404);
