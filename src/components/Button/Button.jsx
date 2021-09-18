import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';
import { getImages } from '../../store/request/getImages';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Button = ({ searchWord, LoadMoreImages }) => {
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (page >= 2) {
      setLoading(true);
      getImages(searchWord, page).then(imgs => {
        LoadMoreImages(imgs);
        setLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
  }, [page, searchWord, LoadMoreImages]);

  return (
    <div className={css.LoadMoreBtn}>
      {isLoading ? (
        <Loader type="Circles" color="#003cff" height={80} width={80} />
      ) : (
        <button
          className={css.Button}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  searchWord: PropTypes.string.isRequired,
  LoadMoreImages: PropTypes.func.isRequired,
};
