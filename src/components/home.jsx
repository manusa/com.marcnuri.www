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
    <header className={'home__header'}>
      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/marcnuri">LinkedIn</a>
          </li>
          <li>
            <a href="https://blog.marcnuri.com">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
    <div className={'home__section'}>
      <p>www.marcnuri.com</p>
      <FormattedMessage id="Home" />
    </div>
  </Layout>
);

export default Home;
