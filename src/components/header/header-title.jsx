import React from 'react';

const S = ({children}) => (
  <span className={'header__title-short'}>{children}</span>
);

const L = ({children}) => (
  <span className={'header__title-long'}>{children}</span>
);

const HeaderTitle = () => (
  <span onClick={() => window.scrollTo(0, 0)}>
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
