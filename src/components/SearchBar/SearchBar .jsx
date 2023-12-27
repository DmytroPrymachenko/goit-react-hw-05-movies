import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FTest2,
  FormButton,
  FormDiv,
  FormDivbtn,
  StyledForm,
  StyledInput,
} from './SearchBarStyled';

import imgBtn from '../img/lodoBtn.png';

export const SearchBar = () => {
  const [movie, setMovie] = useState('');
  const [, setSearchParams] = useSearchParams();
  function formSubmit(e) {
    e.preventDefault();
    if (movie) {
      setSearchParams({ search: movie });
    }
  }
  function imputOnChange(e) {
    setMovie(e.target.value);
  }
  return (
    <FormDiv>
      <StyledForm onSubmit={formSubmit}>
        <StyledInput
          type="text"
          name="search"
          placeholder="Movie"
          value={movie}
          onChange={imputOnChange}
        />
        <FormDivbtn>
          <FormButton type="submit">
            <FTest2 src={imgBtn} alt="" />
          </FormButton>
        </FormDivbtn>
      </StyledForm>
    </FormDiv>
  );
};
