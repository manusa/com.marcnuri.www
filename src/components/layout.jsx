import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = ({pageContext, className, children}) => (
  <div className={className}>
    <Header pageContext={pageContext} />
    {children}
    <Footer pageContext={pageContext} />
  </div>
);

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
