import React from 'react';
import {IntlProvider} from 'react-intl';
import PropTypes from 'prop-types';
import messages from '../i18n/messages';

const Layout = ({locale, className, children}) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    <div className={className}>
      {children}
    </div>
  </IntlProvider>
);

Layout.propTypes = {
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
