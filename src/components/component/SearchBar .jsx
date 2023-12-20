import React, { useState } from 'react';

export const SearchBar = () => {
  const [movie, setMovie] = useState('');
  function formSubmit(e) {
    e.preventDefault();
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
          value={imputOnChange}
          onChange={imputOnChange}
        />
      </form>
    </>
  );
};
