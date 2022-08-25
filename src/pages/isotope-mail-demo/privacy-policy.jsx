import React from 'react';
import {IsotopePrivacyPolicy} from '../../isotope-mail-demo';
import {Seo} from '../../components';
import isotopeLogo from '../../isotope-mail-demo/assets/isotope-logo.jpg';
import {createIntl} from '../../i18n/intl';

export const Head = ({pageContext}) => {
  const intl = createIntl({pageContext});
  return (
    <Seo
      pageContext={pageContext}
      title={intl.formatMessage({id: 'isotopeMailDemo.privacyPolicy.title'})}
      description={intl.formatMessage({id: 'isotopeMailDemo.privacyPolicy.description'})}
      image={isotopeLogo}
    />
  );
};

export default IsotopePrivacyPolicy;
