import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import {injectIntl} from 'react-intl';

const baseClass = 'blog-entries';

const year = date => date.getFullYear();
const month = date => `0${date.getMonth() + 1}`.slice(-2);
const day = date => `0${date.getDate()}`.slice(-2);

const shortDate = isoDate => {
  const date = new Date(isoDate);
  return `${year(date)}-${month(date)}-${day(date)}`;
};

const query = graphql`
  query {
    en: allFeedBlogMarcNuriCom {
      nodes {
        contentSnippet
        title
        link
        isoDate
        categories
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    es: allFeedBlogMarcNuriComEs {
      nodes {
        contentSnippet
        title
        link
        isoDate
        categories
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogEntries = ({lang, intl}) => {
  const data = useStaticQuery(query);
  const entries = data[lang].nodes.sort((a, b) => b.isoDate.localeCompare(a.isoDate)).slice(0, 5);
  const blogLang = lang === 'en' ? '' : lang;
  return (
    <div className={baseClass}>
      <header className={`${baseClass}__header`}>
        <h2 className={`${baseClass}__title`}>{intl.formatMessage({id: 'blog.entries.LatestPosts'})}</h2>
        <a className={`${baseClass}__link`} href={`https://blog.marcnuri.com/${blogLang}`}
          title={intl.formatMessage({id: 'blog.entries.LinkToTheBlog'})}
        >
          {intl.formatMessage({id: 'blog.entries.AllBlogPosts'})}
        </a>
      </header>
      <ul className={`${baseClass}__list`}>
        {entries.map(({link, title, isoDate, categories, contentSnippet, localImage: {childImageSharp}}) =>
          <li key={link} className={`${baseClass}__list-item`}>
            <article className={`${baseClass}__entry`}>
              <figure className={`${baseClass}__entry-figure`}>
                <GatsbyImage
                  className={`${baseClass}__entry-image`}
                  image={childImageSharp.gatsbyImageData}
                  alt={intl.formatMessage({id: 'blog.entries.entryFigureCaption'}, {title})}
                />
              </figure>
              <div className={`${baseClass}__entry-content`}>
                <h3 className={`${baseClass}__entry-title`}>
                  <a href={link} className={`${baseClass}__entry-title-link`}
                    title={intl.formatMessage({id: 'blog.entries.entryLinkTitle'}, {title})}
                  >
                    {title}
                  </a>
                </h3>
                <div className={`${baseClass}__entry-meta`}>
                  {shortDate(isoDate)} {categories.map(c =>
                    <span key={c} className={`${baseClass}__entry-category`}>{`#${c}`}</span>)}
                </div>
                <div className={`${baseClass}__entry-snippet`}>
                  {contentSnippet}
                </div>
              </div>
            </article>
          </li>
        )}
      </ul>
      <div className={`${baseClass}__footer`}>
        <a className={`${baseClass}__link`} href={`https://blog.marcnuri.com/${blogLang}`}
          title={intl.formatMessage({id: 'blog.entries.LinkToTheBlog'})}
        >
          {intl.formatMessage({id: 'blog.entries.ViewAll'})}
        </a>
      </div>
    </div>
  );
};

export default injectIntl(BlogEntries);
