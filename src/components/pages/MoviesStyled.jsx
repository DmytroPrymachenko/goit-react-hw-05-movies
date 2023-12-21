import styled from 'styled-components';

export const ItemPhotoMovies = styled.img`
  max-width: 350px;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ListItemMovies = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

export const ItemMovies = styled.li`
  display: flex;
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
