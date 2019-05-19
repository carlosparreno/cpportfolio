import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';

type PropTypes = {
  theme: Object,
};

const Helmet = ({ theme = {} }: PropTypes) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      const { title, description } = data.site.siteMetadata;

      return (
        <ReactHelmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="shortcut icon" href="/favicons/favicon-16x16.png" />
          <meta name="theme-color" content={theme.background} />
          <meta name="image" content="/favicons/favicon-32x32.png" />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content="/favicons/favicon-32x32.png" />

          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta
            name="og:image"
            content="/favicons/android-chrome-512x512.png"
          />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content="/favicons/android-chrome-512x512.png"
          />
          <meta
            name="twitter:image:src"
            content="/favicons/android-chrome-512x512.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />

          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
        </ReactHelmet>
      );
    }}
  />
);

export default withTheme(Helmet);
