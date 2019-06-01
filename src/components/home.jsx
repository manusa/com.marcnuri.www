import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import '../styles/main.scss';

const Home = () => (
  <Layout className={'home'}>
    <Helmet>
      <meta charSet="UTF-8" />
    </Helmet>
    <header>
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
  </Layout>
);

export default Home;
