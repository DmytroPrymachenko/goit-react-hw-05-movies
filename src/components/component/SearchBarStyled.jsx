import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 400px;
  height: 40px;
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
  padding-top: 15px;

  &:hover,
  &:focus-within {
    background: #6eff3e;
    color: #6eff3e;
    letter-spacing: 0.25em;
    box-shadow: 0 0 35px #6eff3e;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  border: none;
  background: none;
  color: #fff;
  font-size: 1.2em; /* Зменшено розмір шрифту */
  text-transform: uppercase;
  letter-spacing: 0.05em; /* Зменшено відстань між буквами */
  outline: none;
  transition: border-bottom 0.5s, color 0.5s, letter-spacing 0.5s;
  z-index: 9;

  &:before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }

  &:focus {
    border-bottom: 2px solid #6eff3e;
    color: #6eff3e;
    letter-spacing: 0.1em;
    border-bottom: none; /* Зменшено відстань між буквами при фокусі */
  }
`;
