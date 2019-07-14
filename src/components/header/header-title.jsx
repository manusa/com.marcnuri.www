import React from 'react';
import {navigate} from 'gatsby';

const S = ({children}) => (
  <span className={'header__title-short'}>{children}</span>
);

const L = ({children}) => (
  <span className={'header__title-long'}>{children}</span>
);

const onClickHeaderTitle = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.scrollTo(0, 0);
  } else {
    navigate('/');
  }
};

const HeaderTitle = () => (
  <span onClick={onClickHeaderTitle}>
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
