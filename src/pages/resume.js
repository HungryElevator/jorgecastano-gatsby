// Gatsby supports TypeScript natively!
import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import WebLayout from '../components/web-layout';
import SEO from '../components/seo';


const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <WebLayout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      {' Resume'}
    </WebLayout>
  );
};

export default Resume;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
