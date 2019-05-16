// @flow
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Career from '../sections/Career';
import Footer from '../components/Footer';

const app = () => {
  return (
    <Layout>
      <Header />
      <Landing />
      <About />
      <Career />
      <Projects />
      <Footer />
    </Layout>
  );
};
export default app;
