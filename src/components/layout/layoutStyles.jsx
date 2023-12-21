import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  height: 100px;
  align-items: center;

  background: #27282c;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export const HeaderImg = styled.img`
  height: 80px;
  padding-right: 80px;
  padding-left: 80px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;

  &:hover {
    background: #1e9bff;
    color: #1e9bff;
    letter-spacing: 0.25em;
    box-shadow: 0 0 35px #1e9bff;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

export const SpanHeader = styled.span`
  position: relative;
`;

export const IHeader = styled.i`
  position: absolute;
  inset: 0;
  display: block;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 4px;
    background: #27282c;
    transform: translateX(-50%) skewX(325deg);
    transition: 0.5s;
  }

  &::before {
    top: 0;
    left: 80%;
  }

  &:hover::before {
    width: 20px;
    left: 20%;
  }

  &::after {
    bottom: 0;
    left: 20%;
  }

  &:hover::after {
    width: 20px;
    left: 80%;
  }
`;

export const HeaderNavLinkMovei = styled(NavLink)`
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;

  &:hover {
    background: #ff1852;
    color: #ff1852;
    letter-spacing: 0.25em;
    box-shadow: 0 0 35px #ff1852;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

export const SpanHeaderMovei = styled.span`
  position: relative;
`;

export const IHeaderMovei = styled.i`
  position: absolute;
  inset: 0;
  display: block;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 4px;
    background: #27282c;
    transform: translateX(-50%) skewX(325deg);
    transition: 0.5s;
  }

  &::before {
    top: 0;
    left: 80%;
  }

  &:hover::before {
    width: 20px;
    left: 20%;
  }

  &::after {
    bottom: 0;
    left: 20%;
  }

  &:hover::after {
    width: 20px;
    left: 80%;
  }
`;
