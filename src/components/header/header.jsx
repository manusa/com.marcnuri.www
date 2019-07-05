import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './header-title';
import {IconItem} from './header-items';
import '../../styles/main.scss';

const Header = ({scrolled}) => (
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

Header.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};


export default Header;
