import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit, searchWord }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();
    if (inputValue !== searchWord) {
      onSubmit(inputValue);
    } else return;
  };

  return (
    <header className={css.Searchbar} onSubmit={onSubmitForm}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  searchWord: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
