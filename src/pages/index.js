import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';

const app = () => {
  return (
    <Layout>
      <Header />
      <Landing />
      <About />
    </Layout>
  );
};
export default app;
