import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import locales from '../../i18n/locales';
import {localizedPath} from '../../i18n/path';
import '../../styles/main.scss';

const FooterWithMetadata = ({data, pageContext}) => (
  <div className={'footer'}>
    <div className={'footer__locale'}>
      <ul>
        {Object.values(locales).map(locale =>
          (<li key={locale.path}><Link
            to={localizedPath(locale)(pageContext.pagePath)}>
            {locale.name}
          </Link></li>)
        )}
      </ul>
    </div>
    <div className={'footer__deprecated'}>
      <ul>
        <li><Link to={localizedPath(pageContext.locale)('/scrum-poker-online')}>
          Scrum Poker
        </Link></li>
        <li><a href={'https://www.marcnuri.com/adr-online'}>ADR Online</a></li>
        <li><Link to={localizedPath(pageContext.locale)('/uuid')}>
          UUID
        </Link></li>
        <li><a href={'https://www.marcnuri.com/iban'}>IBAN</a></li>
      </ul>
    </div>
    <div className={'footer__social'}>
      <ul>
        <li><a href={'https://www.linkedin.com/in/marcnuri'} rel="noreferrer">LinkedIn</a></li>
        <li><a href={'https://www.github.com/manusa'} rel="noreferrer">GitHub</a></li>
        <li><a href={'https://www.twitter.com/MarcNuri'} rel="noreferrer">Twitter</a></li>
        <li><a href={'https://blog.marcnuri.com'} rel="noreferrer">Blog</a></li>
        <li><a href={'https://presentations.marcnuri.com'} rel="noreferrer">Talks</a></li>
      </ul>
    </div>
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
