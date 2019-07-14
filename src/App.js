// @flow
import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Landing from './sections/Landing';
import About from './sections/About';
import Projects from './sections/Projects';
import Career from './sections/Career';
import Footer from './components/Footer';

type PropTypes = {
  pageContext: {
    about: Object,
    landing: Object,
    career: Object,
    allProjects: Object,
  },
};

const App = ({ pageContext }: PropTypes) => {
  const { about, landing, career, allProjects } = pageContext;

  if (window.location.pathname === '/' && navigator.language.startsWith('es')) {
    window.location.href = `${window.location.origin}/es`;
    return null;
  }

  /* eslint-disable-next-line */
  console.log(pageContext);
  return (
    <Layout>
      <Header />
      <Landing landing={landing} />
      <About about={about} />
      <Career career={career} />
      <Projects allProjects={allProjects} />
      <Footer />
    </Layout>
  );
};
export default App;
