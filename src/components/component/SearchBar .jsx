import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
    <>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Movie"
          value={movie}
          onChange={imputOnChange}
        />
        <button></button>
      </form>
    </>
  );
};