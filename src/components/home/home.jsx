import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Link} from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Avatar from '../avatar/avatar';
import face512 from '../avatar/face-512.png';
import faceWithLaptop from '../avatar/face-laptop.png';
import Layout from '../layout';
import Seo from '../seo/seo';
import aboutEn from 'raw-loader!./about.en.md';
import aboutEs from 'raw-loader!./about.es.md';
import contactEn from 'raw-loader!./contact.en.md';
import contactEs from 'raw-loader!./contact.es.md';
import locales from '../../i18n/locales';
import {localizedPath} from '../../i18n/path';
import '../../styles/main.scss';

const ABOUT_CONTENT = {
  en: aboutEn,
  es: aboutEs
};

const CONTACT_CONTENT = {
  en: contactEn,
  es: contactEs
};

const isBrowser = () => typeof window !== 'undefined';

const coverClass = () => {
  let ret = 'home__cover--java-bromo';
  if (isBrowser()) {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    const weekday = day > 0 && day < 6;
    if (weekday && hour > 8 && hour < 19) {
      ret = 'home__cover--office';
    } else if ((weekday && hour === 8) || (weekday && hour === 19)) {
      ret = 'home__cover--subway';
    } else if (!weekday) {
      ret = 'home__cover--trail';
    }
  }
  return ret;
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverClassName: ''
    };
  }

  componentDidMount() {
    // setState shouldn't be here
    // on purpose to force re-render in browser only (Gatsby)
    this.setState({coverClassName: coverClass()});
  }


  render() {
    const {pageContext, intl} = this.props;
    const {coverClassName} = this.state;
    return (
      <Layout className={'home'} pageContext={pageContext}>
        <Seo
          lang={pageContext.locale}
          title={`${
            intl.formatMessage({id: 'home.title'})
          }, ${
            intl.formatMessage({id: 'home.subtitle'})
          }`}
          description={intl.formatMessage({id: 'global.meta.description'})}
          image={face512}
        />
        <section className={`home__section home__cover ${coverClassName}`}>
          <div className={'home__cover-filter'}>
            <h3 className={'home__cover-hello'}>
              <FormattedMessage id="home.hello"/>
            </h3>
            <div className={'home__cover-locale'}>
              <ul>
                {Object.values(locales).map(locale =>
                  (<li key={locale.path}><Link
                    to={localizedPath(locale)(pageContext.pagePath)}>
                    {locale.path}
                  </Link></li>)
                )}
              </ul>
            </div>
          </div>
        </section>
        <section className={'home__section home__avatar-section home__about'}>
          <Avatar alt={intl.formatMessage({id: 'home.title'})}/>
          <h1 className={'home__avatar-section-title'}>Marc Nuri</h1>
          <h2 className={'home__avatar-section-subtitle'}><FormattedMessage id="home.subtitle"/></h2>
          <ReactMarkdown
            className={'home__avatar-section-content'}
            source={ABOUT_CONTENT[pageContext.locale]}
          />
        </section>
        <section className={'home__section home__avatar-section home__contact'}>
          <Avatar alt={intl.formatMessage({id: 'home.title'})} face={faceWithLaptop}/>
          <h2 className={'home__avatar-section-subtitle'}><FormattedMessage id="home.lendAHand"/></h2>
          <ReactMarkdown
            className={'home__avatar-section-content'}
            source={CONTACT_CONTENT[pageContext.locale]}
            linkTarget="_blank"
          />
        </section>
      </Layout>
    );
  }
}

export default injectIntl(Home);
