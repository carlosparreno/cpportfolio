// @flow
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Career from '../sections/Career';
import Footer from '../components/Footer';

const App = (props: Object) => {
  const { pageContext } = props;

  if (window.location.pathname === '/' && navigator.language.startsWith('es')) {
    window.location.href = `${window.location.origin}/es`;
    return null;
  }

  /* eslint-disable-next-line */
  console.log(props);
  return (
    <Layout>
      <Header />
      <Landing />
      <About aboutMe={pageContext.aboutMe} />
      <Career />
      <Projects />
      <Footer />
    </Layout>
  );
};
export default App;
