import React from 'react';
import Home from '../components/home/home';
import {Seo} from '../components';
import face512 from '../components/avatar/face-512.png';
import {createIntl} from '../i18n/intl';

export const Head = ({pageContext}) => {
  const intl = createIntl({pageContext});
  return (
    <Seo
      pageContext={pageContext}
      title={`${
        intl.formatMessage({id: 'home.title'})
      }, ${
        intl.formatMessage({id: 'home.subtitle'})
      }`}
      description={intl.formatMessage({id: 'global.meta.description'})}
      image={face512}
    />
  );
};

export default Home;
