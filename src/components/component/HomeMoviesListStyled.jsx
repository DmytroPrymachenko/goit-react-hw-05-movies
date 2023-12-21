import styled from 'styled-components';

export const HomeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`;

export const HomeListItem = styled.li``;
export const HomeListItemdiv = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #d400d4
    );
    animation: animate 4s linear infinite;
    animation-delay: -2s;
  }

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #00ccff
    );
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const HomeListSpan = styled.span`
  position: absolute;
  inset: 5px;
  border-radius: 16px;
  background: #27282c;
  z-index: 1;
`;

export const HomeListDivItem = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  padding: 10px;
`;
export const HomeListImgItem = styled.img`
  border-radius: 16px;
`;
export const HomeListPItem = styled.p`
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`;
