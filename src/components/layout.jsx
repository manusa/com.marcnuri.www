import React from 'react';
import {IntlProvider} from 'react-intl';
import PropTypes from 'prop-types';
import Header from './header/header';
import messages from '../i18n/messages';

const Layout = ({locale, className, children}) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    <div className={className}>
      <Header />
      {children}
    </div>
  </IntlProvider>
);

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
