import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ image, onClick }) => {
  return (
    <div className={css.Overlay} onClick={onClick} id="overley">
      <div className={css.Modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
