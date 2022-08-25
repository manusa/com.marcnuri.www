import React from 'react';
import {Base64} from '../../base64';
import {Seo} from '../../components';
import face512 from '../../components/avatar/face-512.png';
import {createIntl} from '../../i18n/intl';

export const Head = ({pageContext}) => {
  const intl = createIntl({pageContext});
  return (
    <Seo
      pageContext={pageContext}
      title={intl.formatMessage({id: 'base64.title'})}
      description={intl.formatMessage({id: 'base64.meta.description'})}
      image={face512}
    />
  );
};

export default Base64;
