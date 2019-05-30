// @flow
import * as React from 'react';
import find from 'lodash.find';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const setLocale = (
  navLanguages: Array<string>,
  languages: Array<string>,
  currentLocale: string
) => {
  const preferredLang = find(navLanguages, navLang => {
    return find(languages, lang => {
      return navLang === lang;
    });
  });

  if (preferredLang && preferredLang !== currentLocale) {
    changeLocale(preferredLang);
  }
};

type PropTypes = {
  children: React.Node,
};

const IntlApp = ({ children }: PropTypes) => (
  <IntlContextConsumer>
    {({ languages, language: currentLocale }) => {
      setLocale(navigator.languages, languages, currentLocale);
      return children;
    }}
  </IntlContextConsumer>
);

export default IntlApp;
