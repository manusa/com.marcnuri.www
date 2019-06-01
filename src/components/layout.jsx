import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
);

Layout.propTypes = {
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
