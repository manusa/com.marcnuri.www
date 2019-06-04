import React from 'react';

export const IconItem = ({icon, url, title}) => (
  <li className={'header__nav-bar-item'}>
    <a className={'header__nav-bar-item-link'} href={url} title={title}>
      <i className={icon} />
    </a>
  </li>
);
