import PropTypes from 'prop-types';
import css from './Button.module.css';
import React from 'react';
import { getImages } from '../../store/request/getImages';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class Button extends React.Component {
  state = {
    page: 1,
    isLoading: false,
  };

  OnHadleClickLoadMoreButton = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  componentDidUpdate(prevProps, prevStat) {
    const prevPage = prevStat.page;
    const nextPage = this.state.page;
    const { searchWord, LoadMoreImages } = this.props;

    if (prevPage !== nextPage) {
      this.setState({ isLoading: true });
      getImages(searchWord, nextPage)
        .then(imgs => {
          LoadMoreImages(imgs);
          this.setState({ isLoading: false });
        })
        .then(
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          }),
        );
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className={css.LoadMoreBtn}>
        {isLoading ? (
          <Loader type="Circles" color="#003cff" height={80} width={80} />
        ) : (
          <button
            className={css.Button}
            type="button"
            onClick={this.OnHadleClickLoadMoreButton}
          >
            Load More
          </button>
        )}
      </div>
    );
  }
}

Button.propTypes = {
  searchWord: PropTypes.string.isRequired,
  LoadMoreImages: PropTypes.func.isRequired,
};
