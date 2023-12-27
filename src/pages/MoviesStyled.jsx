import styled from 'styled-components';

export const ItemPhotoMovies = styled.img`
  max-width: 350px;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8%;
`;

export const ListItemMovies = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 50px;
`;

export const ListItemP = styled.p`
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  color: #fff;
`;

export const ItemMovies = styled.li`
  width: 220px;
  height: 355px;
  position: relative;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.3s ease;

  &:hover::after {
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

  &:hover::before {
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
export const MovesListDivItem = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  background-color: #27282c;
  color: #fff;
  border-radius: 20px;
  width: 195px;
  height: 330px;
`;

export const AppProgect = styled.div`
  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }
  img {
    border: 0;
  }
`;
