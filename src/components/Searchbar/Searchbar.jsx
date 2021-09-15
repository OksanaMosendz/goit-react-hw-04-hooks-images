import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  onSubmitForm = e => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    e.preventDefault();
    onSubmit(inputValue);
  };

  onHandleChangeInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={css.Searchbar} onSubmit={this.onSubmitForm}>
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
            onChange={this.onHandleChangeInput}
            value={inputValue}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
