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
  position: absolute;

  border: none;
  background: none;
  color: #fff;
  font-size: 1.2em; 
  text-transform: uppercase;
  letter-spacing: 0.05em; 
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
    border-bottom: none; 
  }
  padding-left: 25px;
  padding-right: 30px;
`;

export const FormDiv = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  transition: transform 0.3s ease-in-out;
  padding-top: 50px;
  padding-bottom: 50px;
  &:hover {
    transform: scale(1.2);
  }
`;
export const FormDivbtn = styled.div`
  position: absolute;
  top: -65%;
  left: 3%;
  /* transform: translate(-51%, -52%); */
  z-index: 9;
`;

export const FormButton = styled.button`
  width: 32px;
  height: 32px;
  position: relative;
  margin: 60px 5% auto;
  margin-bottom: 60px;
  content: '';
  display: block;
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(
    45deg,
    #e6fb04,
    #ff6600,
    #00ff66,
    #00ffff,
    #ff00ff,
    #ff0099,
    #6e0dd0,
    #ff3300,
    #099fff
  );
  background-size: 400%;

  z-index: -1;
  border-radius: 50%;
  overflow: hidden;
  animation: animate 20s linear infinite;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: -2px;
    top: -2px;
    background: linear-gradient(
      45deg,
      #e6fb04,
      #ff6600,
      #00ff66,
      #00ffff,
      #ff00ff,
      #ff0099,
      #6e0dd0,
      #ff3300,
      #099fff
    );
    background-size: 400%;

    z-index: -1;
    animation: animate 20s linear infinite;
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &::after {
    filter: blur(40px);
  }

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.3s ease, color 0.5s, letter-spacing 0.5s;
  position: relative;
  border: 30px transparent;
`;

export const FTest1 = styled.img`
  position: absolute;
`;

export const FTest2 = styled.img`
  position: absolute;
  top: 0%;
  left: 3%;

  width: 30px;
  height: 30px;
`;
