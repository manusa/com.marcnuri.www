import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import '../styles/main.scss';

const coverClass = () => {
  let ret = '';
  if (typeof window !== 'undefined'
    && window.___GATSBY_RUNNING_IN_BROWSER === true) {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    if (day > 0 && day < 6 && hour > 8 && hour < 19) {
      ret = 'home__cover--office';
    } else if (day > 5) {
      ret = 'home__cover--trail';
    }
  }
  return ret;
};

const Home = ({pageContext}) => (
  <Layout className={'home'} locale={pageContext.locale}>
    <Helmet>
      <meta charSet="UTF-8" />
    </Helmet>
    <section className={`home__section home__cover ${coverClass()}`}>
      <div className={'home__cover-filter'}>
        <p>www.marcnuri.com</p>
      </div>
    </section>
    <section className={'home__section home__about'}>
      <h1>Marc Nuri</h1>
      <h2><FormattedMessage id="home.subtitle" /></h2>
    </section>
  </Layout>
);

export default Home;
