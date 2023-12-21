import styled from 'styled-components';

export const CastUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`;

export const CastLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
