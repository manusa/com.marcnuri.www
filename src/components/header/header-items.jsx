import React from 'react';

// `rel` "me" marks a profile of the person: the profile can verify that this site links back to it
export const IconItem = ({icon, url, title, rel = 'noreferrer noopener'}) => (
  <li className={'header__nav-bar-item'}>
    <a
      className={'header__nav-bar-item-link'}
      href={url}
      title={title}
      rel={rel}
    >
      <i className={icon} />
    </a>
  </li>
);
