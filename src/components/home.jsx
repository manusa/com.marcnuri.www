import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import '../styles/main.scss';

const Home = ({pageContext}) => (
  <Layout className={'home'} locale={pageContext.locale}>
    <Helmet>
      <meta charSet="UTF-8" />
    </Helmet>
    <section className={'home__section home__cover'}>
      <div className={'home__cover-filter'}>
        <p>www.marcnuri.com</p>
      </div>
    </section>
    <section className={'home__section'}>
      <FormattedMessage id="Home" />
    </section>
  </Layout>
);

export default Home;
