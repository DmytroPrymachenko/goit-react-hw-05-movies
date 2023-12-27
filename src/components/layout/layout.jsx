import React from 'react';
import { Outlet } from 'react-router-dom';
import kinoshka from '../../img/Group1.png';
import {
  Header,
  HeaderImg,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkMovei,
  IHeader,
  IHeaderMovei,
  SpanHeader,
  SpanHeaderMovei,
} from './layoutStyles';

export const Layout = () => {
  return (
    <section>
      <Header>
        <HeaderImg src={kinoshka} alt="" />
        <HeaderNav>
          <HeaderNavLink to="/">
            <SpanHeader>Home</SpanHeader>
            <IHeader></IHeader>
          </HeaderNavLink>
          <HeaderNavLinkMovei to="/movies">
            <SpanHeaderMovei> Movies</SpanHeaderMovei>
            <IHeaderMovei></IHeaderMovei>
          </HeaderNavLinkMovei>
        </HeaderNav>
      </Header>
      <Outlet />
    </section>
  );
};
