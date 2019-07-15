import React from 'react';
import {navigate} from 'gatsby';
import {localizedPath} from '../../i18n/path';

const S = ({children}) => (
  <span className={'header__title-short'}>{children}</span>
);

const L = ({children}) => (
  <span className={'header__title-long'}>{children}</span>
);

const onClickHeaderTitle = pageContext => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.scrollTo(0, 0);
  } else {
    navigate(localizedPath(pageContext.locale)('/'));
  }
};

const HeaderTitle = ({pageContext}) => (
  <span onClick={() => onClickHeaderTitle(pageContext)}>
    <S>&lt;</S>
    M
    <L>a</L>
    <L>r</L>
    <L>c</L>
    <L>&nbsp;</L>
    N
    <L>u</L>
    <L>r</L>
    <L>i</L>
    <S>&gt;</S>
  </span>
);

export default HeaderTitle;
