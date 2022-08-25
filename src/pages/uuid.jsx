import React from 'react';
import {Uuid} from '../uuid';
import {Seo} from '../components';
import face512 from '../components/avatar/face-512.png';
import {createIntl} from '../i18n/intl';

export const Head = ({pageContext}) => {
  const intl = createIntl({pageContext});
  return (
    <Seo
      pageContext={pageContext}
      title={intl.formatMessage({id: 'uuid.title'})}
      description={intl.formatMessage({id: 'uuid.meta.description'})}
      image={face512}
    />
  );
};

export default Uuid;
