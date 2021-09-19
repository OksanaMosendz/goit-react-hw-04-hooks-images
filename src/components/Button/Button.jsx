import PropTypes from 'prop-types';
import css from './Button.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Button = ({ onClick, images, isLoading }) => {
  return (
    <div className={css.LoadMoreBtn}>
      {isLoading ? (
        <Loader type="Circles" color="#003cff" height={80} width={80} />
      ) : (
        images.length > 11 && (
          <button className={css.Button} type="button" onClick={onClick}>
            Load More
          </button>
        )
      )}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
