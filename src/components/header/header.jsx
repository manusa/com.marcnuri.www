import React from 'react';
import HeaderTitle from './header-title';
import {IconItem} from './header-items';
import '../../styles/main.scss';

class Header extends React.Component {
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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  render() {
    const {scrolled} = this.state;
    return (
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className={'header__title'}>
          <HeaderTitle />
        </div>
        <nav className={'header__nav-bar'}>
          <ul className={'header__nav-bar-list'}>
            <IconItem
              url={'https://www.linkedin.com/in/marcnuri'}
              icon={'icon-linkedin'}
              title={'LinkedIn'}
            />
            <IconItem
              url={'https://www.github.com/manusa'}
              icon={'icon-github-circled'}
              title={'GitHub'}
            />
            <IconItem
              url={'https://www.twitter.com/MarcNuri'}
              icon={'icon-twitter'}
              title={'Twitter'}
            />
            <IconItem
              url={'https://blog.marcnuri.com'}
              icon={'icon-edit'}
              title={'Blog'}
            />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
