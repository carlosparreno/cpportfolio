// @flow
import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Landing from './sections/Landing';
import About from './sections/About';
import Projects from './sections/Projects';
import Career from './sections/Career';
import Footer from './components/Footer';

const getLocale = () => {
  // For now only 'en' (default as '/') and 'es' are supported
  if (typeof window !== 'undefined' && navigator.language.startsWith('es')) {
    return '/es/';
  }
  return '/';
};

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

  if (
    typeof window !== 'undefined' &&
    window.location.href !== `${window.location.origin}${getLocale()}`
  ) {
    window.location.href = `${window.location.origin}${getLocale()}`;
    return null;
  }

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
