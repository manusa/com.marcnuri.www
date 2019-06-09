import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = ({className, children}) => (
  <div className={className}>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
