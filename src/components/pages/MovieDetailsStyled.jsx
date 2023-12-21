import styled from 'styled-components';

export const MovieDetailsBtnGoBeackDiv = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  height: 50px;
  width: 160px;
  border-radius: 50px;
  position: relative;
  animation: rotate 1.5s linear infinite;
  @keyframes rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const MovieDetailsBtnGoBeack = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #27282c;
  color: #fff;
  outline: none;
  z-index: 9;
  border: none;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  height: 40px;
  width: 150px;
  border-radius: 50px;
  &:hover {
    background: #fff;
    color: #27282c;
  }

  &:focus {
    background: #fff;
    color: #27282c;
  }
`;
export const MovieDetailsBtnGoBeackspan1 = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background: inherit;
  border-radius: 50px;
  filter: blur(7px);
`;
export const MovieDetailsBtnGoBeackspan2 = styled.span`
  filter: blur(14px);
`;

// <MovieDetailsBtnGoBeackDiv>
//   <button onClick={buttonBackDetails}>Go Back</button>
//   <MovieDetailsBtnGoBeackspan1></MovieDetailsBtnGoBeackspan1>
//   <span></span>
// </MovieDetailsBtnGoBeackDiv>;
export const DivContentMovie = styled.div`
  position: relative;
  margin: 60px 5% auto;

  background: linear-gradient(0deg, black, rgb(48, 47, 47));
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
    width: calc(100% + 5px);
    height: calc(100% + 5px);
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

  transition: transform 0.3s ease;
`;
export const MovieContentDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #27282c;
  color: #fff;

  /* z-index: 9; */
`;
