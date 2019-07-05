import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scrolled: false};
    this.handleOnScroll = this.onScroll.bind(this);
  }

  onScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({scrolled: scrollTop > 1});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
    window.addEventListener('load', this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
    window.removeEventListener('load', this.handleOnScroll);
  }

  render() {
    const {pageContext, className, children} = this.props;
    const {scrolled} = this.state;
    const childElements = React.Children.toArray(children)
      .map(e => React.cloneElement(e, {'data-scrolled': scrolled.toString()}));
    return (
      <div className={className}>
        <Header pageContext={pageContext} scrolled={scrolled} />
        {childElements}
        <Footer pageContext={pageContext} />
      </div>
    );
  }
}

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
