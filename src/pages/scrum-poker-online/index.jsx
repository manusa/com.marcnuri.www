import React from 'react';
import {ScrumPoker} from '../../scrum-poker';
import {Seo} from '../../components';
import {createIntl} from '../../i18n/intl';

export const Head = ({pageContext}) => {
  const intl = createIntl({pageContext});
  return (
    <Seo
      pageContext={pageContext}
      title={intl.formatMessage({id: 'scrum.poker.title'})}
      description={intl.formatMessage({id: 'scrum.poker.meta.description'})}
    />
  );
};

export default ScrumPoker;
