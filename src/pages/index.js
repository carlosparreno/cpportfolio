// @flow
import React from 'react';
import IntlApp from '../components/IntlApp';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Career from '../sections/Career';
import Footer from '../components/Footer';

const app = () => {
  return (
    <IntlApp>
      <Layout>
        <Header />
        <Landing />
        <About />
        <Career />
        <Projects />
        <Footer />
      </Layout>
    </IntlApp>
  );
};
export default app;
