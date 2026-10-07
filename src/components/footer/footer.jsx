import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
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
        <li><Link to={localizedPath(pageContext.locale)('/uuid')}>
          UUID
        </Link></li>
        <li><Link to={localizedPath(pageContext.locale)('/base64-encoder-decoder')}>
          Base64
        </Link></li>
        <li><a href={'https://www.marcnuri.com/adr-online'}>ADR Online</a></li>
        <li><a href={'https://www.marcnuri.com/iban'}>IBAN</a></li>
      </ul>
    </div>
    <div className={'footer__social'}>
      <ul>
        {/* rel="me": each profile can verify that this site links back to it */}
        <li><a href={'https://www.linkedin.com/in/marcnuri'} rel="me noreferrer">LinkedIn</a></li>
        <li><a href={'https://github.com/manusa'} rel="me noreferrer">GitHub</a></li>
        <li><a href={'https://bsky.app/profile/marcnuri.com'} rel="me noreferrer">Bluesky</a></li>
        <li><a href={'https://x.com/MarcNuri'} rel="me noreferrer">X</a></li>
        <li><a href={'https://www.youtube.com/@MarcNuri'} rel="me noreferrer">YouTube</a></li>
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
const Footer = props => {
  const data = useStaticQuery(query);
  return <FooterWithMetadata data={data} {...props} />;
};

export default Footer;
