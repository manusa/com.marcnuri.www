import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './header-title';
import {IconItem} from './header-items';
import '../../styles/main.scss';

const Header = ({pageContext, scrolled}) => (
  <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
    <div className={'header__title'}>
      <HeaderTitle pageContext={pageContext} />
    </div>
    <nav className={'header__nav-bar'}>
      <ul className={'header__nav-bar-list'}>
        <IconItem
          url={'https://www.linkedin.com/in/marcnuri'}
          icon={'icon-linkedin'}
          title={'LinkedIn'}
          rel={'me noopener'}
        />
        <IconItem
          url={'https://github.com/manusa'}
          icon={'icon-github-circled'}
          title={'GitHub'}
          rel={'me noopener'}
        />
        <IconItem
          url={'https://x.com/MarcNuri'}
          icon={'icon-twitter'}
          title={'X'}
          rel={'me noopener'}
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
  pageContext: PropTypes.object.isRequired,
  scrolled: PropTypes.bool.isRequired
};

export default Header;
