import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import '../../styles/main.scss';

const FooterWithMetadata = ({data}) => (
  <div className={'footer'}>
    <div className={'footer__copyright'}>
      &copy; {data.site.siteMetadata.year} <a href={data.site.siteMetadata.siteUrl}>Marc Nuri</a>
    </div>
  </div>
);


const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        year
      }
    }
  }
`;
const Footer = props =>
  <StaticQuery
    query={query}
    render={data => <FooterWithMetadata data={data} {...props} />}
  />;
export default Footer;
